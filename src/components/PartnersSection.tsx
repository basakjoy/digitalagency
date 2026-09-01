import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Clock, Compass, Pause, Play, RotateCw, Globe, Sparkles } from 'lucide-react';

interface PartnerPlanet {
  id: string;
  name: string;
  orbitIndex: number; // 1, 2, 3, 4
  orbitRadiusPx: number;
  durationSec: number;
  partnerYears: string;
  role: string;
  icon: React.ReactNode;
  initialDegree: number;
}

const PARTNER_PLANETS: PartnerPlanet[] = [
  {
    id: 'github',
    name: 'GitHub',
    orbitIndex: 4,
    orbitRadiusPx: 200,
    durationSec: 35,
    partnerYears: '12 Years Alliance',
    role: 'Open-Source & Enterprise Code Hub',
    initialDegree: 0,
    icon: (
      <svg className="w-7 h-7 text-white fill-current group-hover:text-[#ff4122] transition-colors" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    )
  },
  {
    id: 'studio',
    name: 'Studio Design',
    orbitIndex: 1,
    orbitRadiusPx: 80,
    durationSec: 18,
    partnerYears: '10 Years Partner',
    role: 'Creative Direction & Visual Systems',
    initialDegree: 72,
    icon: (
      <div className="w-6 h-6 border-2 border-white/90 rounded-sm flex items-center justify-center group-hover:border-[#ff4122] transition-colors">
        <div className="w-2 h-2 bg-white/90 group-hover:bg-[#ff4122] transition-colors" />
      </div>
    )
  },
  {
    id: 'archin',
    name: 'archin',
    orbitIndex: 2,
    orbitRadiusPx: 120,
    durationSec: 24,
    partnerYears: '8 Years Partner',
    role: 'Architectural & Spatial Computing',
    initialDegree: 144,
    icon: (
      <span className="text-xs font-semibold text-white tracking-tight group-hover:text-[#ff4122] transition-colors">
        archin
      </span>
    )
  },
  {
    id: 'matthew',
    name: 'matthew coo.',
    orbitIndex: 3,
    orbitRadiusPx: 160,
    durationSec: 28,
    partnerYears: '6 Years Co-Studio',
    role: 'Executive Product Design Partner',
    initialDegree: 216,
    icon: (
      <div className="text-center">
        <span className="font-signature text-base text-white group-hover:text-[#ff4122] transition-colors">
          matthew
        </span>
        <span className="block text-[7px] font-mono text-white/40 tracking-wider">COO.</span>
      </div>
    )
  },
  {
    id: 'zumar',
    name: 'ZUMAR CONS',
    orbitIndex: 2,
    orbitRadiusPx: 120,
    durationSec: 26,
    partnerYears: '5 Years Strategic Partner',
    role: 'Global Enterprise Consulting',
    initialDegree: 288,
    icon: (
      <div className="flex items-center gap-1">
        <svg className="w-3.5 h-3.5 text-white group-hover:text-[#ff4122] transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
        </svg>
        <span className="text-[9px] font-bold text-white uppercase group-hover:text-[#ff4122]">ZUMAR</span>
      </div>
    )
  }
];

export const PartnersSection: React.FC = () => {
  const [timeString, setTimeString] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<PartnerPlanet | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      const secs = String(now.getSeconds()).padStart(2, '0');
      const ms = Math.floor(now.getMilliseconds() / 10);
      setTimeString(`${hrs}:${mins}:${secs}.${String(ms).padStart(2, '0')}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="partners-solar-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 z-20 overflow-hidden">
      
      {/* Subtle Background Radial Ambient Glow */}
      <div className="absolute right-[10%] top-[20%] w-[500px] h-[500px] bg-[#ff4122]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: "Over 12 years become the partners" + Live Solar System Chronometer HUD */}
        <div className="lg:col-span-6 space-y-6">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase bg-[#ff4122]/10 px-3.5 py-1.5 rounded-full border border-[#ff4122]/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOLAR SYSTEM PARTNER ECOSYSTEM</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
                Over
              </h2>
              <span className="font-pixel text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#ff4122] tracking-wider leading-none drop-shadow-[0_0_25px_rgba(255,65,34,0.6)]">
                12
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              years
            </h2>

            <p className="text-sm sm:text-base text-white/70 font-normal pt-1 tracking-wide">
              become the partners orbiting our creative core
            </p>
          </div>

          {/* Solar System Time & Control HUD Card */}
          <div className="rounded-2xl glass-panel p-5 border border-white/15 max-w-md shadow-2xl space-y-4">
            
            {/* Top Row: Clock Label & Real-Time Counter */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-white/80">
                <Clock className="w-4 h-4 text-[#ff4122] animate-pulse" />
                <span>SOLAR TIME CHRONOMETER</span>
              </div>
              <span className="font-pixel text-sm text-[#ff4122] tracking-wider">
                {timeString || '16:28:45.00'}
              </span>
            </div>

            {/* Orbit Metrics */}
            <div className="grid grid-cols-3 gap-2 text-[11px] font-mono">
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <span className="block text-white/40 text-[9px]">ORBITAL PERIOD</span>
                <span className="text-white font-semibold">12.4 YRS</span>
              </div>
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <span className="block text-white/40 text-[9px]">ACTIVE PLANETS</span>
                <span className="text-[#ff4122] font-semibold">05 HUBS</span>
              </div>
              <div className="bg-white/5 p-2 rounded-xl border border-white/10">
                <span className="block text-white/40 text-[9px]">ALIGNMENT</span>
                <span className="text-emerald-400 font-semibold">100% SYNC</span>
              </div>
            </div>

            {/* Orbit Control Toggle */}
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-white/60 font-mono">Planetary Rotation:</span>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-all cursor-pointer border border-white/15"
              >
                {isPaused ? (
                  <>
                    <Play className="w-3 h-3 text-[#ff4122]" />
                    <span>Resume Orbit</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3 h-3 text-[#ff4122]" />
                    <span>Pause Orbit</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Right Side: Interactive Solar System Orbital Ring Stage */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[440px] sm:min-h-[500px]">
          
          <div className="relative w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] flex items-center justify-center">
            
            {/* Central Sun Core */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#ff4122] via-[#ff6b4a] to-[#ffa07a] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(255,65,34,0.8)] border-2 border-white/40 animate-pulse">
              <Sun className="w-8 h-8 text-white animate-[spin_20s_linear_infinite]" />
              <span className="text-[10px] font-pixel text-white mt-1">12 YRS</span>
              <span className="text-[8px] font-mono text-white/90">CORE SUN</span>
            </div>

            {/* Orbital Ring 1 (Inner) */}
            <div className="absolute w-[160px] h-[160px] rounded-full border-2 border-dashed border-[#ff4122]/70 shadow-[0_0_15px_rgba(255,65,34,0.3)] pointer-events-none" />
            
            {/* Orbital Ring 2 */}
            <div className="absolute w-[240px] h-[240px] rounded-full border-2 border-dashed border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none" />

            {/* Orbital Ring 3 */}
            <div className="absolute w-[320px] h-[320px] rounded-full border-2 border-dashed border-[#ff4122]/60 shadow-[0_0_15px_rgba(255,65,34,0.25)] pointer-events-none" />

            {/* Orbital Ring 4 (Outer) */}
            <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-dashed border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none animate-[spin_120s_linear_infinite]" />

            {/* Orbiting Partner Planets */}
            {PARTNER_PLANETS.map((planet) => {
              // Calculate responsive radius
              const radius = planet.orbitRadiusPx;

              return (
                <div
                  key={planet.id}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={{
                    animation: `spin ${planet.durationSec}s linear infinite`,
                    animationPlayState: isPaused ? 'paused' : 'running',
                  }}
                >
                  <div
                    className="absolute pointer-events-auto"
                    style={{
                      transform: `rotate(${planet.initialDegree}deg) translate(${radius}px) rotate(-${planet.initialDegree}deg)`,
                    }}
                  >
                    <div
                      onMouseEnter={() => setSelectedPlanet(planet)}
                      onMouseLeave={() => setSelectedPlanet(null)}
                      className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-bubble border border-white/30 hover:border-[#ff4122] flex items-center justify-center shadow-xl hover:scale-125 transition-all duration-300 cursor-pointer backdrop-blur-md bg-black/75"
                      style={{
                        // Counter-rotate element so logos remain right-side up
                        animation: `spin ${planet.durationSec}s linear infinite reverse`,
                        animationPlayState: isPaused ? 'paused' : 'running',
                      }}
                    >
                      {/* Ambient planet glow on hover */}
                      <div className="absolute inset-0 rounded-full bg-[#ff4122]/0 group-hover:bg-[#ff4122]/40 blur-md transition-all" />

                      {planet.icon}

                      {/* Planet Orbit Ring Halo */}
                      <div className="absolute -inset-1 rounded-full border border-[#ff4122]/0 group-hover:border-[#ff4122]/80 transition-all pointer-events-none animate-ping" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Tooltip Card for Selected Orbiting Planet */}
            {selectedPlanet && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 w-64 rounded-2xl glass-panel p-3.5 border border-[#ff4122]/60 shadow-2xl pointer-events-none text-center bg-black/90"
              >
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-white mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
                  <span>{selectedPlanet.name}</span>
                </div>
                <span className="block text-[10px] font-mono text-[#ff4122] font-semibold">
                  {selectedPlanet.partnerYears}
                </span>
                <p className="text-[11px] text-white/70 leading-tight mt-1 font-normal">
                  {selectedPlanet.role}
                </p>
              </motion.div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
};
