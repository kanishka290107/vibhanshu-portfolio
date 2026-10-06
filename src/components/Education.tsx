import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-[#080d1a] border-t border-slate-900 tech-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Academic Pedigree
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Educational Foundations &amp; Scholastic Excellence
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A strong engineering foundation spanning postgraduate specialization, rigorous undergraduate technical curriculum, and top-tier secondary academic distinction.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-cyan-400 via-sky-500/40 to-slate-800"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isFirst = index === 0;
              const isLast = index === EDUCATION_DATA.length - 1;

              return (
                <div key={index} className="relative md:pl-24">
                  {/* Timeline icon node */}
                  <div className="hidden md:flex absolute left-4 top-1 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0a1122] border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-md shadow-cyan-500/20 z-10">
                    {isFirst ? (
                      <GraduationCap className="w-4 h-4" />
                    ) : isLast ? (
                      <Award className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <BookOpen className="w-4 h-4" />
                    )}
                  </div>

                  {/* Education Card */}
                  <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 transition-all relative">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-2xl font-black text-white tracking-tight">
                            {item.degree}
                          </span>
                          <span className="text-slate-400 text-sm hidden sm:inline">—</span>
                          <span className="text-base font-semibold text-cyan-300">
                            {item.field}
                          </span>
                        </div>
                        {item.institution && (
                          <p className="text-xs text-slate-400 mt-1 font-mono">
                            {item.institution}
                          </p>
                        )}
                      </div>

                      {/* Right Tag: Special distinction / Score */}
                      <div className="shrink-0">
                        {item.highlight.includes('%') ? (
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-sm font-bold shadow-sm">
                            <Award className="w-4 h-4 text-emerald-400" />
                            <span className="tabular-nums">Class 12th: 94.3%</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                            <span>{item.period}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Key Curriculum Achievements */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Key Highlights &amp; Academic Focus
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Synthesis Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-blue-950/30 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Distinguished Academic Standard</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                From securing 94.3% in Senior Secondary board exams to earning an M.Tech postgraduate degree, Vibhanshu brings disciplined academic excellence to every project and training session.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-xs font-mono text-cyan-400 font-medium block">Verified Credentials</span>
            <span className="text-xs text-slate-400">Available in dossier</span>
          </div>
        </div>
      </div>
    </section>
  );
};
