import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  return (
    <footer className="py-20 relative bg-[#060608] text-zinc-400 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xl font-bold tracking-tight text-white font-display">
              Luvora Studio
            </h3>
            <p className="text-sm text-zinc-400 font-body">
              Digital Experiences, Built Better.
            </p>
            <div className="pt-2">
              <a
                href="mailto:rehan62062@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>rehan62062@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono-tech">
            <div className="space-y-3">
              <span className="text-zinc-500 uppercase tracking-widest block">Index</span>
              <ul className="space-y-2">
                <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="text-zinc-500 uppercase tracking-widest block">Studio</span>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li>
                  <button
                    onClick={onStartProject}
                    className="text-white hover:text-zinc-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Start Project</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Placeholders */}
          <div className="md:col-span-3 space-y-3 text-xs font-mono-tech">
            <span className="text-zinc-500 uppercase tracking-widest block">Connect</span>
            <div className="flex flex-col space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>Instagram</span>
                <span className="text-zinc-600">↗</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>LinkedIn</span>
                <span className="text-zinc-600">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-zinc-600">
          <div>© 2026 Luvora Studio. All rights reserved.</div>
          <div>Precision • Taste • Modern Technology</div>
        </div>
      </div>
    </footer>
  );
};
