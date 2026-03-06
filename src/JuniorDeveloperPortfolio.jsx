import React, { useState, useEffect } from 'react';
import { Navigation, Footer, ThemeSwitcher } from './components-layout.jsx';
import { HeroSection, AboutSection, SkillsSection } from './components-sections1.jsx';
import { ProjectsSection, ContactSection } from './components-sections2.jsx';

const JuniorDeveloperPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState('red');

  useEffect(() => {
    setIsLoaded(true);
    const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
    const observers = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(sectionId); },
        { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
      );
      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050505' }}>
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isLoaded={isLoaded}
        theme={theme}
      />

      <HeroSection isLoaded={isLoaded} scrollToSection={scrollToSection} theme={theme} />
      <AboutSection theme={theme} />
      <SkillsSection theme={theme} />
      <ProjectsSection theme={theme} />
      <ContactSection theme={theme} />
      <Footer theme={theme} />

      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
    </div>
  );
};

export default JuniorDeveloperPortfolio;