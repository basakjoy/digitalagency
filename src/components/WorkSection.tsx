import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Award, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Project {
  id: string;
  title: string;
  category: 'Fintech' | 'AI & SaaS' | '3D & WebGL' | 'Branding';
  client: string;
  year: string;
  image: string;
  metrics: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'hyperion-ai',
    title: 'Hyperion Autonomous AI',
    category: 'AI & SaaS',
    client: 'Hyperion Labs Inc',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1000&auto=format&fit=crop&q=80',
    metrics: '+420% ARR Growth',
    description: 'Next-generation AI operations control room platform with real-time vector visualization, autonomous agent workflows, and dark-mode glassmorphic UI.',
    tags: ['AI Interface', 'Design System', 'React', 'WebGL']
  },
  {
    id: 'veloce-supercar',
    title: 'Veloce 3D Car Configurator',
    category: '3D & WebGL',
    client: 'Veloce Motors UK',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1000&auto=format&fit=crop&q=80',
    metrics: '$85M Pre-Orders',
    description: 'Real-time 60FPS WebGL electric vehicle customizer allowing global buyers to personalize exterior paints, interior leather trims, and carbon fiber packages in 3D.',
    tags: ['Three.js', 'Shader Coding', 'Canvas', 'UI Design']
  },
  {
    id: 'aura-fintech',
    title: 'Aura Capital Global',
    category: 'Fintech',
    client: 'Aura Financial Group',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
    metrics: '99.9% Transaction Accuracy',
    description: 'Institutional-grade cross-border wealth management app for ultra-high-net-worth investors with real-time portfolio analytics and instant settlement.',
    tags: ['Fintech App', 'iOS & Android', 'Security', 'Branding']
  },
  {
    id: 'nexus-brand',
    title: 'Nexus Cybernetics Rebrand',
    category: 'Branding',
    client: 'Nexus Systems Tokyo',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=80',
    metrics: 'Red Dot Winner 2026',
    description: 'Comprehensive brand identity transformation including generative 3D logo design, custom typographic guidelines, and global launch video campaigns.',
    tags: ['Brand Identity', '3D Motion', 'Style Guide', 'Campaign']
  }
];

const CATEGORIES = ['All', 'AI & SaaS', '3D & WebGL', 'Fintech', 'Branding'] as const;

export const WorkSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work-section" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 z-20">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff4122] tracking-wider uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff4122] animate-pulse" />
            <span>SELECTED PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Crafting Digital Products That <br />
            <span className="text-[#ff4122]">Define Industries</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#ff4122] text-white shadow-lg shadow-[#ff4122]/30'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#ff4122]/60 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-2xl flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-black/20" />

                {/* Top Badge: Client & Year */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white/90 border border-white/15">
                    {project.client} ({project.year})
                  </span>
                  <span className="text-[11px] font-mono bg-[#ff4122] text-white px-3 py-1.5 rounded-full font-bold shadow-md">
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#ff4122] transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-[#ff4122] flex items-center justify-center text-white/70 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/60 line-clamp-2 font-normal">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel p-6 sm:p-10 border border-white/20 shadow-2xl space-y-6"
            >
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
                <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#ff4122] uppercase tracking-wider">{activeProject.category}</span>
                  <h3 className="text-3xl font-bold text-white">{activeProject.title}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono text-white/50">Impact Delivered</span>
                  <div className="text-lg font-bold text-[#ff4122] font-mono">{activeProject.metrics}</div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.tags.map((t, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/10 text-white/90">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#ff4122] text-white text-xs font-semibold hover:bg-[#ff5733] transition-all cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
