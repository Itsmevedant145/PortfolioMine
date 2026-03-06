// components.js - Reusable components (Glassmorphism Redesign)
import React from 'react';
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Github, Linkedin, MapPin, Phone, Code, Sparkles, Zap, Rocket, ExternalLink, ArrowRight, Palette } from 'lucide-react';
import { skills, projects, achievements, personalInfo } from './data.jsx';
import { useMemo } from "react";

// ─── THEME SYSTEM ────────────────────────────────────────────────────────────
export const themes = {
  red: {
    name: 'Crimson',
    dot: 'bg-red-500',
    primary: 'red-500',
    primaryHex: '#ef4444',
    accent: 'red-600',
    accentHex: '#dc2626',
    deep: 'red-900',
    glow: 'rgba(239,68,68,0.35)',
    glowSoft: 'rgba(239,68,68,0.12)',
    gradFrom: 'from-red-500',
    gradTo: 'to-red-700',
    gradVia: 'via-red-600',
    border: 'border-red-500/30',
    borderHover: 'hover:border-red-500',
    text: 'text-red-500',
    textAccent: 'text-red-400',
    bg: 'bg-red-600',
    bgHover: 'hover:bg-red-700',
    bgSoft: 'bg-red-600/10',
    bgDeep: 'bg-red-950/40',
    shadow: 'shadow-red-500/30',
    shadowGlow: '[0_0_40px_rgba(239,68,68,0.25)]',
  },
  blue: {
    name: 'Cyber Blue',
    dot: 'bg-cyan-400',
    primary: 'cyan-400',
    primaryHex: '#22d3ee',
    accent: 'cyan-500',
    accentHex: '#06b6d4',
    deep: 'cyan-900',
    glow: 'rgba(34,211,238,0.35)',
    glowSoft: 'rgba(34,211,238,0.12)',
    gradFrom: 'from-cyan-400',
    gradTo: 'to-blue-600',
    gradVia: 'via-cyan-500',
    border: 'border-cyan-400/30',
    borderHover: 'hover:border-cyan-400',
    text: 'text-cyan-400',
    textAccent: 'text-cyan-300',
    bg: 'bg-cyan-500',
    bgHover: 'hover:bg-cyan-600',
    bgSoft: 'bg-cyan-500/10',
    bgDeep: 'bg-cyan-950/40',
    shadow: 'shadow-cyan-400/30',
    shadowGlow: '[0_0_40px_rgba(34,211,238,0.25)]',
  },
  green: {
    name: 'Emerald',
    dot: 'bg-emerald-400',
    primary: 'emerald-400',
    primaryHex: '#34d399',
    accent: 'emerald-500',
    accentHex: '#10b981',
    deep: 'emerald-900',
    glow: 'rgba(52,211,153,0.35)',
    glowSoft: 'rgba(52,211,153,0.12)',
    gradFrom: 'from-emerald-400',
    gradTo: 'to-green-600',
    gradVia: 'via-emerald-500',
    border: 'border-emerald-400/30',
    borderHover: 'hover:border-emerald-400',
    text: 'text-emerald-400',
    textAccent: 'text-emerald-300',
    bg: 'bg-emerald-500',
    bgHover: 'hover:bg-emerald-600',
    bgSoft: 'bg-emerald-500/10',
    bgDeep: 'bg-emerald-950/40',
    shadow: 'shadow-emerald-400/30',
    shadowGlow: '[0_0_40px_rgba(52,211,153,0.25)]',
  },
  purple: {
    name: 'Violet',
    dot: 'bg-violet-500',
    primary: 'violet-500',
    primaryHex: '#8b5cf6',
    accent: 'violet-600',
    accentHex: '#7c3aed',
    deep: 'violet-900',
    glow: 'rgba(139,92,246,0.35)',
    glowSoft: 'rgba(139,92,246,0.12)',
    gradFrom: 'from-violet-500',
    gradTo: 'to-purple-700',
    gradVia: 'via-violet-600',
    border: 'border-violet-500/30',
    borderHover: 'hover:border-violet-500',
    text: 'text-violet-400',
    textAccent: 'text-violet-300',
    bg: 'bg-violet-600',
    bgHover: 'hover:bg-violet-700',
    bgSoft: 'bg-violet-600/10',
    bgDeep: 'bg-violet-950/40',
    shadow: 'shadow-violet-500/30',
    shadowGlow: '[0_0_40px_rgba(139,92,246,0.25)]',
  },
};

// ─── THEME SWITCHER ──────────────────────────────────────────────────────────
export const ThemeSwitcher = ({ currentTheme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const t = themes[currentTheme];

  return (
    <div className="relative">
      {/* Options */}
      <div className={`absolute bottom-16 right-0 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div
          className="backdrop-blur-2xl rounded-2xl p-3 border flex flex-col gap-2 min-w-[160px]"
          style={{
            background: 'rgba(10,10,10,0.85)',
            borderColor: t.primaryHex + '44',
            boxShadow: `0 8px 40px ${t.glow}`,
          }}
        >
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-2 pb-1">Theme</p>
          {Object.entries(themes).map(([key, th]) => (
            <button
              key={key}
              onClick={() => { setTheme(key); setOpen(false); }}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                currentTheme === key ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
              style={{
                background: currentTheme === key ? th.primaryHex + '22' : 'transparent',
                border: currentTheme === key ? `1px solid ${th.primaryHex}66` : '1px solid transparent',
              }}
            >
              <span className={`w-3 h-3 rounded-full ${th.dot} shadow-lg`} style={{ boxShadow: `0 0 8px ${th.primaryHex}` }} />
              {th.name}
            </button>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-2xl border transition-all duration-300 hover:scale-110"
        style={{
          background: `rgba(10,10,10,0.8)`,
          borderColor: t.primaryHex + '55',
          boxShadow: `0 0 25px ${t.glow}, inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        <Palette size={22} style={{ color: t.primaryHex }} />
      </button>
    </div>
  );
};

// ─── FLOATING PARTICLES ──────────────────────────────────────────────────────
export const FloatingParticles = ({ theme }) => {
  const t = themes[theme] || themes.red;
  const particles = useMemo(() => {
    return [...Array(35)].map((_, i) => ({
      id: i,
      isAccent: Math.random() > 0.5,
      size: Math.random() * 4 + 1.5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 22 + 14,
      delay: Math.random() * 10,
      drift: Math.random() * 40 - 20,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full will-change-transform"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: p.isAccent ? t.primaryHex : 'rgba(255,255,255,0.08)',
            opacity: p.isAccent ? 0.35 : 0.15,
            boxShadow: p.isAccent ? `0 0 12px ${t.primaryHex}` : 'none',
            filter: `blur(${p.isAccent ? 0.5 : 1}px)`,
            animation: `floatParticle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
export const Navigation = ({ activeSection, scrollToSection, isLoaded, theme }) => {
  const t = themes[theme] || themes.red;
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div
        className="relative border-b"
        style={{
          background: 'rgba(5,5,5,0.75)',
          backdropFilter: 'blur(24px)',
          borderColor: t.primaryHex + '22',
          boxShadow: `0 1px 0 ${t.primaryHex}22, 0 10px 40px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Bottom glow line */}
        <div
          className="absolute bottom-0 left-0 w-full h-[1px] animate-pulse"
          style={{ background: `linear-gradient(90deg, transparent, ${t.primaryHex}60, transparent)` }}
        />

        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-center items-center">
            <div
              className="relative flex space-x-1 md:space-x-2 px-3 py-2 rounded-2xl border"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {sections.map((section) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="relative px-5 py-2 text-sm font-medium capitalize tracking-wide rounded-xl transition-all duration-300 group"
                    style={{ color: isActive ? '#fff' : 'rgba(156,163,175,1)' }}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-xl transition-all duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
                          boxShadow: `0 0 20px ${t.glow}`,
                        }}
                      />
                    )}
                    {!isActive && (
                      <span
                        className="absolute inset-0 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"
                        style={{ background: t.primaryHex + '15' }}
                      />
                    )}
                    <span className="relative z-10">{section}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const HeroSection = ({ isLoaded, scrollToSection, theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #000 0%, #0a0a0a 50%, #050505 100%)' }}
    >
      {/* Glass orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] animate-pulse"
        style={{ background: t.primaryHex + '18' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
        style={{ background: t.primaryHex + '0d', animationDelay: '2s' }}
      />

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${t.primaryHex} 1px, transparent 1px), linear-gradient(90deg, ${t.primaryHex} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <FloatingParticles theme={theme} />

      <div
        className={`text-center relative z-10 px-6 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Glass badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border text-sm font-medium"
          style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            borderColor: t.primaryHex + '40',
            color: t.primaryHex,
            boxShadow: `0 0 20px ${t.glowSoft}`,
          }}
        >
          <Sparkles size={15} className="animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter" style={{ color: '#fff' }}>
          Hi, I'm{' '}
          <span
            style={{
              background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: `drop-shadow(0 0 30px ${t.glow})`,
            }}
          >
            Vedant
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-zinc-400 mb-4 font-light tracking-wide">
          {personalInfo.title}
        </p>

        <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.description}
        </p>

        {/* Glass pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { icon: <Rocket size={15} />, label: 'Quick Learner' },
            { icon: <Zap size={15} />, label: 'Problem Solver' },
            { icon: <Sparkles size={15} />, label: 'Passionate Coder' },
          ].map(({ icon, label }) => (
            <span
              key={label}
              className="px-5 py-2.5 text-sm font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: `1px solid rgba(255,255,255,0.1)`,
                color: 'rgba(209,213,219,1)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <span style={{ color: t.primaryHex }}>{icon}</span>
              {label}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('projects')}
          className="group px-10 py-4 font-bold rounded-2xl transition-all duration-300 inline-flex items-center gap-3 hover:gap-4 hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
            color: '#fff',
            boxShadow: `0 8px 40px ${t.glow}, inset 0 1px 0 rgba(255,255,255,0.2)`,
          }}
        >
          <Code size={20} />
          View My Work
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown
          size={30}
          className="animate-bounce transition-colors"
          style={{ color: 'rgba(82,82,82,1)' }}
        />
      </div>
    </section>
  );
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
export const AboutSection = ({ theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: t.primaryHex + '14' }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{
              background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </h2>
          <div
            className="mt-5 w-28 h-[2px] mx-auto rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${t.primaryHex}, transparent)` }}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: <Code size={26} style={{ color: t.primaryHex }} />,
              title: 'Fresh Perspective',
              body: "I'm a recent computer science graduate with a strong passion for web development. I bring dedication, curiosity, and solid programming fundamentals to every project.",
            },
            {
              icon: <Sparkles size={26} style={{ color: t.primaryHex }} />,
              title: 'Always Learning',
              body: "I enjoy transforming ideas into code and continuously improving my skills. I'm excited to grow within a collaborative and innovative team.",
            },
          ].map(({ icon, title, body }) => (
            <div
              key={title}
              className="group rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02]"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: `1px solid rgba(255,255,255,0.07)`,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)`,
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 40px ${t.glowSoft}, inset 0 1px 0 rgba(255,255,255,0.08)`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = `inset 0 1px 0 rgba(255,255,255,0.05)`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6"
                style={{
                  background: t.primaryHex + '18',
                  border: `1px solid ${t.primaryHex}30`,
                }}
              >
                {icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Highlight */}
        <div
          className="rounded-3xl p-10 transition-all duration-500"
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${t.primaryHex}25`,
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04)`,
          }}
        >
          <div className="flex gap-6 items-start">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: t.primaryHex + '18', border: `1px solid ${t.primaryHex}30` }}
            >
              <Rocket size={20} style={{ color: t.primaryHex }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">What I'm Looking For</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                A junior developer role where I can contribute to meaningful products, learn from experienced engineers, and continuously evolve my technical skills.
              </p>
            </div>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-5 mt-14">
          {[
            { icon: <MapPin size={16} style={{ color: t.primaryHex }} />, text: personalInfo.location },
            { icon: <Phone size={16} style={{ color: t.primaryHex }} />, text: personalInfo.availability },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: `1px solid rgba(255,255,255,0.08)`,
              }}
            >
              {icon}
              <span className="text-gray-300 font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SKILLS ──────────────────────────────────────────────────────────────────
export const SkillsSection = ({ theme }) => {
  const t = themes[theme] || themes.red;
  const [hovered, setHovered] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    if (hovered) {
      let value = 0;
      const skill = skills.find((s) => s.name === hovered);
      if (!skill) return;
      const timer = setInterval(() => {
        value += 3;
        setProgress((prev) => ({ ...prev, [skill.name]: Math.min(value, skill.level) }));
        if (value >= skill.level) clearInterval(timer);
      }, 20);
      return () => clearInterval(timer);
    }
  }, [hovered]);

  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050505 0%, #080808 100%)' }}
    >
      <FloatingParticles theme={theme} />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <h2
          className="text-5xl font-black text-center mb-5"
          style={{
            background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Skills & Technologies
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-20 rounded-full"
          style={{ background: `linear-gradient(90deg, ${t.primaryHex}, ${t.accentHex})` }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => {
            const level = progress[skill.name] || 0;
            const circumference = 2 * Math.PI * 45;
            const dashOffset = circumference - (level / 100) * circumference;
            const isHov = hovered === skill.name;

            return (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center"
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="relative rounded-3xl p-5 border transition-all duration-500 hover:scale-110 hover:-translate-y-2 w-full aspect-square flex flex-col items-center justify-center overflow-hidden cursor-default"
                  style={{
                    background: isHov
                      ? `rgba(255,255,255,0.07)`
                      : 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    borderColor: isHov ? t.primaryHex + '55' : 'rgba(255,255,255,0.07)',
                    boxShadow: isHov
                      ? `0 8px 40px ${t.glowSoft}, inset 0 1px 0 rgba(255,255,255,0.1)`
                      : 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                >
                  {/* Circular progress */}
                  <svg
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${isHov ? 'opacity-100' : 'opacity-0'}`}
                    viewBox="0 0 100 100"
                    style={{ transform: 'rotate(-90deg)' }}
                  >
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                    <circle
                      cx="50" cy="50" r="45" fill="none"
                      stroke={t.primaryHex}
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dashoffset 1s ease-out',
                        filter: `drop-shadow(0 0 6px ${t.primaryHex})`,
                      }}
                    />
                  </svg>

                  {/* Icon */}
                  {React.cloneElement(skill.icon, {
                    size: 40,
                    style: { color: isHov ? t.primaryHex : 'rgba(156,163,175,0.9)', transition: 'all 0.3s', position: 'relative', zIndex: 10 },
                  })}

                  {isHov && (
                    <span
                      className="absolute inset-0 flex items-center justify-center text-sm font-bold transition-all duration-300"
                      style={{ color: t.primaryHex }}
                    >
                      {Math.round(level)}%
                    </span>
                  )}

                  <span className="mt-14 text-xs font-semibold text-gray-400 group-hover:text-white transition-colors text-center relative z-10">
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

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const ProjectsSection = ({ theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <section id="projects" className="relative py-32 overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: t.primaryHex + '0e' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              background: t.primaryHex + '15',
              border: `1px solid ${t.primaryHex}30`,
              color: t.primaryHex,
            }}
          >
            Portfolio
          </span>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Featured{' '}
            <span
              style={{
                background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Selected full-stack applications built with modern technologies and performance-focused architecture.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="group transition-all duration-500">
              {/* Image */}
              <div
                className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
                style={{
                  border: `1px solid rgba(255,255,255,0.07)`,
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: `0 20px 80px rgba(0,0,0,0.5)`,
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 20px 80px ${t.glowSoft}`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 20px 80px rgba(0,0,0,0.5)'}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to top, ${t.primaryHex}22, transparent)` }}
                />
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{project.title}</h3>

                <ul className="space-y-4 mb-8">
                  {project.features.slice(0, 5).map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: t.primaryHex, boxShadow: `0 0 6px ${t.primaryHex}` }}
                      />
                      <span className="text-gray-300 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        backdropFilter: 'blur(8px)',
                        border: `1px solid rgba(255,255,255,0.08)`,
                        color: 'rgba(156,163,175,1)',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = t.primaryHex + '55'; e.currentTarget.style.color = '#fff'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(156,163,175,1)'; }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-3 px-7 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
                        color: '#fff',
                        boxShadow: `0 4px 20px ${t.glow}`,
                      }}
                    >
                      <ExternalLink size={17} />
                      Live Project
                      <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-7 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid rgba(255,255,255,0.1)`,
                      color: '#fff',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = t.primaryHex + '55'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <Github size={17} />
                    GitHub
                    <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONTACT ─────────────────────────────────────────────────────────────────
export const ContactSection = ({ theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#050505' }}>
      <div
        className="absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 50% 100%, ${t.primaryHex}12 0%, transparent 70%)` }}
      />
      <FloatingParticles theme={theme} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2
          className="text-5xl font-black text-center mb-5"
          style={{
            background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's Connect!
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-16 rounded-full"
          style={{ background: `linear-gradient(90deg, ${t.primaryHex}, transparent)` }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            className="rounded-3xl p-8 transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px)',
              border: `1px solid ${t.primaryHex}25`,
              boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05)`,
            }}
          >
            <h3
              className="text-3xl font-black mb-4"
              style={{
                background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ready to start my career journey!
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm excited to find the right opportunity where I can contribute fresh ideas, learn from experienced professionals, and grow into a valuable team member.
            </p>

            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(12px)',
                borderLeft: `3px solid ${t.primaryHex}`,
                border: `1px solid ${t.primaryHex}20`,
              }}
            >
              <h4 className="font-bold mb-4 text-lg flex items-center gap-2" style={{ color: t.primaryHex }}>
                <Rocket className="animate-bounce" size={18} />
                Available for:
              </h4>
              <ul className="space-y-2">
                {['Full-time junior developer positions', 'Internships and entry-level roles', 'Remote or on-site opportunities', 'Open to relocation'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.primaryHex }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={26} />, title: 'Email', subtitle: personalInfo.email },
              { href: personalInfo.linkedin, icon: <Linkedin size={26} />, title: 'LinkedIn', subtitle: 'Connect with me' },
              { href: personalInfo.github, icon: <Github size={26} />, title: 'GitHub', subtitle: 'View my code' },
              { icon: <Phone size={26} />, title: 'Phone', subtitle: personalInfo.phone },
            ].map(({ href, icon, title, subtitle }) => {
              const inner = (
                <div
                  className="flex items-center gap-4 rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    border: `1px solid rgba(255,255,255,0.07)`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = t.primaryHex + '44';
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 8px 30px ${t.glowSoft}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.04)';
                  }}
                >
                  <div style={{ color: t.primaryHex }}>{icon}</div>
                  <div>
                    <div className="font-bold text-white">{title}</div>
                    <div className="text-sm text-gray-400">{subtitle}</div>
                  </div>
                </div>
              );

              return href ? (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={title}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────────────
export const Footer = ({ theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: '#030303',
        borderTop: `1px solid rgba(255,255,255,0.06)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 0%, ${t.primaryHex}0a, transparent 60%)` }}
      />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-6">
          <div
            className="text-3xl font-black mb-2"
            style={{
              background: `linear-gradient(135deg, ${t.primaryHex}, #ffffff)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {personalInfo.name}
          </div>
          <p className="text-gray-500 font-medium">Aspiring Developer • Open to Opportunities</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          {[
            { href: personalInfo.github, icon: <Github size={20} />, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(107,114,128,1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = t.primaryHex + '22';
                e.currentTarget.style.borderColor = t.primaryHex + '55';
                e.currentTarget.style.color = t.primaryHex;
                e.currentTarget.style.boxShadow = `0 0 16px ${t.glowSoft}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(107,114,128,1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>© 2024 {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center justify-center gap-2">
            Built with <span className="animate-pulse" style={{ color: t.primaryHex }}>♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};