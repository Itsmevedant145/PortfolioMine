// JuniorDeveloperPortfolio.js - Main portfolio component
import React, { useState, useEffect } from 'react';
import { 
  Navigation, 
  HeroSection, 
  AboutSection, 
  SkillsSection, 
  ProjectsSection, 
  ContactSection, 
  Footer 
} from './components.jsx';

const JuniorDeveloperPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800">
      {/* Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse" style={{ left: '10%', top: '10%' }} />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ right: '10%', bottom: '10%' }} />
      </div>

      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        isLoaded={isLoaded} 
      />

      {/* Hero Section */}
      <HeroSection 
        isLoaded={isLoaded} 
        scrollToSection={scrollToSection} 
      />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JuniorDeveloperPortfolio;