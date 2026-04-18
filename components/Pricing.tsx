'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, CheckCircle, Zap, Code2, Smartphone, Search, Video, Share2, Palette } from 'lucide-react';

const plansData = [
  {
    id: 'web',
    title: 'Website Development',
    price: 45,
    popular: false,
    icon: <Code2 className="w-5 h-5 text-slate-400" />,
    desc: 'Custom design, development, CMS integration, and responsive builds.',
    features: [
      'Custom responsive design',
      'Mobile-first development',
      'CMS integration',
      'Performance optimization',
      'SEO-friendly structure'
    ]
  },
  {
    id: 'app',
    title: 'App Development',
    price: 65,
    popular: true,
    icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
    desc: 'Native iOS/Android or cross-platform app creation, UI/UX focus.',
    features: [
      'iOS and Android development',
      'React Native or Flutter',
      'API integration',
      'Push notifications',
      'App store deployment'
    ]
  },
  {
    id: 'seo',
    title: 'SEO Services',
    price: 35,
    popular: false,
    icon: <Search className="w-5 h-5 text-slate-400" />,
    desc: 'Keyword research, technical audits, and high-quality link building.',
    features: [
      'Keyword research & strategy',
      'Technical SEO audit',
      'Link building campaigns',
      'On-page optimization',
      'Analytics & reporting'
    ]
  },
  {
    id: 'video',
    title: 'Video Editing',
    price: 25,
    popular: false,
    icon: <Video className="w-5 h-5 text-slate-400" />,
    desc: 'Commercial editing, motion graphics, and professional color grading.',
    features: [
      'Commercial video editing',
      'Motion graphics & VFX',
      'Color grading',
      'Audio mixing & mastering',
      'Social media formatting'
    ]
  },
  {
    id: 'social',
    title: 'Social Media Mgmt',
    price: 20,
    popular: false,
    icon: <Share2 className="w-5 h-5 text-slate-400" />,
    desc: 'Content creation, scheduling, and active community engagement.',
    features: [
      'Content creation',
      'Post scheduling',
      'Community engagement',
      'Brand voice management',
      'Progress analytics'
    ]
  },
  {
    id: 'graphic',
    title: 'Graphic Designing',
    price: 15,
    popular: false,
    icon: <Palette className="w-5 h-5 text-slate-400" />,
    desc: 'Branding, logos, marketing materials, UI elements, and illustrations.',
    features: [
      'Logo design',
      'Brand identity',
      'Social media graphics',
      'UI/UX design elements',
      'Marketing collateral'
    ]
  }
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plansData[0] | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  return (
    <section id="pricing" className="py-24 relative z-10 w-full overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono tracking-widest text-slate-400 mb-6 uppercase"
          >
            Transparent Pricing
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight mb-6"
          >
            Simple and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold">Flexible</span> Plans
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Choose the service that best fits your needs. No hidden fees, just high-quality work delivered on time.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plansData.map((plan, idx) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1px] rounded-2xl group shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col gpu"
            >
              {/* Spinning RGB Gradient Border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0" />

              <div className={`relative z-10 flex flex-col h-full bg-[#0a0a0f] rounded-[15px] p-8 ${
                plan.popular 
                  ? 'shadow-[0_10px_40px_-15px_rgba(34,211,238,0.2)]' 
                  : 'shadow-xl'
              }`}>
              {/* Glow for popular card */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
              )}

              {/* Top Row: Title & Icon */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">{plan.title}</h3>
                  {plan.popular && (
                    <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400">MOST POPULAR</span>
                  )}
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${plan.popular ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-white/5 border border-white/5'}`}>
                  {plan.icon}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-black text-white">${plan.price}</span>
                <span className="text-slate-500 font-medium">/hr</span>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-8 h-[60px]">
                {plan.desc}
              </p>

              {/* Button */}
              <button 
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-4 rounded-xl font-bold text-xs tracking-[0.2em] uppercase transition-all mb-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:scale-[1.02]' 
                    : 'bg-white/[0.03] border border-white/10 text-white hover:bg-white/10'
                }`}
              >
                VIEW DETAILS
              </button>

              <div className="w-full h-px bg-white/5 mb-8" />

              {/* Feature List Preview */}
              <div className="flex-grow">
                <h4 className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase mb-4">WHAT&apos;S INCLUDED</h4>
                <ul className="space-y-4">
                  {plan.features.slice(0, 4).map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-slate-400" />
                      </div>
                      <span className="text-sm text-slate-300">{feat}</span>
                    </li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="text-xs text-slate-500 italic mt-2">+ more features</li>
                  )}
                </ul>
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isMounted && selectedPlan && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedPlan(null)}
            />
            
            {/* Modal Dialog */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#0b0c10] border border-[#1a3a40] rounded-xl shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/5 bg-[#111218]">
                 <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-wide">
                    <span className="text-cyan-400 font-mono tracking-tighter mr-1">{`< >`}</span>
                    {selectedPlan.title}
                 </div>
                 <button 
                   onClick={() => setSelectedPlan(null)} 
                   className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                 >
                   <X className="w-4 h-4"/>
                 </button>
              </div>

              {/* Modal Body */}
              <div className="p-8 bg-[#0b0c10] max-h-[60vh] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#1a3a40] [&::-webkit-scrollbar-thumb]:rounded-full">
                <p className="text-slate-300 text-[16px] leading-relaxed mb-8 pr-4">
                  {selectedPlan.desc}
                </p>
                <div className="pr-4">
                   <h4 className="flex items-center gap-2 text-[14px] font-black text-white tracking-widest uppercase mb-6 drop-shadow-md">
                     <Zap className="w-5 h-5 text-[#f012de] drop-shadow-[0_0_8px_rgba(240,18,222,0.8)]" /> WHAT&apos;S INCLUDED
                   </h4>
                   <ul className="space-y-4">
                     {selectedPlan.features.map(f => (
                        <li className="flex items-center gap-3" key={f}>
                          <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                          <span className="text-slate-300 text-[15px]">{f}</span>
                        </li>
                     ))}
                   </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-end gap-6 p-6 border-t border-white/5 bg-[#0b0c10]">
                 <button 
                   onClick={() => setSelectedPlan(null)} 
                   className="text-[13px] font-bold text-slate-500 hover:text-white tracking-widest uppercase transition-colors"
                 >
                   CLOSE
                 </button>
                 <button 
                   onClick={() => {
                     setSelectedPlan(null);
                     window.dispatchEvent(new Event('open-whatsapp-chat'));
                   }} 
                   className="bg-gradient-to-r from-cyan-400 to-[#f012de] text-black font-bold text-[13px] tracking-widest uppercase px-6 py-3 rounded hover:opacity-90 transition-opacity cursor-pointer"
                 >
                   CONTACT TO HIRE
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
