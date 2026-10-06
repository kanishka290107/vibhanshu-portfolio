import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, FileText } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, EXPERIENCE_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="glass-panel relative w-full max-w-3xl my-8 rounded-3xl p-6 sm:p-10 bg-[#0c1222] border border-cyan-500/30 shadow-2xl text-left max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
            <FileText className="w-4 h-4" />
            <span>Curriculum Vitae / Professional Dossier</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div id="printable-cv" className="space-y-8 text-slate-200 text-sm">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                Technology Professional &amp; Creative Digital Expert
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                5+ Years Experience · Age 29 · M.Tech &amp; B.Tech Dual Engineering
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-300 font-mono sm:text-right">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-rose-400" />
                <span>Mau Road, K.I.M.T. Classes, Agra, UP</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>+91 {PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3 h-3 text-sky-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              Executive Profile
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Distinguished technology specialist and STEM educator with 5+ years of demonstrable mastery in computer systems programming (Python, Java, Modern C++), parametric 3D CAD modeling, additive 3D fabrication, and advanced Microsoft Excel data architecture. Proven educator having instructed over 1,200 students at K.I.M.T. Classes in Agra, Uttar Pradesh.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              Education &amp; Academic Honors
            </h3>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-bold text-white text-sm">{edu.degree}</span>
                      <span className="text-slate-400 text-xs ml-2">— {edu.field}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {edu.highlight}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills Matrix */}
          <div>
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1 text-xs">
                  Programming Languages:
                </span>
                <span className="text-slate-300 font-mono">
                  Python (NumPy, Pandas, FastAPI), Java (OOP, Collections), C++ (STL, C++20)
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1 text-xs">
                  3D &amp; Digital Manufacturing:
                </span>
                <span className="text-slate-300 font-mono">
                  Blender 3D Modeling, Kinematic Animation, Cura/PrusaSlicer, FDM 3D Printing
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1 text-xs">
                  Post-Production &amp; Video:
                </span>
                <span className="text-slate-300 font-mono">
                  Adobe Premiere Pro, DaVinci Resolve, Motion Design, Color Grading, Audio Mastering
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white block mb-1 text-xs">
                  Productivity &amp; Data:
                </span>
                <span className="text-slate-300 font-mono">
                  Advanced Microsoft Excel, Power Query, Dynamic Arrays, VBA Automation
                </span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-3">
              Professional Experience (5+ Years)
            </h3>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-cyan-500/40 pl-4 py-1">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-xs font-mono text-cyan-300">{exp.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {exp.organization} · {exp.location}
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            For academic verification or project engagement, contact Vibhanshu at <span className="text-cyan-400 font-mono">{PERSONAL_INFO.email}</span>
          </p>
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download / Print CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};
