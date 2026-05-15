import { motion } from 'framer-motion';
import {
  FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaWindows, FaNetworkWired, FaCubes, FaProjectDiagram
} from 'react-icons/fa';
import {
  SiC, SiJavascript, SiExpress, SiMysql, SiMongodb
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
        { name: "Java", icon: <FaJava className="text-[#5382a1]" /> },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ]
    },
    {
      title: "CS Core",
      skills: [
        { name: "Data Structures & Algorithms", icon: <FaProjectDiagram className="text-purple-400" /> },
        { name: "Operating Systems", icon: <FaWindows className="text-blue-400" /> },
        { name: "Computer Networks", icon: <FaNetworkWired className="text-green-400" /> },
        { name: "OOP", icon: <FaCubes className="text-orange-400" /> },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      ]
    }
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
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
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

      <div className="flex flex-col gap-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-slate-300 border-l-4 border-blue-500 pl-4">
              {category.title}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-4"
            >
              {category.skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)"
                  }}
                  className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 px-5 py-3 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/80 transition-colors group cursor-pointer"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
