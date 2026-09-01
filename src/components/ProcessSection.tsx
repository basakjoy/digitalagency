import React from 'react';
import { Compass, Cpu, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Discovery & Blueprint',
    subtitle: 'Deep-Dive Strategy & Architecture',
    description: 'We audit your product vision, map competitor positioning, define tech stack parameters, and build an actionable product blueprint.',
    icon: Compass,
    highlights: ['Stakeholder Interviews', 'User Journey Mapping', 'Technical Scope & Feasibility']
  },
  {
    step: '02',
    title: 'Design & Prototype',
    subtitle: 'High-Impact UI/UX & Motion',
    description: 'We craft high-fidelity Figma design systems, interactive prototypes, and custom 3D motion assets designed to wow your users.',
    icon: Cpu,
    highlights: ['Design System Tokens', 'Clickable Prototypes', 'Motion & 3D Pre-Visuals']
  },
  {
    step: '03',
    title: 'Engineering & Motion',
    subtitle: 'Clean Code & 60FPS Performance',
    description: 'We build your application using modern React/Next.js stack, custom WebGL shaders, serverless API microservices, and continuous integration.',
    icon: Code2,
    highlights: ['TypeScript Engineering', 'WebGL & Canvas Shaders', 'API & Database Architecture']
  },
  {
    step: '04',
    title: 'Launch & Hyper-Scale',
    subtitle: 'Deployment & Growth Optimization',
    description: 'We deploy to global edge networks, run end-to-end security audits, launch marketing campaigns, and monitor conversion metrics.',
    icon: Rocket,
    highlights: ['Global Edge Deployment', 'CRO & Funnel Analytics', 'Post-Launch Dedicated Support']
  }
];

export const ProcessSection: React.FC = () => {
  return (
    <section id="process-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-20">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#ff4122]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase bg-[#ff4122]/10 px-3.5 py-1.5 rounded-full border border-[#ff4122]/20">
          <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
          <span>OUR WORKFLOW</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          How We Turn Vision Into <br />
          <span className="text-[#ff4122]">Industry-Defining Reality</span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed">
          A disciplined, battle-tested 4-step methodology designed for speed, visual excellence, and measurable growth.
        </p>
      </div>

      {/* Process Steps Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
        {STEPS.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.step}
              className="group relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-[#ff4122]/50 transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between"
            >
              {/* Top Step Number + Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-pixel text-4xl text-[#ff4122] drop-shadow-[0_0_15px_rgba(255,65,34,0.4)]">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 group-hover:bg-[#ff4122] text-white/70 group-hover:text-white flex items-center justify-center border border-white/10 transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-[#ff4122]/80 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-xs text-white/60 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              {/* Highlights Bullet Points */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                {item.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-[11px] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4122]" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
