import React from 'react';
import { PageId, Project } from '../../types';
import {
  JCB_STATS,
  SERVICES_DATA,
  EXPERTISE_DATA,
  PROJECTS_DATA,
  CORE_VALUES,
} from '../../data/jcbData';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenStartProject: () => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenStartProject,
  onSelectProject,
}) => {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div className="space-y-0 text-neutral-900 bg-white">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO SECTION (Classic, Clean, High-Impact Full-Bleed Architectural) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="relative min-h-[88vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-10 overflow-hidden bg-neutral-900">
        {/* Full-bleed background photo with natural darkened scrim */}
        <div className="absolute inset-0 z-0">
          <ArchitecturalImage
            src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=2000&q=85"
            alt="Canadian high-performance commercial construction and structural engineering"
            className="w-full h-full object-cover"
            showOverlayScrim={false}
          />
          <div className="absolute inset-0 bg-neutral-950/65" />
        </div>

        {/* Small top label */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 border border-white/20 text-xs font-mono tracking-widest text-neutral-200 uppercase">
            <span className="w-2 h-2 bg-[#D61B26]" />
            <span>JCB CONSTRUCTION CANADA · EST. 1985</span>
          </div>
        </div>

        {/* Core Hero Typography */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-white leading-none">
              BUILDING <br />
              <span className="text-neutral-300">WHAT'S NEXT.</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-normal max-w-2xl leading-relaxed">
              Major construction projects, managed with precision from concept to
              completion.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#D61B26] hover:bg-white hover:text-neutral-950 transition-colors duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>Explore Our Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenStartProject}
                className="px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white border-2 border-white hover:bg-white hover:text-neutral-950 transition-colors duration-200 cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with subtle scroll indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-neutral-300 pt-6 border-t border-white/20">
          <div className="flex items-center gap-6">
            <span className="font-semibold text-white">TORONTO & CANADA</span>
            <span>·</span>
            <span>100+ PROFESSIONALS</span>
            <span>·</span>
            <span>ISO 9001:2015</span>
          </div>

          <div className="flex items-center gap-2 animate-bounce">
            <span className="text-[11px] uppercase tracking-widest text-neutral-300">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-4 h-4 text-[#D61B26]" />
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. INTRODUCTION SECTION (Clean, Simple Editorial Two-Column Layout) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
                ABOUT JCB
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-neutral-950 tracking-tight leading-tight">
                WE BUILD SOLUTIONS.
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-neutral-800 font-medium leading-relaxed">
              “Specializing in the management and execution of major construction
              projects, JCB Construction Canada delivers expansions, renovations,
              redevelopments and new construction for industrial, commercial,
              multi-residential and institutional clients.”
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Founded in 1985, our approach pairs four decades of seasoned construction
              methodology with modern Building Information Modeling (BIM) and mass timber
              sustainability. We operate as an integrated partner to owners, architects, and
              corporate developers across Canada.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-neutral-900 border-2 border-neutral-900 hover:bg-[#D61B26] hover:border-[#D61B26] hover:text-white transition-colors cursor-pointer"
              >
                <span>About JCB</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-96 sm:h-[460px] w-full shadow-lg overflow-hidden border border-neutral-200">
              <ArchitecturalImage
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Canadian architectural facade construction"
                aspectRatio="4/3"
                className="w-full h-full"
                categoryLabel="ARCHITECTURAL EXECUTION"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. STATISTICS SECTION (Simple, Clean, Full-Width Strip) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-16 px-6 md:px-10 bg-neutral-100 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            {JCB_STATS.map((stat, idx) => (
              <div key={stat.label} className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} space-y-1`}>
                <p className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#D61B26] tracking-tight tabular-nums">
                  {stat.value}
                </p>
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 4. SERVICES SECTION (Simple 3-Column Clean Cards) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
                SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
                ONE PROJECT. THE RIGHT APPROACH.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D61B26] hover:text-neutral-950 transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="group bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden">
                    <ArchitecturalImage
                      src={srv.heroImage}
                      alt={srv.title}
                      aspectRatio="16/9"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#D61B26] text-white text-xs font-mono font-bold px-2 py-1">
                      {srv.code}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-display font-bold text-neutral-950 group-hover:text-[#D61B26] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-4">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D61B26] hover:text-neutral-950 transition-colors pt-3"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 5. EXPERTISE SECTION (Simple, Clean 4-Column Grid) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
                EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
                EXPERTISE THAT MOVES PROJECTS FORWARD.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('expertise')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D61B26] hover:text-neutral-950 transition-colors"
            >
              <span>Explore Our Expertise</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISE_DATA.map((exp) => (
              <div
                key={exp.id}
                onClick={() => onNavigate('expertise')}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <ArchitecturalImage
                      src={exp.heroImage}
                      alt={exp.title}
                      aspectRatio="16/9"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <p className="text-[11px] font-mono text-[#D61B26] font-bold uppercase">
                      DISCIPLINE {exp.code}
                    </p>
                    <h3 className="text-base font-display font-bold text-neutral-950 group-hover:text-[#D61B26] transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase text-neutral-700 group-hover:text-[#D61B26] transition-colors mt-2">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 6. FEATURED PROJECTS (Simple, Clean 3-Column Portfolio) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
                OUR PROJECTS REFLECT OUR KNOW-HOW.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D61B26] hover:text-neutral-950 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <ArchitecturalImage
                      src={project.heroImage}
                      alt={project.title}
                      categoryLabel={project.sector}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/95 border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-[#D61B26]" />
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <span className="uppercase text-[#D61B26] font-bold">
                        {project.sector}
                      </span>
                      <span>·</span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-neutral-950 group-hover:text-[#D61B26] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>{project.contractType}</span>
                  <span className="text-neutral-950 group-hover:text-[#D61B26] font-bold transition-colors">
                    Explore Case →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 7. WHY JCB (Clean 3-Column Core Principles) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
              WHY JCB
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              BUILT AROUND YOUR AMBITIONS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CORE_VALUES.map((val) => (
              <div key={val.title} className="p-8 bg-neutral-800/80 border border-neutral-700/80 space-y-4">
                <span className="text-xs font-mono text-[#D61B26] font-bold">
                  {val.number}
                </span>

                <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                  {val.title}
                </h3>

                <blockquote className="text-sm font-medium text-neutral-200 italic border-l-2 border-[#D61B26] pl-3 py-1 leading-snug">
                  “{val.quote}”
                </blockquote>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 8. FINAL CTA BANNER (Clean, Direct Full-Width Background) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="relative py-24 lg:py-32 px-6 md:px-10 bg-neutral-950 overflow-hidden text-center text-white">
        <div className="absolute inset-0 z-0">
          <ArchitecturalImage
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Canadian architectural skyscraper and urban skyline"
            className="w-full h-full object-cover"
            showOverlayScrim={false}
          />
          <div className="absolute inset-0 bg-neutral-950/75" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
            START A CONVERSATION
          </span>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            HAVE A PROJECT IN MIND?
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            Let's build the future together.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenStartProject}
              className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#D61B26] hover:bg-white hover:text-neutral-950 transition-colors duration-200 cursor-pointer shadow-lg inline-flex items-center gap-3"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
