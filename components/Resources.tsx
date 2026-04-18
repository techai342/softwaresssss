'use client';

import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Wrench, ArrowRight } from 'lucide-react';

const resourcesData = [
  {
    title: "Tech Blog",
    desc: "Stay updated with the latest trends, tutorials, and insights in web development, design, and digital marketing.",
    buttonText: "READ ARTICLES",
    icon: <BookOpen className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-500" />,
    iconBg: "bg-blue-500/5",
    iconBorder: "border-blue-500/20",
  },
  {
    title: "Learning Hub",
    desc: "Access free courses, guides, and resources to level up your skills in coding, design, and digital strategy.",
    buttonText: "START LEARNING",
    icon: <GraduationCap className="w-6 h-6 text-fuchsia-400 group-hover:scale-110 transition-transform duration-500" />,
    iconBg: "bg-fuchsia-500/5",
    iconBorder: "border-fuchsia-500/20",
  },
  {
    title: "Developer Tools",
    desc: "Discover our curated collection of tools, templates, and frameworks to accelerate your development workflow.",
    buttonText: "EXPLORE TOOLS",
    icon: <Wrench className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-500" />,
    iconBg: "bg-orange-500/5",
    iconBorder: "border-orange-500/20",
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-24 px-6 max-w-7xl mx-auto relative z-10 border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER */}
      <div className="mb-20 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight mb-6"
        >
          Additional <span className="text-cyan-400 font-bold">Resources</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-slate-400 text-lg md:text-xl font-medium tracking-wide max-w-2xl mx-auto"
        >
          Explore our specialized resources and services to enhance your digital presence.
        </motion.p>
      </div>

      {/* RESOURCES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {resourcesData.map((resource, idx) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.15, duration: 0.7 }}
            className="relative p-[1px] rounded-[24px] group shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2 h-full bg-[#0a0a0f]"
          >
            {/* Spinning RGB Gradient Border - same as other cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full bg-[#0d0f14] rounded-[23px] p-10 items-center text-center">
              
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-colors ${resource.iconBg} ${resource.iconBorder} shadow-inner`}>
                {resource.icon}
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-white tracking-tight mb-4">{resource.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow">
                {resource.desc}
              </p>
              
              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#171a23] border border-white/5 group-hover:bg-white/5 transition-colors text-[11px] font-black tracking-widest uppercase text-white shadow-lg overflow-hidden relative">
                 <span className="relative z-10 flex items-center gap-2">{resource.buttonText} <ArrowRight className="w-4 h-4" /></span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite] group-hover:animate-none" />
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
