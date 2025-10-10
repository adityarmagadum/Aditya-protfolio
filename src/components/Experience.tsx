import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Trophy, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'AI Research Intern',
      organization: 'Tech Innovation Labs',
      period: '2024 - Present',
      description: 'Developing cutting-edge machine learning models for computer vision applications',
      color: 'cyan'
    },
    {
      icon: Award,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      period: '2024',
      description: 'Professional certification in cloud architecture and deployment',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'National Hackathon Winner',
      organization: 'TechFest 2024',
      period: '2024',
      description: 'First place for innovative IoT-based smart city solution',
      color: 'purple'
    },
    {
      icon: GraduationCap,
      title: 'Machine Learning Specialization',
      organization: 'Stanford Online',
      period: '2023',
      description: 'Completed advanced coursework in deep learning and neural networks',
      color: 'teal'
    },
    {
      icon: Zap,
      title: 'Software Development Intern',
      organization: 'StartupXYZ',
      period: '2023',
      description: 'Built scalable microservices and deployed cloud infrastructure',
      color: 'pink'
    }
  ];

  const colorMap: { [key: string]: string } = {
    cyan: 'from-cyan-400 to-cyan-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    teal: 'from-teal-400 to-teal-600',
    pink: 'from-pink-400 to-pink-600'
  };

  const glowMap: { [key: string]: string } = {
    cyan: 'bg-cyan-400',
    blue: 'bg-blue-400',
    purple: 'bg-purple-400',
    teal: 'bg-teal-400',
    pink: 'bg-pink-400'
  };

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorMap[exp.color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`} />

                  <div className="relative bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`relative p-3 bg-gradient-to-r ${colorMap[exp.color]} rounded-xl`}>
                        <exp.icon className="w-6 h-6 text-white" />
                        <div className={`absolute inset-0 ${glowMap[exp.color]} rounded-xl blur-lg opacity-50`} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-cyan-400 text-sm font-semibold mb-2">
                          {exp.organization}
                        </p>
                        <p className="text-gray-500 text-xs mb-3">
                          {exp.period}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 z-10">
                <motion.div
                  className={`w-4 h-4 bg-gradient-to-r ${colorMap[exp.color]} rounded-full`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`absolute inset-0 ${glowMap[exp.color]} rounded-full blur-md animate-pulse`} />
                </motion.div>
              </div>

              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
