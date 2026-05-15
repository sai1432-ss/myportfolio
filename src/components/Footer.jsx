import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-800">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/sai1432-ss" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
        <a href="https://www.linkedin.com/in/sai-satish-rajapanthula-817817265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
      </div>
      <p className="text-slate-500 text-sm font-display">
        Designed & Built by SAI SATISH RAJAPANTHULA
      </p>
    </footer>
  );
};

export default Footer;
