import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Top Bar Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with particle canvas and glowing profile showcase */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* About Me Section with dual engineering highlights */}
        <About />

        {/* Education Timeline: M.Tech, B.Tech, 12th (94.3%) */}
        <Education />

        {/* Skills Grid: Programming & Creative 3D / Media */}
        <Skills />

        {/* Experience Section: 5+ Years Counter & Timeline */}
        <Experience />

        {/* Projects Showcase: 7 Project Types & Modal View */}
        <Projects />

        {/* Contact Section: Mau Road Agra, Phone, Email, Form */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Download CV / Professional Dossier Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}
