import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStatement } from './components/EditorialStatement';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { Process } from './components/Process';
import { WhyLuvora } from './components/WhyLuvora';
import { AboutStudio } from './components/AboutStudio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialService, setEnquiryInitialService] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (serviceName?: string) => {
    setEnquiryInitialService(serviceName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryInitialService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-[#E4E4E7] font-body selection:bg-white selection:text-black">
      {/* 3-Zone Sticky Navbar */}
      <Navbar onStartProject={() => handleOpenEnquiry()} />

      <main>
        {/* Hero Section with Typography & 3D Architectural Sculpture */}
        <Hero onStartProject={() => handleOpenEnquiry()} />

        {/* Editorial Introduction Statement */}
        <EditorialStatement />

        {/* Services: What We Build (5 curated service blocks) */}
        <Services onStartProject={handleOpenEnquiry} />

        {/* Selected Work (4 Concept Projects with realistic mockups) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* Process: From Idea to Launch (4 deliberate phases) */}
        <Process />

        {/* Why Luvora: Built With Intention (4 editorial points) */}
        <WhyLuvora />

        {/* About: Small Studio. Big Attention to Detail. */}
        <AboutStudio />

        {/* High-Impact Contact Section */}
        <ContactSection onStartProject={() => handleOpenEnquiry()} />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer onStartProject={() => handleOpenEnquiry()} />

      {/* Project Detail Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={handleOpenEnquiry}
      />

      {/* Project Enquiry Experience ("Start a Project") */}
      <ProjectEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialService={enquiryInitialService}
      />
    </div>
  );
}
