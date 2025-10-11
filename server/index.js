import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Protfolio mailer running'));

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    let transporter;
    const smtpHost = process.env.SMTP_HOST || '';

    const isPlaceholderHost = !smtpHost || smtpHost.includes('example.com') || smtpHost === 'smtp.example.com';

    if (isPlaceholderHost) {
      // Create a Nodemailer test account for local development (Ethereal)
      console.warn('Using Nodemailer test account because SMTP_HOST is not configured or is a placeholder. Emails will NOT be delivered to real inboxes.');
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
    } else {
      // Create transporter using SMTP credentials from .env
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });

      // Verify SMTP connection/config early to provide clearer errors (DNS, auth)
      try {
        await transporter.verify();
      } catch (verifyErr) {
        console.error('SMTP verify error:', verifyErr);
        // Provide a helpful client-visible message for common misconfigurations
        return res.status(500).json({
          error: `SMTP connection failed: ${verifyErr.message}. Check SMTP_HOST, SMTP_PORT and network/DNS. Example hosts: smtp.gmail.com (Gmail), smtp.sendgrid.net (SendGrid).`
        });
      }
    }

    const mailOptions = {
      from: `Protfolio Contact <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.TARGET_EMAIL || process.env.SMTP_USER,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    // If using Ethereal test account, provide preview URL
    let previewUrl;
    try {
      previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log('Preview URL: %s', previewUrl);
      }
    } catch (e) {
      // ignore
    }

    // Respond with useful info so frontend can display a preview link in dev
    const responsePayload = { ok: true, messageId: info.messageId };
    if (previewUrl) responsePayload.previewUrl = previewUrl;
    if (isPlaceholderHost) responsePayload.note = 'Email sent to Ethereal test account (not a real inbox)';

    return res.status(200).json(responsePayload);
  } catch (err) {
    console.error('Error sending mail', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => console.log(`Mailer server running on port ${port}`));
