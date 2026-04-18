import { motion } from 'motion/react';
import { BarChart3, ShoppingCart, Users, Search } from 'lucide-react';

const TypewriterLine = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ clipPath: 'inset(0 100% 0 0)' }}
    whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
    viewport={{ once: true, margin: "-20%" }}                
    transition={{ delay, duration: 0.6, ease: "linear" }}
    className="whitespace-nowrap"
  >
    {children}
  </motion.div>
);

const WidgetCard = ({ title, metric, change, delay }: { title: string, metric: string, change: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    className="bg-[#14141A] border border-white/5 p-4 rounded-xl hover:bg-white/[0.02] hover:border-white/10 transition-colors"
  >
    <div className="text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-widest">{title}</div>
    <div className="text-2xl font-bold text-white mb-2">{metric}</div>
    <div className="text-xs text-emerald-400">{change}</div>
  </motion.div>
);

export function HowWeBuild() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6"
        >
          How We <motion.span animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} style={{ backgroundSize: "200% auto" }} className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500">Build</motion.span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto"
        >
          Watch your vision come to life. We write clean code that instantly transforms into powerful, responsive interfaces.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="relative p-[1px] group shadow-[0_30px_60px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden"
      >
        {/* Spinning RGB Gradient Border */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row bg-[#0A0A0E] rounded-[23px] overflow-hidden w-full h-full">
        {/* Split Left: Code Editor Component */}
        <div className="lg:w-[45%] flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
          <div className="bg-[#121218] flex items-center px-4 py-3 gap-2 border-b border-white/5 relative z-10">
             <div className="w-3 h-3 rounded-full bg-red-500/80" />
             <div className="w-3 h-3 rounded-full bg-amber-500/80" />
             <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="p-8 pt-6 overflow-x-auto text-sm font-mono leading-7 whitespace-nowrap relative z-10 min-h-[350px]">
            <TypewriterLine delay={0.2}>
               <div><span className="text-fuchsia-500">const</span> <span className="text-amber-300">AnalyticsDB</span> = () <span className="text-fuchsia-500">=&gt;</span> {'{'}</div>
            </TypewriterLine>
            <TypewriterLine delay={0.5}>
               <div className="pl-6"><span className="text-fuchsia-500">return</span> (</div>
            </TypewriterLine>
            <TypewriterLine delay={0.8}>
               <div className="pl-12 text-slate-400">&lt;<span className="text-blue-400">Layout</span>&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={1.1}>
               <div className="pl-16 text-slate-400">&lt;<span className="text-blue-400">Sidebar</span> <span className="text-cyan-300">menu</span>=<span className="text-green-300">&apos;Analytics&apos;</span> /&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={1.4}>
               <div className="pl-16 text-slate-400">&lt;<span className="text-blue-400">Header</span> <span className="text-cyan-300">user</span>=<span className="text-green-300">&apos;Muhammad Saqib&apos;</span> /&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={1.7}>
               <div className="pl-16 text-slate-400">&lt;<span className="text-blue-400">Grid</span>&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={2.0}>
               <div className="pl-20 text-slate-400">&lt;<span className="text-blue-400">StatCard</span> <span className="text-cyan-300">type</span>=<span className="text-green-300">&apos;Revenue&apos;</span> /&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={2.3}>
               <div className="pl-20 text-slate-400">&lt;<span className="text-blue-400">StatCard</span> <span className="text-cyan-300">type</span>=<span className="text-green-300">&apos;Users&apos;</span> /&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={2.6}>
               <div className="pl-16 text-slate-400">&lt;/<span className="text-blue-400">Grid</span>&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={2.9}>
               <div className="pl-12 text-slate-400">&lt;/<span className="text-blue-400">Layout</span>&gt;</div>
            </TypewriterLine>
            <TypewriterLine delay={3.2}>
               <div className="pl-6">);</div>
            </TypewriterLine>
            <TypewriterLine delay={3.5}>
               <div>{'}'};</div>
            </TypewriterLine>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: [0, 1, 0] }} viewport={{ once: true }} transition={{ repeat: Infinity, duration: 0.8, delay: 3.8 }} 
              className="w-2.5 h-[18px] bg-amber-400 mt-2" 
            />
          </div>

          <div className="mt-auto bg-[#1a1a24] border-t border-white/5 py-2 px-4 flex justify-between text-xs text-slate-500 font-mono relative z-10">
             <span className="text-cyan-400">Mode: Analytics</span>
             <span>Ln 15, Col 12</span>
          </div>
        </div>

        {/* Split Right: App Preview Output */}
        <div className="lg:w-[55%] bg-[#0A0A0E] flex flex-col md:flex-row relative">
          <div className="w-full md:w-48 border-r border-white/5 p-6 space-y-6 relative z-10 bg-black/20">
            <motion.div 
               initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1, duration: 0.5 }}
               className="flex items-center gap-2 font-bold text-white mb-8"
            >
              <div className="w-6 h-6 rounded bg-cyan-400 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-black" />
              </div>
              Analytic<span className="text-cyan-400">Dash</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 p-2.5 rounded-lg text-sm font-medium cursor-pointer">
                <BarChart3 className="w-4 h-4" /> Analytics
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 p-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                <ShoppingCart className="w-4 h-4" /> eCommerce
              </div>
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-200 p-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer">
                <Users className="w-4 h-4" /> CRM
              </div>
            </motion.div>
          </div>

          <div className="flex-1 p-6 flex flex-col relative bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]">
            <div className="flex items-center justify-between mb-8">
              <motion.div initial={{ opacity: 0, width: 50 }} whileInView={{ opacity: 1, width: "auto" }} viewport={{ once: true }} transition={{ delay: 1.4, duration: 0.6 }} className="relative flex-1 max-w-[250px]">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search..." className="bg-white/5 border border-white/5 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none w-full" disabled />
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.6 }} className="bg-white/5 p-2 rounded-full relative border border-white/5 ml-4">
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500" />
                <Search className="w-4 h-4 text-slate-400" />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <WidgetCard title="Revenue" metric="$42.5k" change="+18% vs last month" delay={2.1} />
              <WidgetCard title="Users" metric="97.5k" change="+12% New" delay={2.4} />
              <WidgetCard title="Traffic" metric="850k" change="+5% Organic" delay={2.7} />
            </div>

      // Replace lines 165-182 with this:

            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               animate={{ opacity: 1, y: 0 }} // "whileInView" ki jagah "animate" use karein
               transition={{ delay: 3.5, duration: 0.6 }}
               className="mt-auto pt-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {/* Image ko CSS Gradient se replace kar diya taaki faltoo image na ho */}
                <div className="w-8 h-8 rounded-full bg-cyan-900 border border-cyan-500/50 flex items-center justify-center font-bold text-xs text-cyan-400">MS</div>
                <div>
                  <div className="text-xs font-bold text-white">Muhammad Saqib</div>
                  <div className="text-[10px] text-cyan-400 uppercase tracking-widest">CEO - Automation</div>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full flex items-center gap-2">
                <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-emerald-400 uppercase tracking-widest font-mono">Compiling: Analytics</span>
              </div>
            </motion.div>
            
            {/* Simulation of Growth Graph - Forceful Animation */}
            <motion.div 
               initial={{ opacity: 0, x: 20 }} 
               animate={{ opacity: 1, x: 0 }} // "whileInView" ki jagah "animate" use karein
               transition={{ delay: 3.8, duration: 0.6 }}
               className="absolute right-6 bottom-32 bg-[#14141A] p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-widest">GROWTH</div>
              <div className="text-xl font-bold text-white mb-2">+145%</div>
              <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ delay: 4.5, duration: 1 }} className="h-full bg-emerald-500" />
              </div>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 3.8, duration: 0.6 }}
               className="absolute right-6 bottom-32 bg-[#14141A] p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="text-[10px] uppercase font-bold text-slate-500 mb-1 tracking-widest">GROWTH</div>
              <div className="text-xl font-bold text-white mb-2">+145%</div>
              <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} viewport={{ once: true }} transition={{ delay: 4.5, duration: 1 }} className="h-full bg-emerald-500" />
              </div>
            </motion.div>
          </div>
        </div>
        </div>
      </motion.div>
    </section>
  );
}
