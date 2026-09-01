import React, { useState } from 'react';
import { ChevronRight, ArrowRight, Check, Globe, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenChat: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenChat, onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setEmail('');
    }, 4000);
  };

  const scrollToMiddle = () => {
    const statsElem = document.getElementById('stats-section');
    if (statsElem) {
      statsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-24 pb-16 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between">
      
      {/* Subtle Circular Concentric HUD Rings */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[340px] sm:w-[480px] md:w-[620px] h-[340px] sm:h-[480px] md:h-[620px] rounded-full border border-[#ff4122]/15 pointer-events-none z-0" />
      <div className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[380px] md:w-[500px] h-[260px] sm:h-[380px] md:h-[500px] rounded-full border border-dashed border-[#ff4122]/20 pointer-events-none z-0 animate-[spin_60s_linear_infinite]" />

      {/* Top Center Typographic Year & Client Badges */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] sm:text-xs font-mono text-white/50 tracking-wider px-2 sm:px-12 mb-2 sm:mb-4">
        <div className="flex items-center gap-2 pl-4 sm:pl-16">
          <span className="text-[#ff4122] font-semibold">2026</span>
          <span className="opacity-40">/ ARCHIVE</span>
        </div>
        <div className="flex items-center gap-2 pr-4 sm:pr-16">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122] animate-ping" />
          <span className="text-white/80">900+ Happy Clients</span>
        </div>
      </div>

      {/* Giant Foreground Title "GA" and "ER" framing the background video subject */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center justify-center my-auto pointer-events-none select-none">
        
        {/* HUGE Letters on Left: "GA" */}
        <div className="flex-1 text-right pr-1 sm:pr-4 md:pr-8 z-0">
          <span 
            className="text-[19vw] sm:text-[17vw] lg:text-[180px] xl:text-[230px] font-black tracking-tighter text-white leading-none inline-block drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.15)',
              textShadow: '0 0 40px rgba(255,255,255,0.1)'
            }}
          >
            GA
          </span>
        </div>

        {/* Center Portal Gap - Allows background video subject to be framed perfectly */}
        <div className="relative w-[180px] sm:w-[260px] md:w-[320px] lg:w-[400px] h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px] flex-shrink-0 flex items-center justify-center -mx-4 sm:-mx-8 md:-mx-12">
          {/* Subtle HUD targeting marks */}
          <div className="absolute inset-x-0 top-0 h-4 border-t-2 border-l-2 border-r-2 border-[#ff4122]/40 rounded-t-lg" />
          <div className="absolute inset-x-0 bottom-0 h-4 border-b-2 border-l-2 border-r-2 border-[#ff4122]/40 rounded-b-lg" />
          
          <div className="absolute top-3 left-4 text-[9px] font-mono text-[#ff4122]/80 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122] animate-pulse" />
            <span>SCROLL_SYNC.VISION</span>
          </div>
        </div>

        {/* HUGE Letters on Right: "ER" */}
        <div className="flex-1 text-left pl-1 sm:pl-4 md:pl-8 z-0">
          <span 
            className="text-[19vw] sm:text-[17vw] lg:text-[180px] xl:text-[230px] font-black tracking-tighter text-white leading-none inline-block drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
            style={{
              WebkitTextStroke: '1px rgba(255,255,255,0.15)',
              textShadow: '0 0 40px rgba(255,255,255,0.1)'
            }}
          >
            ER
          </span>
        </div>

      </div>

      {/* Main Bottom Grid Content: Left Launch Pitch & Right Contact Box */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end mt-6 sm:mt-10">
        
        {/* Left Column: Happy Clients Badge + Big Title "Helped Launch > 100+ Products" + Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5">
          
          {/* Avatar stack + 900+ Happy Clients */}
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full glass-pill shadow-lg">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Client avatar"
                className="w-6 h-6 rounded-full border border-black/40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Client avatar"
                className="w-6 h-6 rounded-full border border-black/40 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Client avatar"
                className="w-6 h-6 rounded-full border border-black/40 object-cover"
              />
            </div>
            <div className="text-[11px] leading-tight">
              <div className="font-semibold text-white/90 flex items-center gap-1">
                <span>900+ Happy Clients</span>
              </div>
              <div className="text-white/50 text-[10px]">Over 5 years</div>
            </div>
          </div>

          {/* Bold Heading: Helped Launch > 100+ Products */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
              Helped <br />
              Launch <span className="text-[#ff4122] font-extrabold">{'>'} 100+</span> <br />
              Products
            </h1>
          </div>

          {/* (Scroll Down) indicator button */}
          <button 
            onClick={scrollToMiddle}
            className="text-xs text-white/50 hover:text-white/90 flex items-center gap-1.5 transition-colors cursor-pointer group pt-1"
          >
            <span>(Scroll Down)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122] group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              id="hero-start-btn"
              onClick={onOpenContact}
              className="px-6 py-3 rounded-full font-semibold text-sm text-white btn-orange-glow transition-all active:scale-95 cursor-pointer"
            >
              Start Now
            </button>
            <button
              id="hero-chat-btn"
              onClick={onOpenChat}
              className="px-5 py-3 rounded-full font-medium text-sm text-white/90 hover:text-white glass-pill hover:bg-white/10 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Chat With Us</span>
              <ChevronRight className="w-4 h-4 text-white/60" />
            </button>
          </div>

        </div>

        {/* Right Column: Agency Mission Subtext + "How can we help you?" + Contact by Email Glass Box */}
        <div className="lg:col-span-6 flex flex-col items-start lg:items-end space-y-6">
          
          {/* Agency Tagline Subtitle */}
          <div className="max-w-md lg:text-left space-y-2">
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
              Gander is a global branding and digital design agency focus on building digital product, services
            </p>
            <button
              onClick={onOpenContact}
              className="text-xs sm:text-sm text-[#ff4122] hover:text-[#ff6b4a] font-medium transition-colors cursor-pointer flex items-center gap-1 group"
            >
              <span className="underline underline-offset-4 decoration-[#ff4122]/60 group-hover:decoration-[#ff4122]">How can we help you?</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Contact by Email Glass Card */}
          <div className="w-full max-w-sm glass-panel rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/10 relative overflow-hidden">
            
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff4122]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold text-white tracking-tight">Contact by Email</h3>
                <p className="text-xs text-white/60 mt-0.5">Enter your email and we will contact by email</p>
              </div>

              {/* Social Icons row matching the red/dark pills in image */}
              <div className="flex items-center gap-2 pt-1 pb-1">
                {/* Red X Button */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-[#ff4122] flex items-center justify-center text-white text-xs font-bold shadow-md hover:scale-110 transition-transform cursor-pointer"
                  title="X (Twitter)"
                >
                  <span className="text-[11px]">✕</span>
                </a>
                
                {/* Dribbble / Globe */}
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                  title="Dribbble"
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>

                {/* Portfolio / LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer"
                  title="Share"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Email Form */}
              <form onSubmit={handleEmailSubmit} className="relative mt-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full bg-black/50 backdrop-blur-md border border-white/20 rounded-full py-2.5 pl-4 pr-12 text-xs text-white placeholder-white/50 focus:outline-none focus:border-[#ff4122] transition-colors shadow-inner"
                />
                <button
                  type="submit"
                  id="email-submit-btn"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#ff4122] hover:bg-[#ff5733] flex items-center justify-center text-white transition-all shadow-md active:scale-95 cursor-pointer"
                  aria-label="Send email"
                >
                  {emailSubmitted ? (
                    <Check className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  )}
                </button>
              </form>

              {emailSubmitted && (
                <motion.p 
                  initial={{ opacity: 0, y: 5 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="text-[11px] text-emerald-400 font-medium"
                >
                  ✓ Thank you! We will reach out shortly.
                </motion.p>
              )}

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
