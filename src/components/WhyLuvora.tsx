import React from 'react';

const PRINCIPLES = [
  {
    title: 'Purposeful Design',
    copy: 'Every section has a reason to exist. We eliminate arbitrary decorative clutter in favor of visual clarity and intentional hierarchy.'
  },
  {
    title: 'Modern Experience',
    copy: 'Contemporary layouts, interactions and visual systems that establish immediate credibility and keep prospective clients engaged.'
  },
  {
    title: 'Responsive by Default',
    copy: 'Designed carefully across every screen size — from compact mobile displays to expansive 1440px desktop monitors.'
  },
  {
    title: 'Business Focused',
    copy: 'The website should make the business easier to understand, trust and contact. Every aesthetic choice supports conversion.'
  }
];

export const WhyLuvora: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 relative border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
              04 · Studio Ethos
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Built With Intention.
            </h2>
            <p className="text-sm text-zinc-400 font-body leading-relaxed max-w-sm">
              We reject templates and generic formulas. Every digital experience is constructed from first principles.
            </p>
          </div>

          {/* Right 4 Editorial Points Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white/[0.015] border border-white/[0.06] hover:border-white/20 transition-all duration-300 space-y-4"
              >
                <div className="text-xs font-mono-tech text-zinc-500">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  {principle.title}
                </h3>
                <p className="text-sm text-zinc-400 font-body leading-relaxed">
                  {principle.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
