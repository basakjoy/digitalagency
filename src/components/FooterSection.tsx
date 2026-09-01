import React from 'react';
import { ArrowUpRight, ArrowUp, Globe, Mail, MapPin, Send } from 'lucide-react';

interface FooterSectionProps {
  onOpenContact?: () => void;
  onOpenChat?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact, onOpenChat }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030305] border-t border-white/10 pt-16 sm:pt-24 pb-12 z-20 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff4122]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Giant CTA Banner */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#140b0e] via-[#0d0910] to-[#08070c] border border-white/15 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
              <span>LET'S COLLABORATE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              Have A Project In Mind? <br />
              <span className="text-[#ff4122]">Let's Build It Together</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-normal">
              Whether you need a complete digital product build, a WebGL experience, or a brand rebrand, our studio is ready.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full font-bold text-sm text-white bg-[#ff4122] hover:bg-[#ff5733] btn-orange-glow transition-all active:scale-95 cursor-pointer shadow-2xl flex items-center gap-2"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenChat}
              className="px-7 py-4 rounded-full font-medium text-sm text-white/90 hover:text-white glass-pill hover:bg-white/10 transition-all cursor-pointer"
            >
              Chat With Us
            </button>
          </div>

        </div>

        {/* Global Studios Locations & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ff4122] flex items-center justify-center font-bold text-white text-xs">
                GA
              </div>
              <span className="text-xl font-bold tracking-tight text-white">GANDER</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm font-normal">
              Gander is an award-winning global branding, digital product design, and creative engineering agency based in New York, London, Tokyo & Zurich.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff4122] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all">
                <span className="text-xs">✕</span>
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff4122] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ff4122] border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all">
                <span className="text-xs font-mono font-bold">GH</span>
              </a>
            </div>
          </div>

          {/* Col 2: Studio Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white/90 tracking-wider">Global Studios</h4>
            <ul className="space-y-2 text-xs font-normal text-white/60">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff4122]" />
                <span>New York • Soho HQ</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff4122]" />
                <span>London • Shoreditch</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff4122]" />
                <span>Tokyo • Shibuya</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff4122]" />
                <span>Zurich • District 1</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white/90 tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-normal text-white/60">
              <li><a href="#services-section" className="hover:text-[#ff4122] transition-colors">Services</a></li>
              <li><a href="#work-section" className="hover:text-[#ff4122] transition-colors">Selected Work</a></li>
              <li><a href="#process-section" className="hover:text-[#ff4122] transition-colors">Process</a></li>
              <li><a href="#pricing-section" className="hover:text-[#ff4122] transition-colors">Engagement Plans</a></li>
              <li><a href="#faq-section" className="hover:text-[#ff4122] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-white/90 tracking-wider">Newsletter</h4>
            <p className="text-xs text-white/60 leading-relaxed font-normal">
              Subscribe for monthly design & WebGL creative insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/60 border border-white/20 rounded-full py-2 pl-3.5 pr-10 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#ff4122]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-[#ff4122] text-white flex items-center justify-center hover:bg-[#ff5733] transition-all cursor-pointer"
              >
                <Send className="w-3 h-3" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-white/40 font-normal">
          <p>© 2026 Gander Digital Agency Inc. All rights reserved. Designed by <a href="https://joysportfolioupdtd.vercel.app/">JKB</a></p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back To Top</span>
            <div className="w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#ff4122] group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
