import { ArrowRight, Download } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]); // parallax effect for image
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]); // parallax effect for text
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden relative">
      {/* Decorative Background Parallax Element */}
      <motion.div 
        style={{ y: useTransform(scrollY, [0, 1000], [0, 300]) }}
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
        <motion.div 
          style={{ y: y2, opacity }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Your Name</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-400 font-display"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-slate-300 max-w-xl"
          >
            I build exceptional and accessible digital experiences for the web. Let's turn your ideas into reality.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#projects" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#" className="flex items-center gap-2 border border-slate-600 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Download Resume <Download size={20} />
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          style={{ y: y1, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <img 
            src="/hero_avatar.webp" 
            alt="Hero Avatar" 
            className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-slate-800 shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
