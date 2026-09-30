import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-28 sm:py-36 relative border-b border-white/[0.05] overflow-hidden">
      {/* Subtle architectural hairline divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400 sticky top-28">
              00 · Studio Manifesto
            </div>
          </div>

          {/* Editorial Big Typography & Supporting Text */}
          <div className="lg:col-span-9 space-y-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.08] text-balance">
              GOOD DESIGN GETS ATTENTION.{' '}
              <span className="text-zinc-500 block sm:inline">
                GREAT DIGITAL EXPERIENCES KEEP IT.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-white/[0.08]">
              <div className="md:col-span-8">
                <p className="text-lg sm:text-xl text-zinc-400 font-body leading-relaxed font-light">
                  Luvora Studio combines thoughtful design, modern development and clear communication to create websites that look exceptional and make it easy for customers to take action.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end">
                <div className="text-xs font-mono-tech text-zinc-400 space-y-1">
                  <div>CRAFT: WEB ARCHITECTURE</div>
                  <div>LOCATION: INDEPENDENT / GLOBAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
