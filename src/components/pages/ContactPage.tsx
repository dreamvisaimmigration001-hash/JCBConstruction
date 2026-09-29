import React, { useState } from 'react';
import { OFFICE_LOCATIONS, DEPARTMENTS } from '../../data/jcbData';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    subject: 'General Project Inquiry',
    department: 'Estimation & Tenders',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
            <span>GET IN TOUCH WITH JCB</span>
            <span>·</span>
            <span>CANADIAN CONSTRUCTION OPERATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            HAVE A QUESTION, AN IDEA <br />
            <span className="text-neutral-500">OR A PROJECT?</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-2xl leading-relaxed">
            Tell us about it.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. LOCATIONS (Toronto Canadian Hub & Interactive Map Section) */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
              CANADIAN HUB
            </span>
            <h2 className="text-3xl font-display font-bold text-neutral-950 tracking-tight">
              OUR OFFICE & OPERATIONS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Toronto Regional Office */}
            <div className="p-8 bg-white border border-neutral-200 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div>
                  <span className="text-[11px] font-mono text-red-600 uppercase block mb-1 font-semibold">
                    REGIONAL OFFICE & ONTARIO OPERATIONS
                  </span>
                  <h3 className="text-2xl font-display font-bold text-neutral-950">
                    TORONTO OFFICE
                  </h3>
                </div>
                <div className="w-3 h-3 bg-red-600" />
              </div>

              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-neutral-950">8888 Keele St., Unit 9</p>
                    <p>Concord, Ontario</p>
                    <p>L4K 2N2, Canada</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-red-600 shrink-0" />
                  <a
                    href="tel:9056698151"
                    className="hover:text-red-600 transition-colors font-mono font-medium"
                  >
                    (905) 669-8151
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-red-600 shrink-0" />
                  <a
                    href="mailto:toronto@jcb.ca"
                    className="hover:text-red-600 transition-colors font-medium"
                  >
                    toronto@jcb.ca
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>HOURS: MON–FRI 8:00 AM – 5:00 PM EST</span>
                <a
                  href="https://maps.google.com/?q=8888+Keele+St+Concord+ON+L4K+2N2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-neutral-950 flex items-center gap-1 font-semibold"
                >
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* National Operations & Preconstruction */}
            <div className="p-8 bg-white border border-neutral-200 shadow-md space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <div>
                    <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">
                      PAN-CANADIAN MANDATES
                    </span>
                    <h3 className="text-2xl font-display font-bold text-neutral-950">
                      MAJOR PROJECTS
                    </h3>
                  </div>
                  <div className="w-3 h-3 bg-neutral-900" />
                </div>

                <div className="space-y-3 text-sm text-neutral-700 mt-6">
                  <p className="leading-relaxed">
                    JCB Construction Canada manages major construction projects across the
                    industrial, commercial, institutional, and multi-residential sectors.
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    Our preconstruction, estimation, and site supervision directors work
                    with leading developers, public institutions, and national enterprises.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>ESTABLISHED 1985</span>
                <span className="text-neutral-900 font-semibold">100+ SPECIALISTS</span>
              </div>
            </div>
          </div>

          {/* Interactive Map & Route Visualizer */}
          <div className="p-8 bg-white border border-neutral-200 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
              <div>
                <span className="text-[11px] font-mono text-red-600 uppercase font-semibold">
                  OFFICE LOCATION MAP
                </span>
                <h4 className="text-lg font-display font-bold text-neutral-950">
                  Toronto Office — 8888 Keele St., Unit 9, Concord ON
                </h4>
              </div>
              <a
                href="https://maps.google.com/?q=8888+Keele+St+Concord+ON+L4K+2N2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-red-600 hover:text-neutral-950"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Architectural Vector Map Schema */}
            <div className="relative h-64 sm:h-80 bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="relative z-10 text-center space-y-3 p-6 max-w-md bg-white border border-neutral-200 shadow-lg">
                <div className="w-10 h-10 mx-auto bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-red-600" />
                </div>
                <h5 className="text-base font-bold text-neutral-950 font-display">
                  JCB Construction Canada
                </h5>
                <p className="text-xs text-neutral-600">
                  8888 Keele St., Unit 9, Concord, Ontario L4K 2N2
                </p>
                <p className="text-[11px] text-neutral-500">
                  Directly accessible via Highway 407 and Highway 400 corridor.
                </p>
                <div className="pt-1">
                  <a
                    href="https://maps.google.com/?q=8888+Keele+St+Concord+ON+L4K+2N2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-red-600 hover:text-neutral-950"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 3. CONTACT FORM & DIRECT DEPARTMENTS */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Department Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-red-600 uppercase font-semibold">
                DIRECT DIRECTORY
              </span>
              <h2 className="text-3xl font-display font-bold text-neutral-950 tracking-tight">
                CONTACT DEPARTMENTS.
              </h2>
              <p className="text-sm text-neutral-600">
                Reach the appropriate team directly for rapid response on drawings,
                tenders, and inquiries.
              </p>
            </div>

            <div className="space-y-4">
              {DEPARTMENTS.map((dept) => (
                <div
                  key={dept.name}
                  className="p-5 bg-neutral-50 border border-neutral-200 space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-display font-bold text-neutral-950">
                      {dept.name}
                    </h4>
                    <span className="text-[11px] font-mono text-red-600 font-semibold">
                      DIRECT
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600">{dept.desc}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-200 text-xs font-mono text-neutral-600">
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-neutral-950 hover:text-red-600 transition-colors font-medium"
                    >
                      {dept.email}
                    </a>
                    <span>{dept.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Elegant Contact Form */}
          <div className="lg:col-span-7 bg-[#F8F9FA] border border-neutral-200 p-8 sm:p-12 shadow-md">
            <div className="space-y-2 mb-8 border-b border-neutral-200 pb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
                COMMUNICATION FORM
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950">
                Send an Inquiry
              </h3>
              <p className="text-xs text-neutral-500">
                Please complete the parameters below. Our directors will review and respond
                promptly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto bg-red-50 border border-red-200 text-red-600 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-display font-bold text-neutral-950">
                  Message Dispatched
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, {formData.firstName}. Your inquiry has been routed to{' '}
                  <span className="text-neutral-900 font-semibold">{formData.department}</span>. We will
                  be in touch within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                      placeholder="Jean"
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
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                      placeholder="Tremblay"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                      placeholder="Corporation Inc."
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
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                      placeholder="email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                      placeholder="(905) 669-8151"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                      Target Department
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                    >
                      {DEPARTMENTS.map((d) => (
                        <option key={d.name} value={d.name}>
                          {d.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                    Subject *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                    placeholder="Project Inquiry / Preconstruction Tender"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 focus:border-red-600 focus:outline-none text-sm text-neutral-950"
                    placeholder="Provide details on project scope, sector, location, and requirements..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
                  <span className="text-[11px] font-mono text-neutral-500">
                    CANADIAN PRIVACY STANDARDS COMPLIANT
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-neutral-950 transition-colors shadow-sm"
                  >
                    <span>Submit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
