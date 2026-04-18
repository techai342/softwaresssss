'use client';

import { motion } from 'motion/react';
import { Crown, Star, CheckCircle2, Code2, Terminal, Database, ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const TypewriterLine = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ clipPath: 'inset(0 100% 0 0)' }}
    animate={{ clipPath: 'inset(0 0% 0 0)' }}
    transition={{ delay, duration: 0.8, ease: "linear" }}
    className="whitespace-nowrap"
  >
    {children}
  </motion.div>
);

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] pt-32 pb-20 px-6 max-w-[1400px] mx-auto flex flex-col justify-center">
      {/* Top Badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
        className="flex justify-center mb-16"
      >
        <div className="flex items-center gap-3 bg-amber-500/[0.05] border border-amber-500/30 px-6 py-2.5 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.15)] group cursor-default">
          <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
             <Crown className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
          </motion.div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">God of Development</span>
          <Star className="w-4 h-4 text-amber-400/50" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
            className="flex items-center gap-3 bg-white/[0.02] border border-white/10 rounded-full pl-2 pr-6 py-2 mb-8 cursor-default hover:bg-white/[0.05] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center relative">
              <motion.div 
                 className="absolute inset-0 rounded-full bg-emerald-400 opacity-20"
                 animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                 transition={{ repeat: Infinity, duration: 2 }}
              />
              <CheckCircle2 className="w-4 h-4 text-emerald-400 relative z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest leading-tight">Accepting New Projects</span>
              <span className="text-[10px] text-slate-500 leading-tight">Limited Slots Available for Q4</span>
            </div>
          </motion.div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-[90px] xl:text-[110px] font-bold leading-[0.95] tracking-tight text-white drop-shadow-2xl overflow-hidden py-2">
            <motion.span 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }} className="block"
            >We Build</motion.span>
            
            <motion.span 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} className="block text-slate-300"
            >Digital</motion.span>
            
            <motion.span 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }} 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)] pb-2"
            >Dominance.</motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-400 mt-8 max-w-lg font-medium"
          >
            Scalable architectures, AI integration, aur modern web technologies for businesses that demand engineering precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-5 mt-12"
          >
            <Magnetic>
              <button 
                onClick={() => window.dispatchEvent(new Event('open-whatsapp-chat'))}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-xs tracking-widest text-white flex items-center gap-3 shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all hover:shadow-[0_20px_40px_rgba(6,182,212,0.5)] active:scale-95 cursor-pointer"
              >
                GET STARTED
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Magnetic>

            <Magnetic>
              <a 
                href="#work"
                className="px-8 py-4 bg-white/[0.03] border border-white/10 rounded-2xl font-bold text-xs tracking-widest text-slate-300 transition-all hover:bg-white/[0.07] hover:border-white/20 active:scale-95 flex items-center gap-3"
              >
                VIEW WORK
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Content: IDE Window Mockup */}
        <motion.div 
          initial={{ opacity: 0, rotateX: 20, rotateY: -20, scale: 0.9, z: -100 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.3 }}
          style={{ perspective: 1000 }}
          className="relative w-full z-10"
        >
          {/* Overlapping Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.5, type: "spring" }}
            className="absolute -right-6 top-[40%] bg-[#121218] border border-white/10 rounded-2xl p-5 shadow-2xl z-20 w-[180px]"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Growth</div>
              <div className="text-3xl font-display font-bold text-white mb-3">+145%</div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" 
                />
              </div>
            </motion.div>
          </motion.div>

          {/* The Code Editor */}
          <div className="bg-[#0A0A0E] rounded-2xl border border-white/10 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
            {/* Editor Header */}
            <div className="bg-[#121218] border-b border-white/10 flex items-center justify-between px-4 py-3">
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" />
                <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" />
                <motion.div whileHover={{ scale: 1.5 }} className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" />
              </div>
              <div className="flex gap-5 text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300"><Code2 className="w-3.5 h-3.5" /> Editor</span>
                <span className="flex items-center gap-1.5"><Terminal className="w-3 h-3" /> Terminal</span>
              </div>
            </div>

            {/* Editor Tabs */}
            <div className="flex border-b border-white/5 bg-[#0D0D12]">
              <div className="px-5 py-2.5 border-r border-white/5 flex items-center gap-2 bg-white/[0.02]">
                <Code2 className="w-4 h-4 text-cyan-500" />
                <span className="text-xs text-slate-200 font-mono">App.tsx</span>
              </div>
              <div className="px-5 py-2.5 border-r border-white/5 flex items-center gap-2 opacity-50">
                <Star className="w-4 h-4 text-amber-500" />
                <span className="text-xs text-slate-400 font-mono">Style.css</span>
              </div>
              <div className="px-5 py-2.5 border-r border-white/5 flex items-center gap-2 bg-white/5 opacity-80">
                <Database className="w-4 h-4 text-emerald-500" />
                <span className="text-xs text-slate-200 font-mono">Server.py</span>
              </div>
            </div>

            {/* Code Window with Typewriter Effect */}
            <div className="p-6 font-mono text-sm leading-8 flex gap-6 overflow-x-auto min-h-[250px]">
              <div className="flex flex-col text-slate-600 text-right select-none">
                {[1,2,3,4,5,6,7].map(num => (
                  <motion.span key={num} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + (num * 0.1) }}>{num}</motion.span>
                ))}
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <TypewriterLine delay={1.0}>
                  <div><span className="text-fuchsia-500">class</span> <span className="text-amber-300">Optimizer</span>:</div>
                </TypewriterLine>
                <TypewriterLine delay={1.5}>
                  <div className="pl-6"><span className="text-fuchsia-500">def</span> <span className="text-blue-400">scale_business</span>(<span className="text-cyan-300">self</span>):</div>
                </TypewriterLine>
                <TypewriterLine delay={2.0}>
                  <div className="pl-12">traffic <span className="text-fuchsia-500">=</span> <span className="text-green-300">&quot;High_Volume&quot;</span></div>
                </TypewriterLine>
                <TypewriterLine delay={2.5}>
                  <div className="pl-12">conversion <span className="text-fuchsia-500">=</span> <span className="text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]">&quot;Guaranteed&quot;</span></div>
                </TypewriterLine>
                <TypewriterLine delay={3.0}>
                  <div className="pl-12"><span className="text-fuchsia-500">if</span> client_goal <span className="text-fuchsia-500">==</span> <span className="text-cyan-300">&quot;Dominance&quot;</span>:</div>
                </TypewriterLine>
                <TypewriterLine delay={3.8}>
                  <div className="pl-16"><span className="text-fuchsia-500">return</span> <span className="text-slate-300">self</span>.execute_strategy()</div>
                </TypewriterLine>
                
                {/* Blinking Cursor */}
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 4.8 }} 
                  className="w-2.5 h-[18px] bg-cyan-400 mt-2 ml-16" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
