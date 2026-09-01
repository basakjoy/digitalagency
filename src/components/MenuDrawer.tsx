import React from 'react';
import { X, ArrowUpRight, Sparkles, MapPin, Mail, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose, onOpenContact }) => {
  if (!isOpen) return null;

  const navLinks = [
    { label: 'Selected Works', href: '#work-section', count: '04' },
    { label: 'Agency Services', href: '#services-section', count: '06' },
    { label: 'Our Process', href: '#process-section', count: '04' },
    { label: 'Engagement Plans', href: '#pricing-section', count: '03' },
    { label: 'FAQ & Insights', href: '#faq-section', count: '05' },
    { label: 'Contact Hub', href: '#contact', count: 'LIVE' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop with Heavy Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xl"
        />

        {/* Slide-in Panel with Frosted Glass & Blur */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-lg bg-[#0c0c11]/85 backdrop-blur-2xl border-l border-white/15 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto z-10 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff4122]" />
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest">Navigation Portal</span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="py-8 space-y-4">
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  onClose();
                  if (item.href === '#contact') {
                    e.preventDefault();
                    onOpenContact();
                  }
                }}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-semibold text-white/80 hover:text-white transition-all py-2 border-b border-white/5 hover:border-[#ff4122]/40"
              >
                <span className="group-hover:translate-x-2 transition-transform">
                  {item.label}
                </span>
                <div className="flex items-center gap-3">
                  {item.count && (
                    <span className="text-xs font-mono text-[#ff4122] bg-[#ff4122]/10 px-2 py-0.5 rounded-full border border-[#ff4122]/20">
                      {item.count}
                    </span>
                  )}
                  <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#ff4122] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            ))}
          </nav>

          {/* Footer Info */}
          <div className="pt-6 border-t border-white/10 space-y-4 text-xs text-white/60">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block font-mono text-[10px] text-white/40 uppercase mb-1">Headquarters</span>
                <p className="text-white/80">548 Market St, Manhattan, NY</p>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-white/40 uppercase mb-1">Inquiries</span>
                <p className="text-[#ff4122]">hello@gander.agency</p>
              </div>
            </div>

            <div className="pt-4 flex justify-between items-center text-[11px]">
              <span>© 2026 GANDER GLOBAL AGENCY</span>
              <div className="flex gap-3">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">TWITTER</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white">DRIBBBLE</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GITHUB</a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
