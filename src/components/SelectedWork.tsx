import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-28 sm:py-36 relative border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/[0.08] gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
              02 · Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              Selected Work
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-body max-w-md">
            A collection of concept experiences created by Luvora Studio.
          </p>
        </div>

        {/* 4 Realistic Concept Project Showcases */}
        <div className="space-y-24 pt-16">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Visual Mockup Container (7 cols) */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <ProjectMockup project={project} />
                </div>

                {/* Editorial Metadata & Context (5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-zinc-400">
                    <span className="text-zinc-500">{project.number}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-300">{project.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-amber-400/90 font-medium">CONCEPT / 2026</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-display group-hover:text-zinc-200 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 font-body leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono-tech text-zinc-300 group-hover:text-white transition-colors">
                    <span>Inspect Case Study & Design System</span>
                    <span aria-hidden="true">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
