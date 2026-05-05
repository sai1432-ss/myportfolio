import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Financial Dashboard',
      description: 'A modern, sleek dark-mode financial dashboard user interface with glowing charts and premium aesthetic.',
      image: '/project_1.webp',
      tech: ['React', 'Tailwind CSS', 'Recharts'],
      github: '#',
      demo: '#'
    },
    {
      title: 'E-commerce App',
      description: 'A beautiful mobile e-commerce interface featuring clean typography, pastel colors, and seamless checkout.',
      image: '/project_2.webp',
      tech: ['React Native', 'Redux', 'Stripe API'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AI Chat Interface',
      description: 'A cutting-edge web application interface for AI interactions, complete with dark mode and neon accents.',
      image: '/project_3.webp',
      tech: ['Next.js', 'OpenAI API', 'Framer Motion'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <div className="h-[1px] bg-slate-700 flex-1"></div>
      </motion.div>
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 !== 0 ? 'lg:rtl' : ''}`}
          >
            {/* Image */}
            <div className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="rounded-2xl overflow-hidden border border-slate-700 group relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={project.image} alt={project.title} loading="lazy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            {/* Content */}
            <div className={`lg:col-span-5 flex flex-col gap-6 ${index % 2 !== 0 ? 'lg:order-1 lg:items-end text-left lg:text-right' : ''}`}>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="bg-slate-900/40 backdrop-blur-lg p-6 rounded-xl border border-slate-800 shadow-xl relative z-20">
                <p className="text-slate-300">{project.description}</p>
              </div>
              <ul className={`flex flex-wrap gap-4 text-sm font-display text-blue-400 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className={`flex gap-4 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                <a href={project.github} className="text-slate-400 hover:text-white transition-colors"><FaGithub size={24} /></a>
                <a href={project.demo} className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={24} /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
