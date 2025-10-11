import { motion } from 'framer-motion';
import { Code2, Sparkles, ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  const glowVariants = {
    initial: { scale: 1, opacity: 0.5 },
      animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] animate-pulse delay-1000" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center gap-4">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="w-12 h-12 text-cyan-400" />
            <motion.div
              className="absolute inset-0 bg-cyan-400 rounded-full filter blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1, rotate: -180 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-12 h-12 text-purple-400" />
            <motion.div
              className="absolute inset-0 bg-purple-400 rounded-full filter blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className=" p-4 text-6xl md:text-8xl font-bold mb-8 mt-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 80px rgba(34, 211, 238, 0.5)'
          }}
        >
          Aditya Raosab Magadum
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-light text-gray-300 mb-6"
        >
         
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="relative inline-block mt-6 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-light text-gray-300">
            <span className="text-cyan-400">AI-Driven Full Stack Developer</span>
            {' | '}
            <span className="text-blue-400">Prompt Engineer</span>
            {' | '}
            <span className="text-purple-400">Tech Innovator</span>
          </h2>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Crafting intelligent solutions at the intersection of artificial intelligence,
          machine learning, and web development.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="https://drive.google.com/file/d/1BEtgD6X5GVh1YJLmXuu1uLJ2JzbK34KH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Resume</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#projects"
            className="group relative px-8 py-4 border-2 border-cyan-400/50 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
