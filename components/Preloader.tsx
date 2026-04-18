'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          setComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#050508] z-[99999] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo area */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="mb-8"
            >
               <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-fuchsia-500 rounded-2xl flex items-center justify-center p-0.5">
                  <div className="w-full h-full bg-[#050508] rounded-[14px] flex items-center justify-center text-white font-mono font-bold text-xl">
                    SV
                  </div>
               </div>
            </motion.div>

            {/* Percentage */}
            <div className="overflow-hidden mb-2">
               <motion.div 
                 initial={{ y: 20 }}
                 animate={{ y: 0 }}
                 className="text-4xl font-display font-black text-white tracking-tighter"
               >
                 {percent}%
               </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden mb-4">
               <motion.div 
                 className="h-full bg-cyan-500"
                 animate={{ width: `${percent}%` }}
                 transition={{ ease: "easeOut" }}
               />
            </div>

            <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.5em] transition-opacity duration-300" style={{ opacity: percent > 10 ? 1 : 0 }}>
               Optimizing System
            </div>
          </div>
          
          {/* Background Ambience in loader */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
