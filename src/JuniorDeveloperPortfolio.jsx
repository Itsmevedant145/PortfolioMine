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

    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const observers = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          root: null, 
          rootMargin: '-50% 0px -50% 0px', // trigger when middle of section intersects viewport
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navHeight = 80; // adjust to your navbar height
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800">
      {/* Background Decorative Elements */}
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

      {/* Sections */}
      <HeroSection isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default JuniorDeveloperPortfolio;
