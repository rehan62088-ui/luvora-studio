import React from 'react';
import { Project } from '../types';

interface ProjectMockupProps {
  project: Project;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  // Render bespoke realistic device mockups tailored to each project
  if (project.id === 'aura-fitness') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#101116] to-[#090a0d] rounded-xl overflow-hidden p-4 sm:p-7 flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/[0.07] group-hover:border-white/20 transition-all duration-500">
        {/* Soft directional studio ambient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-40 bg-white/[0.03] blur-3xl pointer-events-none" />
        
        {/* Realistic Desktop Display Chassis */}
        <div className="relative w-full h-full max-w-[620px] bg-[#121318] rounded-lg p-2.5 sm:p-3 shadow-2xl border border-white/10 flex flex-col">
          {/* Top bezel with camera dot */}
          <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-zinc-500 font-mono-tech border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700/80" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400">aura-club.ch · zurich</span>
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-emerald-500/70" />
            </div>
          </div>

          {/* Screen Content: Aura Fitness Website */}
          <div className="relative flex-1 bg-[#09090b] rounded overflow-hidden flex flex-col p-4 sm:p-6 text-zinc-100 selection:bg-zinc-800">
            {/* Screen Glass Reflection Sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none" />
            
            {/* Top Navigation */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
              <span className="text-sm font-bold tracking-widest font-display text-white">AURA ATHLETICS</span>
              <div className="flex items-center gap-4 text-[10px] font-mono-tech uppercase text-zinc-400">
                <span className="hidden sm:inline">Discipline</span>
                <span>Recovery</span>
                <span className="text-white border-b border-white">Membership</span>
              </div>
            </div>

            {/* Hero Split */}
            <div className="grid grid-cols-12 gap-4 items-center flex-1">
              <div className="col-span-7 flex flex-col justify-center pr-2">
                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-mono-tech mb-1">Private Athletic Atelier</span>
                <h4 className="text-lg sm:text-2xl font-bold tracking-tight text-white leading-tight font-display mb-2">
                  Sculpted in Darkness. Calibrated for Longevity.
                </h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                  Bespoke biomechanics lab and private subterranean plunge pools in Zurich Enge.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="px-3 py-1 bg-white text-[#09090b] text-[10px] font-semibold tracking-wide rounded-sm">
                    Book Assessment ↗
                  </div>
                  <span className="text-[10px] text-zinc-400 font-mono-tech">14/20 Memberships Open</span>
                </div>
              </div>

              {/* Graphic Athlete Silhouette Box */}
              <div className="col-span-5 h-full min-h-[120px] rounded bg-gradient-to-b from-[#181a20] to-[#0c0d10] border border-white/10 p-3 relative flex flex-col justify-between overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-white/[0.04] rounded-full blur-xl" />
                <div className="flex justify-between items-start text-[9px] font-mono-tech text-zinc-400">
                  <span>BIOMECHANICS</span>
                  <span className="text-emerald-400">99.4% OPT</span>
                </div>
                {/* Minimalist Graphic Sculpture/Body Line SVG */}
                <div className="my-auto py-2 flex items-center justify-center">
                  <svg className="w-full h-12 text-zinc-400 stroke-current opacity-80" viewBox="0 0 100 40" fill="none">
                    <path d="M5 35 Q 25 5, 45 20 T 85 10 T 95 35" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="45" cy="20" r="2.5" fill="#f4f4f6" />
                    <circle cx="85" cy="10" r="2.5" fill="#d4af37" />
                  </svg>
                </div>
                <div className="text-[9px] text-zinc-400 font-mono-tech border-t border-white/[0.06] pt-1 flex justify-between">
                  <span>VO2 MAX LAB</span>
                  <span>SUITE 03</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Stand Base & Shadow */}
          <div className="w-16 h-3 bg-gradient-to-b from-[#1a1b22] to-[#111216] mx-auto rounded-b -mb-2 border-x border-b border-white/10 shadow-lg" />
        </div>
      </div>
    );
  }

  if (project.id === 'noir-table') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#141210] to-[#0a0908] rounded-xl overflow-hidden p-4 sm:p-7 flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/[0.07] group-hover:border-[#d4af37]/30 transition-all duration-500">
        {/* Candlelight warm ambient glow */}
        <div className="absolute top-1/2 left-1/3 w-72 h-36 bg-[#d4af37]/[0.04] blur-3xl pointer-events-none" />

        {/* Laptop Chassis */}
        <div className="relative w-full max-w-[600px] bg-[#1a1715] rounded-t-lg p-2.5 sm:p-3 pb-1 border-t border-x border-white/10 shadow-2xl flex flex-col">
          {/* Browser header */}
          <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-zinc-500 font-mono-tech border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-800/80" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-amber-200/60 font-mono-tech">noirtable.com · spring solstice</span>
            <span className="text-[9px] text-amber-500/80">14 SEATS ONLY</span>
          </div>

          {/* Screen Content: Noir Table Website */}
          <div className="relative bg-[#0d0b09] rounded overflow-hidden flex flex-col p-4 sm:p-6 text-zinc-200">
            {/* Screen Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-200/[0.02] to-white/[0.05] pointer-events-none" />

            {/* Menu Header */}
            <div className="flex items-center justify-between border-b border-amber-900/30 pb-2 mb-3">
              <span className="text-base font-serif italic tracking-wide text-[#f5eedc]">NOIR TABLE</span>
              <span className="text-[9px] font-mono-tech tracking-widest uppercase text-amber-300/70">ACT III: EMBER & FORAGE</span>
            </div>

            {/* Culinary Monograph Grid */}
            <div className="grid grid-cols-12 gap-3 flex-1 items-center">
              <div className="col-span-7 space-y-2">
                <div className="text-[10px] uppercase font-mono-tech text-amber-500/80">Course 07 of 12</div>
                <h4 className="text-base sm:text-xl font-serif text-[#fcf9f2] leading-tight">
                  Smoked Birch Heart, Fermented Pine & Black Truffle Soil
                </h4>
                <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                  Infused over 300-year-old binchotan embers. Paired with 2018 Jura Savagnin Ouillé.
                </p>
                <div className="pt-1 flex items-center gap-3">
                  <div className="px-2.5 py-1 bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 text-[10px] font-medium tracking-wider uppercase rounded-sm border border-amber-500/30">
                    Reserve Tasting ↗
                  </div>
                  <span className="text-[9px] font-mono-tech text-zinc-500">April 2026 Bookings Open</span>
                </div>
              </div>

              {/* Dish Visual Preview */}
              <div className="col-span-5 h-28 rounded bg-[#161310] border border-amber-500/20 p-2.5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
                <div className="text-[8px] font-mono-tech text-amber-400/70 flex justify-between">
                  <span>ATELIER</span>
                  <span>TEMP: 82°C</span>
                </div>
                <div className="my-auto flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-amber-500/30 bg-gradient-to-b from-[#251e18] to-[#120f0d] flex items-center justify-center shadow-inner">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#3b2d1f] to-[#110e0b] border border-amber-400/40" />
                  </div>
                </div>
                <div className="text-[8px] font-mono-tech text-zinc-500 text-center">
                  PAIRING: DOMAINE GANEVAT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Bottom Lip / Trackpad Deck */}
        <div className="w-full max-w-[624px] h-3 bg-gradient-to-b from-[#211f1c] to-[#151310] rounded-b-md border-x border-b border-white/10 shadow-2xl relative flex items-center justify-center">
          <div className="w-14 h-1 bg-zinc-700/60 rounded-full" />
        </div>
      </div>
    );
  }

  if (project.id === 'vanta-realty') {
    return (
      <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#0f1115] to-[#07080a] rounded-xl overflow-hidden p-4 sm:p-7 flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/[0.07] group-hover:border-zinc-400/30 transition-all duration-500">
        {/* Cool steel rim glow */}
        <div className="absolute top-0 left-1/4 w-80 h-40 bg-blue-500/[0.02] blur-3xl pointer-events-none" />

        {/* Realistic Desktop Display with Floating Tablet Layer */}
        <div className="relative w-full max-w-[600px] bg-[#111317] rounded-lg p-2.5 sm:p-3 border border-white/10 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-zinc-500 font-mono-tech border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-zinc-700" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
              <span className="w-2 h-2 rounded-full bg-zinc-800" />
            </div>
            <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-mono-tech">vanta.estate · collection 2026</span>
            <span className="text-[9px] text-zinc-400">ARCHITECTURAL DOSSIER</span>
          </div>

          {/* Screen Content: Vanta Realty */}
          <div className="relative bg-[#07080a] rounded overflow-hidden flex flex-col p-4 sm:p-6 text-zinc-100">
            {/* Screen Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-3">
              <span className="text-sm font-bold tracking-widest font-display text-white">VANTA REALTY</span>
              <div className="flex gap-3 text-[9px] font-mono-tech text-zinc-400">
                <span>ESTATES</span>
                <span>MONOGRAPHS</span>
                <span className="text-white">PRIVATE DESK</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-3 flex-1 items-center">
              <div className="col-span-7 space-y-1.5">
                <span className="text-[9px] uppercase font-mono-tech text-zinc-400">RESIDENCE NO. 04 · LAKE COMO</span>
                <h4 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight font-display">
                  Villa Pietra Brutale
                </h4>
                <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                  Monolithic board-formed concrete and cantilevered basalt stone overlooking the western basin.
                </p>
                <div className="pt-2 flex items-center gap-4 text-[10px] font-mono-tech">
                  <div className="text-zinc-200">
                    <span className="text-zinc-500 block text-[8px]">ACQUISITION</span>
                    €24,800,000
                  </div>
                  <div className="text-zinc-200">
                    <span className="text-zinc-500 block text-[8px]">INTERIOR</span>
                    1,140 m²
                  </div>
                  <div className="text-zinc-200">
                    <span className="text-zinc-500 block text-[8px]">PARCEL</span>
                    6,200 m²
                  </div>
                </div>
              </div>

              {/* Architectural Elevation Vector */}
              <div className="col-span-5 h-28 rounded bg-[#101217] border border-white/10 p-2.5 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between text-[8px] font-mono-tech text-zinc-500">
                  <span>SUN AZIMUTH: 242°</span>
                  <span>WEST EXP</span>
                </div>
                {/* Modernist Villa Wireframe/Silhouette */}
                <div className="my-auto py-1">
                  <svg className="w-full h-12 stroke-zinc-400 fill-zinc-900/60" viewBox="0 0 100 40">
                    <rect x="5" y="15" width="50" height="20" strokeWidth="1" />
                    <rect x="35" y="5" width="55" height="18" strokeWidth="1" fill="#181b22" />
                    <line x1="5" y1="35" x2="95" y2="35" strokeWidth="1.5" stroke="#71717a" />
                    <line x1="35" y1="5" x2="35" y2="35" strokeDasharray="2,2" strokeWidth="0.8" stroke="#52525b" />
                  </svg>
                </div>
                <div className="text-[8px] font-mono-tech text-zinc-400 flex justify-between border-t border-white/[0.05] pt-1">
                  <span>RAW CONCRETE</span>
                  <span>BRUTALISM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Project 4: NEXA ACADEMY
  return (
    <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-[#111218] to-[#090a0d] rounded-xl overflow-hidden p-4 sm:p-7 flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/[0.07] group-hover:border-zinc-400/30 transition-all duration-500">
      {/* Studio highlight */}
      <div className="absolute top-0 right-1/3 w-80 h-36 bg-white/[0.03] blur-3xl pointer-events-none" />

      {/* Screen Frame */}
      <div className="relative w-full max-w-[600px] bg-[#13141a] rounded-lg p-2.5 sm:p-3 border border-white/10 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-2 pb-2 text-[10px] text-zinc-500 font-mono-tech border-b border-white/[0.06]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-zinc-700" />
            <span className="w-2 h-2 rounded-full bg-zinc-800" />
            <span className="w-2 h-2 rounded-full bg-zinc-800" />
          </div>
          <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-mono-tech">nexa.academy · cohort iv</span>
          <span className="text-[9px] text-zinc-300 font-mono-tech">APPLICATIONS OPEN</span>
        </div>

        {/* Screen Content: Nexa Academy */}
        <div className="relative bg-[#090a0d] rounded overflow-hidden flex flex-col p-4 sm:p-6 text-zinc-100">
          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-3">
            <span className="text-sm font-bold tracking-widest font-display text-white">NEXA ACADEMY</span>
            <div className="flex gap-3 text-[9px] font-mono-tech text-zinc-400">
              <span>CURRICULUM</span>
              <span>FACULTY</span>
              <span className="text-white">APPLY</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 flex-1 items-center">
            <div className="col-span-7 space-y-2">
              <span className="text-[9px] uppercase font-mono-tech text-zinc-400">Executive Design Leadership</span>
              <h4 className="text-base sm:text-xl font-bold tracking-tight text-white leading-tight font-display">
                Mastering Craft at Scale
              </h4>
              <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                An intensive 8-week executive sprint for design leaders navigating modern AI systems and org scale.
              </p>
              <div className="pt-1 flex items-center gap-3">
                <div className="px-2.5 py-1 bg-white text-zinc-950 text-[10px] font-semibold tracking-wide rounded-sm">
                  Review Syllabus ↗
                </div>
                <span className="text-[9px] font-mono-tech text-zinc-400">Cohort IV Starts May 2026</span>
              </div>
            </div>

            {/* Modular Curriculum Matrix */}
            <div className="col-span-5 h-28 rounded bg-[#11131a] border border-white/10 p-2.5 flex flex-col justify-between">
              <div className="flex justify-between text-[8px] font-mono-tech text-zinc-400">
                <span>MODULE 01–04</span>
                <span className="text-white">WEEKLY LABS</span>
              </div>
              <div className="space-y-1 my-auto">
                <div className="flex items-center justify-between text-[8px] font-mono-tech p-1 bg-white/[0.03] rounded border border-white/[0.04]">
                  <span className="text-zinc-300">01. Spatial & Model Systems</span>
                  <span className="text-zinc-500">WK 1–2</span>
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono-tech p-1 bg-white/[0.03] rounded border border-white/[0.04]">
                  <span className="text-zinc-300">02. Design Org Economics</span>
                  <span className="text-zinc-500">WK 3–4</span>
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono-tech p-1 bg-white/[0.03] rounded border border-white/[0.04]">
                  <span className="text-zinc-300">03. High-Velocity Product</span>
                  <span className="text-zinc-500">WK 5–6</span>
                </div>
              </div>
              <div className="text-[8px] font-mono-tech text-zinc-400 text-center">
                ACCEPTANCE RATE: 8.4%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
