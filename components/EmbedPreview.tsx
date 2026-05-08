'use client';

import { motion } from 'motion/react';

export function EmbedPreview() {
  const previewUrl = "https://www.wikipedia.org/";
  const embedCode = `<iframe src="${previewUrl}" title="Project Preview" width="100%" height="600" style="border:0; border-radius:16px;" loading="lazy"></iframe>`;

  return (
    <section id="embed-preview" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] mb-3">Embed</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Website Embed Preview</h2>
          <p className="text-slate-300 max-w-2xl">
            Apne project ko kisi bhi website me embed karne ke liye niche preview aur ready-to-use iframe code diya gaya hai.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <p className="text-slate-300 text-sm mb-3">Live Preview</p>
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/30">
              <iframe
                src={previewUrl}
                title="Embedded Project Preview"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-[#0B0F19]/80 p-4"
          >
            <p className="text-slate-300 text-sm mb-3">Copy & Paste Code</p>
            <pre className="text-xs md:text-sm text-cyan-200 overflow-x-auto leading-relaxed bg-black/40 rounded-xl p-4 border border-white/10">
{embedCode}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
