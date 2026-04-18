'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projectsData = [
  {
    id: 'openbazaar',
    title: 'OpenBazaar',
    tag: 'E-COMMERCE',
    url: 'https://openbazaar.vercel.app/#/',
    thumbnail: 'https://picsum.photos/seed/openbazaar/800/600',
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
    thumbnail: 'https://picsum.photos/seed/foodone/800/600',
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
    thumbnail: 'https://picsum.photos/seed/uniquedigital/800/600',
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
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  return (
    <section id="work" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              onClick={() => window.open(project.url, '_blank')}
              className="group cursor-pointer relative p-[1px] rounded-[17px] shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Spinning RGB Gradient Border */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0" />
              
              <div className="relative z-10 flex flex-col bg-[#0a0a0f] rounded-2xl overflow-hidden h-full">
                {/* Image Thumbnail for Live Preview (More reliable on Vercel) */}
                <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden rounded-t-2xl group/img">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/img:scale-110 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                      <ExternalLink className="w-6 h-6" />
                    </div>
                  </div>
                </div>

              {/* Card Footer Detail */}
              <div className="p-6 bg-[#0e0e14] border-t border-white/5 flex-grow flex justify-between items-center group-hover:bg-[#12121a] transition-colors">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block text-[11px] font-bold text-slate-400 tracking-widest uppercase border border-white/10 rounded-full px-3 py-1">
                    {project.tag}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all text-slate-400 group-hover:text-cyan-400">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
