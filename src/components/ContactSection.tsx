import React from 'react';
import { ArrowUpRight, Mail, ArrowDown } from 'lucide-react';

interface ContactSectionProps {
  onStartProject: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onStartProject }) => {
  return (
    <section id="contact" className="py-32 sm:py-44 relative overflow-hidden border-b border-white/[0.05]">
      {/* Subtle realistic architectural depth geometry in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <div className="w-[600px] h-[600px] rounded-full border border-white/[0.04] bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.01] blur-2xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white/[0.06] transform -rotate-12" />
        <div className="absolute w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transform rotate-45" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
          06 · Direct Connection
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display text-balance max-w-4xl mx-auto leading-[1.05]">
          Have an idea?<br />
          <span className="text-zinc-400">Let's build it.</span>
        </h2>

        <p className="text-base sm:text-xl text-zinc-400 font-body max-w-md mx-auto">
          Start with a simple conversation.
        </p>

        {/* Display email clearly and clickable with mailto */}
        <div className="pt-2">
          <a
            href="mailto:rehan62062@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 text-white font-mono-tech text-sm sm:text-base transition-all duration-300 group"
          >
            <Mail className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="tracking-wide">rehan62062@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="px-8 py-4 bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-200 transition-all duration-200 flex items-center gap-2 shadow-[0_15px_35px_rgba(255,255,255,0.09)] cursor-pointer group"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="#work"
            className="px-8 py-4 bg-white/[0.04] text-zinc-300 font-medium text-xs uppercase tracking-wider rounded-lg hover:bg-white/[0.08] hover:text-white transition-all duration-200 border border-white/[0.08] flex items-center gap-2"
          >
            <span>View Our Work</span>
            <ArrowDown className="w-4 h-4 text-zinc-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
