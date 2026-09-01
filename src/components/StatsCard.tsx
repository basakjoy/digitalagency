import React from 'react';
import { Globe, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const StatsCard: React.FC = () => {
  return (
    <section id="stats-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 z-20">
      
      {/* Outer Card Container with Frosted Glass & Backdrop Blur */}
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-black/40 border border-white/15 p-6 sm:p-10 lg:p-14 overflow-hidden backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        
        {/* Subtle Ambient internal glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff4122]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Content Row: Left World Support Tag + Right Agency Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-10 sm:pb-16">
          
          {/* Left Column: Hub support badge + social icons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
              <Globe className="w-4 h-4 text-white/80 shrink-0" />
              <span className="leading-snug">Hub support peoples from all over the world</span>
            </div>

            {/* Social pills row */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-[#ff4122] flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform cursor-pointer"
                title="X"
              >
                <span className="text-[10px]">✕</span>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                title="Global"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                title="Portfolio"
              >
                <Briefcase className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Mission Headline */}
          <div className="lg:col-span-7">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-white/80 leading-[1.35]">
              We're a results-driven{' '}
              <span className="text-white font-semibold">marketing agency passionate</span>{' '}
              <span className="text-white/60">about crafting impactful campaigns that</span>{' '}
              <span className="text-white/90">growth for our clients</span>
            </p>
          </div>

        </div>

        {/* Bottom Metrics Row (3 Large Digital/Pixel Counters with Lines) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 pt-6 sm:pt-8 border-t border-white/10">
          
          {/* Stat 1: 86+ Project Done */}
          <div className="space-y-3 group">
            <div className="flex items-baseline gap-1">
              <span className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-widest leading-none drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
                86+
              </span>
            </div>
            
            {/* Divider Line with Red Dot Indicator */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122]" />
                <span>Project Done</span>
              </div>
              <div className="w-full h-px bg-white/10 mt-3 group-hover:bg-[#ff4122]/40 transition-colors" />
            </div>
          </div>

          {/* Stat 2: 98% Successful Rating */}
          <div className="space-y-3 group">
            <div className="flex items-baseline gap-1">
              <span className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-widest leading-none drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
                98%
              </span>
            </div>

            {/* Divider Line with Red Dot Indicator */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122]" />
                <span>Successful Rating</span>
              </div>
              <div className="w-full h-px bg-white/10 mt-3 group-hover:bg-[#ff4122]/40 transition-colors" />
            </div>
          </div>

          {/* Stat 3: 223m Growth Net Worth */}
          <div className="space-y-3 group">
            <div className="flex items-baseline gap-1">
              <span className="font-pixel text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-widest leading-none drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
                223m
              </span>
            </div>

            {/* Divider Line with Red Dot Indicator */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122]" />
                <span>Growth Net Worth</span>
              </div>
              <div className="w-full h-px bg-white/10 mt-3 group-hover:bg-[#ff4122]/40 transition-colors" />
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
