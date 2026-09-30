import React from 'react';

const STEPS = [
  {
    number: '01',
    phase: 'DISCOVER',
    description: 'Understand the business, audience, goals and requirements.',
    detail: 'We deconstruct your market positioning, evaluate existing friction points, and isolate the exact visual and conversion levers required.'
  },
  {
    number: '02',
    phase: 'DESIGN',
    description: 'Create the visual direction, structure and user experience.',
    detail: 'We establish bespoke typography systems, spatial rhythm, high-contrast layouts, and interactive prototypes tailored specifically to your brand.'
  },
  {
    number: '03',
    phase: 'BUILD',
    description: 'Develop the responsive website and interactions.',
    detail: 'Engineered with modern frontend architecture, fluid viewport adaptation, sub-second load performance, and smooth micro-interactions.'
  },
  {
    number: '04',
    phase: 'LAUNCH',
    description: 'Review, refine and prepare the final experience.',
    detail: 'Rigorously stress-tested across real devices, audited for accessibility and search performance, and smoothly handed over for production.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-28 sm:py-36 relative border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/[0.08] gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
              03 · Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              From Idea to Launch
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-body max-w-md">
            A deliberate, stage-gated process engineered for precision and momentum.
          </p>
        </div>

        {/* Sophisticated 4-step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                {/* Step Index & Title */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                  <span className="text-2xl font-mono-tech font-bold text-zinc-400">
                    {step.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
                    {step.phase}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white font-display leading-snug">
                  {step.description}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-body">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
