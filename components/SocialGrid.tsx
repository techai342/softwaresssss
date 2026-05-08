'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Youtube, Mail, MessageCircle } from 'lucide-react';

const channels = [
  { label: 'GitHub', handle: '@tech-team', icon: <Github className="w-5 h-5" />, href: '#' },
  { label: 'LinkedIn', handle: '/company/ai-studio', icon: <Linkedin className="w-5 h-5" />, href: '#' },
  { label: 'X / Twitter', handle: '@ai_studio', icon: <Twitter className="w-5 h-5" />, href: '#' },
  { label: 'YouTube', handle: 'AI Studio Labs', icon: <Youtube className="w-5 h-5" />, href: '#' },
  { label: 'Email', handle: 'hello@example.com', icon: <Mail className="w-5 h-5" />, href: 'mailto:hello@example.com' },
  { label: 'Community', handle: 'Discord / Slack', icon: <MessageCircle className="w-5 h-5" />, href: '#' },
];

export function SocialGrid() {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Stay connected.</h2>
          <p className="text-slate-400 mt-3">Follow updates, launches, and deep-dive engineering notes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-[#0b0b10] p-5 hover:border-cyan-500/40 hover:bg-[#10101a] transition-colors"
            >
              <div className="flex items-center gap-3 text-cyan-300 mb-3">{channel.icon}<span className="text-white font-medium">{channel.label}</span></div>
              <p className="text-slate-400 group-hover:text-slate-300 text-sm">{channel.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
