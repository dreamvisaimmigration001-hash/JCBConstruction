import React, { useState } from 'react';
import { EXPERTISE_DATA, PROJECTS_DATA } from '../../data/jcbData';
import { Project } from '../../types';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { Check, ArrowUpRight } from 'lucide-react';

interface ExpertisePageProps {
  onOpenStartProject: () => void;
  onSelectProject: (project: Project) => void;
}

export const ExpertisePage: React.FC<ExpertisePageProps> = ({
  onOpenStartProject,
  onSelectProject,
}) => {
  const [selectedDisciplineId, setSelectedDisciplineId] = useState(
    EXPERTISE_DATA[0].id
  );

  const active =
    EXPERTISE_DATA.find((e) => e.id === selectedDisciplineId) || EXPERTISE_DATA[0];

  const relatedProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
            <span>DISCIPLINES & TECHNICAL RIGOR</span>
            <span>·</span>
            <span>JCB CAPABILITIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            EXPERTISE <br />
            <span className="text-neutral-500">WITHOUT LIMITS.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            From deep foundations and mass timber structures to BIM digital twins and
            heritage restoration, JCB delivers eight specialized engineering disciplines.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. DISCIPLINE INDEX & SELECTOR */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-5 px-6 md:px-10 bg-white border-b border-neutral-200 sticky top-[65px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-thin">
          <div className="flex items-center gap-2 min-w-[700px]">
            {EXPERTISE_DATA.map((exp) => {
              const isSelected = exp.id === selectedDisciplineId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedDisciplineId(exp.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                    isSelected
                      ? 'bg-neutral-950 border-neutral-950 text-white font-semibold shadow-sm'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  <span className="text-red-500 mr-2 font-bold">{exp.code}.</span>
                  <span>{exp.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. SELECTED DISCIPLINE DEEP DIVE */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Visual */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative p-2 bg-white border border-neutral-200 shadow-xl">
                <div className="relative h-96 sm:h-[460px] w-full">
                  <ArchitecturalImage
                    src={active.heroImage}
                    alt={active.title}
                    categoryLabel={active.category}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6 bg-white border border-neutral-200 space-y-3 shadow-sm">
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                  KEY DELIVERABLES
                </p>
                <div className="space-y-2">
                  {active.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Information & Process */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-red-600 font-bold">
                    DISCIPLINE {active.code}
                  </span>
                  <span className="text-neutral-300">/</span>
                  <span className="text-xs font-mono text-neutral-500 uppercase">
                    {active.category}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
                  {active.title}
                </h2>
              </div>

              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-light">
                {active.description}
              </p>

              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                  TECHNICAL CAPABILITIES & METHODOLOGY
                </h3>
                <div className="space-y-3">
                  {active.keyAspects.map((aspect) => (
                    <div
                      key={aspect}
                      className="p-3.5 bg-white border border-neutral-200 shadow-sm flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-red-600 shrink-0 mt-2" />
                      <span className="text-xs sm:text-sm text-neutral-700">{aspect}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenStartProject}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request Scope Review</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Related Case Studies */}
          <div className="pt-16 border-t border-neutral-200 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                PROVEN EXECUTION · SELECTED CASE STUDIES
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all p-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="h-44 w-full overflow-hidden border border-neutral-100">
                      <ArchitecturalImage
                        src={project.heroImage}
                        alt={project.title}
                        aspectRatio="4/3"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <p className="text-[11px] font-mono uppercase text-red-600 font-semibold mb-1">
                        {project.sector}
                      </p>
                      <h4 className="text-base font-semibold text-neutral-950 group-hover:text-red-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-neutral-600 line-clamp-2 mt-1">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span>{project.location}</span>
                    <span className="text-neutral-900 group-hover:text-red-600 font-medium">
                      View Project →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
