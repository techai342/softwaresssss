'use client';

import { motion } from 'motion/react';
import { Cpu, LayoutTemplate, TrendingUp, BrainCircuit, LifeBuoy, Globe2, Bot, ShieldCheck } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                ANIMATION COMPONENTS                        */
/* -------------------------------------------------------------------------- */

const ShieldAnim = () => (
  <div className="relative flex flex-col items-center justify-center z-10 h-full w-full group-hover:scale-105 transition-transform duration-500">
     <div className="w-20 h-20 border border-emerald-500/30 rounded-2xl bg-emerald-500/5 relative flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.1)]">
         <ShieldCheck className="w-8 h-8 text-emerald-400" />
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.15)_0%,transparent_70%)]" />
         {/* Scanning laser */}
         <motion.div
           initial={{ top: "-10%" }}
           animate={{ top: ["-10%", "110%", "-10%"] }}
           transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
           className="absolute w-full h-[2px] bg-emerald-400 shadow-[0_0_15px_#34d399] z-20 left-0"
         />
     </div>
     <div className="flex gap-2 mt-5">
         <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold font-mono tracking-widest rounded-sm">ENCRYPTED</div>
         <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-bold font-mono tracking-widest rounded-sm">FIREWALL ACTIVE</div>
     </div>
  </div>
);

const DashboardAnim = () => (
  <div className="relative flex items-center justify-center z-10 w-full h-full group-hover:scale-105 transition-transform duration-500">
     <div className="w-48 h-32 bg-[#12121A] rounded-xl border border-white/5 flex overflow-hidden shadow-2xl relative">
        {/* Sidebar */}
        <div className="w-12 bg-[#0A0A0E] border-r border-white/5 flex flex-col items-center py-3 gap-3 z-10 relative">
           <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-5 h-5 bg-fuchsia-500 rounded-sm shadow-[0_0_15px_rgba(217,70,239,0.4)]" />
           <div className="w-3.5 h-3.5 rounded-full bg-slate-700/50" />
           <div className="w-3.5 h-3.5 rounded-full bg-slate-700/50" />
        </div>
        {/* Main Content */}
        <div className="flex-1 p-3 flex flex-col gap-3 bg-[#12121A]">
           {/* Topbar */}
           <div className="w-full h-3 bg-white/5 rounded-full" />
           {/* Content Grid */}
           <div className="flex gap-3 h-full">
              <div className="flex-[0.8] bg-white/[0.03] border border-white/[0.02] rounded-lg p-2.5 relative overflow-hidden">
                 <motion.div animate={{ height: ["20%", "70%", "20%"] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} className="w-4 bg-fuchsia-500/20 rounded absolute bottom-2" />
              </div>
              <div className="flex-[1.2] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.02] rounded-lg" />
           </div>
        </div>
     </div>
  </div>
);

const ROIAnim = () => (
  <div className="relative flex items-center justify-center z-10 w-full h-full group-hover:scale-105 transition-transform duration-500 gap-8">
     <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Background ring */}
        <svg className="w-28 h-28 transform -rotate-90">
           <circle cx="56" cy="56" r="46" stroke="#1A1A24" strokeWidth="10" fill="none" />
           <motion.circle
              cx="56" cy="56" r="46" stroke="#0ea5e9" strokeWidth="10" fill="none"
              strokeLinecap="round" strokeDasharray="289" // 2 * pi * 46 = 289
              initial={{ strokeDashoffset: 289 }}
              animate={{ strokeDashoffset: [289, 58, 289] }} // 58 means 80% full
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
           />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
           <span className="text-white font-display font-bold text-2xl leading-none tracking-wide">4.8x</span>
           <span className="text-[9px] font-mono tracking-widest text-slate-500 mt-1">ROI</span>
        </div>
     </div>
     <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono"><div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" /> Profit</div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono"><div className="w-2 h-2 rounded-full bg-[#1A1A24]" /> Cost</div>
     </div>
  </div>
);

const RobotAnim = () => (
  <div className="relative flex items-center justify-center z-10 w-full h-full group-hover:scale-105 transition-transform duration-500">
     <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-400 via-purple-500 to-indigo-600 rounded-[2rem] flex items-center justify-center shadow-[0_10px_40px_rgba(192,38,211,0.5)] relative">
        <Bot className="w-12 h-12 text-white" />
        <motion.div
           animate={{ y: [0, -8, 0], opacity: [0, 1, 0] }}
           transition={{ repeat: Infinity, duration: 3, times: [0, 0.2, 1] }}
           className="absolute -top-4 -right-16 bg-white text-black font-bold text-[9px] px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap tracking-wide"
        >
           Task Complete!
        </motion.div>
     </div>
  </div>
);

const ChatAnim = () => (
  <div className="flex flex-col justify-center gap-4 w-full max-w-[260px] mx-auto z-10 relative group-hover:scale-105 transition-transform duration-500 h-full">
     <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
        transition={{ repeat: Infinity, duration: 6, times: [0, 0.1, 0.8, 1] }}
        className="bg-[#1A1A24] border border-white/5 text-slate-300 text-[9px] p-3 rounded-2xl rounded-tl-sm w-4/5 self-start shadow-xl font-medium"
     >
        I need help with my server deployment.
     </motion.div>
     <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 0, 1, 1, 0], y: [10, 10, 0, 0, -10] }}
        transition={{ repeat: Infinity, duration: 6, times: [0, 0.3, 0.4, 0.8, 1] }}
        className="bg-gradient-to-r from-orange-500 to-orange-400 text-black font-bold text-[9px] p-3 rounded-2xl rounded-tr-sm w-[90%] self-end shadow-[0_10px_30px_rgba(249,115,22,0.4)]"
     >
        We&apos;re on it! Checking logs now... ⚡
     </motion.div>
  </div>
);

const ServerAnim = () => (
  <div className="relative flex items-center justify-center z-10 w-full h-full group-hover:scale-105 transition-transform duration-500">
     <div className="w-32 h-32 relative flex flex-col justify-between py-3 px-2">
        {/* The outer rack outline */}
        <div className="absolute inset-0 border border-blue-500/20 rounded-2xl bg-blue-950/20" />
        {/* Connecting back beam */}
        <div className="absolute top-0 bottom-0 left-12 right-12 bg-blue-500/5 z-0" />
        
        {[1, 2, 3].map((s, i) => (
           <div key={i} className="relative z-10 h-6 mx-1 border border-blue-400/20 rounded border-b-2 border-b-blue-400/30 bg-[#0A0A0E] flex items-center px-3 gap-3 overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
              <motion.div animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] flex-shrink-0" />
              <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden relative">
                 <motion.div animate={{ x: ["-100%", "300%"] }} transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }} className="absolute inset-y-0 w-1/2 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
              </div>
           </div>
        ))}
     </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                                MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */

const advantagesData = [
  {
    title: "Expert Engineering",
    desc: "We architect scalable, secure systems using modern standards. From cloud infrastructure to encrypted data pipelines, our code is built to last.",
    icon: <Cpu className="w-5 h-5" />,
    anim: <ShieldAnim />,
    cBg: "group-hover:bg-emerald-500/10",
    cBorder: "group-hover:border-emerald-500/30",
    cText: "text-emerald-400",
    cTextHover: "group-hover:text-emerald-300",
    cShadow: "group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    cConic: "from_0deg,transparent_75%,#10b981_85%,#047857_100%"
  },
  {
    title: "Tailored Solutions",
    desc: "Bespoke software that fits your workflow. Whether it's a complex CRM dashboard, a high-speed mobile app, or a sleek SaaS interface.",
    icon: <LayoutTemplate className="w-5 h-5" />,
    anim: <DashboardAnim />,
    cBg: "group-hover:bg-fuchsia-500/10",
    cBorder: "group-hover:border-fuchsia-500/30",
    cText: "text-fuchsia-400",
    cTextHover: "group-hover:text-fuchsia-300",
    cShadow: "group-hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]",
    cConic: "from_0deg,transparent_75%,#d946ef_85%,#9333ea_100%"
  },
  {
    title: "Results-Driven",
    desc: "We focus on ROI. Our data-driven approach ensures your digital product doesn't just look good, it performs, converts, and scales.",
    icon: <TrendingUp className="w-5 h-5" />,
    anim: <ROIAnim />,
    cBg: "group-hover:bg-sky-500/10",
    cBorder: "group-hover:border-sky-500/30",
    cText: "text-sky-400",
    cTextHover: "group-hover:text-sky-300",
    cShadow: "group-hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]",
    cConic: "from_0deg,transparent_75%,#0ea5e9_85%,#0284c7_100%"
  },
  {
    title: "AI & Automation",
    desc: "We integrate intelligent bots, neural networks, and automated workflows to reduce manual labor and supercharge your business efficiency.",
    tags: ["AI Agents", "Scraping", "LLMs", "Bots"],
    icon: <BrainCircuit className="w-5 h-5" />,
    anim: <RobotAnim />,
    cBg: "group-hover:bg-pink-500/10",
    cBorder: "group-hover:border-pink-500/30",
    cText: "text-pink-400",
    cTextHover: "group-hover:text-pink-300",
    cShadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
    cTagBorder: "border-pink-500/30",
    cConic: "from_0deg,transparent_75%,#ec4899_85%,#be185d_100%"
  },
  {
    title: "24/7 Reliability",
    desc: "Downtime is not an option. Our dedicated support teams and real-time monitoring ensure your systems are always online and performing.",
    tags: ["Monitoring", "SLA", "Updates", "Security"],
    icon: <LifeBuoy className="w-5 h-5" />,
    anim: <ChatAnim />,
    cBg: "group-hover:bg-orange-500/10",
    cBorder: "group-hover:border-orange-500/30",
    cText: "text-orange-400",
    cTextHover: "group-hover:text-orange-300",
    cShadow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]",
    cTagBorder: "border-orange-500/30",
    cConic: "from_0deg,transparent_75%,#f97316_85%,#c2410c_100%"
  },
  {
    title: "Global Scale",
    desc: "Deploy anywhere. We build infrastructure that scales globally, utilizing CDNs and edge computing to serve users instantly, no matter where they are.",
    tags: ["CDN", "Cloud", "Edge", "Scale"],
    icon: <Globe2 className="w-5 h-5" />,
    anim: <ServerAnim />,
    cBg: "group-hover:bg-blue-500/10",
    cBorder: "group-hover:border-blue-500/30",
    cText: "text-blue-400",
    cTextHover: "group-hover:text-blue-300",
    cShadow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    cTagBorder: "border-blue-500/30",
    cConic: "from_0deg,transparent_75%,#3b82f6_85%,#1d4ed8_100%"
  }
];

export function WhyUs() {
  return (
    <section id="whyus" className="py-24 px-6 max-w-[1400px] mx-auto relative z-10">
      
      {/* HEADER SECTION */}
      <div className="mb-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-6"
        >
          THE ADVANTAGE
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight mb-6"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] font-bold">DIGITAL DOMINANCE?</span>
        </motion.h2>
        
        <motion.p
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
           className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto"
        >
          We don&apos;t just write code; we engineer digital ecosystems designed for dominance.
        </motion.p>
      </div>

      {/* BENTO GRID MODULES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {advantagesData.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-full w-full rounded-[24px] p-[1px] overflow-hidden"
          >
            {/* 1. Underlying RGB Moving Border Gradient (Revealed on Hover) */}
            <div className="absolute inset-0 rounded-[24px] bg-white/[0.02] group-hover:bg-transparent transition-colors duration-500 z-0" />
            
            {/* Spinning RGB Gradient Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none" />

            {/* 2. Inner Card Body */}
            <div className={`relative z-10 w-full h-full bg-[#0A0A0E] rounded-[23px] flex flex-col overflow-hidden transition-all duration-500`}>
              
              {/* TOP: Animation Window Container */}
              <div className="h-[240px] bg-[#0A0A0E] border-b border-white/5 relative flex justify-center items-center overflow-hidden">
                 {/* Faint dot grid background */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
                 
                 {/* Dynamic Animation */}
                 {item.anim}
              </div>

              {/* BOTTOM: Text and Info */}
              <div className="p-8 flex flex-col flex-1 relative bg-[#0A0A0E]">
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-2xl border border-white/10 ${item.cBorder} transition-colors duration-500 ${item.cText} bg-[#12121A] ${item.cBg} ${item.cShadow}`}>
                    {item.icon}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-display font-bold text-white mb-4 ${item.cTextHover} transition-colors duration-300`}>{item.title}</h3>
                <p className="text-[14px] text-slate-400 leading-relaxed flex-1 group-hover:text-slate-300 transition-colors font-medium">
                  {item.desc}
                </p>

                {/* Optional Tags for specific modules */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
                     {item.tags.map(tag => (
                       <span key={tag} className={`text-[10px] font-mono font-bold tracking-widest px-3 py-1.5 rounded-md bg-[#12121A] border-b border-amber-500/0 group-hover:bg-[#1A1A24] border border-white/5 group-hover:${item.cTagBorder} ${item.cText} transition-all duration-500 shadow-sm`}>
                         {tag}
                       </span>
                     ))}
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
