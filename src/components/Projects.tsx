import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, ArrowUpRight, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'python', label: 'Python' },
    { id: 'java_cpp', label: 'Java & C++' },
    { id: '3d_modeling', label: '3D Modeling' },
    { id: '3d_animation', label: '3D Animation' },
    { id: '3d_printing', label: '3D Printing' },
    { id: 'video_editing', label: 'Video Editing' },
    { id: 'excel', label: 'Excel & Data' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#060913] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-3">
              Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Featured Engineering &amp; Creative Projects
            </h2>
            <p className="text-base text-slate-300">
              Demonstrated execution spanning automated software architectures, high-performance C++ geometry kernels, hard-surface 3D CAD, physical 3D prints, and video post-production.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between group border border-slate-800/80 transition-all duration-300"
            >
              <div>
                {/* Visual Thumbnail Frame */}
                <div className="relative">
                  <ProjectVisual type={project.visualType} title={project.title} />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-cyan-300">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Technologies / Tools Used */}
                  <div className="pt-3 border-t border-slate-800/70">
                    <div className="text-[11px] font-mono text-slate-400 flex flex-wrap gap-x-2 gap-y-1">
                      {project.technologies.slice(0, 4).map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-slate-300">{tech}</span>
                          {tIdx < Math.min(project.technologies.length, 4) - 1 && (
                            <span className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* View Project Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-400/50 flex items-center justify-center gap-2 transition-all cursor-pointer group-hover:shadow-sm"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
