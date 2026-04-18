'use client';

import { motion } from 'motion/react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiPython, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss, 
  SiTailwindcss, 
  SiPostgresql, 
  SiDocker, 
  SiRust
} from 'react-icons/si';

const languages = [
  { Icon: SiJavascript, color: "text-yellow-400", name: 'JavaScript' },
  { Icon: SiTypescript, color: "text-blue-500", name: 'TypeScript' },
  { Icon: SiReact, color: "text-cyan-400", name: 'React' },
  { Icon: SiNextdotjs, color: "text-white", name: 'Next.js' },
  { Icon: SiPython, color: "text-blue-400", name: 'Python' },
  { Icon: SiNodedotjs, color: "text-emerald-500", name: 'Node.js' },
  { Icon: SiHtml5, color: "text-orange-500", name: 'HTML5' },
  { Icon: SiCss, color: "text-blue-600", name: 'CSS3' },
  { Icon: SiTailwindcss, color: "text-cyan-400", name: 'Tailwind' },
  { Icon: SiPostgresql, color: "text-blue-300", name: 'PostgreSQL' },
  { Icon: SiDocker, color: "text-blue-400", name: 'Docker' },
  { Icon: SiRust, color: "text-orange-700", name: 'Rust' },
];

export function LanguageMarquee() {
  return (
    <section className="py-12 bg-[#08080C] border-y border-white/5 relative overflow-hidden group">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative flex overflow-hidden">
        {/* We double the list for seamless looping */}
        <motion.div 
          animate={{ x: [0, -100 + "%"] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex whitespace-nowrap min-w-full"
        >
          {languages.concat(languages).map((lang, idx) => {
            const Icon = lang.Icon;
            if (!Icon) return null;

            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 px-12 group/item"
              >
                <div className="text-4xl opacity-50 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300 filter grayscale group-hover/item:grayscale-0">
                  <Icon className={lang.color} />
                </div>
                <span className="text-slate-500 font-mono text-xs font-bold tracking-[0.2em] uppercase group-hover/item:text-white transition-colors duration-300">
                  {lang.name}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Masking gradients for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08080C] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08080C] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
