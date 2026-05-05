import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden relative z-10">
             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" alt="About Me" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-6 -left-6 w-full h-full border-2 border-blue-500/50 rounded-2xl z-0"></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="h-[1px] bg-slate-700 flex-1"></div>
          </div>
          <p className="text-lg text-slate-300 leading-relaxed">
            Hello! I'm a passionate software developer who loves building things that live on the internet. My interest in web development started back in the day when I decided to try editing custom Tumblr themes.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Fast-forward to today, and I've had the privilege of working on a variety of projects. My main focus these days is building accessible, inclusive products and digital experiences.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            When I'm not at the computer, I'm usually hanging out reading, exploring nature, or learning a new recipe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
