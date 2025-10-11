import { motion } from 'framer-motion';
import { Trophy, Book } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'Final Year Project Exhibition Placements',
      detail: 'Secured 2nd place at college level and 1st & 3rd place at department level for outstanding performance in final year project exhibition.',
      color: 'cyan'
    },
    {
      icon: Trophy,
      title: 'Ideathon Winner - Christ University',
      detail: 'First place in the Ideathon at Christ University for a unique solution to the given problem statement.',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'Ideathon Winner - Nagarjuna College',
      detail: 'Secured first place in the Ideathon at Nagarjuna College of Engineering and Technology for innovative and practical solutions.',
      color: 'purple'
    },
    {
      icon: Trophy,
      title: 'Paper Presentation - JNN College of Engineering',
      detail: 'First place in the Paper Presentation Competition at JNN College of Engineering for outstanding research and presentation skills.',
      color: 'teal'
    },
    {
      icon: Trophy,
      title: 'VTU Paper Presentation',
      detail: 'Secured second prize in the Paper Presentation Competition at Visvesvaraya Technological University (VTU).',
      color: 'pink'
    },
    {
      icon: Trophy,
      title: 'Agriculture Paper Presentation',
      detail: 'Awarded 2nd place in Agriculture Paper Presentation at Kalaignarkarunidhi Institute of Technology, Coimbatore.',
      color: 'cyan'
    },
    {
      icon: Trophy,
      title: 'ECE Paper Presentation',
      detail: 'Secured 3rd place in ECE Paper Presentation at Kalaignarkarunidhi Institute of Technology, Coimbatore.',
      color: 'blue'
    }
  ];

  const publication = {
    icon: Book,
    title: 'Book Chapter (Scopus & CPCI indexed)',
    detail:
      'Deeksha K. N, Aditya Raosab Magadum, Sneha R, Lohith J J, A.K Dwivedi*, “A Secure IoT-Based Medicine Management System for Educational Institutes”, 7th ICCCT 2025, Lecture Notes in Networks and Systems (LNSS), Springer (2024). (Under Production)'
  };

  const colorMap: { [key: string]: string } = {
    cyan: 'from-cyan-400 to-cyan-600',
    blue: 'from-blue-400 to-blue-600',
    purple: 'from-purple-400 to-purple-600',
    teal: 'from-teal-400 to-teal-600',
    pink: 'from-pink-400 to-pink-600'
  };

  return (
    <section id="achievements" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${colorMap[a.color]} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

              <div className="relative h-full flex items-start gap-4 bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                <div className={`relative p-3 bg-gradient-to-r ${colorMap[a.color]} rounded-xl`}> 
                  <a.icon className="w-6 h-6 text-white" />
                  <div className={`absolute inset-0 rounded-xl blur-md opacity-30`} />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{a.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{a.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="bg-gray-900/80 backdrop-blur-xl p-6 rounded-2xl border border-cyan-500/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                <publication.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{publication.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{publication.detail}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
