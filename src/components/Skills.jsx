import { Code2, Database, Layout, Smartphone, Globe, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Frontend', icon: <Layout size={32} />, tech: 'React, Next.js, Tailwind' },
    { name: 'Backend', icon: <Database size={32} />, tech: 'Node.js, Express, PostgreSQL' },
    { name: 'Languages', icon: <Code2 size={32} />, tech: 'JavaScript, TypeScript, Python' },
    { name: 'Mobile', icon: <Smartphone size={32} />, tech: 'React Native' },
    { name: 'Web', icon: <Globe size={32} />, tech: 'HTML5, CSS3, REST APIs' },
    { name: 'Tools', icon: <Terminal size={32} />, tech: 'Git, Docker, AWS' },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">My Toolbox</h2>
        <div className="h-[1px] bg-slate-700 flex-1"></div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
          >
            <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform origin-left">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-slate-400">{skill.tech}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
