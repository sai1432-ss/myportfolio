import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-slate-800">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
      </div>
      <p className="text-slate-500 text-sm font-display">
        Designed & Built by Your Name
      </p>
    </footer>
  );
};

export default Footer;
