import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../data/portfolioData';
import { 
  Code, 
  Terminal, 
  Cpu, 
  Box, 
  Clapperboard, 
  Printer, 
  Scissors, 
  Table2,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'creative_3d' | 'media_tools'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'creative_3d', label: '3D & Fabrication' },
    { id: 'media_tools', label: 'Creative Media & Tools' },
  ] as const;

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'python':
        return <Terminal className="w-5 h-5 text-sky-400" />;
      case 'java':
        return <Code className="w-5 h-5 text-amber-400" />;
      case 'cpp':
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'cube':
        return <Box className="w-5 h-5 text-cyan-400" />;
      case 'film':
        return <Clapperboard className="w-5 h-5 text-indigo-400" />;
      case 'printer':
        return <Printer className="w-5 h-5 text-teal-400" />;
      case 'clapperboard':
        return <Scissors className="w-5 h-5 text-purple-400" />;
      case 'spreadsheet':
        return <Table2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#060913] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
              Capabilities &amp; Proficiencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Dual Core Competency: Code &amp; Creative Fabrication
            </h2>
            <p className="text-base text-slate-300">
              Balanced technical mastery spanning backend systems architecture, dimensional 3D design, hardware 3D printing, and high-productivity workflows.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill: SkillItem) => (
            <div
              key={skill.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                    {renderIcon(skill.icon)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-cyan-400 font-semibold tabular-nums">
                      {skill.experience}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              <div>
                {/* Animated proficiency indicator (realistic calibration) */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                    <span className="text-slate-400">Mastery Level</span>
                    <span className="text-cyan-400 font-bold tabular-nums">{skill.proficiency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Clean unboxed tool stack */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] text-slate-400 font-mono flex flex-wrap gap-x-1.5 gap-y-1">
                    {skill.tools.map((tool, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className="text-slate-300">{tool}</span>
                        {tIdx < skill.tools.length - 1 && <span className="text-slate-600">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Proficiency Note */}
        <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <span>Percentages reflect calibrated hands-on industry &amp; instructional proficiency over 5+ years.</span>
        </div>
      </div>
    </section>
  );
};
