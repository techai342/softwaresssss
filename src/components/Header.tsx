import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home', id: 'home' },
  { name: 'SERVICES', href: '#services', id: 'services' },
  { name: 'ARCHITECTURE', href: '#architecture', id: 'architecture' },
  { name: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
  { name: 'WHY US', href: '#whyus', id: 'whyus' },
  { name: 'WORK', href: '#work', id: 'work' },
  { name: 'PRICING', href: '#pricing', id: 'pricing' },
  { name: 'TEAM', href: '#team', id: 'team' },
  { name: 'PROCESS', href: '#process', id: 'process' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
];

export function Header() {
  const [active, setActive] = useState('HOME');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = navLinks.find((l) => l.id === entry.target.id);
          if (link) {
            setActive(link.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActive(name);
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[60] py-4 px-6 md:px-10 flex items-center justify-between backdrop-blur-xl bg-black/60 border-b border-white/10"
    >
      <div className="flex items-center gap-3">
        <motion.div 
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center relative overflow-hidden cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20" />
          <span className="font-mono text-cyan-400 font-bold text-xs relative z-10">{`</>`}</span>
        </motion.div>
        <div>
          <h1 className="font-display font-bold text-lg md:text-xl text-white tracking-widest leading-none mb-1">SAQIB VISUALS</h1>
          <p className="text-[9px] text-slate-500 uppercase tracking-[0.2em] leading-none font-bold">AGENCY SYSTEM</p>
        </div>
      </div>

      {/* Central Navigation */}
      <nav className="hidden lg:flex items-center bg-[#0A0A0E]/80 border border-white/5 rounded-full p-1 shadow-2xl">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.name, link.href)}
            className={`relative px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 ${
              active === link.name ? 'text-cyan-400' : 'text-slate-400 hover:text-white'
            }`}
          >
            {active === link.name && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-[#12121A] rounded-full border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.dispatchEvent(new Event('open-whatsapp-chat'))}
          className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer"
        >
          START 
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop for closing */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[65] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-20 right-4 left-4 bg-[#0A0A0E] border border-white/10 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:hidden z-[70] backdrop-blur-2xl gpu"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.name, link.href)}
                    className={`text-sm font-bold tracking-widest py-3 px-4 rounded-xl transition-colors ${
                      active === link.name ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="h-[1px] bg-white/5 my-2" />
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.dispatchEvent(new Event('open-whatsapp-chat'));
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl text-xs font-bold shadow-lg"
                >
                  START PROJECT <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
