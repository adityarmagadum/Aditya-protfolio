import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Analytics Platform',
      description: 'Real-time data analysis using machine learning algorithms for predictive insights',
      tech: ['Python', 'TensorFlow', 'React', 'AWS'],
      gradient: 'from-cyan-400 to-blue-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart IoT Home System',
      description: 'Integrated IoT solution for home automation with voice control and AI optimization',
      tech: ['Java', 'MQTT', 'Raspberry Pi', 'Node.js'],
      gradient: 'from-blue-400 to-purple-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud-Native Microservices',
      description: 'Scalable microservices architecture deployed on Kubernetes with CI/CD pipeline',
      tech: ['Docker', 'Kubernetes', 'Go', 'AWS'],
      gradient: 'from-purple-400 to-pink-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing and understanding deep learning architectures',
      tech: ['Python', 'PyTorch', 'D3.js', 'FastAPI'],
      gradient: 'from-cyan-400 to-teal-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Blockchain Supply Chain',
      description: 'Decentralized supply chain management system with smart contracts',
      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
      gradient: 'from-green-400 to-cyan-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'NLP Chatbot Framework',
      description: 'Conversational AI framework with sentiment analysis and intent recognition',
      tech: ['Python', 'BERT', 'Flask', 'MongoDB'],
      gradient: 'from-yellow-400 to-orange-500',
      github: '#',
      demo: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500`} />

              <div className="relative h-full bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-bl-full" />

                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Sparkles className="w-8 h-8 text-cyan-400" />
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-5 h-5 text-cyan-400" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                      </motion.a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
