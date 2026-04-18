'use client';

import { motion } from 'motion/react';
import { 
  SiFacebook, SiInstagram,
  SiTiktok, SiWhatsapp, SiSnapchat 
} from 'react-icons/si';

const socialLinks = [
  { name: 'Facebook', icon: SiFacebook, href: 'https://web.facebook.com/muhammad.saqib.718278' },
  { name: 'Instagram', icon: SiInstagram, href: 'https://www.instagram.com/mr_saqib242' },
  { name: 'TikTok', icon: SiTiktok, href: 'https://www.tiktok.com/@mr_saqib_242' },
  { name: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/923478936242' },
  { name: 'Snapchat', icon: SiSnapchat, href: 'https://www.snapchat.com/add/mrsaqib242' },
];

export function SocialGrid() {
  return (
    <section className="py-20 bg-[#050508] relative z-10 border-b border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-white font-bold text-2xl mb-12">Connect With Me</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-[#12121A] flex items-center justify-center text-white border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 shadow-lg"
            >
              {social.icon ? <social.icon className="w-7 h-7" /> : null}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
