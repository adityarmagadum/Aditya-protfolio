import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      icon: Award,
      title: 'Java Certification Course 2025 Edition - Beginner to Master',
      issuer: 'Udemy',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1EZ6GQCWiUnFNr-Ke9HcMxacDqVkpoLyy',
      shareUrl: 'https://drive.google.com/file/d/1EZ6GQCWiUnFNr-Ke9HcMxacDqVkpoLyy/view',
      color: 'cyan'
    },
    {
      icon: GraduationCap,
      title: 'Python programming',
      issuer: 'Reliance Foundation & Skill India',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1EcDNzz0lp2Phy3GmfuNiOQ3a7YuLb525',
      shareUrl: 'https://drive.google.com/file/d/1EcDNzz0lp2Phy3GmfuNiOQ3a7YuLb525/view',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'C for Beginners Certification',
      issuer: 'Great Learning',
      imageUrl: 'https://drive.google.com/uc?export=view&id=1Emi3Iag86WZEFFi14wTs1hCYghpNgRr_',
      shareUrl: 'https://drive.google.com/file/d/1Emi3Iag86WZEFFi14wTs1hCYghpNgRr_/view',
      color: 'purple'
    }
  ];

  const colorMap: { [key: string]: string } = {
    cyan: 'from-cyan-400 to-cyan-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600'
  };

  const glowMap: { [key: string]: string } = {
    cyan: 'bg-cyan-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400'
  };

  return (
    <section id="certifications" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${colorMap[c.color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

              {c.shareUrl ? (
                <a
                  href={c.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 h-full"
                >
                  {c.imageUrl && (
                    <div className="block mb-4">
                      <img
                        src={c.imageUrl}
                        alt={`${c.title} - ${c.issuer}`}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-4 h-full">
                    <div className={`relative p-3 bg-gradient-to-r ${colorMap[c.color]} rounded-xl`}> 
                      <c.icon className="w-6 h-6 text-white" />
                      <div className={`absolute inset-0 ${glowMap[c.color]} rounded-xl blur-md opacity-40`} />
                    </div>

                    <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                        <p className="text-cyan-400 text-sm font-semibold">{c.issuer}</p>
                        <div className="mt-auto" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                  {c.imageUrl && (
                    <div className="block mb-4">
                      <img
                        src={c.imageUrl}
                        alt={`${c.title} - ${c.issuer}`}
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                        className="w-full h-40 object-cover rounded-md"
                      />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`relative p-3 bg-gradient-to-r ${colorMap[c.color]} rounded-xl`}> 
                      <c.icon className="w-6 h-6 text-white" />
                      <div className={`absolute inset-0 ${glowMap[c.color]} rounded-xl blur-md opacity-40`} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{c.title}</h3>
                      <p className="text-cyan-400 text-sm font-semibold">{c.issuer}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
