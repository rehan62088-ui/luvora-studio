import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: (initialService?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl bg-[#0b0c10] border border-white/10 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Sticky Header with Back button and Status */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/[0.08]">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-mono-tech text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </button>

          {/* Clean unboxed metadata with separators */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono-tech">
            <span className="text-zinc-500">{project.number}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-300">{project.category}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-amber-400/90 font-medium">CONCEPT PROJECT</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12">
          {/* Project Title & Tagline */}
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">
              Case Study Dossier · {project.year}
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-300 font-body max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Mockup Presentation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-mono-tech">
                Live Concept Preview
              </span>
              {/* Responsive Device View Toggle */}
              <div className="flex items-center p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg">
                <button
                  onClick={() => setActiveDeviceView('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono-tech rounded transition-colors ${
                    activeDeviceView === 'desktop'
                      ? 'bg-white text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop Architecture</span>
                </button>
                <button
                  onClick={() => setActiveDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono-tech rounded transition-colors ${
                    activeDeviceView === 'mobile'
                      ? 'bg-white text-zinc-950 font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile Touch Interface</span>
                </button>
              </div>
            </div>

            {/* Display Active Preview */}
            {activeDeviceView === 'desktop' ? (
              <ProjectMockup project={project} />
            ) : (
              <div className="w-full flex justify-center py-6 bg-gradient-to-b from-[#0f1015] to-[#07080a] rounded-xl border border-white/10">
                <div className="w-72 bg-[#121319] p-3 rounded-[32px] border-2 border-white/20 shadow-2xl relative">
                  {/* Phone Speaker Notch */}
                  <div className="w-20 h-4 bg-[#090a0e] rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-zinc-800" />
                  </div>
                  {/* Phone Screen Mockup */}
                  <div className="bg-[#08090c] rounded-[24px] p-4 text-zinc-200 min-h-[360px] flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono-tech text-zinc-400 mb-4 pb-2 border-b border-white/[0.08]">
                        <span className="font-bold text-white font-display">{project.title.split(' ')[0]}</span>
                        <span>9:41 AM</span>
                      </div>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-mono-tech">Mobile View</span>
                      <h4 className="text-base font-bold text-white font-display mt-1 leading-snug">
                        {project.tagline}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-2 leading-relaxed">
                        {project.responsiveExperience.mobileNotes}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/[0.08]">
                      <div className="w-full py-2 bg-white text-zinc-950 text-center text-xs font-semibold rounded-lg">
                        Explore Experience ↗
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Curated Editorial Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 border-t border-white/[0.08]">
            {/* The Idea */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">
                The Idea
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Challenging Industry Conventions
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-body">
                {project.theIdea}
              </p>
            </div>

            {/* Visual Direction */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">
                Visual Direction
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Material Honesty & Typography
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-body">
                {project.visualDirection}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">
              Key Features
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-200 font-body">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Experience Breakdown */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">
              Responsive Experience
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-zinc-300 font-semibold">
                  <Monitor className="w-4 h-4 text-zinc-400" />
                  <span>Desktop Architecture (1440px Baseline)</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.responsiveExperience.desktopNotes}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-zinc-300 font-semibold">
                  <Smartphone className="w-4 h-4 text-zinc-400" />
                  <span>Mobile Touchscreen Ergonomics</span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.responsiveExperience.mobileNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Intended Result */}
          <div className="space-y-3 pt-4 border-t border-white/[0.08]">
            <div className="text-xs uppercase tracking-widest text-zinc-400 font-mono-tech">
              Intended Result
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/[0.08]">
              <p className="text-base text-zinc-200 leading-relaxed italic font-body">
                "{project.intendedResult}"
              </p>
              <div className="mt-3 text-xs text-zinc-400 font-mono-tech">
                *Note: This is a concept case study exploring digital art direction for {project.category.toLowerCase()}.
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400 hover:text-white transition-colors"
            >
              ← Back to Selected Work
            </button>

            <button
              onClick={() => {
                onClose();
                onStartProject(`Custom concept inspired by ${project.title}`);
              }}
              className="px-6 py-3 bg-white text-zinc-950 font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-lg"
            >
              <span>Commission a Website Like This</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
