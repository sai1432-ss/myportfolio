import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Attendance System',
      description: 'Revolutionizing attendance tracking with cutting-edge facial recognition technology. Making education smarter, one face at a time.',
      image: '/project1.webp',
      tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'Face Recognition', 'mongoDB'],
      github: '#',
      demo: 'https://attendence-mu.vercel.app/'
    },
    {
      title: 'AI Form Architect',
      description: 'AI Form Architect is a full-stack platform that transforms natural language prompts into production-ready, validated JSON Schema (Draft 7) forms. Using openais GROQ, the system supports multi-turn refinements, conditional logic (x-show-when) and visual diffing',
      image: '/project2.webp',
      tech: ['React ', 'Zustand', 'GROQ-AI API'],
      github: 'https://github.com/sai1432-ss/AI-PoweredConversationalFormBuilder',
      demo: 'https://production-frontend-pi.vercel.app/'
    },
    {
      title: 'Multi-tanent SAAS Application',
      description: 'The Multi-Tenant SaaS Task Management Platform is a production-ready, multi-tenant environment. The system supports multiple organizations (tenants) on a shared infrastructure while ensuring strict data isolation and role-based access control.',
      image: '/project3.png',
      tech: ['React.js', 'node.js', 'Express.js', 'postgres'],
      github: 'https://github.com/sai1432-ss/SaaSApplication',
      demo: 'https://saa-s-application-three.vercel.app/login'
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
