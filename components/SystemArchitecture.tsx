'use client';

import { motion } from 'motion/react';
import { Database, ShieldCheck, Workflow, Cpu, Cloud } from 'lucide-react';

const layers = [
  { title: 'Experience Layer', detail: 'Web, mobile, admin dashboards, and conversational interfaces.', icon: <Workflow className="w-5 h-5" />, tone: 'from-cyan-500/20 to-cyan-400/5 border-cyan-500/30 text-cyan-300' },
  { title: 'Intelligence Layer', detail: 'Agent orchestration, model routing, and evaluation loops.', icon: <Cpu className="w-5 h-5" />, tone: 'from-fuchsia-500/20 to-fuchsia-400/5 border-fuchsia-500/30 text-fuchsia-300' },
  { title: 'Data Layer', detail: 'Structured storage, vector memory, and retrieval pipelines.', icon: <Database className="w-5 h-5" />, tone: 'from-indigo-500/20 to-indigo-400/5 border-indigo-500/30 text-indigo-300' },
  { title: 'Security Layer', detail: 'AuthN/AuthZ, observability, policy checks, and audit trails.', icon: <ShieldCheck className="w-5 h-5" />, tone: 'from-emerald-500/20 to-emerald-400/5 border-emerald-500/30 text-emerald-300' },
  { title: 'Infrastructure Layer', detail: 'Cloud runtime, edge caching, CI/CD, and resilient deployments.', icon: <Cloud className="w-5 h-5" />, tone: 'from-amber-500/20 to-amber-400/5 border-amber-500/30 text-amber-300' },
];

export function SystemArchitecture() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-white mb-5"
        >
          System <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-500">Architecture</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-slate-400 max-w-3xl mb-12"
        >
          We design AI platforms as layered systems so performance, reliability, and safety scale together.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {layers.map((layer, i) => (
            <motion.article
              key={layer.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`rounded-2xl border p-5 bg-gradient-to-b ${layer.tone}`}
            >
              <div className="mb-4">{layer.icon}</div>
              <h3 className="text-white font-semibold mb-2">{layer.title}</h3>
              <p className="text-sm text-slate-300/90 leading-relaxed">{layer.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
