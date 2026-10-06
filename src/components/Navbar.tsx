import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Identify active section
      const sections = navLinks.map((link) => link.id);
      const scrollPos = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center text-xl font-bold tracking-tight text-white hover:text-cyan-400 transition-colors shrink-0"
          >
            <span>Vibhanshu</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 group-hover:scale-125 transition-transform" />
          </a>

          {/* Zone 2: 4-7 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors hover:text-cyan-400 whitespace-nowrap ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-lg transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download CV</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg transition-all shadow-sm shadow-cyan-500/20 cursor-pointer whitespace-nowrap"
            >
              <span>Contact</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCvModal}
              className="sm:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
              aria-label="Download CV"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-slate-800 px-6 pt-3 pb-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 text-base font-medium transition-colors ${
                  activeSection === link.id ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col sm:hidden gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCvModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg hover:bg-slate-800"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-lg"
              >
                <span>Contact Vibhanshu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
