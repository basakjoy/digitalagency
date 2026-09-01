import React, { useState } from 'react';
import { Star, Award, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Elena Rostova',
    role: 'Chief Product Officer',
    company: 'Hyperion AI',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    quote: 'Gander transformed our AI platform interface into an absolute masterpiece. Their scroll-driven 3D background and UI polish helped us close our $40M Series B round within weeks.',
    rating: 5,
    highlight: '$40M Series B Closed'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Head of Global Marketing',
    company: 'Veloce Supercars',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    quote: 'Working with Gander felt like peering into the future of digital agency work. Their WebGL 3D vehicle customizer broke company sales records on launch day.',
    rating: 5,
    highlight: '85M Pre-Orders Generated'
  },
  {
    id: '3',
    name: 'Sarah Chen',
    role: 'VP of Design & Experience',
    company: 'Aura Financial',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    quote: 'The level of craft, typography detail, and engineering speed Gander delivered was beyond anything we experienced with legacy agencies. Truly world-class team.',
    rating: 5,
    highlight: '+340% Conversion Lift'
  }
];

const AWARDS = [
  { title: 'Awwwards Site of the Day', count: '8x Winner', year: '2025-2026' },
  { title: 'FWA of the Month', count: '4x Winner', year: '2025' },
  { title: 'Red Dot Best of the Best', count: 'Grand Prix', year: '2026' },
  { title: 'Webby Awards Honoree', count: 'Digital Product', year: '2026' }
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
            <span>CLIENT VOICES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Trusted By Visionary <br />
            <span className="text-[#ff4122]">Founders & Product Leaders</span>
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full glass-pill flex items-center justify-center text-white/70 hover:text-white hover:border-[#ff4122] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full glass-pill flex items-center justify-center text-white/70 hover:text-white hover:border-[#ff4122] transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Grid: Left Testimonial Card + Right Industry Awards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Featured Testimonial Box */}
        <div className="lg:col-span-7">
          <div className="relative h-full rounded-3xl glass-panel p-8 sm:p-12 border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-6 right-6 text-white/10">
              <Quote className="w-24 h-24" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Stars */}
              <div className="flex items-center gap-1 text-[#ff4122]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed font-normal italic"
                >
                  "{current.quote}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Author details */}
            <div className="relative z-10 flex items-center justify-between pt-8 border-t border-white/10 mt-8">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#ff4122]"
                />
                <div>
                  <h4 className="text-base font-bold text-white tracking-tight">{current.name}</h4>
                  <p className="text-xs text-white/60 font-mono">{current.role} • <span className="text-white/90">{current.company}</span></p>
                </div>
              </div>

              <span className="hidden sm:inline-block text-xs font-mono font-bold text-[#ff4122] bg-[#ff4122]/10 px-3 py-1.5 rounded-full border border-[#ff4122]/20">
                {current.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Industry Recognition Badges */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {AWARDS.map((award, idx) => (
            <div
              key={idx}
              className="rounded-2xl glass-panel p-5 border border-white/10 hover:border-[#ff4122]/40 transition-all flex items-center justify-between group cursor-default"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ff4122]/10 text-[#ff4122] border border-[#ff4122]/20 flex items-center justify-center group-hover:bg-[#ff4122] group-hover:text-white transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{award.title}</h4>
                  <span className="text-xs font-mono text-white/50">{award.year}</span>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold text-[#ff4122]">
                {award.count}
              </span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
