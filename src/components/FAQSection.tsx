import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How fast can Gander launch a project or MVP?',
    answer: 'Our typical Product Sprint delivers a fully coded, high-fidelity MVP or feature redesign within 2 to 4 weeks. For full-scale enterprise products, timelines typically range from 6 to 12 weeks depending on scope.'
  },
  {
    id: 'faq-2',
    question: 'Do we own full intellectual property (IP) and source code?',
    answer: 'Yes, 100%. Upon completion and final payment, all Figma designs, WebGL assets, 3D models, codebases, and intellectual property belong entirely to your company.'
  },
  {
    id: 'faq-3',
    question: 'How does your scroll-driven background video & WebGL tech work?',
    answer: 'We utilize ultra-optimized HTML5 Canvas 2D / WebGL rendering pipelines coupled with GPU frame-seeking engines (fastSeek & requestVideoFrameCallback) to ensure silky 60FPS performance on all devices.'
  },
  {
    id: 'faq-4',
    question: 'What is your team structure and how do we communicate daily?',
    answer: 'You receive a dedicated squad consisting of a Lead Product Designer, 3D/Motion Artist, and Senior Full-Stack Engineer. We communicate daily via a dedicated Slack Connect channel and async Loom updates.'
  },
  {
    id: 'faq-5',
    question: 'What happens after launch? Do you offer ongoing support?',
    answer: 'We provide post-launch support retainers including serverless infrastructure monitoring, performance tuning, CRO conversion optimization, and continuous feature iterations.'
  }
];

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-section" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-20">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase bg-[#ff4122]/10 px-3.5 py-1.5 rounded-full border border-[#ff4122]/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>QUESTIONS & ANSWERS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Frequently Asked <span className="text-[#ff4122]">Questions</span>
        </h2>
        <p className="text-xs sm:text-sm text-white/60 font-normal">
          Everything you need to know about working with Gander Digital Agency.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-300 shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
              >
                <span className="text-base sm:text-lg font-semibold text-white tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#ff4122] border-[#ff4122]/40' : ''}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 font-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
};
