import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronRight, Plus, Minus } from 'lucide-react';

const categories = ["ALL", "GENERAL", "ACCOUNT", "TRADING", "SUPPORT"];

const faqs = [
  {
    id: 1,
    question: "How long does it take to build a website?",
    answer: "The timeline depends on the complexity of the project. A standard business website typically takes 2-4 weeks, while a complex e-commerce or custom web application can take anywhere from 1 to 3 months.",
    category: "GENERAL"
  },
  {
    id: 2,
    question: "How does your hourly pricing work?",
    answer: "We offer transparent hourly billing via Upwork or direct contract. You only pay for the exact hours worked. We use precise time-tracking tools and provide detailed weekly reports of all activities and progress.",
    category: "GENERAL"
  },
  {
    id: 3,
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. 100% of the websites and applications we build are fully responsive, meaning they will look and function flawlessly on desktops, tablets, and smartphones.",
    category: "GENERAL"
  },
  {
    id: 4,
    question: "Do you provide website hosting and maintenance?",
    answer: "Yes, we offer comprehensive hosting and maintenance packages. Although not mandatory, we highly recommend them to ensure your website remains secure, updated, and fast.",
    category: "SUPPORT"
  },
  {
    id: 5,
    question: "Can you help with SEO (Search Engine Optimization)?",
    answer: "Yes! We build SEO-friendly structures by default (semantic HTML, fast loading speeds, meta tags). We also offer advanced SEO services to help you rank higher on Google.",
    category: "GENERAL"
  },
  {
    id: 6,
    question: "Do I own the source code after the project?",
    answer: "Yes. Once the project is fully paid for, complete ownership of the source code and all intellectual property rights are transferred entirely to you.",
    category: "ACCOUNT"
  }
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<number | null>(null);

  // Filter logic
  const filteredFaqs = faqs.filter(faq => {
    const matchCategory = activeCategory === "ALL" || faq.category === activeCategory;
    const matchSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="faq" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* HEADER */}
      <div className="mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white tracking-tight mb-12"
        >
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 font-bold">Questions</span>
        </motion.h2>

        {/* FILTERS & SEARCH */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full mb-12">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.4)]' 
                    : 'bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
               <Search className="w-4 h-4 text-slate-500" />
             </div>
             <input 
               type="text" 
               placeholder="Search questions..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-[#0d0e12] border border-white/10 rounded-full py-3 pr-4 pl-11 text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
             />
          </div>

        </div>
      </div>

      {/* FAQ GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative z-10">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openId === faq.id;
          
          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-[1px] rounded-2xl group shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Spinning RGB Gradient Border - Only visible on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(red,magenta,blue,cyan,green,yellow,red)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none" />

              <div 
                className={`relative z-10 flex flex-col w-full bg-[#0b0c10] rounded-[15px] cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-[#0f1118]' : 'hover:bg-[#0f1118]'}`}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                
                {/* Question Row */}
                <div className="p-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                       <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                    <h3 className="text-[17px] font-bold text-white tracking-tight">{faq.question}</h3>
                  </div>
                  <div className="shrink-0 text-cyan-400">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>

                {/* Answer Dropdown */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 pl-[72px] text-slate-400 text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          )
        })}
      </div>

    </section>
  );
}
