'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    id: 1,
    title: 'APEC Group',
    category: 'Corporate',
    description: 'Professional corporate website with modern design, responsive layout, and seamless CMS integration.',
    tags: ['Next.js', 'Corporate', 'CMS'],
    stat: '+200%',
    statLabel: 'leads',
    liveUrl: 'https://theapecgroup.com',
    year: '2024',
  },
  {
    id: 2,
    title: 'GeoPetroleum',
    category: 'Industry',
    description: 'B2B platform showcasing industry expertise with professional design optimized for engagement.',
    tags: ['React', 'B2B', 'Professional'],
    stat: '+150%',
    statLabel: 'inquiries',
    liveUrl: 'https://geopetroleum.com',
    year: '2024',
  },
  {
    id: 3,
    title: 'Candonkeys',
    category: 'E-Commerce',
    description: 'Full e-commerce platform with product catalog, cart, and secure Stripe payment processing.',
    tags: ['Next.js', 'E-Commerce', 'Stripe'],
    stat: '+180%',
    statLabel: 'revenue',
    liveUrl: 'https://candonkeys.com',
    year: '2024',
  },
  {
    id: 4,
    title: 'Metal Products USA',
    category: 'Industrial',
    description: 'Industrial catalog site with product specs and capabilities, optimized for B2B conversion.',
    tags: ['React', 'Industrial', 'Catalog'],
    stat: '+120%',
    statLabel: 'quotes',
    liveUrl: 'https://metalproductsusa.com',
    year: '2023',
  },
  {
    id: 5,
    title: '5M Wellness Center',
    category: 'Health',
    description: 'Wellness platform with online booking, practitioner profiles, and calming design aesthetic.',
    tags: ['Next.js', 'Booking', 'Wellness'],
    stat: '+85%',
    statLabel: 'bookings',
    liveUrl: 'https://5mwellnesscenter.vercel.app',
    year: '2024',
  },
  {
    id: 6,
    title: 'My Petro Parts',
    category: 'E-Commerce',
    description: 'Automotive parts marketplace with advanced search and inventory management.',
    tags: ['React', 'Automotive', 'Search'],
    stat: '+165%',
    statLabel: 'orders',
    liveUrl: 'https://mypetroparts.vercel.app',
    year: '2023',
  },
  {
    id: 7,
    title: 'Grit Digital',
    category: 'Professional',
    description: 'Agency site with case studies and client testimonials for a digital performance company.',
    tags: ['Next.js', 'Corporate', 'B2B'],
    stat: '+95%',
    statLabel: 'inquiries',
    liveUrl: 'https://gritdp.com',
    year: '2024',
  },
];

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="portfolio"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="ol-grid-lines" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-block w-3 h-3" style={{ background: 'var(--accent)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>Selected Work</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                Real projects.<br />
                <span className="gradient-text">Real results.</span>
              </h2>
              <p className="text-base max-w-md leading-relaxed lg:text-right" style={{ color: 'var(--text-secondary)' }}>
                Every URL below is a live site we built. Shipped, measured, and delivering value for our clients.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Project List — Case Study Style */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.05}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 sm:py-10 transition-all duration-500 cursor-pointer"
                style={{ borderTop: '1px solid rgba(255, 102, 0, 0.1)' }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  {/* Number */}
                  <span
                    className="number-stroke text-5xl sm:text-6xl font-black shrink-0 w-20 transition-all duration-500"
                    style={{
                      WebkitTextStrokeColor: hoveredProject === project.id ? 'var(--accent)' : undefined,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Title + Category */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold transition-colors duration-300 group-hover:text-accent leading-tight"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm mt-2 leading-relaxed max-w-lg hidden sm:block" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="hidden lg:flex flex-wrap gap-2 max-w-xs justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium"
                        style={{
                          border: '1px solid rgba(255,102,0,0.15)',
                          color: 'var(--text-muted)',
                          fontFamily: 'var(--font-heading)',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stat + Arrow */}
                  <div className="flex items-center gap-6 shrink-0">
                    <div className="text-right hidden sm:block">
                      <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>
                        {project.stat}
                      </div>
                      <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        {project.statLabel}
                      </div>
                    </div>
                    <div
                      className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:bg-accent shrink-0"
                      style={{ border: '1px solid rgba(255,102,0,0.2)' }}
                    >
                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke={hoveredProject === project.id ? 'var(--bg-primary)' : 'var(--accent)'}
                        strokeWidth="2" strokeLinecap="round"
                        className="transition-transform duration-300 group-hover:-rotate-45"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(255, 102, 0, 0.1)' }} />
        </div>

        {/* Bottom stat */}
        <ScrollReveal className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 py-8" style={{ borderTop: '1px solid rgba(255,102,0,0.12)' }}>
            <div className="flex items-center gap-6">
              <span className="text-6xl sm:text-7xl font-black" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>
                {projects.length}
              </span>
              <div>
                <div className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>Projects shipped</div>
                <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>and counting</div>
              </div>
            </div>
            <a href="#contact" className="btn-primary px-10 py-4">
              Start Your Project
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
