import React, { useState } from 'react';
import { JOB_LISTINGS, CAREER_BENEFITS } from '../../data/jcbData';
import { JobListing } from '../../types';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { JobApplicationModal } from './JobApplicationModal';
import { ArrowRight, MapPin, Send } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSpontaneous, setIsSpontaneous] = useState(false);
  const [departmentFilter, setDepartmentFilter] = useState<string>('all');

  const departments = ['all', 'Project Management', 'Field Operations', 'Estimation & Preconstruction', 'Digital Engineering', 'Safety & Environment'];

  const filteredJobs = JOB_LISTINGS.filter((j) => {
    if (departmentFilter === 'all') return true;
    return j.department.toLowerCase().includes(departmentFilter.toLowerCase());
  });

  const handleApply = (job: JobListing) => {
    setSelectedJob(job);
    setIsSpontaneous(false);
    setModalOpen(true);
  };

  const handleSpontaneous = () => {
    setSelectedJob(null);
    setIsSpontaneous(true);
    setModalOpen(true);
  };

  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
            <span>CAREERS AT JCB CONSTRUCTION CANADA</span>
            <span>·</span>
            <span>JOIN OUR TEAM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            BUILD YOUR <br />
            <span className="text-neutral-500">FUTURE.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            With more than 100 passionate professionals, JCB offers opportunities across
            project management, field superintendence, BIM engineering, estimation, and
            health & safety.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#openings"
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={handleSpontaneous}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-800 border border-neutral-300 hover:border-red-600 hover:text-red-600 transition-colors inline-flex items-center gap-2 cursor-pointer bg-white shadow-sm"
            >
              <Send className="w-4 h-4 text-red-600" />
              <span>Spontaneous Application</span>
            </button>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. YOUR FUTURE STARTS HERE / OUR PEOPLE */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
              YOUR FUTURE STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight">
              A CULTURE OF COLLECTIVE OWNERSHIP & HUMAN RIGOR.
            </h2>
            <p className="text-base text-neutral-700 leading-relaxed font-light">
              At JCB, you don't merely manage construction tasks—you become an integral
              stakeholder in shaping cities and communities.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              With our employee share ownership program, structured mentorship from senior
              executives, and open communication channels across job sites, our team
              members build long-term, rewarding careers.
            </p>
            <div className="p-4 bg-white border border-neutral-200 text-xs text-neutral-600 space-y-1 shadow-sm">
              <p className="text-neutral-950 font-semibold">100+ Team Members</p>
              <p>Operating collaboratively across Canadian construction markets.</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-2 bg-white border border-neutral-200 shadow-xl">
              <div className="relative h-80 sm:h-[420px] w-full">
                <ArchitecturalImage
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&w=1200&q=80"
                  alt="JCB Construction site management team on site"
                  className="w-full h-full object-cover"
                  categoryLabel="COLLABORATIVE SITE LEADERSHIP"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. WHY JCB? (Benefits from official company themes) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 lg:py-32 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
              THE JCB ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-950 tracking-tight">
              WHY BUILD YOUR CAREER AT JCB?
            </h2>
            <p className="text-sm text-neutral-600">
              We provide our people with the environment, tools, and security needed to
              excel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAREER_BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="p-8 bg-neutral-50 border border-neutral-200 space-y-4 hover:border-neutral-300 transition-colors shadow-sm"
              >
                <div className="w-2 h-2 bg-red-600" />
                <h3 className="text-xl font-display font-bold text-neutral-950">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 4. OPEN POSITIONS */}
      {/* ----------------------------------------------------------------------- */}
      <section id="openings" className="py-24 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
                OPPORTUNITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight">
                ACTIVE CAREER OPENINGS.
              </h2>
            </div>

            {/* Department filter */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartmentFilter(dept)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase cursor-pointer whitespace-nowrap border ${
                    departmentFilter === dept
                      ? 'bg-neutral-950 border-neutral-950 text-white font-semibold shadow-sm'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {dept === 'all' ? 'All Roles' : dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                    <span className="text-red-600 uppercase font-semibold">
                      {job.department}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {job.location}
                    </span>
                    <span>·</span>
                    <span>{job.experience}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => handleApply(job)}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors cursor-pointer shadow-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Spontaneous Application Banner */}
          <div className="p-8 bg-white border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-lg font-display font-bold text-neutral-950">
                Don't see your specific discipline listed?
              </h4>
              <p className="text-xs text-neutral-600">
                We are always seeking ambitious superintendents, estimators, project
                engineers, and BIM specialists.
              </p>
            </div>
            <button
              onClick={handleSpontaneous}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-800 border border-neutral-300 hover:text-red-600 hover:border-red-600 transition-colors whitespace-nowrap cursor-pointer shadow-sm"
            >
              Submit Spontaneous Application
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <JobApplicationModal
        job={selectedJob}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        isSpontaneous={isSpontaneous}
      />
    </div>
  );
};
