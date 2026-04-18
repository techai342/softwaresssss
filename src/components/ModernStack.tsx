import { motion } from 'motion/react';
import { 
  Bot, 
  Code2, 
  Cpu, 
  Globe, 
  Link as LinkIcon, 
  MessageSquare, 
  Share2, 
  Sparkles, 
  Zap,
  Terminal,
  Database,
  Layers
} from 'lucide-react';

const techNodes = [
  { id: 1, icon: <LinkIcon className="w-6 h-6" />, color: "border-indigo-500 text-indigo-400", x: 10, y: 40, label: "Connectivity" },
  { id: 2, icon: <Sparkles className="w-6 h-6" />, color: "border-cyan-500 text-cyan-400", x: 30, y: 20, label: "Gen AI" },
  { id: 3, icon: <Cpu className="w-6 h-6" />, color: "border-blue-500 text-blue-400", x: 60, y: 20, label: "Core Systems" },
  { id: 4, icon: <MessageSquare className="w-6 h-6" />, color: "border-amber-400 text-amber-300", x: 80, y: 30, label: "Conversational" },
  { id: 5, icon: <Bot className="w-6 h-6" />, color: "border-slate-300 text-slate-100", x: 30, y: 65, label: "Automation" },
  { id: 6, icon: <Share2 className="w-6 h-6" />, color: "border-rose-500 text-rose-400", x: 50, y: 45, label: "Neural Net" },
  { id: 7, icon: <Zap className="w-6 h-6" />, color: "border-emerald-500 text-emerald-400", x: 65, y: 50, label: "High Speed" },
  { id: 8, icon: <Code2 className="w-6 h-6" />, color: "border-indigo-400 text-indigo-300", x: 50, y: 75, label: "Development" },
  { id: 9, icon: <Terminal className="w-6 h-6" />, color: "border-fuchsia-500 text-fuchsia-400", x: 80, y: 75, label: "Deployment" },
];

const connections = [
  { from: 1, to: 5, color: "stroke-emerald-500/30" },
  { from: 2, to: 3, color: "stroke-cyan-500/30" },
  { from: 2, to: 5, color: "stroke-white/20" },
  { from: 3, to: 4, color: "stroke-amber-400/30" },
  { from: 3, to: 6, color: "stroke-blue-500/30" },
  { from: 6, to: 7, color: "stroke-emerald-400/30" },
  { from: 6, to: 8, color: "stroke-indigo-400/30" },
  { from: 7, to: 4, color: "stroke-rose-500/30" },
  { from: 8, to: 9, color: "stroke-fuchsia-500/30" },
];

export function ModernStack() {
  return (
    <section className="py-24 px-6 relative overflow-hidden border-t border-white/5 bg-[#050508]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-6"
          >
            <Layers className="w-3 h-3" /> MODERN TECH ECOSYSTEM
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6"
          >
            Connected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-fuchsia-500">Intelligence.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl font-medium"
          >
            We don&apos;t just write code; we architect neural ecosystems using the world&apos;s most advanced system languages and AI frameworks.
          </motion.p>
        </div>

        {/* The Ecosystem Visualization */}
        <div className="relative w-full aspect-[16/9] max-h-[700px] min-h-[400px] rounded-[40px] bg-[#0A0A0E] border border-white/5 overflow-hidden group shadow-2xl">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full" />
          
          {/* SVG Connections Layer */}
          <svg className="absolute inset-0 w-full h-full p-10 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {connections.map((conn, idx) => {
              const fromNode = techNodes.find(n => n.id === conn.from);
              const toNode = techNodes.find(n => n.id === conn.to);
              if (!fromNode || !toNode) return null;
              
              return (
                <motion.line
                  key={`line-${idx}`}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  className={`${conn.color} stroke-[0.2]`}
                  strokeDasharray="1 1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 + idx * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Nodes Layer */}
          <div className="absolute inset-0 w-full h-full p-10 z-10">
            {techNodes.map((node, idx) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ scale: 1.1 }}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group/node"
              >
                {/* Node Outer Ring (Glow) */}
                <div className={`absolute inset-0 blur-xl opacity-20 group-hover/node:opacity-50 transition-opacity rounded-full border-[8px] ${node.color}`} />
                
                {/* Node Main Circle */}
                <div className={`relative w-16 h-16 sm:w-20 sm:h-20 bg-[#0D0D12] border-2 ${node.color} rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/node:shadow-[0_0_30px_rgba(255,255,255,0.1)]`}>
                   {node.icon}
                   
                   {/* Tooltip-style Label (Mobile Friendly) */}
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover/node:opacity-100 transition-opacity text-[10px] font-black uppercase tracking-widest text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                     {node.label}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Feature Grid underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
           {[
             { title: "Neural RAG Systems", desc: "Building proprietary knowledge graphs with state-of-the-art vector memory.", icon: <Database className="w-5 h-5 text-cyan-400" /> },
             { title: "Real-time Edge Auth", desc: "Low-latency security architectures deployed at the global edge network.", icon: <Zap className="w-5 h-5 text-emerald-400" /> },
             { title: "Distributed Web-V3", desc: "Next-gen communication protocols for decentralized, high-availability apps.", icon: <Globe className="w-5 h-5 text-indigo-400" /> }
           ].map((feature, i) => (
             <motion.div 
               key={feature.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 + (i * 0.1) }}
               className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
             >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold mb-3 tracking-wide">{feature.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{feature.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
