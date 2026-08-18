import React, { useState } from 'react';
import { Project } from '../types';
import { Search, MapPin, Calendar, ArrowRight, X, Sparkles, Filter } from 'lucide-react';

interface ProjectsPageProps {
  projects: Project[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Youth', 'Education', 'Community', 'Relief', 'Awareness'];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-emerald-950 text-white py-16 sm:py-24 hero-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-950/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-emerald-300 font-semibold text-xs uppercase tracking-widest bg-emerald-800/80 px-3.5 py-1.5 rounded-full">
            Welfare & Development Initiatives
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            YWS Projects & Programs
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-2xl mx-auto">
            Explore our community welfare, youth empowerment, and educational support programs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        {/* Filters & Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title or location..."
              className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />
          </div>
        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200/80">
            <h3 className="text-xl font-bold text-gray-800">No projects found</h3>
            <p className="text-gray-500 text-sm mt-1">Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
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
                    <div className="absolute top-3 left-3 bg-emerald-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {proj.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 text-emerald-900 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {proj.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-500 flex-wrap">
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

                    {(proj.donorPartner || proj.totalBudget) && (
                      <div className="pt-2 flex flex-wrap gap-2 text-xs">
                        {proj.donorPartner && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-md">
                            <strong>Partner:</strong> {proj.donorPartner}
                          </span>
                        )}
                        {proj.totalBudget && (
                          <span className="bg-yellow-50 text-yellow-800 border border-yellow-100 px-2 py-0.5 rounded-md">
                            <strong>Budget:</strong> {proj.totalBudget}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md max-w-[200px] truncate" title={proj.beneficiaries}>
                    {proj.beneficiaries || "Community Impact"}
                  </span>
                  <button className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <div className="relative h-64 shrink-0 bg-gray-900">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-emerald-900/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {selectedProject.category} • {selectedProject.status}
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
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

              {/* Enhanced details metadata block */}
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-gray-800 uppercase tracking-widest border-b border-gray-200 pb-2">
                  Project Ledger Specifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                  {selectedProject.donorPartner && (
                    <div>
                      <span className="text-gray-500 block">Donor/Partner</span>
                      <span className="font-bold text-gray-900">{selectedProject.donorPartner}</span>
                    </div>
                  )}
                  {selectedProject.totalBudget && (
                    <div>
                      <span className="text-gray-500 block">Total Budget Allocation</span>
                      <span className="font-bold text-emerald-900">{selectedProject.totalBudget}</span>
                    </div>
                  )}
                  {selectedProject.beneficiaries && (
                    <div>
                      <span className="text-gray-500 block">Target Beneficiaries</span>
                      <span className="font-bold text-emerald-950">{selectedProject.beneficiaries}</span>
                    </div>
                  )}
                </div>
              </div>
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
    </div>
  );
};
