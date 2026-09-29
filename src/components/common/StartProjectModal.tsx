import React, { useState } from 'react';
import { JcbLogo } from './JcbLogo';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedSector?: string;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedSector,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    sector: preselectedSector || 'commercial',
    contractModel: preselectedService || 'construction-management',
    location: 'Greater Toronto Area / Ontario',
    targetDate: '2026 Q3/Q4',
    budgetRange: '$5M – $20M',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `JCB-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl my-8">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-3">
            <JcbLogo height="28px" />
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 pl-3 border-l border-neutral-300">
              PROJECT INTAKE & PRECONSTRUCTION
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 mx-auto bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
                PROPOSAL SUBMISSION CONFIRMED
              </p>
              <h3 className="text-2xl font-display font-bold text-neutral-950">
                Thank You, {formData.firstName}.
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Your project brief has been routed directly to our Preconstruction and
                Estimation Director. Reference number:
              </p>
              <p className="font-mono text-lg font-bold text-neutral-950 tracking-wider pt-1">
                {refCode}
              </p>
            </div>

            <div className="p-4 bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 max-w-lg mx-auto text-left space-y-1">
              <p className="text-neutral-900 font-semibold">Next Steps:</p>
              <p>• Review of drawings / preliminary parameters by Estimation team.</p>
              <p>• Initial consultation call within 24 business hours.</p>
              <p>• Direct contact: estimation@jcb.ca / (905) 669-8151 ext. 204</p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors"
            >
              Return to Website
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-neutral-950">
                Start a Construction Project
              </h3>
              <p className="text-xs text-neutral-500">
                Tell us about your project scale, location, and timeline. Our preconstruction
                team will review your parameters and prepare an actionable analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  First Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                  placeholder="e.g. Marc"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Last Name *
                </label>
                <input
                  required
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                  placeholder="e.g. Tremblay"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Corporate Organization *
                </label>
                <input
                  required
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                  placeholder="Company / Institution"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Work Email *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                  placeholder="name@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Direct Phone *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                  placeholder="(905) 000-0000"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Project Sector
                </label>
                <select
                  value={formData.sector}
                  onChange={(e) =>
                    setFormData({ ...formData, sector: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                >
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="institutional">Institutional</option>
                  <option value="multi-residential">Multi-Residential</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Preferred Contract Approach
                </label>
                <select
                  value={formData.contractModel}
                  onChange={(e) =>
                    setFormData({ ...formData, contractModel: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                >
                  <option value="construction-management">
                    Construction Management
                  </option>
                  <option value="turnkey">Turnkey Construction</option>
                  <option value="fixed-price">Fixed-Price Construction</option>
                  <option value="undecided">To Be Determined / Need Consultation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                  Project Geography
                </label>
                <select
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                >
                  <option value="Greater Toronto Area / Ontario">
                    Greater Toronto Area / Ontario
                  </option>
                  <option value="Quebec & Eastern Canada">Quebec & Eastern Canada</option>
                  <option value="Western Canada">Western Canada</option>
                  <option value="National Portfolio">Pan-Canadian Portfolio</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                Brief Scope & Project Goals *
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3.5 py-2.5 bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950 transition-colors"
                placeholder="Describe square footage, scope (new build, expansion, interior fit-out), target groundbreaking, and any specific structural requirements..."
              />
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
              <p className="text-[11px] text-neutral-500 font-mono">
                ISO 9001:2015 CERTIFIED FIDUCIARY PROCESS
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-950 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors"
                >
                  <span>Submit Inquiry</span>
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
