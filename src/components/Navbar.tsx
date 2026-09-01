import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, ChevronRight, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenMenu: () => void;
  onOpenChat: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu, onOpenChat, onOpenContact }) => {
  const [nyTime, setNyTime] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<'New York' | 'Tokyo' | 'London'>('New York');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeZoneMap = {
          'New York': 'America/New_York',
          'Tokyo': 'Asia/Tokyo',
          'London': 'Europe/London',
        };
        const tz = timeZoneMap[selectedCity];
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        setNyTime(formatter.format(now));
      } catch (e) {
        setNyTime('16:28 PM');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedCity]);

  const cycleCity = () => {
    if (selectedCity === 'New York') setSelectedCity('London');
    else if (selectedCity === 'London') setSelectedCity('Tokyo');
    else setSelectedCity('New York');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Menu Pill + Time / Location */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            id="nav-menu-btn"
            onClick={onOpenMenu}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer shadow-lg active:scale-95"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
            <span>Menu</span>
          </button>

          <button 
            id="nav-timezone-toggle"
            onClick={cycleCity}
            title="Click to switch agency hub timezone"
            className="hidden md:flex items-center text-xs text-white/60 hover:text-white/90 transition-colors font-mono tracking-wide"
          >
            <span className="text-white/40 mr-1.5">/</span>
            <span>{selectedCity}, {selectedCity === 'New York' ? 'USA' : selectedCity === 'Tokyo' ? 'JP' : 'UK'} - </span>
            <span className="text-[#ff4122] font-semibold ml-1.5">{nyTime || '16:28 PM'}</span>
          </button>
        </div>

        {/* Center: Folded Geometric Red-Orange Diamond Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 sm:top-6">
          <a
            href="#"
            id="brand-logo"
            className="group flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110"
            aria-label="Gander Home"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Subtle pulsing background glow */}
              <div className="absolute inset-0 bg-[#ff4122] rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
              
              {/* Custom SVG Origami / Diamond Shape matching the image */}
              <svg 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 drop-shadow-[0_2px_10px_rgba(255,65,34,0.7)]"
              >
                {/* Top left polygon */}
                <path 
                  d="M20 4L7 17L14 24L20 18L26 24L33 17L20 4Z" 
                  fill="url(#logo_grad_1)" 
                />
                {/* Bottom diamond fold */}
                <path 
                  d="M20 22L13 29L20 36L27 29L20 22Z" 
                  fill="url(#logo_grad_2)" 
                />
                <defs>
                  <linearGradient id="logo_grad_1" x1="7" y1="4" x2="33" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF6B4A" />
                    <stop offset="1" stopColor="#FF3815" />
                  </linearGradient>
                  <linearGradient id="logo_grad_2" x1="13" y1="22" x2="27" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF4A2A" />
                    <stop offset="1" stopColor="#D92606" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </a>
        </div>

        {/* Right: Map Pin Badge, Chat With Us, Start Now */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Location Badge */}
          <button
            id="nav-location-btn"
            onClick={cycleCity}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full glass-pill flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-all shadow-md active:scale-95"
            title={`Hub: ${selectedCity}`}
            aria-label="Location"
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff4122]" />
          </button>

          {/* Chat With Us Pill */}
          <button
            id="nav-chat-btn"
            onClick={onOpenChat}
            className="hidden sm:flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full glass-pill text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all cursor-pointer group shadow-lg active:scale-95"
          >
            <span>Chat With Us</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/60 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Start Now CTA */}
          <button
            id="nav-start-btn"
            onClick={onOpenContact}
            className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white btn-orange-glow transition-all cursor-pointer active:scale-95"
          >
            Start Now
          </button>
        </div>

      </div>
    </header>
  );
};
