import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08080a]/80 backdrop-blur-md border-b border-white/[0.06] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark as per Top Bar Contract */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white font-display hover:opacity-90 transition-opacity"
          >
            Luvora Studio
          </a>

          {/* Zone 2: 4 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 font-body">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide text-zinc-950 bg-white rounded-lg hover:bg-zinc-200 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/25 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Elegant Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#08080a]/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in duration-200 md:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
            <span className="text-lg font-bold text-white font-display">Luvora Studio</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-6 py-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-zinc-300 hover:text-white font-display"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3.5 bg-white text-zinc-950 font-semibold text-sm rounded-xl flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center text-xs font-mono-tech text-zinc-500">
              rehan62062@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
};
