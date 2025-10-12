import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Cpu, Zap, Globe, BarChart2 } from 'lucide-react';
import AdityaImg from '../../aditya.png';

const About = () => {
  const techStack = [
    { name: 'Python', icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'Java', icon: Cpu, color: 'from-blue-400 to-purple-500' },
    { name: 'Machine Learning', icon: Brain, color: 'from-purple-400 to-pink-500' },
    { name: 'AI', icon: Brain, color: 'from-purple-400 to-pink-500' },
    { name: 'Cloud Computing', icon: Cloud, color: 'from-cyan-400 to-teal-500' },
    { name: 'IoT', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Web Development', icon: Globe, color: 'from-green-400 to-cyan-500' },
    { name: 'Power BI', icon: BarChart2, color: 'from-yellow-400 to-orange-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            {/* Clean, larger avatar with no decorative box or ring */}
            <div className="mx-auto mb-6 flex items-center justify-center">
              <div className="w-80 h-80 md:w-96 md:h-auto bg-transparent rounded-2xl shadow-2xl flex items-center justify-center">
                <img
                  src={AdityaImg}
                  alt="Aditya Raosab Magadum"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              A passionate Full Stack Web Developer focused on creating responsive, data-driven,
              and user-friendly applications. Skilled in leveraging AI tools and automation to
              enhance efficiency, creativity, and development speed while maintaining clean and
              scalable design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Experienced in AI, Data Science, and IoT-based projects, with a strong interest in
              building innovative solutions that solve real-world challenges. Recently developed
              a secure medicine management system, highlighting the ability to blend technology
              and innovation effectively.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-stretch">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`} />

                <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center h-36 w-full">
                  <tech.icon className="w-10 h-10 mb-2 text-cyan-400 group-hover:text-white transition-colors" />
                  <p className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
