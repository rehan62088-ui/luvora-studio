import React from 'react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 relative border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-10">
          <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
            05 · About Luvora
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08]">
            Small Studio.<br />
            Big Attention to Detail.
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-zinc-300 font-body leading-relaxed max-w-3xl font-light">
            <p>
              Luvora Studio is an independent digital studio focused on creating modern websites for businesses, creators and ambitious brands.
            </p>
            <p className="text-zinc-400">
              We believe a website should be more than an online brochure. It should communicate clearly, create trust and make the next step obvious.
            </p>
          </div>

          {/* Genuine Studio Principles & Contact Note */}
          <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono-tech">
            <div className="space-y-1">
              <span className="text-zinc-500 block uppercase">Focus</span>
              <span className="text-zinc-300">Modern Web Design & Dev</span>
            </div>
            <div className="space-y-1">
              <span className="text-zinc-500 block uppercase">Direct Access</span>
              <span className="text-zinc-300">Work Directly with the Maker</span>
            </div>
            <div className="space-y-1">
              <span className="text-zinc-500 block uppercase">Inquiries</span>
              <a
                href="mailto:rehan62062@gmail.com"
                className="text-white hover:underline underline-offset-4"
              >
                rehan62062@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
