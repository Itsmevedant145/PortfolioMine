// components-sections2.js — Projects, Contact
import React from 'react';
import { Github, ExternalLink, ArrowRight, Mail, Linkedin, Phone, Rocket } from 'lucide-react';
import { projects, personalInfo } from './data.jsx';
import { themes, FloatingParticles } from './components-layout.jsx';

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const ProjectsSection = ({ theme }) => {
  const t = themes[theme] || themes.red;

  return (
    <section
      id="projects"
      style={{ padding: '100px 24px', background: '#050505', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900, height: 600, borderRadius: '50%',
        background: t.primary + '08', filter: 'blur(160px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px', borderRadius: 999, marginBottom: 20,
            background: t.primary + '15',
            border: `1px solid ${t.primary}30`,
            color: t.primary, fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Portfolio
          </span>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 56px)', fontWeight: 900, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Featured <span style={{ color: t.primary }}>Projects</span>
          </h2>
          <p style={{ color: 'rgba(107,114,128,1)', fontSize: 15, maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Selected full-stack applications built with modern technologies and performance-focused architecture.
          </p>
        </div>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
          {projects.map((project, index) => (
            <div key={index}>

              {/* Image card */}
              <div
                style={{
                  borderRadius: 24, overflow: 'hidden',
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                  transition: 'all 0.4s',
                  marginBottom: 32,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = t.primary + '40';
                  e.currentTarget.style.boxShadow = `0 20px 80px ${t.glowSoft}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4)';
                }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }}
                  />
                )}
              </div>

              {/* Text content */}
              <h3 style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
                {project.title}
              </h3>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {project.features.slice(0, 5).map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%', flexShrink: 0, marginTop: 7,
                      background: t.primary,
                      boxShadow: `0 0 6px ${t.primary}`,
                    }} />
                    <span style={{ color: 'rgba(209,213,219,1)', lineHeight: 1.65, fontSize: 14 }}>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '6px 14px', borderRadius: 10,
                      background: 'rgba(255,255,255,0.04)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(156,163,175,1)', fontSize: 12, fontWeight: 500,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = t.primary + '50';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = 'rgba(156,163,175,1)';
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '11px 24px', borderRadius: 12, border: 'none',
                      background: `linear-gradient(135deg, ${t.primary}, ${t.accent})`,
                      color: '#fff', fontSize: 14, fontWeight: 600,
                      textDecoration: 'none', cursor: 'pointer',
                      boxShadow: `0 4px 20px ${t.glow}`,
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <ExternalLink size={15} />
                    Live Project
                    <ArrowRight size={13} />
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '11px 24px', borderRadius: 12,
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#fff', fontSize: 14, fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = t.primary + '55';
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Github size={15} />
                  GitHub
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONTACT ──────────────────────────────────────────────────────────────────
export const ContactSection = ({ theme }) => {
  const t = themes[theme] || themes.red;

  const contactItems = [
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={24} />, title: 'Email', subtitle: personalInfo.email },
    { href: personalInfo.linkedin, icon: <Linkedin size={24} />, title: 'LinkedIn', subtitle: 'Connect with me' },
    { href: personalInfo.github, icon: <Github size={24} />, title: 'GitHub', subtitle: 'View my code' },
    { href: null, icon: <Phone size={24} />, title: 'Phone', subtitle: personalInfo.phone },
  ];

  return (
    <section
      id="contact"
      style={{ padding: '100px 24px', background: '#050505', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 50% 100%, ${t.primary}10 0%, transparent 65%)`,
      }} />
      <FloatingParticles theme={theme} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 52px)', fontWeight: 900, color: '#fff', margin: '0 0 0', letterSpacing: '-0.02em' }}>
            Let's <span style={{ color: t.primary }}>Connect!</span>
          </h2>
          <div style={{
            width: 80, height: 2, margin: '16px auto 0',
            background: `linear-gradient(90deg, ${t.primary}, transparent)`,
            borderRadius: 2,
          }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, alignItems: 'start' }}>

          {/* Left panel */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px)',
              border: `1px solid ${t.primary}25`,
              borderRadius: 24,
              padding: 32,
            }}
          >
            <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 800, margin: '0 0 14px' }}>
              Ready to start my career journey!
            </h3>
            <p style={{ color: 'rgba(156,163,175,1)', lineHeight: 1.7, fontSize: 14, margin: '0 0 24px' }}>
              I'm excited to find the right opportunity where I can contribute fresh ideas,
              learn from experienced professionals, and grow into a valuable team member.
            </p>

            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: `1px solid ${t.primary}20`,
              borderLeft: `3px solid ${t.primary}`,
              borderRadius: 14,
              padding: '20px 22px',
            }}>
              <h4 style={{ color: t.primary, fontSize: 14, fontWeight: 700, margin: '0 0 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Rocket size={15} />
                Available for:
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Full-time junior developer positions',
                  'Internships and entry-level roles',
                  'Remote or on-site opportunities',
                  'Open to relocation',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(209,213,219,1)', fontSize: 13 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.primary, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {contactItems.map(({ href, icon, title, subtitle }) => {
              const inner = (
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 18,
                    padding: '18px 18px',
                    transition: 'all 0.3s',
                    cursor: href ? 'pointer' : 'default',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={e => {
                    if (!href) return;
                    e.currentTarget.style.borderColor = t.primary + '44';
                    e.currentTarget.style.boxShadow = `0 6px 28px ${t.glowSoft}`;
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{ color: t.primary, flexShrink: 0 }}>{icon}</div>
                  <div style={{ overflow: 'hidden' }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{title}</div>
                    <div style={{ color: 'rgba(107,114,128,1)', fontSize: 12, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {subtitle}
                    </div>
                  </div>
                </div>
              );

              return href ? (
                <a key={title} href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  {inner}
                </a>
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