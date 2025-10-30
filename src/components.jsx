// components.js - Reusable components
import React from 'react';
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Github, Linkedin, MapPin, Phone, Download, Code, Sparkles, Zap, Rocket,ExternalLink,Code2, ArrowRight } from 'lucide-react';
import { skills, projects, achievements, personalInfo } from './data.jsx';

// Navigation Component with glassmorphism
export const Navigation = ({ activeSection, scrollToSection, isLoaded }) => (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isLoaded ? 'translate-y-0' : '-translate-y-full'
    }`}
  >
    <div className="backdrop-blur-xl bg-gradient-to-r from-black/90 via-neutral-900/80 to-red-950/70 border-b border-red-600/40 shadow-[0_0_15px_rgba(255,0,0,0.15)]">
      <div className="max-w-6xl group mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
         <div className="relative text-2xl font-bold text-red-500">
  <span
    className="inline-block bg-gradient-to-r from-red-600 via-gray-100 to-red-500 bg-clip-text text-transparent 
               transition-all duration-300 hover:scale-110 hover:brightness-125"
  >
    {personalInfo.name}
  </span>

  {/* Subtle glow ring */}
  <span className="absolute inset-0 -z-10 blur-md opacity-0 hover:opacity-70 transition-opacity duration-500 bg-red-600/40 rounded-md"></span>
</div>


          {/* Navigation links */}
          <div className="hidden md:flex space-x-1">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize px-5 py-2 rounded-full transition-all duration-300 font-medium relative overflow-hidden group tracking-wide ${
                  activeSection === section
                    ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-[0_0_10px_rgba(255,0,0,0.4)]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{section}</span>

                {/* Hover red glow */}
                {activeSection !== section && (
                  <span className="absolute inset-0 bg-gradient-to-r from-red-700/20 to-red-900/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </nav>
);


// Floating particles background effect
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(30)].map((_, i) => {
      const isRed = Math.random() > 0.4;
      const size = Math.random() * 6 + 1;

      return (
        <div
          key={i}
          className={`absolute rounded-full ${
            isRed
              ? 'bg-gradient-to-br from-red-500/30 to-red-600/20 shadow-red-500/50'
              : 'bg-gradient-to-br from-gray-700/20 to-black/30'
          }`}
          style={{
            width: size + 'px',
            height: size + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's',
            boxShadow: isRed ? '0 0 20px rgba(239, 68, 68, 0.3)' : 'none',
            filter: isRed ? 'blur(0.5px)' : 'blur(1px)'
          }}
        />
      );
    })}
  </div>
);


// Hero Section with dramatic effects
export const HeroSection = ({ isLoaded, scrollToSection }) => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-red-950/30"
  >
    {/* Subtle background particles */}
    <FloatingParticles />

    {/* Deep red gradient orbs for atmosphere */}
    <div className="absolute top-20 left-10 w-80 h-80 bg-red-900/20 rounded-full blur-[120px] animate-pulse"></div>
    <div
      className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-red-800/10 rounded-full blur-[100px] animate-pulse"
      style={{ animationDelay: "1s" }}
    ></div>

    {/* Dark vignette overlay for cinematic focus */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none"></div>

    {/* Hero Content */}
    <div
      className={`text-center relative z-10 transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mb-8">
        {/* Sparkle Accent */}
        <div className="flex justify-center mb-6">
          <Sparkles
            className="text-red-400/80 animate-spin-slow drop-shadow-[0_0_8px_rgba(220,38,38,0.4)]"
            size={32}
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-400/90 via-red-600/80 to-red-800/70 bg-clip-text text-transparent animate-gradient drop-shadow-[0_0_20px_rgba(120,0,0,0.5)]">
          Hi, I'm Vedant
        </h1>

        <div className="relative inline-block mb-6">
          <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400/80 to-red-600/70">
            {personalInfo.title}
          </p>
          <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600/60 to-transparent"></div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed tracking-wide">
          {personalInfo.description}
        </p>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="px-5 py-3 bg-gradient-to-r from-red-900/30 to-red-800/20 text-red-300/90 rounded-full text-sm font-semibold border border-red-700/40 backdrop-blur-sm hover:scale-110 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-red-900/30">
            <Rocket size={18} className="animate-bounce" />
            Quick Learner
          </span>
          <span className="px-5 py-3 bg-gradient-to-r from-zinc-800/70 to-black/40 text-gray-300 rounded-full text-sm font-semibold border border-red-700/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-red-900/20">
            <Zap size={18} className="animate-pulse" />
            Problem Solver
          </span>
          <span className="px-5 py-3 bg-gradient-to-r from-red-700/20 to-black/30 text-red-300/90 rounded-full text-sm font-semibold border border-red-700/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300 flex items-center gap-2 shadow-lg shadow-red-900/20">
            <Sparkles
              size={18}
              className="animate-spin-slow"
              style={{ animationDuration: "3s" }}
            />
            Passionate Coder
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          

          <button
            onClick={() => scrollToSection("projects")}
            className="group px-10 py-4 border-2 border-red-600/70 text-red-400/90 rounded-full font-bold hover:bg-red-800 hover:text-white hover:border-red-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 flex items-center justify-center gap-3 backdrop-blur-sm relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-red-800 to-black scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></span>
            <Code
              size={22}
              className="relative z-10 group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="relative z-10">View My Work</span>
          </button>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-400 text-sm font-medium tracking-widest">
          SCROLL DOWN
        </span>
        <ChevronDown
          size={36}
          className="text-red-400/80 cursor-pointer hover:text-red-300 transition-all hover:scale-125"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </div>

    <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-20px) translateX(20px); }
      }
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 5s ease infinite;
      }
      .animate-spin-slow {
        animation: spin 6s linear infinite;
      }
    `}</style>
  </section>
);


// About Section with cards
export const AboutSection = () => (
  <section
    id="about"
    className="py-24 relative bg-gradient-to-b from-black via-zinc-900 to-red-950/30 overflow-hidden"
  >
    <FloatingParticles />
    <div className="max-w-5xl mx-auto px-6 relative z-10">
      <h2 className="text-5xl font-black text-center mb-6 bg-gradient-to-r from-red-400/80 to-red-600/70 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-red-500/60 to-red-700/60 mx-auto mb-16 rounded-full"></div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="group bg-gradient-to-br from-zinc-800/60 to-red-950/20 backdrop-blur-lg rounded-2xl p-8 border border-red-700/30 hover:border-red-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-800/20">
          <div className="w-16 h-16 bg-gradient-to-br from-red-600/70 to-red-800/70 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <Code className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Fresh Perspective</h3>
          <p className="text-gray-300 leading-relaxed">
            I'm a recent computer science graduate with a genuine passion for web development.
            While I may be new to the professional world, I bring enthusiasm, dedication, and
            a strong foundation in programming fundamentals.
          </p>
        </div>

        <div className="group bg-gradient-to-br from-zinc-800/60 to-red-950/20 backdrop-blur-lg rounded-2xl p-8 border border-red-700/30 hover:border-red-500/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-800/20">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500/70 to-red-800/70 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
          <p className="text-gray-300 leading-relaxed">
            I love turning ideas into code and am always excited to learn new technologies.
            I'm looking for an opportunity to grow with a team that values learning and innovation.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-950/50 via-black/50 to-red-900/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-red-700/40 shadow-2xl shadow-red-900/20 hover:shadow-red-800/40 transition-all duration-500 hover:scale-[1.02]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-600/80 to-red-900/80 rounded-xl flex items-center justify-center flex-shrink-0 animate-pulse">
            <Rocket className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400/80 to-red-600/70 mb-3">
              What I'm Looking For
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              A junior developer position where I can contribute to meaningful projects,
              learn from experienced developers, and grow my skills in a collaborative environment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        <div className="flex items-center gap-3 bg-zinc-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-red-700/30 hover:border-red-500/50 transition-all duration-300 hover:scale-110">
          <MapPin size={20} className="text-red-400/80" />
          <span className="text-gray-200 font-medium">{personalInfo.location}</span>
        </div>
        <div className="flex items-center gap-3 bg-zinc-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-red-700/30 hover:border-red-500/50 transition-all duration-300 hover:scale-110">
          <Phone size={20} className="text-red-400/80" />
          <span className="text-gray-200 font-medium">{personalInfo.availability}</span>
        </div>
      </div>
    </div>
  </section>
);


// Skills Section with hover effects
export const SkillsSection = () => {
  const [hovered, setHovered] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    if (hovered) {
      let value = 0;
      const skill = skills.find((s) => s.name === hovered);
      const timer = setInterval(() => {
        value += 3;
        setProgress((prev) => ({
          ...prev,
          [skill.name]: Math.min(value, skill.level),
        }));
        if (value >= skill.level) clearInterval(timer);
      }, 20);
      return () => clearInterval(timer);
    }
  }, [hovered]);

  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden"
    >
      <FloatingParticles />
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2 className="text-5xl font-black text-center mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-pink-500 mx-auto mb-20 rounded-full"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
          {skills.map((skill, index) => {
            const level = progress[skill.name] || 0;
            const circumference = 2 * Math.PI * 45;
            const dashOffset = circumference - (level / 100) * circumference;

            return (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center"
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 backdrop-blur-lg rounded-2xl p-6 border border-zinc-700/40 hover:border-cyan-400/60 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:-translate-y-2 w-full aspect-square flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Circular progress only on hover */}
                  <svg
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      hovered === skill.name ? "opacity-100" : "opacity-0"
                    }`}
                    viewBox="0 0 100 100"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="5"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="rgb(34,211,238)"
                      strokeWidth="5"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      style={{
                        transition: "stroke-dashoffset 1s ease-out",
                        filter: "drop-shadow(0 0 8px rgba(34,211,238,0.6))",
                      }}
                    />
                  </svg>

                  {/* Icon */}
                  {React.cloneElement(skill.icon, {
                    size: 44,
                    className:
                      "text-cyan-300/90 group-hover:text-cyan-200 transition-all duration-300 group-hover:scale-125 relative z-10",
                  })}

                  {/* Percentage only visible when hovered */}
                  {hovered === skill.name && (
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-cyan-200 transition-all duration-300">
                      {Math.round(level)}%
                    </span>
                  )}

                  {/* Skill name */}
                  <span className="mt-16 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300 text-center relative z-10">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
// Projects Section with 3D effect
export const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-500 text-sm font-semibold">
              Portfolio
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-6 text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey in full-stack development with real-world applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="bg-black/50 border border-gray-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-red-800/30">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                          hoveredIndex === index ? 'scale-105' : 'scale-100'
                        }`}
                      />
                    )}
                    {/* subtle overlay */}
                    <div
                      className={`absolute inset-0 bg-red-600/10 transition-opacity duration-500 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-10 md:p-12 flex flex-col justify-between bg-gradient-to-br from-black to-gray-900">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Code2 className="text-red-500" size={20} />
                        <span className="text-red-500 font-semibold text-sm tracking-wide uppercase">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
                          <Sparkles size={16} className="text-red-500" />
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {project.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-10">
                        <h4 className="text-white font-bold text-sm tracking-wide uppercase mb-4">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium border border-gray-700 hover:border-red-600/50 hover:bg-gray-900 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-4">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-black rounded-xl font-bold transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-red-800/50"
                        >
                          <ExternalLink size={20} />
                          <span>View Project</span>
                          <ArrowRight
                            size={18}
                            className="opacity-0 group-hover/btn:opacity-100 transition-opacity -ml-2"
                          />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-3 px-8 py-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-bold border border-gray-700 hover:border-red-600/50 transition-all duration-300 hover:gap-4"
                      >
                        <Github size={20} />
                        <span>Source Code</span>
                        <ArrowRight
                          size={18}
                          className="opacity-0 group-hover/btn:opacity-100 transition-opacity -ml-2"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="mt-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-black rounded-3xl opacity-20 group-hover:opacity-30 blur transition-all duration-500"></div>
              <div className="relative bg-black rounded-3xl p-12 border border-gray-800 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-red-600/10 rounded-2xl">
                    <Sparkles className="text-red-500" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-white mb-3">
                      More Amazing Projects Coming Soon!
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Currently working on exciting new full-stack applications. Each project pushes my skills further and helps me grow as a developer. Stay tuned for updates! 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



// Contact Section with animated cards
export const ContactSection = () => (
  <section
    id="contact"
    className="py-24 relative bg-gradient-to-b from-black via-neutral-900 to-red-950 overflow-hidden"
  >
    <FloatingParticles />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <h2 className="text-5xl font-black text-center mb-6 bg-gradient-to-r from-red-600 via-red-500 to-gray-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,0,0,0.4)]">
        Let's Connect!
      </h2>

      <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-gray-700 mx-auto mb-16 rounded-full shadow-lg shadow-red-600/40"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left card */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-neutral-900/90 to-red-950/40 backdrop-blur-lg rounded-2xl p-8 border border-red-600/30 hover:border-red-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30">
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-gray-300 mb-4">
              Ready to start my career journey!
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm excited to find the right opportunity where I can contribute fresh ideas, 
              learn from experienced professionals, and grow into a valuable team member.
            </p>

            <div className="bg-gradient-to-r from-red-950/80 to-black/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-red-600 shadow-lg">
              <h4 className="font-bold text-red-400 mb-4 text-lg flex items-center gap-2">
                <Rocket className="animate-bounce" size={20} />
                Available for:
              </h4>
              <ul className="text-red-200 space-y-2">
                {[
                  'Full-time junior developer positions',
                  'Internships and entry-level roles',
                  'Remote or on-site opportunities',
                  'Open to relocation',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right contact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              href: `mailto:${personalInfo.email}`,
              icon: <Mail className="text-red-400" size={28} />,
              title: "Email",
              subtitle: personalInfo.email,
              gradient: "from-black/90 to-red-950/40",
              border: "border-red-600/30",
              hoverBorder: "hover:border-red-500"
            },
            {
              href: personalInfo.linkedin,
              icon: <Linkedin className="text-red-500" size={28} />,
              title: "LinkedIn",
              subtitle: "Connect with me",
              gradient: "from-black/90 to-neutral-800/60",
              border: "border-red-600/30",
              hoverBorder: "hover:border-red-500"
            },
            {
              href: personalInfo.github,
              icon: <Github className="text-gray-200" size={28} />,
              title: "GitHub",
              subtitle: "View my code",
              gradient: "from-neutral-900/90 to-black/70",
              border: "border-gray-700/30",
              hoverBorder: "hover:border-red-400"
            },
            {
              icon: <Phone className="text-red-400" size={28} />,
              title: "Phone",
              subtitle: personalInfo.phone,
              gradient: "from-black/80 to-red-950/60",
              border: "border-red-600/30",
              hoverBorder: "hover:border-red-500"
            }
          ].map(({ href, icon, title, subtitle, gradient, border, hoverBorder }) =>
            href ? (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 bg-gradient-to-br ${gradient} backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-red-600/30 hover:scale-110 transition-all duration-500 border ${border} ${hoverBorder}`}
              >
                <div className="group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                  {icon}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{title}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                    {subtitle}
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={title}
                className={`flex items-center gap-4 bg-gradient-to-br ${gradient} backdrop-blur-lg rounded-2xl p-6 shadow-lg border ${border}`}
              >
                {icon}
                <div>
                  <div className="font-bold text-white text-lg">{title}</div>
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
  <footer className="relative py-12 bg-gradient-to-b from-gray-900 to-black border-t border-blue-500/30 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"></div>
    <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
      <div className="mb-6">
        <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
          {personalInfo.name}
        </div>
        <p className="text-gray-400 text-lg font-medium">
          Aspiring Developer • Open to Opportunities
        </p>
      </div>
      
      <div className="flex justify-center gap-6 mb-6">
        {[
          { href: personalInfo.github, icon: <Github size={24} />, label: "GitHub" },
          { href: personalInfo.linkedin, icon: <Linkedin size={24} />, label: "LinkedIn" },
          { href: `mailto:${personalInfo.email}`, icon: <Mail size={24} />, label: "Email" }
        ].map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 hover:from-blue-600 hover:to-purple-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 border border-gray-700 hover:border-blue-500"
          >
            {icon}
          </a>
        ))}
      </div>
      
      <div className="text-sm text-gray-500 space-y-1">
        <p>© 2024 {personalInfo.name}. All rights reserved.</p>
        <p className="flex items-center justify-center gap-2">
          Built with <span className="text-red-500 animate-pulse">♥</span> using React & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);