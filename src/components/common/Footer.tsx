import React from 'react';
import { PageId } from '../../types';
import { JcbLogo } from './JcbLogo';
import { OFFICE_LOCATIONS } from '../../data/jcbData';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenStartProject }) => {
  const quickLinks: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About JCB' },
    { id: 'services', label: 'Contract Models' },
    { id: 'expertise', label: 'Technical Expertise' },
    { id: 'projects', label: 'Portfolio & Projects' },
    { id: 'news', label: 'News & Announcements' },
    { id: 'careers', label: 'Careers & Culture' },
    { id: 'contact', label: 'Contact & Office' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Upper Brand & Positioning Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-20 border-b border-neutral-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-3 inline-block rounded-none shadow-sm">
              <JcbLogo height="40px" />
            </div>

            <p className="text-xl md:text-2xl font-display text-white font-bold max-w-lg leading-snug">
              BUILDING SOLUTIONS.{' '}
              <span className="text-neutral-400">BUILDING THE FUTURE.</span>
            </p>

            <p className="text-sm text-neutral-400 max-w-lg leading-relaxed">
              Specializing in the management and execution of major construction projects,
              JCB Construction Canada delivers expansions, renovations, redevelopments and
              new construction for industrial, commercial, multi-residential and institutional clients.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenStartProject}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#D61B26] hover:bg-white hover:text-neutral-950 transition-colors duration-200 cursor-pointer shadow-sm"
              >
                <span>Initiate a Project Review</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              NAVIGATION
            </p>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Contact */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              CANADIAN OFFICE
            </p>
            {OFFICE_LOCATIONS.map((office) => (
              <div key={office.city} className="space-y-2 text-xs text-neutral-400">
                <p className="text-sm font-bold text-white">{office.city}</p>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#D61B26] shrink-0 mt-0.5" />
                  <span>{office.address.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#D61B26] shrink-0" />
                  <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                    {office.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#D61B26] shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-500 font-mono">
                  ISO 9001:2015 CERTIFIED QUALITY SYSTEM
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
        <p>© 1985–{new Date().getFullYear()} JCB Construction Canada. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span>Privacy Policy</span>
          <span>·</span>
          <span>Terms of Business</span>
          <span>·</span>
          <span>Code of Ethics</span>
        </div>
      </div>
    </footer>
  );
};
