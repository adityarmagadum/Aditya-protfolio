import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'A Secure IoT-Based Medicine Management System for Educational Institutes',
      description:
        'Designed and implemented a secure and automated medicine dispensing system for educational institutions. Integrated barcode scanning, password authentication, and Excel-based transaction logging using Raspberry Pi and Python.',
      tech: ['Python', 'IoT', 'Excel', 'Raspberry Pi'],
      gradient: 'from-cyan-400 to-blue-500',
  github: 'https://github.com/adityarmagadum/A-Secure-IoT-Based-Medicine-Management-System-for-Educational-Institutes',
      demo: '#',
      period: 'Oct 2024 – Dec 2024'
    },
    {
      title: 'Java Console-Based Car Rental System',
      description:
        'Developed an object-oriented Car Rental System in Java with modules for Car, Customer, and Rental management. Implemented features for car registration, renting, and returning using Java collections and an interactive console interface.',
      tech: ['Java', 'OOP'],
      gradient: 'from-blue-400 to-purple-500',
      github: 'https://github.com/adityarmagadum/car-rental-system',
      demo: '#',
      period: 'Jun 2024 – Jul 2024'
    }
    ,
    // {
    //   title: 'Sales Dashboard in Power BI',
    //   description:
    //     'Built an interactive sales dashboard using Power BI to visualize KPIs, trends and segment performance. Implemented data modeling and DAX measures to support dynamic filtering and drill-down analysis.',
    //   tech: ['Power BI', 'DAX', 'Data Modeling'],
    //   gradient: 'from-yellow-400 to-orange-500',
    //   github: '#',
    //   demo: '#',
    //   period: 'May 2025 – June 2025'
    // },
    {
      title: 'Symptom-Based Health Navigation System using ML',
      description:
        'Built a model using Support Vector Machine (SVM) to predict diseases based on symptoms. Applied text preprocessing and classification techniques to improve early diagnosis support for users.',
      tech: ['ML', 'SVM'],
      gradient: 'from-cyan-400 to-teal-500',
      github: '#',
      demo: '#',
      period: 'Jan 2025 – Feb 2025'
    },
    
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
