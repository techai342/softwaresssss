'use client';

import { motion } from 'motion/react';
import { Search, TrendingUp, Code2, Rocket, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    num: "1",
    title: "Discovery",
    desc: "We understand your business goals, target audience, and requirements through detailed consultation.",
    icon: <Search className="w-6 h-6 text-slate-300" />
  },
  {
    num: "2",
    title: "Strategy",
    desc: "We develop a comprehensive plan with timelines, deliverables, and success metrics.",
    icon: <TrendingUp className="w-6 h-6 text-slate-300" />
  },
  {
    num: "3",
    title: "Execution",
    desc: "Our expert team implements the solution with precision, quality, and attention to detail.",
    icon: <Code2 className="w-6 h-6 text-slate-300" />
  },
  {
    num: "4",
    title: "Delivery",
    desc: "We launch your project and provide comprehensive training and documentation.",
    icon: <Rocket className="w-6 h-6 text-slate-300" />
  },
  {
    num: "5",
    title: "Support",
    desc: "Ongoing maintenance, updates, and optimization to ensure continued success.",
    icon: <HeadphonesIcon className="w-6 h-6 text-slate-300" />
  }
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6 max-w-[1400px] mx-auto relative z-10">
      
      {/* HEADER */}
      <div className="mb-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-slate-400 text-xl font-medium tracking-wide max-w-2xl mx-auto"
        >
          A streamlined approach to deliver exceptional results efficiently.
        </motion.p>
      </div>

      {/* PROCESS GRID */}
      <div className="relative">
        
        {/* Horizontal Connecting Line (Desktop Only) */}
        <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative p-[1px] rounded-[24px] group shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2 h-full bg-[#0f111a]"
            >
              {/* Spinning RGB Gradient Border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full bg-[#0f111a] rounded-[23px] p-8 items-center text-center backdrop-blur-xl">
                
                {/* Icon & Number Badge */}
                <div className="relative mb-8 mt-2 bg-[#0f111a] rounded-full p-2">
                  <div className="w-[84px] h-[84px] rounded-full border border-white/5 flex items-center justify-center border-dashed">
                    <div className="w-16 h-16 rounded-full bg-[#0a0c10] border border-white/10 flex items-center justify-center shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-400 text-black font-bold text-xs flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
