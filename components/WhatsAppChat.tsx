'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { X, Send, Smile, Paperclip, Camera, Mic, MoreVertical, Phone, Video, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-whatsapp-chat', handleOpen);
    return () => window.removeEventListener('open-whatsapp-chat', handleOpen);
  }, []);

  const phoneNumber = '923478936242'; // Your WhatsApp number
  const profilePic = 'https://picsum.photos/seed/saqib/200/200'; // Placeholder for your profile pic

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] font-sans flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, x: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50, x: 20 }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-[380px] h-[550px] max-h-[80vh] bg-[#0b141a] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#202c33] p-3 flex items-center justify-between text-white shadow-md shrink-0">
              <div className="flex items-center gap-2">
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors md:hidden">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                    <Image 
                      src={profilePic}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#202c33] rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight">Saqib Visuals</span>
                  <span className="text-[10px] text-emerald-400 font-medium">online</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <Video className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <Phone className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                <MoreVertical className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto relative bg-[#0b141a]">
              {/* WhatsApp Background Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10 10l10 10m-10 0l10-10m10 30l10 10m-10 0l10-10m30-30l10 10m-10 0l10-10m10 30l10 10m-10 0l10-10' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
                  backgroundSize: '100px 100px'
                }}
              />
              
              <div className="relative z-10 p-4 flex flex-col space-y-4">
                {/* Intro bubble */}
                <div className="flex justify-center">
                  <span className="bg-[#182229] text-amber-200/70 text-[10px] px-3 py-1 rounded-lg uppercase tracking-wider font-bold border border-white/5 text-center">
                    Messages are end-to-end encrypted
                  </span>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#202c33] text-slate-200 p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-xs shadow-md leading-relaxed"
                >
                  <p>Hi there! 👋 How can I help you today with your project?</p>
                  <span className="text-[9px] text-slate-500 mt-1 block text-right">11:51 AM</span>
                </motion.div>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-[#202c33] p-2.5 flex items-center gap-2 sm:gap-3 border-t border-white/5 shrink-0">
              <div className="flex items-center gap-3 text-slate-400">
                <Smile className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
                <Paperclip className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
              </div>
              
              <div className="flex-1 bg-[#2a3942] rounded-full px-4 py-2 flex items-center">
                <input 
                  type="text" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="w-full bg-transparent border-none focus:outline-none text-slate-200 text-sm placeholder:text-slate-500"
                />
              </div>

              {message.trim() ? (
                <button 
                  onClick={handleSend}
                  className="w-11 h-11 bg-emerald-500 rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <Send className="w-5 h-5 ml-0.5" />
                </button>
              ) : (
                <div className="flex items-center gap-3 text-slate-400">
                  <Camera className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
                  <Mic className="w-6 h-6 cursor-pointer hover:text-white transition-colors" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative group overflow-hidden ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-emerald-500'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? (
          <X className="w-8 h-8 text-white relative z-10" />
        ) : (
          <WhatsAppIcon className="w-9 h-9 text-white relative z-10" />
        )}
        {!isOpen && (
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-white rounded-full"
          />
        )}
      </motion.button>
    </div>
  );
}
