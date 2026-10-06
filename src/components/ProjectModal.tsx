import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, CheckCircle, Cpu, Layers, ExternalLink, Zap } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="glass-panel relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-[#090f1e] border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-700/80 hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
          <span>{project.categoryLabel}</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300">Vibhanshu Engineering Showcase</span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 pr-10">
          {project.title}
        </h3>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
          {project.metrics.map((metric, mIdx) => (
            <div key={mIdx}>
              <div className="text-[11px] text-slate-400 font-mono">{metric.label}</div>
              <div className="text-base sm:text-lg font-bold font-mono text-cyan-300 tabular-nums">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Project Architecture &amp; Implementation
            </h4>
            <p className="text-slate-300/90">{project.fullDescription}</p>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
            <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              Verified Real-World Impact
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">{project.impact}</p>
          </div>
        </div>

        {/* Tools and Technologies */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Tool Stack &amp; Protocols
          </h4>
          <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-slate-300">
            {project.technologies.map((tech, tIdx) => (
              <React.Fragment key={tIdx}>
                <span className="text-cyan-300">{tech}</span>
                {tIdx < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Designed &amp; Fabricated in Agra, UP
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
