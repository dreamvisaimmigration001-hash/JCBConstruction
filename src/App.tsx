/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { PROJECTS_DATA } from './data/jcbData';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { StartProjectModal } from './components/common/StartProjectModal';
import { ProjectDetailModal } from './components/pages/ProjectDetailModal';

// Pages
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ExpertisePage } from './components/pages/ExpertisePage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { NewsPage } from './components/pages/NewsPage';
import { CareersPage } from './components/pages/CareersPage';
import { ContactPage } from './components/pages/ContactPage';
import { VerificationPage } from './components/pages/VerificationPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [startProjectOpen, setStartProjectOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sync page title with current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'JCB Construction Canada | Building Solutions for Major Projects',
      about: 'About JCB | Canadian Construction & Preconstruction Partner',
      services: 'Contract Models & Services | JCB Construction Canada',
      expertise: 'Technical Disciplines & Capabilities | JCB Construction Canada',
      projects: 'Major Construction Projects Portfolio | JCB Construction Canada',
      news: 'News & Announcements | JCB Construction Canada',
      careers: 'Careers & Culture | Join JCB Construction Canada',
      contact: 'Office & Contact | JCB Construction Canada',
      verification: 'Offer Letter Verification & Document Lookup | Official Registry',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenStartProject = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setStartProjectOpen(true);
  };

  const handleDiscussSimilar = (projectTitle: string) => {
    setPreselectedService(projectTitle);
    setStartProjectOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-neutral-900 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* 3-Zone Top Navigation Contract */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenStartProject={() => handleOpenStartProject()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenStartProject={() => handleOpenStartProject()}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onOpenStartProject={() => handleOpenStartProject()} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenStartProject={(srvId) => handleOpenStartProject(srvId)}
          />
        )}

        {currentPage === 'expertise' && (
          <ExpertisePage
            onOpenStartProject={() => handleOpenStartProject()}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenStartProject={() => handleOpenStartProject()}
          />
        )}

        {currentPage === 'news' && <NewsPage />}

        {currentPage === 'careers' && <CareersPage />}

        {currentPage === 'verification' && <VerificationPage />}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Corporate Architectural Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenStartProject={() => handleOpenStartProject()}
      />

      {/* Persistent "START A PROJECT" Modal */}
      <StartProjectModal
        isOpen={startProjectOpen}
        onClose={() => setStartProjectOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onDiscussSimilar={handleDiscussSimilar}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS_DATA}
      />
    </div>
  );
}
