import React from 'react';
import { Check, Zap, Shield, Crown } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  cta: string;
  popular?: boolean;
}

const PLANS: PricingPlan[] = [
  {
    id: 'sprint',
    name: 'Product Sprint',
    price: '$9,500',
    period: 'per sprint (2 weeks)',
    description: 'Fast-track MVP launch, high-impact feature redesign, or WebGL interactive component build.',
    icon: Zap,
    features: [
      'Dedicated Senior Lead Designer & Engineer',
      '2-Week Rapid Delivery Timeline',
      'Full Figma & Production React/Next.js Code',
      'Asynchronous Daily Slack Updates',
      '1 Round of Revision Included'
    ],
    cta: 'Book Sprint Slot'
  },
  {
    id: 'studio-retainer',
    name: 'Dedicated Studio Team',
    badge: 'MOST POPULAR',
    price: '$24,500',
    period: 'per month',
    description: 'Complete cross-functional agency squad (Designers, 3D Artists, Full-Stack Engineers) on retainer.',
    icon: Crown,
    popular: true,
    features: [
      'Full Agency Squad (Product, Motion, Dev)',
      'Unlimited Feature Requests & Iterations',
      'Direct Slack Connect + Weekly Syncs',
      'Priority Turnaround (24-48 Hours)',
      'Sub-Second Performance & CRO Audits',
      'IP Ownership & Source Code Handoff'
    ],
    cta: 'Reserve Studio Squad'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Transformation',
    price: 'Custom',
    period: 'tailored scope',
    description: 'End-to-end digital ecosystem rebuild, multi-platform applications, and custom AI architecture.',
    icon: Shield,
    features: [
      'Dedicated Executive Creative Director',
      'Custom AI & WebGL Technical Architecture',
      'Enterprise SLA & 24/7 Security Support',
      'Multi-Brand Global Design System Tokenization',
      'Executive Boardroom Workshops & Training'
    ],
    cta: 'Schedule Executive Consult'
  }
];

interface PricingSectionProps {
  onOpenContact?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="pricing-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase bg-[#ff4122]/10 px-3.5 py-1.5 rounded-full border border-[#ff4122]/20">
          <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
          <span>TRANSPARENT ENGAGEMENT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Flexible Pricing Models Built For <br />
          <span className="text-[#ff4122]">Speed & Scale</span>
        </h2>
        <p className="text-sm sm:text-base text-white/60 font-normal leading-relaxed">
          No hidden fees, no agency bloat. Transparent fixed-price sprints and monthly studio retainers.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan) => {
          const IconComponent = plan.icon;
          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between shadow-2xl ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#181216] to-[#0a080d] border-[#ff4122] ring-1 ring-[#ff4122]/50 scale-105 z-10'
                  : 'glass-panel border-white/10 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ff4122] text-white text-[10px] font-mono font-extrabold tracking-widest uppercase px-4 py-1 rounded-full shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ff4122]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-white/50">{plan.period}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-white/60 leading-relaxed font-normal mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-8 pb-6 border-b border-white/10">
                  <span className="font-pixel text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-white/50">{plan.price !== 'Custom' && '/ period'}</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-[11px] font-mono uppercase text-white/50 tracking-wider">What's Included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-white/80">
                      <div className="w-4 h-4 rounded-full bg-[#ff4122]/20 text-[#ff4122] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenContact}
                className={`w-full py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-[#ff4122] hover:bg-[#ff5733] text-white btn-orange-glow shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
};
