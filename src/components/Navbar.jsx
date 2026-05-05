import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">
        <a href="#" className="font-display font-bold text-2xl text-white">Portfolio<span className="text-blue-500">.</span></a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-slate-900 border-b border-white/10 flex flex-col items-center py-6 gap-6">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-slate-300 text-lg hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
