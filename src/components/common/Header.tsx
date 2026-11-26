import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { JcbLogo } from './JcbLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenStartProject: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenStartProject,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Throttled scroll listener to avoid mobile scroll thrashing
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling when mobile menu is open to prevent touch glitches
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Automatically close mobile menu if resized to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'projects', label: 'Projects' },
    { id: 'news', label: 'News' },
    { id: 'careers', label: 'Careers' },
    { id: 'verification', label: 'Verify Offer' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isScrolled || mobileMenuOpen
            ? 'bg-white/98 backdrop-blur-md border-b border-neutral-200 shadow-sm'
            : 'bg-white border-b border-neutral-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Zone 1: Authentic JCB Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 cursor-pointer"
            aria-label="JCB Construction Canada Homepage"
          >
            <JcbLogo height="42px" className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </button>

          {/* Zone 2: Clean 1-2 Word Text Nav Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider text-neutral-700"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-red-500 ${
                    isActive
                      ? 'text-[#D61B26] font-bold'
                      : 'text-neutral-700 hover:text-[#D61B26]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D61B26]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenStartProject}
              className="group inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#D61B26] hover:bg-neutral-900 transition-colors duration-200 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none cursor-pointer rounded-lg active:bg-neutral-100"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-neutral-950" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (placed outside header to eliminate transform / clipping bugs) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 bg-white z-40 lg:hidden flex flex-col justify-between p-6 sm:p-8 border-t border-neutral-200 shadow-2xl overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ maxHeight: 'calc(100dvh - 64px)' }}
        >
          <div className="space-y-4 pt-1">
            <p className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              MAIN SECTIONS
            </p>
            <div className="flex flex-col space-y-2.5">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xl font-display font-medium text-left transition-colors cursor-pointer py-1 ${
                  currentPage === 'home' ? 'text-[#D61B26] font-bold' : 'text-neutral-800'
                }`}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xl font-display font-medium text-left transition-colors cursor-pointer py-1 ${
                    currentPage === item.id ? 'text-[#D61B26] font-bold' : 'text-neutral-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 pb-8 border-t border-neutral-200 space-y-4 shrink-0 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStartProject();
              }}
              className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#D61B26] hover:bg-neutral-900 transition-colors shadow-sm"
            >
              Start a Project
            </button>
            <div className="text-xs font-mono text-neutral-500 text-center space-y-1">
              <p>CANADIAN OPERATIONS: (905) 669-8151</p>
              <p>EMAIL: info@jcb.ca</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
