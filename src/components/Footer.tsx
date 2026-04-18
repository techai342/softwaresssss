import { 
  Globe, Shield, PhoneCall, Mail, Home, Layers, 
  Briefcase, CreditCard, Users, User, Cpu, HelpCircle, FileText
} from 'lucide-react';
import { SiFacebook, SiInstagram, SiTiktok, SiSnapchat, SiWhatsapp } from 'react-icons/si';
import { motion } from 'motion/react';

const SocialIcon = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1 }}
    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500 transition-all duration-300 relative group"
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300" />
    <div className="relative z-10">
      {icon}
    </div>
  </motion.a>
);

const FooterLink = ({ icon, text, active, href = "#" }: { icon: React.ReactNode, text: string, active?: boolean, href?: string }) => (
  <li>
    <a href={href} className={`flex items-center gap-3 text-sm transition-colors duration-300 font-medium ${active ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}>
      <span className={`[&>svg]:w-4 [&>svg]:h-4 ${active ? 'text-cyan-400' : 'text-slate-600'}`}>{icon}</span>
      {text}
    </a>
  </li>
);

const ContactCard = ({ title, value, icon, link, truncate }: any) => {
  const inner = (
     <>
        <div className="flex justify-between items-start mb-4">
           <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">{title}</span>
           {icon}
        </div>
        <div className={`text-white font-mono text-sm tracking-tight ${truncate ? 'truncate' : ''}`}>
           {value}
        </div>
     </>
  );

  return (
    link ? (
      <a href={link} target="_blank" rel="noreferrer" className="block bg-[#0A0A0E] hover:bg-[#12121A] border border-white/5 hover:border-white/10 rounded-2xl p-5 transition-all duration-300 group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-full overflow-hidden">
        {inner}
      </a>
    ) : (
      <div className="bg-[#0A0A0E] border border-white/5 rounded-2xl p-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] w-full overflow-hidden">
        {inner}
      </div>
    )
  );
};

export function Footer() {
  return (
    <footer id="contact" className="bg-[#050508] border-t border-white/[0.05] relative z-10 pt-24 pb-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-3">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-[#12121A] border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
                   <span className="text-white font-mono text-sm font-bold">{"</>"}</span>
                </div>
                <div>
                   <h3 className="text-white font-bold text-lg leading-none tracking-tight mb-1.5">SAQIB VISUALS</h3>
                   <p className="text-slate-600 text-[9px] uppercase tracking-widest leading-none font-bold">AGENCY SYSTEM</p>
                </div>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed mb-8 pr-4">
                Creative Content Creator & Visual Artist. Focused on continuous learning and using creativity to inspire others.
             </p>
             {/* Social circles */}
             <div className="flex items-center gap-3">
               <SocialIcon href="https://web.facebook.com/muhammad.saqib.718278" icon={<SiFacebook className="w-4 h-4" />} />
               <SocialIcon href="https://www.instagram.com/mr_saqib242" icon={<SiInstagram className="w-4 h-4" />} />
               <SocialIcon href="https://www.tiktok.com/@mr_saqib_242" icon={<SiTiktok className="w-4 h-4" />} />
               <SocialIcon href="https://www.snapchat.com/add/mrsaqib242" icon={<SiSnapchat className="w-4 h-4" />} />
             </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 lg:pl-6">
             <h4 className="flex items-center gap-2 text-white font-bold text-sm tracking-wide mb-6">
                <Globe className="w-4 h-4 text-cyan-400" /> NAVIGATION
             </h4>
             <ul className="space-y-4">
                <FooterLink icon={<Home />} text="Home" />
                <FooterLink icon={<Layers />} text="Our Services" />
                <FooterLink icon={<Briefcase />} text="Portfolio" />
                <FooterLink icon={<CreditCard />} text="Pricing Plans" />
                <FooterLink icon={<Users />} text="Meet the Team" active />
             </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
             <h4 className="flex items-center gap-2 text-white font-bold text-sm tracking-wide mb-6">
                <Shield className="w-4 h-4 text-fuchsia-500" /> COMPANY
             </h4>
             <ul className="space-y-4">
                <FooterLink icon={<User />} text="About Us" />
                <FooterLink icon={<Cpu />} text="Process" />
                <FooterLink icon={<HelpCircle />} text="FAQ" />
                <FooterLink icon={<FileText />} text="Privacy Policy" />
                <FooterLink icon={<FileText />} text="Terms of Use" />
             </ul>
          </div>

          {/* Contact Information (Cards) */}
          <div className="lg:col-span-5">
             <h4 className="flex items-center gap-2 text-white font-bold text-sm tracking-wide mb-6 uppercase">
                Contact Information
             </h4>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactCard 
                   title="MOBILE CONTACT"
                   value="0347-8936242"
                   icon={<PhoneCall className="w-4 h-4 text-emerald-400" />}
                />
                <ContactCard 
                   title="WHATSAPP"
                   value="+92 347 8936242"
                   link="https://wa.me/923478936242"
                   icon={<SiWhatsapp className="w-4 h-4 text-emerald-400" />}
                />
                <ContactCard 
                   title="GENERAL INQUIRY"
                   value="mrsaqib242242@gma..."
                   link="mailto:mrsaqib242242@gmail.com"
                   icon={<Mail className="w-4 h-4 text-cyan-400" />}
                   truncate
                />
                <ContactCard 
                   title="PORTFOLIO SITE"
                   value="techai.zone.id"
                   link="https://techai.zone.id/"
                   icon={<Globe className="w-4 h-4 text-fuchsia-500" />}
                />
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-slate-500 text-xs font-mono">© {new Date().getFullYear()} Saqib Visuals. | All Rights Reserved.</p>
           <div className="px-4 py-1.5 rounded-full border border-white/10 bg-[#0A0A0E] text-[10px] text-slate-400 font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
             BUILT WITH <span className="text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)]">SAQIB</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
