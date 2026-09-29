import React, { useState } from 'react';
import { TIMELINE_DATA, CORE_VALUES, JCB_STATS } from '../../data/jcbData';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  onOpenStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenStartProject }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(TIMELINE_DATA[0]);

  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D61B26] font-bold">
            <span>ABOUT JCB CONSTRUCTION CANADA</span>
            <span>·</span>
            <span>ESTABLISHED 1985</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            WE BUILD MORE <br />
            <span className="text-neutral-500">THAN BUILDINGS.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            We build solutions for ambitious projects.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. COMPANY OVERVIEW */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#D61B26] uppercase font-bold">
              THE COMPANY
            </span>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight">
              A LEADING CANADIAN GENERAL CONTRACTOR & CONSTRUCTION MANAGER.
            </h2>

            <p className="text-base text-neutral-700 leading-relaxed font-light">
              JCB specializes in managing and executing major construction projects across
              industrial, commercial, multi-residential and institutional sectors.
            </p>

            <p className="text-sm text-neutral-600 leading-relaxed">
              With more than 100 dedicated employees, JCB has developed an enduring
              reputation for engineering discipline, transparent open-book partnerships, and
              unwavering delivery standards.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tabular-nums">
                  100+
                </p>
                <p className="text-xs font-mono uppercase text-neutral-500">
                  Specialized Employees
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tabular-nums">
                  Canada-Wide
                </p>
                <p className="text-xs font-mono uppercase text-neutral-500">
                  Project Execution
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-2 bg-white border border-neutral-200 shadow-xl">
              <div className="h-96 sm:h-[460px] w-full">
                <ArchitecturalImage
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                  alt="JCB Construction Canada on-site execution"
                  className="w-full h-full object-cover"
                  categoryLabel="PRECISION SITE EXECUTION"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. MISSION & VISION */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="p-8 sm:p-12 bg-neutral-50 border border-neutral-200 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
                OUR MISSION
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
                BUILDING SOLUTIONS.
              </h3>
              <p className="text-lg sm:text-xl text-neutral-800 font-light leading-relaxed">
                “By focusing on your real needs, we build living spaces that solve your
                challenges and propel your growth.”
              </p>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed border-t border-neutral-200 pt-6">
              We reject one-size-fits-all construction. Every space is engineered around the
              specific operational, architectural, and financial objectives of the client.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-12 bg-neutral-50 border border-neutral-200 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
                OUR VISION
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
                BUILDING THE FUTURE.
              </h3>
              <p className="text-lg sm:text-xl text-neutral-800 font-light leading-relaxed">
                “We strive to continually evolve as a company, while contributing to
                revolutionize our industry.”
              </p>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed border-t border-neutral-200 pt-6">
              Through mass timber adoption, digital BIM twin coordination, and progressive
              employee equity, we pioneer modern Canadian general contracting.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 4. VALUES (3 Editorial Sections) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 lg:py-32 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
              PHILOSOPHY & CULTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              OUR CORE VALUES.
            </h2>
            <p className="text-sm text-neutral-600">
              Three steadfast principles define every decision on our jobsites and in our
              boardrooms.
            </p>
          </div>

          <div className="space-y-8">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="p-8 sm:p-12 bg-white border border-neutral-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4 space-y-2">
                  <span className="text-xs font-mono text-red-600 font-bold">
                    VALUE {val.number}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-neutral-950 tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-xs font-mono uppercase text-neutral-500 font-medium">
                    {val.tagline}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <blockquote className="text-lg sm:text-xl text-neutral-900 italic border-l-2 border-red-600 pl-4 py-1 leading-snug">
                    “{val.quote}”
                  </blockquote>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 5. HISTORY TIMELINE (Interactive, 1985 to 2026) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 lg:py-32 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
                MILESTONES · 1985 TO PRESENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
                OUR HISTORY. <br />
                <span className="text-neutral-500">FOUR DECADES OF EVOLUTION.</span>
              </h2>
            </div>

            <div className="text-xs font-mono text-neutral-500">
              CLICK A MILESTONE TO VIEW HISTORICAL RECORD
            </div>
          </div>

          {/* Interactive Timeline Bar */}
          <div className="overflow-x-auto pb-6 scrollbar-thin">
            <div className="flex items-center min-w-[850px] gap-2 p-2 bg-neutral-50 border border-neutral-200">
              {TIMELINE_DATA.map((milestone) => {
                const isSelected = milestone.year === selectedMilestone.year;
                return (
                  <button
                    key={milestone.year}
                    onClick={() => setSelectedMilestone(milestone)}
                    className={`flex-1 py-3 px-2 text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-950 text-white font-bold shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50'
                    }`}
                  >
                    <span className="block text-sm sm:text-base font-display tabular-nums">
                      {milestone.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured milestone detail view */}
          <div className="p-8 sm:p-12 bg-neutral-50 border border-neutral-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
            <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-neutral-200 pb-6 lg:pb-0 lg:pr-8">
              <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
                HISTORICAL MILESTONE
              </span>
              <p className="text-6xl sm:text-7xl font-display font-extrabold text-neutral-950 tabular-nums tracking-tight">
                {selectedMilestone.year}
              </p>
              <p className="text-xs font-mono text-neutral-500 uppercase">
                CATEGORY: {selectedMilestone.category}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950">
                {selectedMilestone.title}
              </h3>
              <p className="text-base text-neutral-700 leading-relaxed font-light">
                {selectedMilestone.description}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <CheckCircle className="w-4 h-4 text-red-600" />
                <span>OFFICIAL JCB CORPORATE ARCHIVE RECORD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 6. CALL TO ACTION */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 px-6 md:px-10 bg-[#F8F9FA] text-center border-t border-neutral-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950">
            Partner with JCB on Your Next Build
          </h2>
          <p className="text-sm text-neutral-600">
            Discover how four decades of Canadian construction acumen can bring certainty
            to your next development.
          </p>
          <button
            onClick={onOpenStartProject}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D61B26] hover:bg-neutral-950 transition-colors shadow-sm cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
