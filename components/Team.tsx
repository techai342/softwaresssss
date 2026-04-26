'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  Code2, 
  ShoppingCart, 
  Palette, 
  Video, 
  Share2, 
  LineChart, 
  BarChart, 
  Layout, 
  Sparkles, 
  GraduationCap 
} from 'lucide-react';

const teamMembers = [
  {
    id: "saqib",
    name: "Muhammad Saqib",
    role: "CREATIVE VISUAL ARTIST",
    pillIcon: <Sparkles className="w-4 h-4" />,
    pillText: "Founder of Saqib Visuals",
    image: "https://ik.imagekit.io/shaban/SHABAN-1768573425069_nIPVZQOaT.jpg",
    bio: "I am a passionate and motivated learner with a strong interest in modern technology and creativity. I enjoy exploring new tools, building digital solutions, and creating engaging visual content. I believe in continuous learning and using technology to create meaningful digital experiences.",
    skills: [
      {
        icon: <Code2 className="text-cyan-400 w-5 h-5" />,
        title: "AI Development",
        badge: "AI ENTHUSIAST",
        badgeColor: "#22d3ee",
        desc: "Building intelligent agents and exploring modern AI capabilities."
      },
      {
        icon: <Layout className="text-green-400 w-5 h-5" />,
        title: "Web Development",
        badge: "FULL-STACK",
        badgeColor: "#4ade80",
        desc: "Crafting responsive and interactive digital web experiences."
      },
      {
        icon: <Video className="text-fuchsia-400 w-5 h-5" />,
        title: "Video Editing",
        badge: "MOTION PRO",
        badgeColor: "#e879f9",
        desc: "Creating visually engaging and highly edited video content."
      },
      {
        icon: <Palette className="text-orange-400 w-5 h-5" />,
        title: "Graphic Design",
        badge: "VISUAL ARTIST",
        badgeColor: "#fb923c",
        desc: "Designing stunning aesthetics, logos, and creative brand assets."
      },
      {
         icon: <Share2 className="text-blue-400 w-5 h-5" />,
         title: "Content Creation",
         badge: "STORYTELLER",
         badgeColor: "#60a5fa",
         desc: "Building audiences through engaging storytelling & content."
      },
      {
         icon: <BarChart className="text-emerald-400 w-5 h-5" />,
         title: "Digital Marketing",
         badge: "GROWTH",
         badgeColor: "#34d399",
         desc: "Strategies and campaigns to drive measurable online growth."
      }
    ]
  },
  {
    id: "iqra",
    name: "MEHAK JUTT",
    role: "SENIOR SOFTWARE ENGINEER",
    pillIcon: <GraduationCap className="w-4 h-4" />,
    pillText: "Udemy Certified Engineer",
    image: "https://ik.imagekit.io/19imy4f1u/lite_1777212169111_i8WFJZHIma.jpeg",
    bio: "A certified software engineer and creative powerhouse. I bridge the gap between technical development and visual storytelling, specializing in Shopify ecosystems, high-impact graphic design, and data-driven digital marketing strategies.",
    skills: [
      {
        icon: <Code2 className="text-cyan-400 w-5 h-5" />,
        title: "Web Development",
        badge: "CERTIFIED ENGINEER",
        badgeColor: "#22d3ee",
        desc: "Full-stack web solutions & modern architecture."
      },
      {
        icon: <ShoppingCart className="text-green-400 w-5 h-5" />,
        title: "Shopify Dev",
        badge: "STORE EXPERT",
        badgeColor: "#4ade80",
        desc: "Custom themes, apps & e-commerce growth."
      },
      {
        icon: <Palette className="text-orange-400 w-5 h-5" />,
        title: "Graphic Design",
        badge: "CREATIVE LEAD",
        badgeColor: "#fb923c",
        desc: "Brand identity, logos, UI assets & print."
      },
      {
        icon: <Video className="text-purple-400 w-5 h-5" />,
        title: "Video Editing",
        badge: "MOTION ARTIST",
        badgeColor: "#c084fc",
        desc: "Professional editing, VFX & storytelling."
      },
      {
         icon: <Share2 className="text-amber-500 w-5 h-5" />,
         title: "Social Media",
         badge: "MANAGEMENT",
         badgeColor: "#f59e0b",
         desc: "Content strategy & audience building."
      },
      {
         icon: <LineChart className="text-blue-400 w-5 h-5" />,
         title: "Digital Marketing",
         badge: "MARKETING EXPERT",
         badgeColor: "#60a5fa",
         desc: "SEO, Ad campaigns & conversion."
      }
    ]
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto relative border-t border-white/5 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[10%] w-[600px] h-[600px] bg-fuchsia-600/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="inline-block border border-fuchsia-500/30 rounded-full px-4 py-1 mb-6 bg-fuchsia-500/5">
           <span className="text-[10px] font-bold uppercase tracking-[4px] text-fuchsia-400">THE EXPERTS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
          Meet the <span className="text-cyan-400">Elite</span> <span className="text-fuchsia-500">Team</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between complex code, creative design, and business growth.
        </p>
      </motion.div>

      {/* Members List */}
      <div className="space-y-16 lg:space-y-24 relative z-10">
        {teamMembers.map((member, idx) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="relative p-[1px] rounded-3xl group shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Spinning RGB Gradient Border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0" />
            
            {/* Inner Content Layer */}
            <div className="relative z-10 flex flex-col lg:flex-row bg-[#08090C] rounded-[23px] w-full h-full">
            {/* Left Column: Profile Card */}
            <div className="lg:w-[400px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#1a1f2e] p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden rounded-t-[23px] lg:rounded-tr-none lg:rounded-l-[23px]">

               {/* Profile Image Circle aligned with Screenshot */}
               <div className="relative w-72 h-72 mb-12 mt-4 flex items-center justify-center">
                  
                  {/* Orbit track outer dashed rotating */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_30s_linear_infinite]" />
                  
                  {/* Floating Box 1: Sparkle */}
                  <motion.div 
                     animate={{ y: [-8, 8, -8] }} 
                     transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute top-2 right-2 z-20 bg-[#0B0D14] border border-white/10 rounded-2xl p-3 shadow-2xl flex items-center justify-center"
                  >
                     <Sparkles className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                  
                  {/* Floating Box 2: Terminal */}
                  <motion.div 
                     animate={{ y: [8, -8, 8] }} 
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="absolute bottom-6 left-2 z-20 bg-[#0B0D14] border border-white/10 rounded-xl p-3 shadow-2xl flex items-center justify-center"
                  >
                     <span className="text-cyan-400 font-mono font-black text-sm px-1 tracking-tighter">{`>_`}</span>
                  </motion.div>

                  {/* Inner Solid Cyan Ring */}
                  {/* Using z-10 so it overlays slightly but keeps Image clear */}
                  <div className="absolute w-[240px] h-[240px] rounded-full border-[3px] border-[#22d3ee] shadow-[0_0_30px_rgba(34,211,238,0.2)] z-10 pointer-events-none" />
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 rounded-full blur-[40px] -z-10" />
                  
                  {/* Core Yellow Image Container */}
                  <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden bg-[#eab308] z-0">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                      unoptimized 
                      referrerPolicy="no-referrer"
                    />
                  </div>
               </div>

               <h3 className="text-3xl font-bold text-white mb-2 tracking-tight text-center">{member.name}</h3>
               <p className="text-cyan-400 font-black tracking-widest text-xs uppercase mb-6 text-center">{member.role}</p>

               <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm whitespace-nowrap">
                  {member.pillIcon}
                  <span>{member.pillText}</span>
               </div>
            </div>

            {/* Right Column: Details & Skills */}
            <div className="flex-1 p-8 md:p-12 bg-[#0A0B10]">
               <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-1.5 h-6 bg-cyan-400 rounded-full" />
                     <h4 className="text-xl font-bold text-white tracking-wide">Expertise & Bio</h4>
                  </div>
                  <p className="text-slate-400 text-base md:text-[17px] leading-relaxed max-w-3xl">
                    {member.bio}
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {member.skills.map((skill) => (
                    <div 
                      key={skill.title} 
                      className="bg-[#111218] border border-white/5 hover:border-white/10 hover:bg-[#161821] p-6 rounded-2xl flex gap-5 transition-all duration-300 group"
                    >
                       <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/20 transition-colors">
                          {skill.icon}
                       </div>
                       <div>
                          <h5 className="text-white font-bold text-[15px] mb-1">{skill.title}</h5>
                          <p 
                            className="text-[10px] font-black tracking-widest uppercase mb-2" 
                            style={{ color: skill.badgeColor }}
                          >
                            {skill.badge}
                          </p>
                          <p className="text-slate-400 text-[13px] leading-relaxed">
                            {skill.desc}
                          </p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
