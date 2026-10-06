import React, { useState, useEffect } from 'react';
import { ParticleCanvas } from './ParticleCanvas';
import { ArrowDown, Sparkles, MapPin, Award, Terminal, Layers, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('vibhanshu_profile_photo') || '/vibhanshu.jpeg';
  });
  const [hasImgError, setHasImgError] = useState(false);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          setHasImgError(false);
          try {
            localStorage.setItem('vibhanshu_profile_photo', result);
          } catch {
            // Storage quota fallback
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setCustomPhoto('/vibhanshu.jpeg');
    setHasImgError(false);
    localStorage.removeItem('vibhanshu_profile_photo');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-pattern"
    >
      {/* Dynamic interactive particle mesh */}
      <ParticleCanvas />

      {/* Atmospheric lighting glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Quiet status line */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-300 mb-6 backdrop-blur-sm shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="font-medium text-slate-200">Technology Professional & Educator</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400 inline" />
                Agra, UP
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-balance">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">Vibhanshu</span> — Technology Professional &amp; Creative Digital Expert.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              5+ years of experience in programming, 3D modeling, animation, 3D printing, advanced editing, and digital technology.
            </p>

            {/* Two Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollTo('skills')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View My Skills</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/50 transition-all duration-200 shadow-sm hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Metric proof points bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 sm:grid-cols-4 gap-4 w-full">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400 tabular-nums">5+</div>
                <div className="text-xs text-slate-400 mt-0.5">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-sky-400 tabular-nums">M.Tech</div>
                <div className="text-xs text-slate-400 mt-0.5">&amp; B.Tech Dual</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">94.3%</div>
                <div className="text-xs text-slate-400 mt-0.5">12th Score</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400 tabular-nums">8+</div>
                <div className="text-xs text-slate-400 mt-0.5">Core Disciplines</div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Image Showcase with Glowing Gradient Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative ambient glow aura */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />

              {/* Main glowing container */}
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-b from-cyan-400 via-sky-600/40 to-slate-800/80 shadow-2xl shadow-cyan-950/50">
                <div className="relative rounded-[22px] bg-[#0b1222] overflow-hidden p-6">
                  {/* Subtle top subtle shine */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />

                  {/* Profile Visual Graphic Canvas */}
                  <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-slate-900 to-[#070b14] border border-cyan-500/20 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                    {/* Concentric tech orbit rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-64 h-64 rounded-full border border-cyan-500/10 animate-spin [animation-duration:30s]" />
                      <div className="absolute w-48 h-48 rounded-full border border-sky-400/15 border-dashed animate-spin [animation-duration:20s] [animation-direction:reverse]" />
                      <div className="absolute w-36 h-36 rounded-full border border-blue-500/10" />
                    </div>

                    {/* Central Professional Avatar Representation */}
                    <div className="relative z-10 w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20 mb-4 group/avatar">
                      <div className="relative w-full h-full rounded-full bg-[#080e1c] flex items-center justify-center overflow-hidden border-2 border-slate-950">
                        {customPhoto && !hasImgError ? (
                          <img
                            src={customPhoto}
                            alt="Vibhanshu Profile"
                            onError={() => {
                              if (customPhoto === '/vibhanshu.jpeg') {
                                setCustomPhoto('/vibhanshu.jpg');
                              } else {
                                setHasImgError(true);
                              }
                            }}
                            className="w-full h-full object-cover object-center"
                          />
                        ) : (
                          /* High-fidelity stylized SVG tech portrait representation */
                          <svg
                            viewBox="0 0 120 120"
                            className="w-28 h-28 text-cyan-300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="60" cy="60" r="58" fill="url(#avatarGradient)" />
                            <circle cx="60" cy="48" r="22" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
                            <path
                              d="M60 28C51.1634 28 44 35.1634 44 44C44 46.5 44.6 48.8 45.6 50.8C47.2 46.5 51.5 43.5 56.5 43.5C61.5 43.5 65.8 46.5 67.4 50.8C68.4 48.8 69 46.5 69 44C69 35.1634 65.8366 28 60 28Z"
                              fill="#0ea5e9"
                            />
                            <path
                              d="M26 102C26 86.536 38.536 74 54 74H66C81.464 74 94 86.536 94 102V106H26V102Z"
                              fill="#1e293b"
                              stroke="#0284c7"
                              strokeWidth="2"
                            />
                            <path
                              d="M50 74L60 88L70 74"
                              stroke="#38bdf8"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <circle cx="60" cy="48" r="3" fill="#38bdf8" />
                            <defs>
                              <linearGradient id="avatarGradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#0f172a" />
                                <stop offset="1" stopColor="#0284c7" stopOpacity="0.3" />
                              </linearGradient>
                            </defs>
                          </svg>
                        )}

                        {/* Interactive Click-to-Upload Overlay */}
                        <label
                          htmlFor="avatar-upload"
                          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center cursor-pointer text-cyan-300"
                          title="Click to add or change your photo"
                        >
                          <Camera className="w-5 h-5 mb-0.5 text-cyan-400" />
                          <span className="text-[10px] font-semibold tracking-wide">
                            {customPhoto ? 'Change' : 'Add Photo'}
                          </span>
                        </label>
                        <input
                          id="avatar-upload"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                          aria-label="Upload profile photo"
                        />
                      </div>

                      {/* Small badge button to trigger photo upload */}
                      <label
                        htmlFor="avatar-upload"
                        className="absolute bottom-0 right-0 p-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md cursor-pointer border-2 border-slate-900 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center"
                        title="Upload your photo"
                      >
                        <Camera className="w-3.5 h-3.5" />
                      </label>
                    </div>

                    {customPhoto && (
                      <button
                        onClick={handleResetPhoto}
                        className="relative z-10 text-[10px] text-slate-400 hover:text-rose-400 -mt-2 mb-3 underline cursor-pointer transition-colors"
                      >
                        Reset to default avatar
                      </button>
                    )}

                    {/* Name & Credentials */}
                    <div className="relative z-10">
                      <h2 className="text-xl font-bold text-white tracking-wide flex items-center justify-center gap-1.5">
                        <span>Vibhanshu</span>
                        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400" />
                      </h2>
                      <p className="text-xs text-cyan-300 font-medium tracking-wide uppercase mt-0.5">
                        M.Tech · B.Tech
                      </p>
                      <p className="text-xs text-slate-400 mt-1 max-w-[240px]">
                        Educator &amp; Technical Mentor at K.I.M.T. Classes
                      </p>
                    </div>

                    {/* Corner badge 1: 5+ Yrs */}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-cyan-300 flex items-center gap-1 shadow-sm">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>5+ Yrs Exp</span>
                    </div>

                    {/* Corner badge 2: 3D & Code */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-sky-300 flex items-center gap-1 shadow-sm">
                      <Layers className="w-3 h-3 text-sky-400" />
                      <span>3D &amp; Code</span>
                    </div>

                    {/* Bottom pill: Location */}
                    <div className="absolute bottom-3 inset-x-4 py-1.5 px-3 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-rose-400" />
                        Agra, Uttar Pradesh
                      </span>
                      <span className="text-emerald-400 font-medium">● Available</span>
                    </div>
                  </div>

                  {/* Profile Card Footer Summary */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <span>Specialization:</span>
                      <span className="text-slate-200 font-medium block">Software &amp; 3D Fabrication</span>
                    </div>
                    <button
                      onClick={onOpenCvModal}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Dossier</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
