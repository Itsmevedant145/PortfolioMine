// components-layout.js — Themes, ThemeSwitcher, Navigation, Footer, FloatingParticles
import React, { useState, useMemo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from './data.jsx';

// ─── THEME DEFINITIONS ───────────────────────────────────────────────────────
export const themes = {
  red: {
    name: 'Crimson',
    dot: '#ef4444',
    primary: '#ef4444',
    accent: '#dc2626',
    glow: 'rgba(239,68,68,0.35)',
    glowSoft: 'rgba(239,68,68,0.12)',
    glowXs: 'rgba(239,68,68,0.08)',
  },
  blue: {
    name: 'Cyber Blue',
    dot: '#22d3ee',
    primary: '#22d3ee',
    accent: '#06b6d4',
    glow: 'rgba(34,211,238,0.35)',
    glowSoft: 'rgba(34,211,238,0.12)',
    glowXs: 'rgba(34,211,238,0.08)',
  },
  green: {
    name: 'Emerald',
    dot: '#34d399',
    primary: '#34d399',
    accent: '#10b981',
    glow: 'rgba(52,211,153,0.35)',
    glowSoft: 'rgba(52,211,153,0.12)',
    glowXs: 'rgba(52,211,153,0.08)',
  },
  purple: {
    name: 'Violet',
    dot: '#a78bfa',
    primary: '#a78bfa',
    accent: '#8b5cf6',
    glow: 'rgba(167,139,250,0.35)',
    glowSoft: 'rgba(167,139,250,0.12)',
    glowXs: 'rgba(167,139,250,0.08)',
  },
};

// ─── FLOATING PARTICLES ───────────────────────────────────────────────────────
export const FloatingParticles = ({ theme }) => {
  const t = themes[theme] || themes.red;
  const particles = useMemo(() => [...Array(30)].map((_, i) => ({
    id: i,
    isAccent: Math.random() > 0.55,
    size: Math.random() * 3.5 + 1.5,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 20 + 14,
    delay: Math.random() * 10,
    drift: Math.random() * 40 - 20,
  })), []);

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
            background: p.isAccent ? t.primary : 'rgba(255,255,255,0.07)',
            opacity: p.isAccent ? 0.4 : 0.15,
            boxShadow: p.isAccent ? `0 0 10px ${t.primary}` : 'none',
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

// ─── GEAR SVG ICON ────────────────────────────────────────────────────────────
const GearIcon = ({ color, spinning }) => (
  <svg
    width="26" height="26" viewBox="0 0 26 26" fill="none"
    style={{
      animation: spinning ? 'spinGear 3s linear infinite' : 'none',
      transition: 'all 0.3s',
    }}
  >
    <style>{`
      @keyframes spinGear { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes spinGearReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
    `}</style>
    {/* Outer gear teeth — 8 teeth */}
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <rect
        key={i}
        x="11.5" y="0.5"
        width="3" height="5.5"
        rx="1"
        fill={color}
        transform={`rotate(${deg} 13 13)`}
        opacity="0.9"
      />
    ))}
    {/* Outer ring */}
    <circle cx="13" cy="13" r="9.5" stroke={color} strokeWidth="2" fill="none" opacity="0.85" />
    {/* Inner detail ring */}
    <circle cx="13" cy="13" r="6.5" stroke={color} strokeWidth="0.8" fill="none" opacity="0.4" />
    {/* Cross detail */}
    <line x1="13" y1="7.5" x2="13" y2="9.5" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="13" y1="16.5" x2="13" y2="18.5" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="7.5" y1="13" x2="9.5" y2="13" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="16.5" y1="13" x2="18.5" y2="13" stroke={color} strokeWidth="1.2" opacity="0.5" />
    {/* Center hole */}
    <circle cx="13" cy="13" r="2.8" fill={color} opacity="0.9" />
    <circle cx="13" cy="13" r="1.4" fill="#050505" />
  </svg>
);

// ─── SMALL GEAR ───────────────────────────────────────────────────────────────
const SmallGear = ({ color, spinning }) => (
  <svg
    width="14" height="14" viewBox="0 0 14 14" fill="none"
    style={{ animation: spinning ? 'spinGearReverse 2s linear infinite' : 'none' }}
  >
    {[0,60,120,180,240,300].map((deg, i) => (
      <rect key={i} x="6" y="0.5" width="2" height="3" rx="0.5"
        fill={color} transform={`rotate(${deg} 7 7)`} opacity="0.8" />
    ))}
    <circle cx="7" cy="7" r="4.5" stroke={color} strokeWidth="1.5" fill="none" opacity="0.7" />
    <circle cx="7" cy="7" r="1.5" fill={color} opacity="0.9" />
    <circle cx="7" cy="7" r="0.7" fill="#050505" />
  </svg>
);

// ─── THEME SWITCHER ───────────────────────────────────────────────────────────
export const ThemeSwitcher = ({ currentTheme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const t = themes[currentTheme] || themes.red;

  return (
    <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 99999 }}>

      {/* Dropdown panel */}
      <div style={{
        position: 'absolute', bottom: 72, right: 0,
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
        pointerEvents: open ? 'auto' : 'none',
      }}>
        <div style={{
          background: 'rgba(8,8,8,0.95)',
          backdropFilter: 'blur(28px)',
          border: `1px solid ${t.primary}30`,
          borderRadius: 18,
          padding: '12px 10px',
          minWidth: 165,
          boxShadow: `0 12px 50px ${t.glow}, 0 0 0 1px rgba(255,255,255,0.04)`,
        }}>
          {/* Header with small decorative gears */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '2px 8px 10px' }}>
            <SmallGear color={t.primary} spinning={open} />
            <p style={{ color: 'rgba(107,114,128,1)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
              Accent
            </p>
            <SmallGear color={t.primary} spinning={open} />
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${t.primary}30, transparent)`, marginBottom: 8 }} />

          {Object.entries(themes).map(([key, th]) => {
            const isActive = currentTheme === key;
            return (
              <button
                key={key}
                onClick={() => { setTheme(key); setOpen(false); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  width: '100%', padding: '9px 10px', borderRadius: 11,
                  border: isActive ? `1px solid ${th.primary}44` : '1px solid transparent',
                  background: isActive ? th.primary + '18' : 'transparent',
                  color: isActive ? '#fff' : 'rgba(156,163,175,1)',
                  fontSize: 13, fontWeight: 500, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = th.primary + '10'; e.currentTarget.style.color = '#fff'; }}}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(156,163,175,1)'; }}}
              >
                {/* Color swatch — small gear shape */}
                <span style={{
                  width: 12, height: 12, borderRadius: '50%',
                  background: th.primary,
                  boxShadow: `0 0 10px ${th.primary}`,
                  flexShrink: 0,
                  outline: isActive ? `2px solid ${th.primary}66` : 'none',
                  outlineOffset: 2,
                }} />
                {th.name}
                {isActive && (
                  <span style={{ marginLeft: 'auto', color: th.primary, fontSize: 10 }}>✦</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main toggle button — mechanical watch crown style */}
      <button
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          width: 56, height: 56,
          borderRadius: 16,
          border: `1px solid ${t.primary}55`,
          background: `radial-gradient(circle at 35% 35%, rgba(30,30,30,0.95), rgba(8,8,8,0.98))`,
          backdropFilter: 'blur(20px)',
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.06),
            0 4px 20px rgba(0,0,0,0.6),
            0 0 30px ${t.glowSoft},
            inset 0 1px 0 rgba(255,255,255,0.1),
            inset 0 -1px 0 rgba(0,0,0,0.4)
          `,
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        {/* Engraved ring detail */}
        <div style={{
          position: 'absolute', inset: 5, borderRadius: 11,
          border: `1px solid rgba(255,255,255,0.05)`,
          pointerEvents: 'none',
        }} />
        {/* Glow pulse ring */}
        <div style={{
          position: 'absolute', inset: -3, borderRadius: 19,
          border: `1px solid ${t.primary}`,
          opacity: hovered ? 0.35 : 0,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }} />
        <GearIcon color={t.primary} spinning={hovered || open} />
      </button>
    </div>
  );
};

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const Navigation = ({ activeSection, scrollToSection, isLoaded, theme }) => {
  const t = themes[theme] || themes.red;
  const sections = ['hero', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transform: isLoaded ? 'translateY(0)' : 'translateY(-100%)',
        opacity: isLoaded ? 1 : 0,
        transition: 'all 0.7s ease',
      }}
    >
      <div
        style={{
          background: 'rgba(5,5,5,0.8)',
          backdropFilter: 'blur(24px)',
          borderBottom: `1px solid ${t.primary}22`,
          boxShadow: `0 1px 0 ${t.primary}18, 0 8px 32px rgba(0,0,0,0.5)`,
          position: 'relative',
        }}
      >
        {/* bottom glow line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
          background: `linear-gradient(90deg, transparent, ${t.primary}50, transparent)`,
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex', gap: 4,
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 20,
              padding: '6px',
            }}
          >
            {sections.map((section) => {
              const isActive = activeSection === section;
              return (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  style={{
                    position: 'relative',
                    padding: '8px 20px',
                    borderRadius: 14,
                    border: 'none',
                    background: isActive
                      ? `linear-gradient(135deg, ${t.primary}, ${t.accent})`
                      : 'transparent',
                    color: isActive ? '#fff' : 'rgba(156,163,175,1)',
                    fontSize: 14,
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    boxShadow: isActive ? `0 0 20px ${t.glow}` : 'none',
                    transition: 'all 0.25s ease',
                    letterSpacing: '0.02em',
                  }}
                  onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = t.primary + '18'; } }}
                  onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'rgba(156,163,175,1)'; e.currentTarget.style.background = 'transparent'; } }}
                >
                  {section}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export const Footer = ({ theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <footer
      style={{
        background: '#030303',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '48px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 50% 0%, ${t.primary}0a, transparent 60%)`,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 900, color: '#fff', marginBottom: 6 }}>
            {personalInfo.name}
          </div>
          <p style={{ color: 'rgba(107,114,128,1)', fontSize: 14 }}>Aspiring Developer • Open to Opportunities</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
          {[
            { href: personalInfo.github, icon: <Github size={18} />, label: 'GitHub' },
            { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
            { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 42, height: 42, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(107,114,128,1)',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = t.primary + '20';
                e.currentTarget.style.borderColor = t.primary + '55';
                e.currentTarget.style.color = t.primary;
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = `0 0 16px ${t.glowSoft}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(107,114,128,1)';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        <div style={{ color: 'rgba(75,85,99,1)', fontSize: 13 }}>
          <p>© 2024 {personalInfo.name}. All rights reserved.</p>
          <p style={{ marginTop: 4 }}>
            Built with <span style={{ color: t.primary }}>♥</span> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};