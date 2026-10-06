import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-800/60">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-white">Vibhanshu</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Technology Professional, Educator &amp; 3D Specialist based in Agra, Uttar Pradesh. Committed to excellence in software systems, spatial design, and STEM education.
            </p>
            <div className="text-xs text-slate-400 space-y-1 pt-1 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Mau Road, K.I.M.T. Classes, Agra, UP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>+91 {PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenCvModal}
                className="text-left text-cyan-400 hover:text-cyan-300 py-1 transition-colors font-medium cursor-pointer"
              >
                Curriculum Vitae
              </button>
            </div>
          </div>

          {/* Core Competencies Quick Summary */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-2">
              Focus Domains
            </div>
            <div className="text-xs text-slate-400 space-y-1.5 font-mono">
              <div>Python · Java · C++</div>
              <div>3D Modeling &amp; Animation</div>
              <div>Additive 3D Printing (FDM)</div>
              <div>Advanced Video Post-Production</div>
              <div>Microsoft Excel Financial Models</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Vibhanshu. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              K.I.M.T. Classes, Mau Road, Agra
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
