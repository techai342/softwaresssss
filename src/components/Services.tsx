import { motion } from 'motion/react';
import { Code2, Smartphone, Search, Palette, Database, ArrowRight, Layers, Bot, Zap, Fingerprint } from 'lucide-react';

/* -------------------------------------------------------------------------- */
/*                                ANIMATION COMPONENTS                        */
/* -------------------------------------------------------------------------- */

const WebDevAnim = () => (
  <div className="w-full max-w-[200px] bg-[#12121A] rounded-md border border-white/10 overflow-hidden shadow-2xl relative z-10 transition-transform group-hover:scale-105 duration-500">
    <div className="h-4 bg-[#1A1A24] border-b border-white/5 flex items-center px-2 gap-1">
       <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
       <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
       <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
    </div>
    <div className="p-4 space-y-3">
       <div className="h-1.5 bg-cyan-500/10 rounded overflow-hidden">
         <motion.div
           className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_#00f2ff]"
           initial={{ width: "0%" }}
           animate={{ width: "100%" }}
           transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
         />
       </div>
       <div className="flex gap-2">
           <motion.div className="h-1.5 bg-white/10 rounded w-full" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }} />
           <div className="h-1.5 bg-white/5 rounded w-1/2" />
       </div>
       <div className="flex gap-2">
           <div className="h-1.5 bg-white/5 rounded w-1/3" />
           <div className="h-1.5 bg-white/5 rounded w-1/4" />
       </div>
    </div>
  </div>
);

const CustomSoftwareAnim = () => (
  <div className="flex flex-col items-center justify-center gap-4 z-10 transition-transform group-hover:scale-105 duration-500">
     <div className="flex items-center gap-5 relative">
        <div className="w-10 h-10 bg-[#12121A] rounded-xl border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
          <Database className="w-4 h-4"/>
        </div>
        
        {/* Moving dots */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1">
           <motion.div animate={{ x: [0, 20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }} className="w-1 h-1 bg-white rounded-full" />
           <motion.div animate={{ x: [0, 20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1 h-1 bg-white rounded-full" />
           <motion.div animate={{ x: [0, 20], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1 h-1 bg-white rounded-full" />
        </div>

        <div className="w-10 h-10 bg-[#12121A] rounded-xl border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)] relative">
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#12121A]" />
          <Smartphone className="w-4 h-4"/>
        </div>
     </div>
     <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[9px] font-mono tracking-[0.3em] text-fuchsia-400">
       SYNCING
     </motion.div>
  </div>
);

const AIAnim = () => (
  <div className="relative w-full h-full flex items-center justify-center z-10 transition-transform group-hover:scale-105 duration-500 overflow-hidden">
     {/* Matrix Background Code */}
     <div className="absolute inset-0 opacity-[0.03] font-mono text-[8px] text-emerald-500 leading-tight select-none flex flex-col justify-center items-center pointer-events-none">
       {[...Array(10)].map((_, i) => (
         <div key={i}>1 0 0 1 1 0 1 0 0 1 1 1 0</div>
       ))}
     </div>
     
     {/* Scanning Circle */}
     <div className="relative w-24 h-24 rounded-full border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_30px_rgba(16,185,129,0.15)] flex items-center justify-center">
       <span className="font-display font-bold text-2xl text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">AI</span>
       {/* Scanner Arc */}
       <motion.div 
         animate={{ rotate: 360 }} 
         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
         className="absolute inset-0 rounded-full border-t-2 border-l-2 border-transparent border-t-emerald-400 border-l-emerald-400 opacity-80"
       />
     </div>
  </div>
);

const MobileAppAnim = () => (
  <div className="flex flex-col items-center justify-center z-10 transition-transform group-hover:scale-105 duration-500">
     {/* Phone Outline */}
     <div className="w-20 h-40 border-2 border-white/10 rounded-[20px] relative flex flex-col items-center justify-center bg-[#08080C] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-2 w-6 h-1.5 bg-white/10 rounded-full" />
        
        {/* Fingerprint Scanner Indicator */}
        <motion.div 
           initial={{ opacity: 0.2 }}
           animate={{ opacity: [0.2, 1, 0.2] }}
           transition={{ repeat: Infinity, duration: 2 }}
           className="relative flex flex-col items-center"
        >
          <Fingerprint className="w-10 h-10 text-rose-500 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
          
          {/* Scanning Line */}
          <motion.div 
            animate={{ top: ['0%', '100%', '0%'] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-rose-400 shadow-[0_0_10px_rgba(244,63,94,1)]" 
          />
        </motion.div>
     </div>
     <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-[9px] font-mono tracking-[0.2em] text-rose-500 font-bold mt-4 uppercase">
       VERIFYING BUILD
     </motion.div>
  </div>
);

const UIUXAnim = () => (
  <div className="relative flex flex-col items-center justify-center z-10 transition-transform group-hover:scale-105 duration-500 w-full">
     {/* Floating Element */}
     <motion.div 
       animate={{ y: [-5, 5, -5] }}
       transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
       className="relative w-48 h-28 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 p-[1px] shadow-[0_20px_40px_rgba(249,115,22,0.3)]"
     >
       <div className="w-full h-full bg-gradient-to-br from-orange-500 to-rose-600 rounded-[15px] flex flex-col items-center justify-center relative overflow-hidden">
          {/* Inner glass icon shape */}
          <div className="w-12 h-12 bg-white rounded-[12px] flex items-center justify-center shadow-xl mb-3">
             <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-rose-500" />
          </div>
          
          {/* Pill text */}
          <div className="bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10 text-[8px] font-bold tracking-widest text-white uppercase shadow-lg">
             HIGH FIDELITY
          </div>
       </div>
     </motion.div>
  </div>
);

const DigitalGrowthAnim = () => (
  <div className="w-full h-full relative z-10 flex flex-col justify-end items-center transition-transform group-hover:scale-105 duration-500 border-b border-yellow-500/20 bg-gradient-to-t from-yellow-500/10 to-transparent">
     {/* Grid background */}
     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] opacity-30 pointer-events-none" />
     
     {/* Floating specific Badge */}
     <motion.div 
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.5 }}
       className="absolute top-6 right-6 bg-yellow-500 text-black font-bold text-[9px] px-2.5 py-1 rounded-full flex items-center gap-1 shadow-[0_0_20px_rgba(234,179,8,0.4)] z-20"
     >
       <Zap className="w-3 h-3" /> ROI +300%
     </motion.div>

     <div className="flex items-end gap-1.5 w-full max-w-[220px] pb-4 px-4 h-[120px] relative z-10">
        {[
          { h: 20 }, { h: 35 }, { h: 25 }, { h: 50 }, 
          { h: 65 }, { h: 45 }, { h: 80 }, { h: 100 }, { h: 120 }, { h: 140 }
        ].map((bar, i) => (
           <motion.div 
             key={i} 
             initial={{ height: 0 }}
             animate={{ height: `${bar.h}%` }}
             transition={{ duration: 1, delay: i * 0.1, type: "spring" }} 
             className="flex-1 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-t-[2px] shadow-[0_0_10px_rgba(234,179,8,0.2)]" 
           />
        ))}
     </div>
  </div>
);


/* -------------------------------------------------------------------------- */
/*                                MAIN COMPONENT                              */
/* -------------------------------------------------------------------------- */

const servicesData = [
  { 
    id: "01",
    title: "Full-Stack Web Dev", 
    desc: "High-performance architectures for corporate & enterprise web systems.", 
    tags: ["REACT ARCHITECTURE", "NEXT.JS"],
    icon: <Code2 className="w-5 h-5" />,
    anim: <WebDevAnim />,
    cBg: "group-hover:bg-cyan-500/20",
    cBorder: "group-hover:border-cyan-400/50",
    cText: "text-cyan-400",
    cTextHover: "group-hover:text-cyan-400",
    cShadow: "group-hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]",
    cTagBg: "group-hover:bg-cyan-500/10",
    cTagBorder: "group-hover:border-cyan-500/20",
    cConic: "from_0deg,transparent_75%,#00f2ff_85%,#3b82f6_100%"
  },
  { 
    id: "02",
    title: "Custom Software", 
    desc: "Specialized Management Systems for Retail, Housing & Enterprise.", 
    tags: ["C# .NET ECOSYSTEM", "JAVA ENTERPRISE"],
    icon: <Smartphone className="w-5 h-5" />,
    anim: <CustomSoftwareAnim />,
    cBg: "group-hover:bg-fuchsia-500/20",
    cBorder: "group-hover:border-fuchsia-400/50",
    cText: "text-fuchsia-400",
    cTextHover: "group-hover:text-fuchsia-400",
    cShadow: "group-hover:shadow-[0_0_25px_rgba(217,70,239,0.3)]",
    cTagBg: "group-hover:bg-fuchsia-500/10",
    cTagBorder: "group-hover:border-fuchsia-500/20",
    cConic: "from_0deg,transparent_75%,#e879f9_85%,#a855f7_100%"
  },
  { 
    id: "03",
    title: "Automation & AI", 
    desc: "Intelligent bots, data pipelines, and workflow optimization engines.", 
    tags: ["PYTHON SCRIPTING", "WORKFLOW ENGINES"],
    icon: <Bot className="w-5 h-5" />,
    anim: <AIAnim />,
    cBg: "group-hover:bg-emerald-500/20",
    cBorder: "group-hover:border-emerald-400/50",
    cText: "text-emerald-400",
    cTextHover: "group-hover:text-emerald-400",
    cShadow: "group-hover:shadow-[0_0_25px_rgba(52,211,153,0.3)]",
    cTagBg: "group-hover:bg-emerald-500/10",
    cTagBorder: "group-hover:border-emerald-500/20",
    cConic: "from_0deg,transparent_75%,#34d399_85%,#059669_100%"
  },
  { 
    id: "04",
    title: "Mobile App Dev", 
    desc: "Native & Cross-platform ecosystems for iOS and Android.", 
    tags: ["REACT NATIVE", "FLUTTER"],
    icon: <Smartphone className="w-5 h-5" />,
    anim: <MobileAppAnim />,
    cBg: "group-hover:bg-rose-500/20",
    cBorder: "group-hover:border-rose-400/50",
    cText: "text-rose-400",
    cTextHover: "group-hover:text-rose-400",
    cShadow: "group-hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]",
    cTagBg: "group-hover:bg-rose-500/10",
    cTagBorder: "group-hover:border-rose-500/20",
    cConic: "from_0deg,transparent_75%,#fb7185_85%,#e11d48_100%"
  },
  { 
    id: "05",
    title: "UI/UX & Branding", 
    desc: "High-fidelity interfaces, design systems, and brand identity mapping.", 
    tags: ["FIGMA PRO", "ADOBE CREATIVE SUITE"],
    icon: <Palette className="w-5 h-5" />,
    anim: <UIUXAnim />,
    cBg: "group-hover:bg-orange-500/20",
    cBorder: "group-hover:border-orange-400/50",
    cText: "text-orange-400",
    cTextHover: "group-hover:text-orange-400",
    cShadow: "group-hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]",
    cTagBg: "group-hover:bg-orange-500/10",
    cTagBorder: "group-hover:border-orange-500/20",
    cConic: "from_0deg,transparent_75%,#fb923c_85%,#ea580c_100%"
  },
  { 
    id: "06",
    title: "Digital Growth", 
    desc: "Technical SEO, data analytics, and conversion logic.", 
    tags: ["DATA ANALYTICS", "KEYWORD LOGIC"],
    icon: <Search className="w-5 h-5" />,
    anim: <DigitalGrowthAnim />,
    cBg: "group-hover:bg-yellow-500/20",
    cBorder: "group-hover:border-yellow-400/50",
    cText: "text-yellow-400",
    cTextHover: "group-hover:text-yellow-400",
    cShadow: "group-hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]",
    cTagBg: "group-hover:bg-yellow-500/10",
    cTagBorder: "group-hover:border-yellow-500/20",
    cConic: "from_0deg,transparent_75%,#facc15_85%,#ca8a04_100%"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-[1400px] mx-auto relative z-10 border-t border-white/5">
      
      {/* HEADER SECTION */}
      <div className="mb-20 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-6"
        >
          <Layers className="w-3.5 h-3.5 text-cyan-500" />
          CORE CAPABILITIES
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6"
        >
          Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">Scale</span>
        </motion.h2>
        
        <motion.p
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
           className="text-slate-400 text-lg md:text-xl font-medium"
        >
          Enterprise-grade solutions built on modern architecture.
        </motion.p>
      </div>

      {/* BENTO GRID MODULES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {servicesData.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-full w-full rounded-[24px] p-[1px] overflow-hidden"
          >
            {/* 1. Underlying RGB Moving Border Gradient (Revealed on Hover) */}
            <div className="absolute inset-0 rounded-[24px] bg-white/[0.03] group-hover:bg-transparent transition-colors duration-500 z-0" />
            
            {/* Spinning RGB Gradient Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none" />

            {/* 2. Inner Card Body */}
            <div className={`relative z-10 w-full h-full bg-[#0A0A0E] rounded-[23px] flex flex-col overflow-hidden transition-all duration-500 gpu`}>
              
              {/* TOP: Animation Window Container */}
              <div className="h-[180px] sm:h-[220px] bg-[#0A0A0E] border-b border-white/5 relative flex justify-center items-center overflow-hidden">
                 {/* Faint dot grid background */}
                 <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:16px_16px] opacity-20 pointer-events-none" />
                 
                 {/* Dynamic Animation */}
                 {service.anim}
              </div>

              {/* BOTTOM: Text and Info */}
              <div className="p-8 flex flex-col flex-1 relative bg-[#0A0A0E]">
                <div className="flex justify-between items-start mb-6 w-full">
                  <div className={`p-3 rounded-xl border border-white/10 ${service.cBorder} transition-colors duration-500 ${service.cText} bg-black/50 ${service.cBg} ${service.cShadow}`}>
                    {service.icon}
                  </div>
                  <div className={`font-mono text-[10px] font-bold text-slate-600 ${service.cTextHover} transition-colors tracking-widest`}>{service.id}</div>
                </div>
                
                <h3 className={`text-2xl font-display font-bold text-white mb-3 ${service.cTextHover} transition-colors duration-300`}>{service.title}</h3>
                <p className="text-[13px] text-slate-400 leading-relaxed mb-10 flex-1 group-hover:text-slate-300 transition-colors font-medium max-w-[90%]">{service.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                   {service.tags.map(tag => (
                     <span key={tag} className={`uppercase text-[9px] font-bold font-mono tracking-widest text-slate-400 border border-white/10 bg-white/[0.02] px-3 py-1.5 rounded-md ${service.cTagBg} ${service.cTagBorder} ${service.cTextHover} transition-colors duration-500`}>
                       {tag}
                     </span>
                   ))}
                </div>

                <button 
                  onClick={() => window.dispatchEvent(new Event('open-whatsapp-chat'))}
                  className={`mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold font-mono tracking-[0.2em] text-slate-500 ${service.cTextHover} transition-colors duration-300 cursor-pointer w-full text-left`}
                >
                   EXPLORE
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
