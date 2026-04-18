'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Monitor, Layout, Network, Server, Database, 
  Code, Shield, Globe, Box, Cpu, Play, Pause, ChevronLeft, ChevronRight, Zap
} from 'lucide-react';
import Image from 'next/image';

export enum ArchLayer {
  CLIENT = 'CLIENT',
  FRONTEND = 'FRONTEND',
  API_GATEWAY = 'API_GATEWAY',
  BACKEND = 'BACKEND',
  DATABASE = 'DATABASE'
}

const layerDetails = {
  [ArchLayer.CLIENT]: {
    title: 'User Device',
    platform: 'Cross-Platform',
    desc: 'The entry point for all users. We optimize for high-performance rendering on Chrome, Safari, and Mobile WebView engines, ensuring < 1s Time-to-Interactive.',
    techs: ['Browser Engine', 'Swift/Kotlin', 'WebView', 'Edge Cache']
  },
  [ArchLayer.FRONTEND]: {
    title: 'Frontend SPA',
    platform: 'React Runtime',
    desc: 'Single Page Application layer built with Next.js and optimized for global CDN delivery. Utilizes Server-Side Rendering (SSR) for SEO and static generation for speed.',
    techs: ['React 19', 'Next.js', 'Tailwind v4', 'Motion']
  },
  [ArchLayer.API_GATEWAY]: {
    title: 'API Gateway',
    platform: 'Cloud Edge',
    desc: 'The security perimeter. Handles SSL termination, JWT authentication, and global load balancing before traffic hits our microservices.',
    techs: ['Rate Limiting', 'CORS Policy', 'Authentication', 'Logging']
  },
  [ArchLayer.BACKEND]: {
    title: 'Backend Cluster',
    platform: 'Distributed Nodes',
    desc: 'Scalable Node.js or Python microservices handling core business logic, webhooks, and complex computations in a stateless environment.',
    techs: ['Microservices', 'Event Bus', 'State Management', 'Express/FastAPI']
  },
  [ArchLayer.DATABASE]: {
    title: 'Database Layer',
    platform: 'Persistent Storage',
    desc: 'Highly available data layer with primary-replica architecture. Optimized for high-throughput reads and ACID-compliant transactional integrity.',
    techs: ['PostgreSQL', 'Redis Cache', 'Read Replicas', 'Backup Sync']
  }
};

const ArchitectureDiagram = ({ activeLayer, onLayerSelect }: { activeLayer: ArchLayer, onLayerSelect: (layer: ArchLayer) => void }) => {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const targetWidth = 1150; 
        const targetHeight = 650; 
        const padding = 40;
        const scaleW = (width - padding) / targetWidth;
        const scaleH = (height - padding) / targetHeight;
        setScale(Math.min(scaleW, scaleH, 1.1));
      }
    };

    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    
    updateScale();
    return () => observer.disconnect();
  }, []);

  const isActive = (layer: ArchLayer) => activeLayer === layer;
  
  const getBorderColor = (layer: ArchLayer, color: string) => 
    isActive(layer) 
      ? `border-${color}-400 ring-4 ring-${color}-400/20 shadow-[0_0_40px_rgba(34,211,238,0.2)]` 
      : 'border-white/10 hover:border-white/30';
  
  const getBgColor = (layer: ArchLayer) => isActive(layer) ? 'bg-[#12121A]' : 'bg-[#0A0A0E]/80';

  return (
    <div ref={containerRef} className="relative w-full h-[650px] flex items-center justify-center bg-[#050508] p-4 overflow-hidden rounded-[32px] border border-white/5">
      
      {/* Background Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>

      <div 
        className="relative w-[1100px] h-[600px] select-none transition-transform duration-700 ease-[0.16,1,0.3,1] origin-center block"
        style={{ transform: `scale(${scale})` }}
      >
        
        {/* SVG Database Lines & Animations */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#1e293b" />
            </marker>
          </defs>

          {/* User to Frontend */}
          <path d="M 220 320 L 220 220" stroke="#1e293b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          {isActive(ArchLayer.CLIENT) && <path d="M 220 320 L 220 220" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" fill="none" />}

          {/* Frontend to Gateway */}
          <path d="M 370 130 C 450 130, 450 260, 500 260" stroke="#1e293b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          {isActive(ArchLayer.FRONTEND) && (
            <>
             <path d="M 370 130 C 450 130, 450 260, 500 260" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" fill="none" />
             <text x="400" y="180" fill="#3b82f6" fontSize="10" fontFamily="monospace" className="font-bold">HTTP/JSON</text>
            </>
          )}

          {/* Gateway to Backend */}
          <path d="M 660 260 L 700 260" stroke="#1e293b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          {isActive(ArchLayer.API_GATEWAY) && <path d="M 660 260 L 700 260" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" fill="none" />}

          {/* Backend to Database */}
          <path d="M 875 420 L 875 460" stroke="#1e293b" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
          {isActive(ArchLayer.BACKEND) && (
             <>
              <path d="M 875 420 L 875 460" stroke="#eab308" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" fill="none" />
              <text x="885" y="450" fill="#eab308" fontSize="10" fontFamily="monospace" className="font-bold">TCP/SQL</text>
             </>
          )}
        </svg>

        {/* 1. FRONTEND BOX */}
        <div 
          onClick={() => onLayerSelect(ArchLayer.FRONTEND)}
          className={`absolute top-[40px] left-[50px] w-[320px] p-5 rounded-2xl border-2 transition-all duration-500 cursor-pointer z-10 flex flex-col gap-3 group backdrop-blur-md ${getBorderColor(ArchLayer.FRONTEND, 'blue')} ${getBgColor(ArchLayer.FRONTEND)}`}
        >
          <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg tracking-widest uppercase">Browser Runtime</div>
          <div className="flex items-center gap-4 border-b border-white/5 pb-3">
            <Layout size={24} className="text-blue-400 group-hover:scale-110 transition-transform duration-500" />
            <div>
               <h3 className="font-bold text-white tracking-widest text-sm m-0">FRONTEND SPA</h3>
               <p className="text-[10px] text-slate-500 font-mono tracking-tight m-0">React / Next.js / Vercel</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-1">
            <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5 text-center group-hover:bg-white/[0.05] transition-colors">
              <Code size={14} className="mx-auto text-orange-400 mb-1.5"/>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Components</span>
            </div>
            <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5 text-center group-hover:bg-white/[0.05] transition-colors">
              <Globe size={14} className="mx-auto text-cyan-300 mb-1.5"/>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Routing</span>
            </div>
          </div>
          <div className="mt-2 bg-blue-500/10 border border-blue-500/20 py-2 rounded-lg text-center flex items-center justify-center gap-2">
            <Search size={12} className="text-blue-400"/>
            <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest">View Architecture Blueprint</span>
          </div>
        </div>

        {/* 2. USER DEVICE BOX */}
        <div 
          onClick={() => onLayerSelect(ArchLayer.CLIENT)}
          className={`absolute top-[320px] left-[120px] w-[220px] p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer z-10 flex flex-col items-center gap-3 backdrop-blur-md ${getBorderColor(ArchLayer.CLIENT, 'pink')} ${getBgColor(ArchLayer.CLIENT)}`}
        >
          <div className="p-4 bg-pink-500/10 rounded-2xl text-pink-400 ring-1 ring-pink-500/30">
             <Monitor size={36} />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-white tracking-widest text-sm m-0">USER DEVICE</h3>
            <p className="text-[10px] text-slate-500 mt-1 font-mono m-0">Browser / Mobile App</p>
          </div>
        </div>

        {/* 3. API GATEWAY BOX */}
        <div 
          onClick={() => onLayerSelect(ArchLayer.API_GATEWAY)}
          className={`absolute top-[180px] left-[500px] w-[180px] h-[180px] rounded-full border-4 transition-all duration-700 bg-[#0A0A0E] flex flex-col items-center justify-center text-center cursor-pointer z-20 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${getBorderColor(ArchLayer.API_GATEWAY, 'purple')}`}
        >
          <div className="absolute inset-0 rounded-full border border-white/5 scale-110 opacity-30 animate-pulse pointer-events-none"></div>
          <Network size={40} className="text-purple-400 mb-3" />
          <h3 className="font-bold text-white tracking-widest text-sm leading-tight m-0">API<br/>GATEWAY</h3>
          <span className="text-[9px] text-purple-400/80 mt-2 uppercase tracking-[0.2em] font-black">Firewall</span>
        </div>

        {/* 4. BACKEND CLUSTER BOX */}
        <div 
          onClick={() => onLayerSelect(ArchLayer.BACKEND)}
          className={`absolute top-[40px] right-[50px] w-[350px] h-[400px] p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer z-10 flex flex-col backdrop-blur-md ${getBorderColor(ArchLayer.BACKEND, 'yellow')} ${getBgColor(ArchLayer.BACKEND)}`}
        >
          <div className="absolute -top-3 left-6 bg-yellow-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg tracking-widest uppercase">Server Side</div>
          <div className="flex items-center gap-4 border-b border-white/5 pb-4 mb-5">
            <Server size={28} className="text-yellow-400" />
            <div>
                <h3 className="font-bold text-white tracking-widest text-sm m-0">BACKEND CLUSTER</h3>
                <p className="text-[10px] text-slate-500 font-mono m-0">Node.js / Python Runtime</p>
            </div>
          </div>
          
          <div className="space-y-4 flex-1 relative">
            <div className="absolute left-5 top-4 bottom-4 w-[1px] bg-white/10"></div>

            <div className="ml-10 bg-white/[0.03] p-3.5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-all duration-300">
              <Shield size={20} className="text-red-400" />
              <div>
                <h4 className="text-xs text-white font-bold tracking-wide m-0">Auth Service</h4>
                <p className="text-[10px] text-slate-500 leading-none mt-1 m-0">JWT & Session Validation</p>
              </div>
            </div>

            <div className="ml-10 bg-white/[0.03] p-3.5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-all duration-300">
              <Cpu size={20} className="text-green-400" />
              <div>
                <h4 className="text-xs text-white font-bold tracking-wide m-0">Business Logic</h4>
                <p className="text-[10px] text-slate-500 leading-none mt-1 m-0">Controllers & Data Logic</p>
              </div>
            </div>

            <div className="ml-10 bg-white/[0.03] p-3.5 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-all duration-300">
              <Box size={20} className="text-blue-400" />
              <div>
                <h4 className="text-xs text-white font-bold tracking-wide m-0">ORM / DAL</h4>
                <p className="text-[10px] text-slate-500 leading-none mt-1 m-0">Data Access Abstraction</p>
              </div>
            </div>
          </div>
        </div>

        {/* CACHE BOX (Sidecar) */}
        <div className="absolute top-[340px] right-[50px] translate-x-[20%] w-[130px] p-3 bg-[#0A0A0E] border border-white/10 rounded-xl z-0 opacity-60 shadow-2xl">
           <div className="text-center">
             <span className="text-[9px] font-black text-slate-400 block mb-2 uppercase tracking-widest">REDIS CACHE</span>
             <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
               <motion.div 
                 animate={{ width: ['30%', '80%', '40%'] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
               />
             </div>
           </div>
        </div>

        {/* 5. DATABASE BOX */}
        <div 
          onClick={() => onLayerSelect(ArchLayer.DATABASE)}
          className={`absolute top-[480px] right-[100px] w-[300px] h-[100px] rounded-[50px] border-2 transition-all duration-500 overflow-hidden cursor-pointer z-10 flex items-center justify-center gap-5 backdrop-blur-md ${getBorderColor(ArchLayer.DATABASE, 'green')} ${getBgColor(ArchLayer.DATABASE)}`}
        >
           <Database size={36} className="text-green-400 animate-pulse" />
           <div className="text-left">
             <h3 className="font-bold text-white tracking-widest text-sm m-0 uppercase">DATABASE</h3>
             <div className="flex gap-2 mt-2">
                 <span className="text-[9px] font-bold bg-green-500/10 text-green-400 px-2.5 py-1 rounded-full border border-green-500/20 uppercase tracking-widest">Primary</span>
                 <span className="text-[9px] font-bold bg-white/5 text-slate-500 px-2.5 py-1 rounded-full border border-white/5 uppercase tracking-widest">Replica</span>
             </div>
           </div>
           {/* Visual Stack Effect */}
           <div className="absolute top-0 left-0 right-0 h-full border-t-[8px] border-black/30 rounded-t-[50px] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export function SystemArchitecture() {
  const [activeLayer, setActiveLayer] = useState<ArchLayer>(ArchLayer.FRONTEND);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const layers = Object.values(ArchLayer);
    const interval = setInterval(() => {
      setActiveLayer(prev => {
        const index = layers.indexOf(prev);
        return layers[(index + 1) % layers.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section id="architecture" className="py-24 px-6 max-w-[1400px] mx-auto relative z-10">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[2px] w-8 bg-cyan-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Advanced Infrastructure</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight"
          >
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">Architecture</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg mt-6 leading-relaxed"
          >
            Interactive technical blueprint of our distributed ecosystem. Hover over components to explore the flow of data across our stack.
          </motion.p>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-500 ${
              isAutoPlay ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]' : 'bg-white/5 text-slate-400 border border-white/10'
            }`}
          >
            {isAutoPlay ? <Pause size={14} /> : <Play size={14} />}
            {isAutoPlay ? 'Auto-Flow Active' : 'Enable Auto-Flow'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Left Side: Layer Details (1/4) */}
        <div className="xl:col-span-1 space-y-6 order-2 xl:order-1">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeLayer}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-[#0A0A0E] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden gpu"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-500" />
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] font-mono">Component Insight</span>
                <Zap size={16} className="text-yellow-500" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">{layerDetails[activeLayer].title}</h3>
              <p className="text-fuchsia-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">{layerDetails[activeLayer].platform}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">
                {layerDetails[activeLayer].desc}
              </p>

              <div className="space-y-3">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Core Technology Stack</h4>
                {layerDetails[activeLayer].techs.map((tech) => (
                  <div key={tech} className="flex items-center gap-3 py-2 border-b border-white/[0.03] group">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform duration-300" />
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center gap-2 mt-12">
                {Object.values(ArchLayer).map((layer) => (
                  <button 
                    key={layer}
                    onClick={() => {
                      setActiveLayer(layer);
                      setIsAutoPlay(false);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeLayer === layer ? 'w-8 bg-cyan-500' : 'w-2 bg-white/10 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="bg-gradient-to-br from-[#12121A] to-[#0A0A0E] border border-white/5 rounded-2xl p-6 flex items-center gap-5 gpu">
            <div className="w-12 h-12 bg-black rounded-xl border border-white/10 flex items-center justify-center">
              <Shield className="text-cyan-500 w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1.5">Security Protocol</p>
              <p className="text-xs text-slate-300 font-medium whitespace-nowrap">End-to-End Encryption</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Diagram (3/4) */}
        <div className="xl:col-span-3 order-1 xl:order-2">
          <ArchitectureDiagram activeLayer={activeLayer} onLayerSelect={(l) => {
            setActiveLayer(l);
            setIsAutoPlay(false);
          }} />
        </div>
      </div>
    </section>
  );
}

const Search = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
);
