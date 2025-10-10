import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Cpu, Database, Zap } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'Python', icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'Java', icon: Cpu, color: 'from-blue-400 to-purple-500' },
    { name: 'Machine Learning', icon: Brain, color: 'from-purple-400 to-pink-500' },
    { name: 'Cloud Computing', icon: Cloud, color: 'from-cyan-400 to-teal-500' },
    { name: 'IoT', icon: Zap, color: 'from-yellow-400 to-orange-500' },
    { name: 'Databases', icon: Database, color: 'from-green-400 to-cyan-500' }
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
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/30">
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-spin-slow" />
                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    <Brain className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                AI Developer & Innovator
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Passionate about pushing the boundaries of technology, I specialize in developing
              intelligent systems that solve real-world problems. With expertise in AI, machine
              learning, and cloud computing, I transform innovative ideas into scalable solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My journey in technology is driven by curiosity and a commitment to continuous
              learning. I thrive on challenges that require creative problem-solving and
              cutting-edge technical implementation.
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`} />
                <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                  <tech.icon className="w-10 h-10 mx-auto mb-3 text-cyan-400 group-hover:text-white transition-colors" />
                  <p className="text-center text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
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
