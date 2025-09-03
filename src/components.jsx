// components.js - Reusable components
import React from 'react';
import { HiPlus } from 'react-icons/hi';
import { ChevronDown, Mail, Github, Linkedin, MapPin, Phone, Download, Code } from 'lucide-react';
import { skills, projects, achievements, personalInfo } from './data.jsx';

// Navigation Component
export const Navigation = ({ activeSection, scrollToSection, isLoaded }) => (
  <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="backdrop-blur-lg bg-gray-900/90 border-b border-gray-700/50 shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </div>
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-blue-600 ${
                  activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// Hero Section Component
export const HeroSection = ({ isLoaded, scrollToSection }) => (
  <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
    <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Hi, I'm Vedant
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          {personalInfo.title}
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {personalInfo.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="px-4 py-2 bg-green-900/50 text-green-400 rounded-full text-sm font-medium">
            🚀 Quick Learner
          </span>
          <span className="px-4 py-2 bg-purple-900/50 text-purple-400 rounded-full text-sm font-medium">
            💡 Problem Solver
          </span>
          <span className="px-4 py-2 bg-orange-900/50 text-orange-400 rounded-full text-sm font-medium">
            🔥 Passionate Coder
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-purple-700 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <Download size={20} />
            Download Resume
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-900/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <Code size={20} />
            View My Work
          </button>
        </div>
      </div>
    </div>
    
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown 
        size={32} 
        className="text-gray-500 cursor-pointer hover:text-blue-400 transition-colors"
        onClick={() => scrollToSection('about')}
      />
    </div>
  </section>
);


// About Section Component
export const AboutSection = () => (
  <section id="about" className="py-20 relative bg-gray-900">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="space-y-8 text-gray-300">
        <p className="text-lg leading-relaxed">
          I'm a recent computer science graduate with a genuine passion for web development. 
          While I may be new to the professional world, I bring enthusiasm, dedication, and 
          a strong foundation in programming fundamentals.
        </p>
        <p className="text-lg leading-relaxed">
          I love turning ideas into code and am always excited to learn new technologies. 
          I'm looking for an opportunity to grow with a team that values learning and innovation.
        </p>
        <div className="bg-blue-900/40 rounded-lg p-6 border-l-4 border-blue-500">
          <h3 className="font-semibold text-blue-400 mb-2">What I'm Looking For:</h3>
          <p className="text-blue-300">
            A junior developer position where I can contribute to meaningful projects, 
            learn from experienced developers, and grow my skills in a collaborative environment.
          </p>
        </div>
        <div className="flex gap-6 pt-4 text-blue-400">
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>{personalInfo.availability}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
;

// Skills Section Component
export const SkillsSection = () => (
  <section id="skills" className="py-16 bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="relative group flex flex-col items-center"
          >
            {/* Neutral icon (no glow) */}
            {React.cloneElement(skill.icon, {
              size: 56,
              className: "text-gray-300 group-hover:text-teal-400 transition-colors duration-300"
            })}

            {/* Skill name under icon */}
            <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
              {skill.name}
            </span>

            {/* Tooltip with level */}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
              bg-gray-800 text-white text-xs rounded px-2 py-1 pointer-events-none whitespace-nowrap shadow-lg">
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);




// Projects Section Component
export const ProjectsSection = () => (
  <section id="projects" className="py-20 relative bg-gray-900">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
        Projects & Practice
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-700 overflow-hidden">
              <div className={`w-full h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-5xl text-white`}>
                💻
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span className="text-xs text-blue-400 bg-blue-900 bg-opacity-30 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-4">
                  <a 
                    href={project.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-sm font-medium">View Code</span>
                    <Github size={16} />
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm font-semibold transition-colors"
                    >
                      Go to Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="bg-yellow-800 rounded-xl p-6 border border-yellow-700">
          <h3 className="text-lg font-semibold text-yellow-300 mb-2">🚧 More Projects Coming Soon!</h3>
          <p className="text-yellow-200">
            I'm actively working on new projects to showcase my growing skills. 
            Each project teaches me something new and helps me become a better developer.
          </p>
        </div>
      </div>
    </div>
  </section>
);


// Contact Section Component
export const ContactSection = () => (
  <section id="contact" className="py-16 relative bg-gray-900">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-sm relative inline-block">
        Let's Connect!
        <span className="block w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded mt-2 mx-auto"></span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="space-y-8 text-gray-300">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Ready to start my career journey!
            </h3>
            <p className="text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0 text-gray-400">
              I'm excited to find the right opportunity where I can contribute fresh ideas, 
              learn from experienced professionals, and grow into a valuable team member.
            </p>

            <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-500 max-w-md mx-auto md:mx-0 shadow">
              <h4 className="font-semibold text-green-400 mb-3">Available for:</h4>
              <ul className="text-green-300 space-y-1 list-disc list-inside">
                <li>Full-time junior developer positions</li>
                <li>Internships and entry-level roles</li>
                <li>Remote or on-site opportunities</li>
                <li>Open to relocation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md mx-auto md:mx-0">
          {[
            {
              href: `mailto:${personalInfo.email}`,
              icon: <Mail className="text-blue-400" size={24} />,
              title: "Email",
              subtitle: personalInfo.email
            },
            {
              href: personalInfo.linkedin,
              icon: <Linkedin className="text-blue-500" size={24} />,
              title: "LinkedIn",
              subtitle: "Connect with me"
            },
            {
              href: personalInfo.github,
              icon: <Github className="text-white" size={24} />,
              title: "GitHub",
              subtitle: "View my code"
            },
            {
              icon: <Phone className="text-green-400" size={24} />,
              title: "Phone",
              subtitle: personalInfo.phone
            }
          ].map(({ href, icon, title, subtitle }) =>
            href ? (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 border border-gray-700"
              >
                {icon}
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-sm text-gray-400">{subtitle}</div>
                </div>
              </a>
            ) : (
              <div
                key={title}
                className="flex items-center gap-4 bg-gray-800 rounded-xl p-5 shadow-md border border-gray-700"
              >
                {icon}
                <div>
                  <div className="font-semibold text-white">{title}</div>
                  <div className="text-sm text-gray-400">{subtitle}</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  </section>
);


// Footer Component
export const Footer = () => (
  <footer className="py-8 bg-gray-900 border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-gray-400 mb-2">
        © 2024 {personalInfo.name} — Aspiring Developer
      </p>
      <p className="text-sm text-gray-500">
        Built with React & Tailwind CSS • Open to opportunities!
      </p>
    </div>
  </footer>
);
