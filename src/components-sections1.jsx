// components-sections1.js — Hero, About, Skills
import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Sparkles, Zap, Rocket, ArrowRight, MapPin, Phone } from 'lucide-react';
import { personalInfo, skills } from './data.jsx';
import { themes, FloatingParticles } from './components-layout.jsx';

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const HeroSection = ({ isLoaded, scrollToSection, theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 60% 40%, #0f0a0a 0%, #050505 45%, #000 100%)',
      }}
    >
      {/* Grain texture overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '180px 180px',
      }} />

      {/* Ambient orbs */}
      <div style={{
        position: 'absolute', top: '25%', right: '25%',
        width: 500, height: 500, borderRadius: '50%',
        background: t.primary + '14', filter: 'blur(140px)',
        animation: 'pulse 4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '25%', left: '20%',
        width: 300, height: 300, borderRadius: '50%',
        background: t.primary + '0a', filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.025, pointerEvents: 'none',
        backgroundImage: `linear-gradient(${t.primary} 1px, transparent 1px), linear-gradient(90deg, ${t.primary} 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <FloatingParticles theme={theme} />

      {/* Content */}
      <div
        style={{
          textAlign: 'center', position: 'relative', zIndex: 10, padding: '0 24px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s ease',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            marginBottom: 28, padding: '8px 18px', borderRadius: 999,
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(16px)',
            border: `1px solid ${t.primary}40`,
            color: t.primary,
            fontSize: 13, fontWeight: 500,
            boxShadow: `0 0 20px ${t.glowXs}`,
          }}
        >
          <Sparkles size={13} />
          Available for opportunities
        </div>

        {/* Name */}
        <h1 style={{ fontSize: 'clamp(56px, 10vw, 96px)', fontWeight: 900, margin: '0 0 12px', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
          Hi, I'm{' '}
          <span style={{ color: t.primary, filter: `drop-shadow(0 0 30px ${t.glow})` }}>
            Vedant
          </span>
        </h1>

        {/* Title */}
        <p style={{ fontSize: 'clamp(18px, 3vw, 26px)', color: 'rgba(161,161,170,1)', marginBottom: 14, fontWeight: 300 }}>
          {personalInfo.title}
        </p>

        {/* Description */}
        <p style={{ fontSize: 16, color: 'rgba(113,113,122,1)', marginBottom: 40, maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}>
          {personalInfo.description}
        </p>

        {/* Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 44 }}>
          {[
            { icon: <Rocket size={14} />, label: 'Quick Learner' },
            { icon: <Zap size={14} />, label: 'Problem Solver' },
            { icon: <Sparkles size={14} />, label: 'Passionate Coder' },
          ].map(({ icon, label }) => (
            <span
              key={label}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                padding: '9px 18px', borderRadius: 999,
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.09)',
                color: 'rgba(209,213,219,1)', fontSize: 13, fontWeight: 500,
              }}
            >
              <span style={{ color: t.primary }}>{icon}</span>
              {label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollToSection('projects')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '14px 32px', borderRadius: 14, border: 'none',
            background: `linear-gradient(135deg, ${t.primary}, ${t.accent})`,
            color: '#fff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
            boxShadow: `0 8px 40px ${t.glow}`,
            transition: 'all 0.25s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Code size={18} />
          View My Work
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Scroll hint */}
      <div
        onClick={() => scrollToSection('about')}
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          cursor: 'pointer', color: 'rgba(82,82,91,1)',
          animation: 'bounce 2s infinite',
        }}
      >
        <ChevronDown size={28} />
      </div>
    </section>
  );
};

// ─── ABOUT ────────────────────────────────────────────────────────────────────
export const AboutSection = ({ theme }) => {
  const t = themes[theme] || themes.red;

  const cards = [
    {
      icon: <Code size={24} style={{ color: t.primary }} />,
      title: 'Fresh Perspective',
      body: "I'm a recent computer science graduate with a strong passion for web development. I bring dedication, curiosity, and solid programming fundamentals to every project.",
    },
    {
      icon: <Sparkles size={24} style={{ color: t.primary }} />,
      title: 'Always Learning',
      body: "I enjoy transforming ideas into code and continuously improving my skills. I'm excited to grow within a collaborative and innovative team.",
    },
  ];

  return (
    <section
      id="about"
      style={{ position: 'relative', padding: '100px 24px', background: '#050505', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 400, borderRadius: '50%',
        background: t.primary + '10', filter: 'blur(140px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            About <span style={{ color: t.primary }}>Me</span>
          </h2>
          <div style={{
            width: 80, height: 2, margin: '18px auto 0',
            background: `linear-gradient(90deg, transparent, ${t.primary}, transparent)`,
            borderRadius: 2,
          }} />
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 20 }}>
          {cards.map(({ icon, title, body }) => (
            <div
              key={title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 24,
                padding: 32,
                transition: 'all 0.35s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${t.primary}40`;
                e.currentTarget.style.boxShadow = `0 8px 40px ${t.glowSoft}`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.07)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: t.primary + '18',
                border: `1px solid ${t.primary}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                {icon}
              </div>
              <h3 style={{ color: '#fff', fontSize: 18, fontWeight: 700, margin: '0 0 10px' }}>{title}</h3>
              <p style={{ color: 'rgba(156,163,175,1)', lineHeight: 1.7, margin: 0, fontSize: 14 }}>{body}</p>
            </div>
          ))}
        </div>

        {/* What I'm looking for */}
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            border: `1px solid ${t.primary}25`,
            borderRadius: 24,
            padding: 36,
            display: 'flex', gap: 20, alignItems: 'flex-start',
          }}
        >
          <div style={{
            width: 48, height: 48, borderRadius: 14, flexShrink: 0,
            background: t.primary + '18',
            border: `1px solid ${t.primary}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Rocket size={20} style={{ color: t.primary }} />
          </div>
          <div>
            <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: '0 0 10px' }}>What I'm Looking For</h3>
            <p style={{ color: 'rgba(156,163,175,1)', lineHeight: 1.7, margin: 0, fontSize: 15 }}>
              A junior developer role where I can contribute to meaningful products, learn from experienced engineers, and continuously evolve my technical skills.
            </p>
          </div>
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginTop: 52 }}>
          {[
            { icon: <MapPin size={15} style={{ color: t.primary }} />, text: personalInfo.location },
            { icon: <Phone size={15} style={{ color: t.primary }} />, text: personalInfo.availability },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '10px 22px', borderRadius: 999,
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(209,213,219,1)', fontSize: 14,
              }}
            >
              {icon}
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const SkillsSection = ({ theme }) => {
  const t = themes[theme] || themes.red;
  const [hovered, setHovered] = useState(null);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    if (!hovered) return;
    const skill = skills.find((s) => s.name === hovered);
    if (!skill) return;
    let value = 0;
    const timer = setInterval(() => {
      value += 3;
      setProgress((prev) => ({ ...prev, [skill.name]: Math.min(value, skill.level) }));
      if (value >= skill.level) clearInterval(timer);
    }, 18);
    return () => clearInterval(timer);
  }, [hovered]);

  return (
    <section
      id="skills"
      style={{
        padding: '100px 32px',
        background: 'linear-gradient(180deg, #050505 0%, #080808 100%)',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <FloatingParticles theme={theme} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#fff', textAlign: 'center', margin: '0 0 12px', letterSpacing: '-0.02em' }}>
          Skills &{' '}
          <span style={{ color: t.primary }}>Technologies</span>
        </h2>
        <div style={{
          width: 80, height: 3, margin: '0 auto 72px',
          background: `linear-gradient(90deg, ${t.primary}, ${t.accent})`,
          borderRadius: 2,
        }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
          gap: 16,
        }}>
          {skills.map((skill) => {
            const isHov = hovered === skill.name;
            const level = progress[skill.name] || 0;
            const circumference = 2 * Math.PI * 45;
            const dashOffset = circumference - (level / 100) * circumference;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  aspectRatio: '1',
                  borderRadius: 20,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  background: isHov ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isHov ? t.primary + '50' : 'rgba(255,255,255,0.07)'}`,
                  boxShadow: isHov ? `0 8px 32px ${t.glowSoft}` : 'none',
                  transform: isHov ? 'translateY(-6px) scale(1.05)' : 'translateY(0) scale(1)',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                  padding: 16,
                }}
              >
                {/* Ring */}
                <svg
                  style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    transform: 'rotate(-90deg)',
                    opacity: isHov ? 1 : 0,
                    transition: 'opacity 0.4s',
                  }}
                  viewBox="0 0 100 100"
                >
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  <circle
                    cx="50" cy="50" r="45" fill="none"
                    stroke={t.primary}
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    style={{
                      transition: 'stroke-dashoffset 1s ease-out',
                      filter: `drop-shadow(0 0 5px ${t.primary})`,
                    }}
                  />
                </svg>

                {/* Icon */}
                <div style={{ position: 'relative', zIndex: 1, marginBottom: 8 }}>
                  {React.cloneElement(skill.icon, {
                    size: 36,
                    style: { color: isHov ? t.primary : 'rgba(156,163,175,0.85)', transition: 'color 0.3s' },
                  })}
                </div>

                {/* % on hover */}
                {isHov && (
                  <span style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: t.primary,
                    zIndex: 2,
                  }}>
                    {Math.round(level)}%
                  </span>
                )}

                {/* Name */}
                <span style={{
                  fontSize: 11, fontWeight: 600, textAlign: 'center',
                  color: isHov ? '#fff' : 'rgba(107,114,128,1)',
                  transition: 'color 0.3s', position: 'relative', zIndex: 1,
                  marginTop: 36,
                }}>
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};