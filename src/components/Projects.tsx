import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, X, Maximize2 } from 'lucide-react';

const projectsData = [
  {
    id: 'openbazaar',
    title: 'OpenBazaar',
    tag: 'E-COMMERCE',
    url: 'https://openbazaar.vercel.app/#/',
    challenge: 'Traditional e-commerce platforms take huge cuts and limit seller control. The goal was to build a highly responsive marketplace that empowers sellers with total autonomy and fast transactions.',
    solution: 'We engineered a high-performance storefront using modern web technologies, ensuring lightning-fast load times, seamless checkout flows, and a totally immersive shopping experience.',
    features: [
      'Advanced Product Browsing',
      'Secure Checkout Flow',
      'Real-time State Management',
      'Optimized Cart Logic'
    ]
  },
  {
    id: 'foodone',
    title: 'Food One',
    tag: 'FOOD TECH',
    url: 'https://food-one-jade.vercel.app/#/',
    challenge: 'Users faced clunky interfaces and slow menu interactions on traditional local restaurant websites. The goal was to build a hyper-fast, stylized food ordering interface.',
    solution: 'Developed a high-performance ordering system with an intuitive UI. Features smooth menu navigation, dynamic category switching, and zero-latency user interactions.',
    features: [
      'Fluid Animations & Transitions',
      'Zero-latency Interfaces',
      'Dynamic Menu Filtering',
      'Responsive Mobile UI'
    ]
  },
  {
    id: 'uniqedigital',
    title: 'Unique Digital',
    tag: 'DIGITAL AGENCY',
    url: 'https://uniqe-digital.vercel.app/',
    challenge: 'The agency needed a digital storefront that wasn\'t just a static brochure, but a highly interactive, animated experience demonstrating their technical dominance.',
    solution: 'Built a visually stunning landing experience using advanced styling, dynamic layouts, scroll-linked animations, and rigorous performance optimizations.',
    features: [
      'High-Performance Animations',
      'Conversion-Optimized Flow',
      'Interactive UI Elements',
      'Dark-Mode Focused Design'
    ]
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <section id="work" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl">
              A showcase of high-performance applications engineered for scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group cursor-pointer relative p-[1px] rounded-[17px] shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0" />
                
                <div className="relative z-10 flex flex-col bg-[#0a0a0f] rounded-2xl overflow-hidden h-full">
                  <div className="relative w-full aspect-[4/3] bg-black overflow-hidden rounded-t-2xl group/img">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-[#121218] border-b border-white/5">
                       <div className="w-2 h-2 rounded-full bg-red-500/50" />
                       <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                       <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f]">
                      <div className="text-center p-4">
                        <div className="text-cyan-500 font-mono text-[10px] mb-1 tracking-widest uppercase opacity-70">Click to Preview</div>
                        <div className="text-white font-bold text-sm tracking-tight">{project.title}</div>
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 backdrop-blur-sm"
                    >
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[#0e0e14] border-t border-white/5 flex-grow flex justify-between items-center group-hover:bg-[#12121a] transition-colors">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="inline-block text-[11px] font-bold text-slate-400 tracking-widest uppercase border border-white/10 rounded-full px-3 py-1">
                        {project.tag}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.url, '_blank');
                        }}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all text-slate-400 hover:text-cyan-400"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all text-slate-400 group-hover:text-cyan-400"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className={`relative bg-[#0a0a0f] rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${
                isFullscreen ? 'w-full h-full' : 'w-full max-w-6xl h-[80vh]'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#121218] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-white text-sm font-medium ml-2">{selectedProject.title}</span>
                  <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">{selectedProject.tag}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => window.open(selectedProject.url, '_blank')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe Preview */}
              <div className="relative w-full h-[calc(100%-52px)] bg-white">
                <iframe
                  src={selectedProject.url}
                  className="w-full h-full border-0"
                  title={`${selectedProject.title} Preview`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                  loading="lazy"
                />
                
                {/* Loading Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0f] pointer-events-none">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-3"></div>
                    <p className="text-slate-400 text-sm">Loading {selectedProject.title}...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
