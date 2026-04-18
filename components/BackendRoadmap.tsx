'use client';

import { motion } from 'motion/react';
import { 
  Server, 
  Globe, 
  Terminal, 
  Database, 
  Link as LinkIcon, 
  ShieldCheck, 
  Cloud, 
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';

const roadmapData = [
  {
    category: "Languages",
    color: "from-rose-500 to-rose-600",
    icon: <Terminal className="w-5 h-5" />,
    items: ["Rust", "Go", "Python", "Node.js", "C++"],
    position: "top-left"
  },
  {
    category: "Databases",
    color: "from-fuchsia-500 to-fuchsia-600",
    icon: <Database className="w-5 h-5" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Elastic"],
    position: "bottom-left"
  },
  {
    category: "APIs & Services",
    color: "from-cyan-500 to-cyan-600",
    icon: <LinkIcon className="w-5 h-5" />,
    items: ["gRPC", "GraphQL", "WebSockets", "REST"],
    position: "top-right"
  },
  {
    category: "Infrastructure",
    color: "from-emerald-500 to-emerald-600",
    icon: <Cloud className="w-5 h-5" />,
    items: ["Docker", "K8s", "Terraform", "CI/CD"],
    position: "bottom-right"
  }
];

export function BackendRoadmap() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6"
          >
            <Server className="w-3 h-3" /> BACKEND ARCHITECTURE
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-8"
          >
            How We Build <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">The Backend.</span>
          </motion.h2>
        </div>

        {/* The Visual Roadmap Grid */}
        <div className="relative p-8 md:p-12 rounded-[50px] bg-[#0A0A0E] border border-white/5 overflow-hidden">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              animate={{ 
                boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 40px rgba(16,185,129,0.4)", "0 0 20px rgba(16,185,129,0.2)"]
              }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-emerald-500 flex items-center justify-center text-black shadow-2xl relative"
            >
              <Cpu className="w-10 h-10 md:w-14 md:h-14 animate-pulse" />
              <div className="absolute -bottom-8 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Core Engine</div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 min-h-[600px] relative z-10">
            {roadmapData.map((section, idx) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-lg`}>
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">{section.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:border-white/30 transition-all cursor-default"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* SVG Dotted Lines - Decorative Connectors */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block">
            <path d="M 50% 50% L 20% 20%" className="stroke-white stroke-[2]" strokeDasharray="8 8" />
            <path d="M 50% 50% L 80% 20%" className="stroke-white stroke-[2]" strokeDasharray="8 8" />
            <path d="M 50% 50% L 20% 80%" className="stroke-white stroke-[2]" strokeDasharray="8 8" />
            <path d="M 50% 50% L 80% 80%" className="stroke-white stroke-[2]" strokeDasharray="8 8" />
          </svg>
        </div>

        {/* Bottom Detailed Tool Breakdown */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
           {[
             { name: "PostgreSQL", category: "SQL" },
             { name: "Redis", category: "Caching" },
             { name: "Docker", category: "Ops" },
             { name: "GraphQL", category: "API" },
             { name: "GitHub Actions", category: "CI" },
             { name: "Terraform", category: "IaC" }
           ].map((tool, i) => (
             <motion.div 
               key={tool.name}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 * i }}
               className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center group hover:bg-white/[0.04] transition-all"
             >
               <span className="text-white font-bold text-xs mb-1 group-hover:text-emerald-400 transition-colors">{tool.name}</span>
               <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">{tool.category}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
