import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          Ready to Connect?
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          I'm always excited to explore new opportunities, collaborate on innovative projects, or simply have a chat about technology. Let's build something amazing together!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">

        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Get In Touch</h3>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email Me</p>
                <a href="mailto:[saisatish613@gmail.com]" className="text-lg font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                  saisatish613@gmail.com                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="text-lg font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                  Aditya Engineering College , Surampalem
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm uppercase tracking-wider text-slate-500 font-semibold">Social Profiles</h4>
            <div className="flex gap-4">
              <a href="https://github.com/sai1432-ss" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-white/20">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/sai-satish-rajapanthula-817817265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: CTA / Interactive Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-full min-h-[300px] bg-slate-800/50 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center p-8 text-center overflow-hidden group"
        >
          {/* Animated rings for visual flair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 border border-blue-500/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute w-64 h-64 border border-blue-500/10 rounded-full group-hover:scale-125 transition-transform duration-1000 delay-75"></div>
          </div>

          <FaEnvelope className="text-5xl text-blue-400 mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300" />
          <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Start a Conversation</h3>
          <p className="text-slate-400 mb-8 relative z-10 text-sm max-w-xs mx-auto">
            My inbox is always open. Whether you have a question or a project idea, feel free to drop a message!
          </p>

          <a href="mailto:saisatish613@gmail.com" className="relative z-10 bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
            Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
