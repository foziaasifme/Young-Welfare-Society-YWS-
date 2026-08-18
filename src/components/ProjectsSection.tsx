import React, { useState } from 'react';
import { Project, PageTab } from '../types';
import { MapPin, Calendar, ArrowRight, X, CheckCircle, Sparkles } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  setTab: (tab: PageTab) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, setTab }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Show top 3 or 4 projects on home
  const featured = projects.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-emerald-700 font-semibold text-xs uppercase tracking-widest bg-emerald-100/70 px-3.5 py-1.5 rounded-full">
              Community Initiatives
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Featured Projects & Programs
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Explore our current welfare, youth development, and educational support programs operating across Punjab.
            </p>
          </div>
          <button
            onClick={() => setTab('projects')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(proj)}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-gray-200">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-900/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {proj.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {proj.status}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> {proj.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" /> {proj.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
                <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {proj.beneficiaries || "Community Impact"}
                </span>
                <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="relative h-64 bg-gray-900 shrink-0">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-emerald-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {selectedProject.category} • {selectedProject.status}
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" /> {selectedProject.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-emerald-600" /> {selectedProject.date}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>

              <p className="text-gray-700 text-base leading-relaxed">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              {selectedProject.beneficiaries && (
                <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wide">Project Reach</h4>
                    <p className="text-sm text-emerald-800 font-medium">{selectedProject.beneficiaries}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
