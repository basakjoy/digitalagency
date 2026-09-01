import React, { useState } from 'react';
import { Sparkles, Layers, Cpu, Code2, TrendingUp, Palette, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  deliverables: string[];
  metrics: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity & Systems',
    tagline: 'Crafting distinct visual worlds that command industry authority',
    description: 'We shape iconic brand identities from the ground up, creating comprehensive visual systems, motion guidelines, and typographic architectures that resonate globally.',
    icon: Palette,
    tags: ['Visual Strategy', 'Motion Systems', 'Brand Guidelines', 'Typography'],
    deliverables: ['Logo & Mark Architecture', 'Design System Tokenization', '3D Motion Assets', 'Brand Voice & Messaging Framework'],
    metrics: '99.4% Brand Recognition Lift'
  },
  {
    id: 'digital-product',
    number: '02',
    title: 'Digital Product Design',
    tagline: 'Human-centered interfaces engineered for high conversion & retention',
    description: 'From web applications to mobile ecosystems, we craft intuitive UI/UX design systems that eliminate friction and convert casual users into loyal brand advocates.',
    icon: Layers,
    tags: ['UI/UX Design', 'Design Systems', 'Micro-Interactions', 'Prototyping'],
    deliverables: ['Figma Component Libraries', 'Interactive High-Fi Prototypes', 'UX User Journey Mapping', 'Usability Testing Reports'],
    metrics: '+340% Average User Retention'
  },
  {
    id: 'interactive-3d',
    number: '03',
    title: 'Next-Gen Web & 3D Interactive',
    tagline: 'Immersive WebGL & shader experiences that win awards',
    description: 'We push the boundaries of browser performance with custom WebGL, Three.js shaders, and GSAP scroll-driven animations that captivate audiences.',
    icon: Sparkles,
    tags: ['WebGL & Shaders', 'Three.js / Canvas', 'Scroll Choreography', 'Creative Coding'],
    deliverables: ['Interactive 3D Viewers', 'Scroll-Linked Video Engines', 'Custom Canvas Shaders', '60FPS Performance Tuning'],
    metrics: '14 Awwwards & FWA Honors'
  },
  {
    id: 'ai-engineering',
    number: '04',
    title: 'AI & Web3 Innovation',
    tagline: 'Embedding autonomous intelligence into modern digital products',
    description: 'Integrate state-of-the-art Generative AI models, conversational agents, and Web3 infrastructure into seamless consumer-facing interfaces.',
    icon: Cpu,
    tags: ['LLM Integration', 'AI Workflows', 'Smart Contracts', 'Autonomous Agents'],
    deliverables: ['Custom AI Assistant Systems', 'RAG Data Pipelines', 'Web3 Wallet Connectors', 'Real-Time Vector Search'],
    metrics: '10x Workflow Acceleration'
  },
  {
    id: 'fullstack-dev',
    number: '05',
    title: 'Full-Stack Engineering',
    tagline: 'Scalable, rock-solid web applications built for speed & security',
    description: 'We engineer robust, lightning-fast web applications powered by modern React, Next.js, Node.js, and cloud infrastructure ready to handle millions of requests.',
    icon: Code2,
    tags: ['React & Next.js', 'TypeScript', 'Node API Services', 'Cloud & Edge'],
    deliverables: ['Production Codebases', 'Serverless Edge API Setup', 'CI/CD Pipeline Automation', 'Sub-Second Page Load Optimization'],
    metrics: '99.99% Uptime Guarantee'
  },
  {
    id: 'growth-marketing',
    number: '06',
    title: 'Growth & Performance Marketing',
    tagline: 'Data-driven funnel optimization and viral launch execution',
    description: 'Maximize your digital reach with targeted growth marketing, conversion rate optimization (CRO), and campaign strategies that drive scalable revenue.',
    icon: TrendingUp,
    tags: ['CRO Optimization', 'Launch Strategy', 'Funnel Analytics', 'Paid Growth'],
    deliverables: ['A/B Testing Frameworks', 'Custom Analytics Dashboards', 'Viral Product Hunt Launches', 'Omnichannel Ad Creative'],
    metrics: '4.8x Average Return On Ad Spend'
  }
];

interface ServicesSectionProps {
  onOpenContact?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-20">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#ff4122]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
            <span>OUR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Services Designed To <br />
            <span className="text-[#ff4122]">Transform</span> Digital Products
          </h2>
        </div>

        <p className="text-sm sm:text-base text-white/60 max-w-md font-normal leading-relaxed">
          From initial brand strategy to complex WebGL engineering and AI integration, we build legendary digital experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 hover:border-[#ff4122]/50 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Subtle top hover glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ff4122]/0 group-hover:bg-[#ff4122]/15 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-[#ff4122] text-white/80 group-hover:text-white border border-white/10 group-hover:border-[#ff4122] flex items-center justify-center transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="font-pixel text-2xl text-white/30 group-hover:text-[#ff4122] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-6 font-normal">
                  {service.tagline}
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-white/70 border border-white/10 group-hover:border-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Row Link */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ff4122] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-10 border border-white/20 shadow-2xl overflow-hidden"
            >
              {/* Top Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-pixel text-3xl text-[#ff4122]">{selectedService.number}</span>
                <div className="h-4 w-px bg-white/20" />
                <span className="text-xs font-mono text-white/60 uppercase">{selectedService.metrics}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6 font-normal">
                {selectedService.description}
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xs font-mono uppercase text-[#ff4122] tracking-wider">Key Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90 bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-[#ff4122] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-white/50">Ready to start?</span>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    if (onOpenContact) onOpenContact();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#ff4122] hover:bg-[#ff5733] text-white text-xs font-semibold btn-orange-glow transition-all cursor-pointer"
                >
                  Request Proposal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
