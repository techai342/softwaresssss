import { motion } from 'motion/react';
import { Quote, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CEO, TechFlow Solutions",
    content: "Working with Saqib Visuals transformed our digital presence. Their attention to technical detail and creative flair is unmatched in the industry.",
    image: "https://picsum.photos/seed/user1/100/100",
    rating: 5,
    tag: "WEB ECOSYSTEM"
  },
  {
    name: "Sarah Jenkins",
    role: "Director of Marketing, GreenLens",
    content: "The automation tools they built for us saved hundreds of hours. It's rare to find an agency that truly understands both design and high-level engineering.",
    image: "https://picsum.photos/seed/user2/100/100",
    rating: 5,
    tag: "AI AUTOMATION"
  },
  {
    name: "David Chen",
    role: "Founder, Peak Commerce",
    content: "From the first discovery call to the final launch, the process was seamless. Our conversion rates increased by 40% within the first month.",
    image: "https://picsum.photos/seed/user3/100/100",
    rating: 5,
    tag: "DIGITAL GROWTH"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-6"
            >
              <Quote className="w-3 h-3" /> CLIENT SUCCESS
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-none"
            >
              Voices of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Excellence</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="flex items-center gap-6 bg-white/[0.03] border border-white/10 p-6 rounded-[28px] backdrop-blur-xl"
          >
             <div className="flex -space-x-3">
               <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">AT</div>
               <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">SJ</div>
               <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">DC</div>
               <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">SK</div>
               <div className="w-10 h-10 rounded-full border-2 border-[#050508] bg-cyan-500 flex items-center justify-center text-[10px] font-black text-black">+120</div>
             </div>
             <div>
               <div className="flex gap-0.5 mb-1">
                 {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
               </div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Trusted Rating</p>
             </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "backOut" }}
              className="group relative p-8 rounded-3xl bg-[#0A0A0E] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2 gpu shadow-2xl"
            >
              <div className="absolute top-8 right-8 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 inline-block bg-white/[0.03] border border-white/5 px-3 py-1 rounded-md text-[9px] font-black text-slate-500 tracking-[0.2em] group-hover:text-emerald-400 transition-colors">
                  {t.tag}
                </div>
                
                <p className="text-slate-300 text-lg font-medium leading-relaxed italic mb-10 min-h-[120px]">
                  &quot;{t.content}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 bg-slate-800 text-slate-300 font-bold text-lg">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide">{t.name}</h4>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black leading-none mt-1.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic CTA Strip */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="mt-20 p-8 sm:p-12 rounded-[40px] bg-gradient-to-r from-emerald-600 to-teal-700 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
        >
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1000/1000')] opacity-5 mix-blend-overlay" />
          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 leading-tight">Ready to join our success story?</h3>
            <p className="text-emerald-100/70 font-medium">Book a discovery call and let&apos;s build your vision together.</p>
          </div>
          <motion.div 
             whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
             onClick={() => window.dispatchEvent(new Event('open-whatsapp-chat'))}
             className="relative z-10 bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 cursor-pointer shadow-2xl hover:bg-emerald-50 transition-colors"
          >
             Get Started Now <ArrowRight size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
