import React from 'react';
import { SERVICES_DATA } from '../../data/jcbData';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { ArrowRight, Check } from 'lucide-react';

interface ServicesPageProps {
  onOpenStartProject: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenStartProject }) => {
  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
            <span>CONTRACT MODELS & APPROACHES</span>
            <span>·</span>
            <span>JCB METHODOLOGY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            THE RIGHT CONSTRUCTION <br />
            <span className="text-neutral-500">MODEL FOR YOUR PROJECT.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            Every major project has distinct risk, schedule, and budgetary requirements.
            JCB provides three structured contractual frameworks to guarantee delivery.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. THE THREE CONTRACT MODELS */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200 space-y-24">
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              id={srv.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-b border-neutral-200 pb-24 last:border-b-0 last:pb-0"
            >
              {/* Left Column: Visual and Phase Process */}
              <div
                className={`lg:col-span-5 space-y-8 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="relative p-2 bg-white border border-neutral-200 shadow-xl">
                  <div className="relative h-80 sm:h-96 w-full">
                    <ArchitecturalImage
                      src={srv.heroImage}
                      alt={`${srv.title} architectural model`}
                      className="w-full h-full object-cover"
                      categoryLabel={`CONTRACT MODEL ${srv.code}`}
                    />
                  </div>
                </div>

                {/* Phased Process List */}
                <div className="p-6 bg-white border border-neutral-200 space-y-4 shadow-sm">
                  <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                    PROCESS PHASING
                  </p>
                  <div className="space-y-4">
                    {srv.processSteps.map((p) => (
                      <div key={p.step} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-red-600 font-bold">
                            {p.step}
                          </span>
                          <span className="text-xs font-semibold text-neutral-900">
                            {p.title}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 pl-4 border-l border-neutral-200">
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Advantages & Specific CTA */}
              <div
                className={`lg:col-span-7 space-y-8 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-red-600 font-bold">
                      MODEL {srv.code}
                    </span>
                    <span className="text-neutral-300">/</span>
                    <span className="text-xs font-mono text-neutral-500 uppercase">
                      FIDUCIARY FRAMEWORK
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-950 tracking-tight">
                    {srv.title}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-light">
                  {srv.fullDesc}
                </p>

                {/* Best for */}
                <div className="p-4 bg-white border-l-2 border-red-600 shadow-sm">
                  <p className="text-xs font-mono uppercase text-red-600 font-semibold mb-1">
                    IDEAL APPLICATION
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-700">{srv.bestFor}</p>
                </div>

                {/* Key Advantages */}
                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-medium">
                    CORE ADVANTAGES
                  </h3>
                  <div className="space-y-2.5">
                    {srv.advantages.map((adv) => (
                      <div key={adv} className="flex items-start gap-3 text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA after every service */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenStartProject(srv.id)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>Discuss Your Project Under {srv.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. COMPARISON MATRIX (Decision Guide) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
              SELECTION CRITERIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-neutral-950 tracking-tight">
              WHICH MODEL SUITS YOUR AMBITION?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-neutral-200">
              <thead className="bg-neutral-50 border-b border-neutral-200 font-mono text-[11px] uppercase tracking-wider text-neutral-600">
                <tr>
                  <th className="p-4 sm:p-5">Dimension</th>
                  <th className="p-4 sm:p-5 text-red-600 font-bold">Construction Management</th>
                  <th className="p-4 sm:p-5 text-neutral-900 font-bold">Turnkey (Design-Build)</th>
                  <th className="p-4 sm:p-5 text-neutral-900 font-bold">Fixed-Price (Stipulated)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 text-neutral-700">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-neutral-950">JCB Involvement</td>
                  <td className="p-4 sm:p-5">Early Concept & Design</td>
                  <td className="p-4 sm:p-5">From Inception / Programming</td>
                  <td className="p-4 sm:p-5">Upon Completed 100% Drawings</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-neutral-950">Schedule Speed</td>
                  <td className="p-4 sm:p-5">Fast-track (overlapping design & build)</td>
                  <td className="p-4 sm:p-5">Fast-track single stream</td>
                  <td className="p-4 sm:p-5">Sequential (design first, tender second)</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-neutral-950">Budget Transparency</td>
                  <td className="p-4 sm:p-5">100% Open-Book subtrade bids</td>
                  <td className="p-4 sm:p-5">Guaranteed Maximum Price (GMP)</td>
                  <td className="p-4 sm:p-5">Stipulated fixed lump sum</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-neutral-950">Architectural Control</td>
                  <td className="p-4 sm:p-5">Client retains independent architect</td>
                  <td className="p-4 sm:p-5">Single-point coordinated consortium</td>
                  <td className="p-4 sm:p-5">Client directs architect independently</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
