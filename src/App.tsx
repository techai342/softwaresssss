import { motion, useScroll } from 'motion/react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { LanguageMarquee } from '@/components/LanguageMarquee';
import { HowWeBuild } from '@/components/HowWeBuild';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { SystemArchitecture } from '@/components/SystemArchitecture';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { Preloader } from '@/components/Preloader';
import { ModernStack } from '@/components/ModernStack';
import { BackendRoadmap } from '@/components/BackendRoadmap';
import { Projects } from '@/components/Projects';
import { Pricing } from '@/components/Pricing';
import { Process } from '@/components/Process';
import { Team } from '@/components/Team';
import { Resources } from '@/components/Resources';
import { FAQ } from '@/components/FAQ';
import { SocialGrid } from '@/components/SocialGrid';
import { Footer } from '@/components/Footer';
import { WhatsAppChat } from '@/components/WhatsAppChat';

export default function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-[#050508] min-h-screen text-slate-200 font-sans overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambience / Glows */}
      <Preloader />
      
      {/* Top Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 origin-left z-[9999]"
      />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Animated Blobs - Now ultra-subtle and slow */}
        <motion.div 
          animate={{ 
            x: [0, 40, 0], 
            y: [0, 30, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[10%] w-[800px] h-[800px] bg-cyan-600/5 blur-[160px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.03, 1]
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[-10%] w-[700px] h-[700px] bg-indigo-600/5 blur-[160px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -40, 0],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-fuchsia-600/5 blur-[160px] rounded-full mix-blend-screen" 
        />

        {/* Global Noise Texture with subtle movement */}
        <motion.div 
          animate={{ 
            backgroundPositionY: ["0px", "40px"] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "10px 10px"
          }}
        />
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508] opacity-60" />
      </div>

      {/* Modern High-Performance Header */}
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <LanguageMarquee />
        <HowWeBuild />
        <Stats />
        <SystemArchitecture />
        <ModernStack />
        <BackendRoadmap />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <Pricing />
        <Process />
        <Team />
        <Resources />
        <FAQ />
        <SocialGrid />
      </main>

      <Footer />
      <WhatsAppChat />
    </div>
  );
}
