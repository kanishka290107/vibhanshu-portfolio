import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  Box, 
  Video, 
  TableProperties, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      title: "Algorithmic Systems & Programming",
      icon: Code2,
      desc: "Robust computational logic in Python, Java, and C++, focusing on memory efficiency, data structures, and automation pipelines.",
      tags: ["Python 3", "Modern C++", "Core Java", "OOP Architecture"]
    },
    {
      title: "3D CAD & Additive Manufacturing",
      icon: Box,
      desc: "End-to-end spatial product creation: from sub-millimeter parametric modeling in Blender to slicer tuning and physical 3D printing.",
      tags: ["3D Modeling", "3D Printing", "Kinematic Rigging", "Tolerances"]
    },
    {
      title: "Advanced Video & Visual Storytelling",
      icon: Video,
      desc: "Multi-track timeline editing, color grading, and dynamic kinetic animation engineered for high audience retention and clarity.",
      tags: ["Premiere Pro", "DaVinci Resolve", "Color Grading", "Audio Mastering"]
    },
    {
      title: "Data Intelligence & STEM Education",
      icon: TableProperties,
      desc: "Advanced Excel modeling, Power Query transformations, and passionate pedagogy empowering 1,200+ students at K.I.M.T. Classes.",
      tags: ["Power Query", "Financial Modeling", "Classroom Mentorship", "Curricula"]
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#060913] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
            Profile &amp; Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Bridging Computation, Spatial Design, and Hands-on Education.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A versatile technologist who merges the analytical rigor of postgraduate engineering with the tactile reality of 3D digital manufacturing and classroom instruction.
          </p>
        </div>

        {/* Content Grid: Bio on Left, Key Identity Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed">
            {PERSONAL_INFO.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-400 text-sm font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Dual Engineering Rigor
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Leveraging M.Tech and B.Tech credentials to teach advanced algorithms and solve multifaceted technical problems.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-400 text-sm font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Maker &amp; Fabrication Focus
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Active experience taking concepts from digital 3D models into functional 3D printed mechanical hardware.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Identity Breakdown Sheet */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between border-b border-slate-800/80 pb-3">
                <span>Personal &amp; Professional Snapshot</span>
                <span className="text-xs font-mono text-cyan-400 font-normal">Active Status</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    Age
                  </span>
                  <span className="font-semibold text-slate-100 font-mono tabular-nums">29 Years</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    Total Experience
                  </span>
                  <span className="font-semibold text-slate-100 font-mono tabular-nums">5+ Years Professional</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    Higher Education
                  </span>
                  <div className="text-right">
                    <span className="font-semibold text-slate-100 block">M.Tech &amp; B.Tech</span>
                    <span className="text-xs text-cyan-300">Class 12th: 94.3%</span>
                  </div>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/50">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    Current Base
                  </span>
                  <div className="text-right">
                    <span className="font-semibold text-slate-100 block">Agra, Uttar Pradesh</span>
                    <span className="text-xs text-slate-400">Mau Road, K.I.M.T. Classes</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-slate-400 mb-2">Core Technical Stack:</div>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-300 font-mono">
                    <span>Python</span>
                    <span className="text-slate-600">/</span>
                    <span>Java</span>
                    <span className="text-slate-600">/</span>
                    <span>C++</span>
                    <span className="text-slate-600">/</span>
                    <span>3D CAD</span>
                    <span className="text-slate-600">/</span>
                    <span>Additive 3D Print</span>
                    <span className="text-slate-600">/</span>
                    <span>Video Suite</span>
                    <span className="text-slate-600">/</span>
                    <span>Excel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{comp.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">{comp.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap gap-x-2 gap-y-1 font-mono">
                  {comp.tags.map((tag, tIdx) => (
                    <React.Fragment key={tIdx}>
                      <span>{tag}</span>
                      {tIdx < comp.tags.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
