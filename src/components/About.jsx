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
            Hello! I'm <span className="font-semibold text-white">Sai Satish Rajapanthula</span>, a dedicated software engineering student with a strong passion for solving complex problems through code. I am currently pursuing my degree in <span className="font-semibold text-emerald-400">Computer Science and Engineering(Data Science)</span> at <span className="font-semibold text-emerald-400">Aditya Engineering College</span>, where I am continuously expanding my technical foundation.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            My technical journey has led me to specialize in <span className="font-semibold text-blue-400">Backend Development</span> and <span className="font-semibold text-blue-400">Machine Learning</span>. I enjoy building robust, scalable server-side architectures and integrating intelligent, data-driven models to create impactful applications.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            Whether I'm designing efficient APIs, optimizing databases, or training models, my goal is always to engineer products that deliver real value. I am constantly exploring new technologies and am eager to take on challenges that push my boundaries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
