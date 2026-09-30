import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-white/[0.05]">
      {/* Studio Background Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-b from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-zinc-800/[0.04] rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern with subtle opacity */}
      <div className="absolute inset-0 bg-noise opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Typography & Call to Action (7 cols) */}
          <div className="lg:col-span-7 z-10 space-y-8">
            {/* Small Eyebrow: unboxed text with typographic separator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>INDEPENDENT DIGITAL STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display text-balance leading-[1.06]">
              We Build Websites That Feel{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 font-extrabold italic pr-1">
                Different.
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-400/80 to-transparent" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-zinc-400 font-body leading-relaxed max-w-2xl">
              Modern digital experiences for businesses, creators and brands that want to look credible, memorable and ready for what's next.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartProject}
                className="px-6 py-3.5 bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_10px_25px_rgba(255,255,255,0.08)] cursor-pointer group"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#work"
                className="px-6 py-3.5 bg-white/[0.04] text-zinc-300 font-medium text-xs uppercase tracking-wider rounded-lg hover:bg-white/[0.08] hover:text-white transition-all duration-200 border border-white/[0.08] flex items-center gap-2"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-zinc-500" />
              </a>
            </div>

            {/* Disciplines Ribbon Below CTAs */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-3 text-xs font-mono-tech tracking-wider text-zinc-500">
              <span className="text-zinc-400">WEB DESIGN</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-400">DEVELOPMENT</span>
              <span aria-hidden="true">·</span>
              <span className="text-zinc-400">DIGITAL EXPERIENCES</span>
            </div>
          </div>

          {/* Signature 3D Architectural Sculpture (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Studio Lighting Backdrop Frame */}
            <div className="relative w-full aspect-square max-w-[500px]">
              <Hero3DCanvas />
              
              {/* Subtle caption metadata */}
              <div className="absolute bottom-2 right-4 text-[10px] font-mono-tech text-zinc-500 uppercase tracking-widest pointer-events-none">
                Sculpture · Obsidian & Glass
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
