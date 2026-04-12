'use client';

import { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const projects = [
  { id: 1, title: 'APEC Group', category: 'Corporate', description: 'Professional corporate website with modern design, responsive layout, and seamless CMS integration.', tags: ['Next.js', 'Corporate', 'CMS'], stat: '+200%', statLabel: 'leads', liveUrl: 'https://theapecgroup.com', year: '2024', accent: '#ff5e1a' },
  { id: 2, title: 'GeoPetroleum', category: 'Industry', description: 'B2B platform showcasing industry expertise with professional design optimized for engagement.', tags: ['React', 'B2B', 'Professional'], stat: '+150%', statLabel: 'inquiries', liveUrl: 'https://geopetroleum.com', year: '2024', accent: '#3b82f6' },
  { id: 3, title: 'Candonkeys', category: 'E-Commerce', description: 'Full e-commerce platform with product catalog, cart, and secure Stripe payment processing.', tags: ['Next.js', 'E-Commerce', 'Stripe'], stat: '+180%', statLabel: 'revenue', liveUrl: 'https://candonkeys.com', year: '2024', accent: '#10b981' },
  { id: 4, title: 'Metal Products USA', category: 'Industrial', description: 'Industrial catalog site with product specs and capabilities, optimized for B2B conversion.', tags: ['React', 'Industrial', 'Catalog'], stat: '+120%', statLabel: 'quotes', liveUrl: 'https://metalproductsusa.com', year: '2023', accent: '#f59e0b' },
  { id: 5, title: '5M Wellness Center', category: 'Health', description: 'Wellness platform with online booking, practitioner profiles, and calming design aesthetic.', tags: ['Next.js', 'Booking', 'Wellness'], stat: '+85%', statLabel: 'bookings', liveUrl: 'https://5mwellnesscenter.vercel.app', year: '2024', accent: '#8b5cf6' },
  { id: 6, title: 'My Petro Parts', category: 'E-Commerce', description: 'Automotive parts marketplace with advanced search and inventory management.', tags: ['React', 'Automotive', 'Search'], stat: '+165%', statLabel: 'orders', liveUrl: 'https://mypetroparts.vercel.app', year: '2023', accent: '#ef4444' },
  { id: 7, title: 'Grit Digital', category: 'Professional', description: 'Agency site with case studies and client testimonials for a digital performance company.', tags: ['Next.js', 'Corporate', 'B2B'], stat: '+95%', statLabel: 'inquiries', liveUrl: 'https://gritdp.com', year: '2024', accent: '#06b6d4' },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ border: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}
    >
      {/* Info panel */}
      <div className={`relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`} style={{ minHeight: '360px' }}>
        {/* Gradient deco */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `radial-gradient(ellipse at ${isEven ? '0%' : '100%'} 0%, ${project.accent}10 0%, transparent 60%)` }} />

        <div className="relative z-10">
          {/* Top row: year + category */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] tracking-[0.2em] uppercase px-3 py-1" style={{ border: `1px solid ${project.accent}44`, color: project.accent, fontFamily: 'var(--font-heading)' }}>{project.year}</span>
            <span className="text-[11px] tracking-[0.15em] uppercase px-3 py-1" style={{ background: `${project.accent}15`, color: project.accent, fontFamily: 'var(--font-heading)' }}>{project.category}</span>
          </div>

          {/* Number */}
          <span className="text-8xl font-extrabold block mb-4 pointer-events-none select-none" style={{ fontFamily: 'var(--font-heading)', color: 'transparent', WebkitTextStroke: `1.5px ${project.accent}30` }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ fontFamily: 'var(--font-heading)' }}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-6 max-w-md" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.12em] uppercase px-3 py-1" style={{ border: `1px solid ${project.accent}30`, color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-6">
          {/* Stat */}
          <div>
            <span className="text-4xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: project.accent }}>{project.stat}</span>
            <span className="text-sm ml-1.5" style={{ color: 'var(--text-muted)' }}>{project.statLabel}</span>
          </div>

          {/* CTA */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs px-6 py-3"
            style={{ background: project.accent }}
          >
            View Live
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
          </a>
        </div>
      </div>

      {/* Live preview panel */}
      <div className={`relative overflow-hidden ${isEven ? 'lg:order-2' : 'lg:order-1'}`} style={{ background: 'var(--bg-secondary)', minHeight: '360px' }}>
        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <div className="flex-1 mx-3 px-3 py-1 text-[11px] truncate" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
            {project.liveUrl.replace('https://', '')}
          </div>
        </div>

        {/* Iframe container */}
        <div className="relative w-full" style={{ height: 'calc(100% - 40px)' }}>
          <iframe
            src={project.liveUrl}
            title={`${project.title} preview`}
            className="absolute top-0 left-0 border-0 pointer-events-none"
            style={{
              width: '1440px',
              height: '900px',
              transform: 'scale(0.45)',
              transformOrigin: 'top left',
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
          {/* Hover overlay to visit */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'rgba(5,5,5,0.6)' }}
          >
            <span className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase px-6 py-3" style={{ background: project.accent, color: '#fff', fontFamily: 'var(--font-heading)' }}>
              Visit Site
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3" style={{ background: 'var(--accent)' }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>Selected Work</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1]" style={{ fontFamily: 'var(--font-heading)' }}>
                Real projects.<br />
                <span className="gradient-text">Real results.</span>
              </h2>
            </div>
            <p className="text-base max-w-sm leading-relaxed lg:text-right" style={{ color: 'var(--text-secondary)' }}>
              Every project below is a live site we built, shipped, and optimized for growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Project cards */}
        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
