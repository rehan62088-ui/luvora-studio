import React from 'react';
import { SERVICES } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onStartProject: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onStartProject }) => {
  return (
    <section id="services" className="py-28 sm:py-36 relative border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 border-b border-white/[0.08] gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-widest font-mono-tech text-zinc-400">
              01 · Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
              What We Build
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-400 font-body max-w-md">
            Digital experiences designed around your business.
          </p>
        </div>

        {/* 5 Sophisticated Service Blocks */}
        <div className="divide-y divide-white/[0.07]">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              onClick={() => onStartProject(service.title)}
              className="group py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start cursor-pointer transition-all duration-300 hover:bg-white/[0.015] px-2 sm:px-4 rounded-xl -mx-2 sm:-mx-4"
            >
              {/* Numbering: Minimal typographic index */}
              <div className="lg:col-span-2">
                <span className="text-xl sm:text-2xl font-mono-tech text-zinc-500 group-hover:text-zinc-300 transition-colors">
                  {service.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-6 space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight group-hover:text-zinc-100 transition-colors flex items-center gap-3">
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-body max-w-xl">
                  {service.description}
                </p>
              </div>

              {/* Deliverables / Scope list */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <div className="text-[11px] font-mono-tech uppercase tracking-wider text-zinc-400 mb-2">
                  Scope & Focus
                </div>
                <div className="space-y-1.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-zinc-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
