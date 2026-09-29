import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/jcbData';
import { Project, Sector } from '../../types';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { ArrowUpRight, Search } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onOpenStartProject: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenStartProject,
}) => {
  const [activeSector, setActiveSector] = useState<Sector>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sectors: { id: Sector; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'institutional', label: 'Institutional' },
    { id: 'multi-residential', label: 'Multi-Residential' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesSector = activeSector === 'all' || p.sector === activeSector;
    const matchesQuery =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSector && matchesQuery;
  });

  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
            <span>PORTFOLIO & CASE STUDIES</span>
            <span>·</span>
            <span>CANADIAN CONSTRUCTION RECORD</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            OUR PROJECTS. <br />
            <span className="text-neutral-500">OUR KNOW-HOW.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            A curated showcase of major commercial, institutional, industrial, and
            multi-residential developments executed with precision.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. FILTER & SEARCH CONTROL BAR */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-5 px-6 md:px-10 bg-white border-b border-neutral-200 sticky top-[65px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Interactive Filter Tabs (Clean light segmented controls) */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-thin">
            {sectors.map((sec) => {
              const isActive = activeSector === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSector(sec.id)}
                  className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? 'bg-neutral-950 border-neutral-950 text-white font-semibold shadow-sm'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, city, tag..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-xs text-neutral-950"
            />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. VISUAL PROJECT GRID */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
            <span>
              SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} PROJECTS
            </span>
            <span>CLICK ANY PROJECT CARD FOR FULL CASE STUDY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image container with subtle hover zoom & arrow */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden border-b border-neutral-100">
                    <ArchitecturalImage
                      src={project.heroImage}
                      alt={project.title}
                      categoryLabel={project.sector}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/95 border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-red-600" />
                    </div>
                  </div>

                  {/* Metadata and Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <span className="uppercase text-red-600 font-semibold">
                        {project.sector}
                      </span>
                      <span>·</span>
                      <span>{project.location}</span>
                      <span>·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>{project.contractType}</span>
                  <span className="text-neutral-900 group-hover:text-red-600 font-medium transition-colors">
                    Explore Case →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center space-y-4 bg-white border border-neutral-200 p-8 shadow-sm">
              <p className="text-lg font-display text-neutral-950">No projects found</p>
              <p className="text-xs text-neutral-500">
                Try adjusting your search criteria or select 'All Projects'.
              </p>
              <button
                onClick={() => {
                  setActiveSector('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold uppercase text-red-600 border border-red-300 hover:bg-red-50"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 4. CALL TO ACTION */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 px-6 md:px-10 bg-white text-center border-t border-neutral-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950">
            Have a Complex Project in Concept?
          </h2>
          <p className="text-sm text-neutral-600">
            Learn how JCB can execute your project with cost certainty, BIM
            constructability modeling, and flawless site supervision.
          </p>
          <button
            onClick={onOpenStartProject}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors cursor-pointer shadow-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
