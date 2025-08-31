import React, { useState, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import { ChevronDown, Mail, Github, Linkedin, MapPin, Phone, BookOpen, Code, Lightbulb, Star, ArrowRight, Download, GraduationCap, Award } from 'lucide-react';
// Remove: import { Mail, Linkedin, Github, Phone } from "react-feather";

import {
  FaJs,        // JavaScript
  FaReact,     // React
  FaHtml5,     // HTML5
  FaCss3Alt,   // CSS3
  FaJava,      // Java
  FaDatabase,  // SQL
  FaNodeJs,    // Node.js
} from 'react-icons/fa';

import { SiTypescript } from 'react-icons/si';


const JuniorDeveloperPortfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  

 const skills = [
  { name: 'JavaScript', icon: <FaJs className="text-yellow-500" />, level: 85 },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, level: 80 },
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" />, level: 90 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: 'Java', icon: <FaJava className="text-red-600" />, level: 70 },
  { name: 'SQL', icon: <FaDatabase className="text-gray-700" />, level: 65 },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 50, learning: true },
 
];



 const projects = [
  {
    title: 'Finance Tracker',
    description: 'Full stack app to track income and expenses, with user authentication and persistent data.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-green-500 to-emerald-500',
    type: 'Full Stack Project',
    github: 'https://github.com/Itsmevedant145/Finance-Tracker-'
  },
  {
    title: 'Habit & Goal Manager',
    description: 'Full stack habit and goal-setting app with daily check-ins and data storage.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-blue-500 to-indigo-500',
    type: 'Full Stack Project',
    github: 'https://github.com/Itsmevedant145/HABIT-AND-GOAL-MANAGER'
  },
  {
    title: 'Basic E-commerce CRUD',
    description: 'Full stack product management app with CRUD operations and simulated checkout.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS3'],
    color: 'from-orange-500 to-red-500',
    type: 'Full Stack Project',
    github: 'https://github.com/Itsmevedant145/Web-Project'
  }
];


  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University Name',
      period: '2020 - 2024',
      description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems'
    },
    {
      degree: 'Full Stack Web Development',
      school: 'Online Bootcamp',
      period: '2023 - 2024',
      description: 'Intensive 6-month program covering modern web technologies and frameworks'
    }
  ];

  const achievements = [
    {
      title: 'Dean\'s List',
      description: '3 consecutive semesters',
      icon: '🏆'
    },
    {
      title: 'Coding Bootcamp Graduate',
      description: 'Top 10% of class',
      icon: '🎓'
    },
    {
      title: 'Open Source Contributor',
      description: '5+ contributions',
      icon: '🌟'
    },
    {
      title: 'Personal Projects',
      description: '10+ completed projects',
      icon: '💻'
    }
  ];

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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="backdrop-blur-lg bg-white/80 border-b border-gray-200/50 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vedant Bhuskat
              </div>
              <div className="hidden md:flex space-x-8">
                {['hero', 'about', 'skills', 'projects', 'education', 'contact'].map((section) => (
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
           
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Vedant
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              Junior Developer Ready to Learn & Grow
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            A passion for coding and building amazing web experiences. 
              Eager to contribute to innovative projects and grow with your team!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
             
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                🚀 Quick Learner
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                💡 Problem Solver
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                🔥 Passionate Coder
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
            className="text-gray-400 cursor-pointer hover:text-blue-500 transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a recent computer science graduate with a genuine passion for web development. 
                While I may be new to the professional world, I bring enthusiasm, dedication, and 
                a strong foundation in programming fundamentals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I love turning ideas into code and am always excited to learn new technologies. 
                I'm looking for an opportunity to grow with a team that values learning and innovation.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">What I'm Looking For:</h3>
                <p className="text-blue-700">
                  A junior developer position where I can contribute to meaningful projects, 
                  learn from experienced developers, and grow my skills in a collaborative environment.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-blue-600">
                  <MapPin size={18} />
                  <span>Open to Relocation</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Phone size={18} />
                  <span>Available Immediately</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-16 bg-gradient-to-br from-white via-blue-50 to-teal-50">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent drop-shadow-sm">
      Skills & Technologies
    </h2>

    <div className="relative border-l-2 border-gradient-to-b from-blue-500 to-teal-400 pl-6 space-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="group">
          <div className="relative w-full h-8 bg-white rounded-sm shadow-sm overflow-hidden">
            {/* Progress bar fill */}
            <div
              className="h-full rounded-sm bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-700 ease-in-out"
              style={{ width: `${skill.level}%` }}
            />

            {/* Skill name centered over bar with subtle bg overlay for contrast */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
              <span className="text-sm font-semibold text-black bg-white bg-opacity-60 px-2 rounded">
                {skill.name}
              </span>
            </div>
          </div>

          {/* Learning label and percentage below bar */}
          <div className="flex justify-between mt-1 px-1 text-xs font-medium text-gray-600">
            {skill.learning ? (
              <span className="inline-flex items-center gap-1 bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-semibold tracking-wide shadow-sm">
                <HiPlus className="h-3 w-3" />
                Learning
              </span>
            ) : (
              <span />
            )}
            <span className="text-gray-800">{skill.level}%</span>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects & Practice
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden">
                  <div className={`w-full h-48 bg-gradient-to-r ${project.color} flex items-center justify-center text-5xl text-white`}>
                    💻
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                     <a 
  href={project.github}
  target="_blank" 
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-blue-600 group-hover:text-blue-800 transition-colors"
>
  <span className="text-sm font-medium">View Code</span>
  <Github size={16} />
</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🚧 More Projects Coming Soon!</h3>
              <p className="text-gray-600">
                I'm actively working on new projects to showcase my growing skills. 
                Each project teaches me something new and helps me become a better developer.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="py-16 relative bg-gradient-to-b from-white via-blue-50 to-teal-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent drop-shadow-sm relative inline-block">
      Let's Connect!
      <span className="block w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded mt-2 mx-auto"></span>
    </h2>
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left panel */}
      <div className="space-y-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
            Ready to start my career journey!
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-8 max-w-xl mx-auto md:mx-0">
            I'm excited to find the right opportunity where I can contribute fresh ideas, 
            learn from experienced professionals, and grow into a valuable team member.
          </p>

          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500 max-w-md mx-auto md:mx-0 shadow-sm">
            <h4 className="font-semibold text-green-900 mb-3">Available for:</h4>
            <ul className="text-green-700 space-y-1 list-disc list-inside">
              <li>Full-time junior developer positions</li>
              <li>Internships and entry-level roles</li>
              <li>Remote or on-site opportunities</li>
              <li>Open to relocation</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Right panel - contact cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-md mx-auto md:mx-0">
        {[{
          href: "mailto:alex.johnson@email.com",
          icon: <Mail className="text-blue-500" size={24} />,
          title: "Email",
          subtitle: "vedantbhuskat2@gmail.com"
        }, {
          href: "https://www.linkedin.com/in/vedant-bhuskat-664804267/",
          icon: <Linkedin className="text-blue-600" size={24} />,
          title: "LinkedIn",
          subtitle: "Connect with me"
        }, {
          href: "https://github.com/Itsmevedant145",
          icon: <Github className="text-gray-700" size={24} />,
          title: "GitHub",
          subtitle: "View my code"
        }, {
          icon: <Phone className="text-green-500" size={24} />,
          title: "Phone",
          subtitle: "+91 9699857376"
        }].map(({ href, icon, title, subtitle }) => (
          href ? (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform duration-300 border border-gray-100"
            >
              {icon}
              <div>
                <div className="font-semibold text-gray-900">{title}</div>
                <div className="text-sm text-gray-600">{subtitle}</div>
              </div>
            </a>
          ) : (
            <div
              key={title}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md border border-gray-100"
            >
              {icon}
              <div>
                <div className="font-semibold text-gray-900">{title}</div>
                <div className="text-sm text-gray-600">{subtitle}</div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-2">
            © 2024 Vedant Bhuskat - Aspiring Developer
          </p>
          <p className="text-sm text-gray-500">
            Built with React & Tailwind CSS • Open to opportunities!
          </p>
        </div>
      </footer>
    </div>
  );
};
export default JuniorDeveloperPortfolio;