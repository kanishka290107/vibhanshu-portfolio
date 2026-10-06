import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#080d1a] border-t border-slate-900 tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            5+ Years of Professional Experience &amp; Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A track record of engineering software solutions, directing advanced technical education, producing digital media, and prototyping functional 3D hardware.
          </p>
        </div>

        {/* Large Experience Feature Counter Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 mb-16 relative overflow-hidden border border-cyan-500/20">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Massive 5+ Year Counter Display */}
            <div className="lg:col-span-5 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-slate-800 pb-8 lg:pb-0 lg:pr-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 tabular-nums">
                  5+
                </span>
                <span className="text-xl sm:text-2xl font-bold text-slate-300">
                  Years Active
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                Combining high-level programming pedagogy with practical 3D additive manufacturing and multimedia engineering.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-cyan-300">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  K.I.M.T. Classes, Mau Road, Agra
                </span>
              </div>
            </div>

            {/* Core Practice Areas Summary */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-cyan-400 text-sm font-semibold mb-1">
                  Computer &amp; STEM Education
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Mentored 1,200+ students in structured coding (Python, Java, C++) and modern digital technology.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-cyan-400 text-sm font-semibold mb-1">
                  3D Spatial &amp; Additive Workflow
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Designed, sliced, and fabricated functional mechanical hardware components with calibrated tolerances.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-cyan-400 text-sm font-semibold mb-1">
                  Digital Media Post-Production
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Edited and mastered hundreds of hours of high-engagement video tutorials, reels, and animations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-cyan-400 text-sm font-semibold mb-1">
                  Enterprise Data Modeling
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Constructed automated Microsoft Excel Power Query reconciliation and analytics engines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline of Experience */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 relative transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 mt-1">
                    <span className="font-medium text-slate-200">{exp.organization}</span>
                    <span className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-400 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6 space-y-2">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies strip */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                <span className="text-slate-500 font-sans">Technologies:</span>
                {exp.technologies.map((tech, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="text-slate-300">{tech}</span>
                    {tIdx < exp.technologies.length - 1 && <span className="text-slate-600">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
