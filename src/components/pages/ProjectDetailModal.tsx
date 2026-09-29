import React from 'react';
import { Project } from '../../types';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { JcbLogo } from '../common/JcbLogo';
import { X, ArrowRight, MapPin, Calendar, Layers, ShieldCheck } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscussSimilar: (projectTitle: string) => void;
  onSelectProject: (p: Project) => void;
  allProjects: Project[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onDiscussSimilar,
  onSelectProject,
  allProjects,
}) => {
  if (!project) return null;

  const related = allProjects
    .filter((p) => p.id !== project.id && (p.sector === project.sector || p.contractType === project.contractType))
    .slice(0, 2);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm flex justify-center p-3 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl my-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-white/95 border-b border-neutral-200 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <JcbLogo height="28px" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D61B26] font-semibold pl-3 border-l border-neutral-300">
              CASE RECORD
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-xs font-mono text-neutral-500 uppercase">
              {project.sector}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close project detail"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image */}
        <div className="relative h-80 sm:h-96 md:h-[450px] w-full">
          <ArchitecturalImage
            src={project.heroImage}
            alt={project.title}
            categoryLabel={project.sector}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 z-10">
            <p className="text-xs font-mono tracking-widest text-red-300 uppercase mb-1">
              {project.scope}
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 md:p-10 space-y-12">
          {/* Metadata Bar - Zero Pill Discipline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-neutral-50 border border-neutral-200">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                Location
              </p>
              <p className="text-sm font-semibold text-neutral-950">{project.location}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-600" />
                Year Delivered
              </p>
              <p className="text-sm font-semibold text-neutral-950">{project.year}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-red-600" />
                Contract Model
              </p>
              <p className="text-sm font-semibold text-neutral-950">{project.contractType}</p>
            </div>

            <div>
              <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                Sector
              </p>
              <p className="text-sm font-semibold text-neutral-950 capitalize">{project.sector}</p>
            </div>
          </div>

          {/* Narrative & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  PROJECT OVERVIEW
                </h3>
                <p className="text-base text-neutral-700 leading-relaxed font-light">
                  {project.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-5 bg-neutral-50 border border-neutral-200 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
                    THE CHALLENGE
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-5 bg-neutral-50 border border-neutral-200 space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-950 font-semibold">
                    THE JCB SOLUTION
                  </h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Tags without pills */}
              <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                <span className="font-mono text-neutral-400 uppercase">Tags:</span>
                {project.tags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className="text-neutral-800 font-medium">{tag}</span>
                    {i < project.tags.length - 1 && <span className="text-neutral-300">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Key stats & metrics sidebar */}
            <div className="lg:col-span-4 p-6 bg-neutral-50 border border-neutral-200 space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-200 pb-3">
                KEY PERFORMANCE METRICS
              </h4>
              <div className="space-y-4">
                {project.keyStats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-xs text-neutral-500 font-mono">{stat.label}</p>
                    <p className="text-xl font-display font-bold text-neutral-950 tabular-nums">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <button
                  onClick={() => {
                    onDiscussSimilar(project.title);
                    onClose();
                  }}
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Large image gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                ARCHITECTURAL & PROGRESS DOCUMENTATION
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((imgUrl, idx) => (
                  <div key={idx} className="h-56">
                    <ArchitecturalImage
                      src={imgUrl}
                      alt={`${project.title} photographic view ${idx + 1}`}
                      aspectRatio="4/3"
                      className="w-full h-full shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related projects */}
          {related.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  RELATED MAJOR PROJECTS
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((rp) => (
                  <div
                    key={rp.id}
                    onClick={() => onSelectProject(rp)}
                    className="group cursor-pointer p-4 bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-colors flex gap-4 items-center"
                  >
                    <div className="w-24 h-20 shrink-0">
                      <ArchitecturalImage
                        src={rp.heroImage}
                        alt={rp.title}
                        aspectRatio="4/3"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[11px] font-mono uppercase text-red-600 font-semibold">
                        {rp.sector}
                      </p>
                      <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-neutral-500">{rp.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
