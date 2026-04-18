'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { Users, Code2, Briefcase, Zap, Star, Trophy } from 'lucide-react';
import { useRef } from 'react';

const statsData = [
  { 
    label: "PROJECTS COMPLETED", 
    value: "500+", 
    icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
    color: "from-cyan-400 to-blue-600"
  },
  { 
    label: "LINES OF CODE", 
    value: "10M+", 
    icon: <Code2 className="w-5 h-5 text-fuchsia-400" />,
    color: "from-fuchsia-400 to-purple-600"
  },
  { 
    label: "HAPPY CLIENTS", 
    value: "150+", 
    icon: <Users className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-400 to-teal-600"
  },
  { 
    label: "AWARDS WON", 
    value: "25+", 
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    color: "from-amber-400 to-orange-600"
  }
];

export function Stats() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[400px] bg-gradient-to-r from-cyan-500/5 via-fuchsia-500/5 to-amber-500/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative p-[1px] rounded-3xl overflow-hidden"
            >
              {/* Card Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="bg-[#0A0A0E]/80 backdrop-blur-xl border border-white/5 p-8 rounded-[23px] flex flex-col items-center text-center h-full hover:border-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {stat.icon}
                </div>
                
                <h3 className={`text-4xl sm:text-5xl font-display font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </h3>
                
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                  {stat.label}
                </p>
                
                {/* Micro-stars */}
                <div className="flex gap-1 mt-6 opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-current text-slate-600" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
