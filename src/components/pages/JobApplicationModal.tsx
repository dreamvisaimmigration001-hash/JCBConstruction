import React, { useState } from 'react';
import { JobListing } from '../../types';
import { JcbLogo } from '../common/JcbLogo';
import { X, CheckCircle, Upload, ArrowRight } from 'lucide-react';

interface JobApplicationModalProps {
  job: JobListing | null;
  isOpen: boolean;
  onClose: () => void;
  isSpontaneous?: boolean;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  job,
  isOpen,
  onClose,
  isSpontaneous = false,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    preferredLocation: 'Toronto (Concord)',
    coverNote: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm flex justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl my-auto">
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <JcbLogo height="26px" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D61B26] font-semibold pl-3 border-l border-neutral-300">
              {isSpontaneous ? 'SPONTANEOUS CANDIDACY' : 'POSITION APPLICATION'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-14 h-14 mx-auto bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
              <CheckCircle className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold text-neutral-950">
                Application Received
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Thank you for your interest in joining JCB Construction Canada. Our Human
                Resources team will review your qualifications and contact you.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-display font-bold text-neutral-950">
                {isSpontaneous
                  ? 'Submit Spontaneous Application'
                  : `Apply for: ${job?.title}`}
              </h3>
              {job && !isSpontaneous && (
                <p className="text-xs font-mono text-neutral-500 mt-1">
                  {job.department} · {job.location} · {job.type}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                  placeholder="Jean Tremblay"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                  placeholder="jean@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                  placeholder="(905) 555-0199"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                  Preferred Location
                </label>
                <select
                  value={formData.preferredLocation}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredLocation: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                >
                  <option value="Toronto (Concord)">Toronto (Concord, ON)</option>
                  <option value="Greater Toronto Area">Greater Toronto Area (GTA)</option>
                  <option value="National / Flexible">National / Relocatable</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                LinkedIn Profile / Professional Portfolio
              </label>
              <input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                placeholder="https://linkedin.com/in/..."
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                Upload Resume / CV (PDF or DOCX)
              </label>
              <div className="relative border border-dashed border-neutral-300 bg-neutral-50 p-4 text-center cursor-pointer hover:border-red-500 transition-colors">
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) setFormData({ ...formData, fileName: file.name });
                  }}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <Upload className="w-5 h-5 mx-auto text-neutral-500 mb-1" />
                <p className="text-xs text-neutral-700 font-medium">
                  {formData.fileName || 'Click or drag resume file to upload'}
                </p>
                <p className="text-[11px] text-neutral-500">Max size 15MB</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                Brief Introduction / Career Objectives
              </label>
              <textarea
                rows={3}
                value={formData.coverNote}
                onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                placeholder="Outline your background, certifications (e.g., P.Eng., ASP, LEED), and interest in JCB..."
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
              <span className="text-[11px] font-mono text-neutral-500">
                EQUAL OPPORTUNITY EMPLOYER
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors"
                >
                  <span>Submit Candidacy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
