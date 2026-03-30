'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'NovaTech Solutions',
    category: 'Web Application',
    description: 'A comprehensive SaaS dashboard for managing cloud infrastructure with real-time analytics and monitoring.',
    tags: ['React', 'Node.js', 'AWS'],
    metric: '3x faster',
    metricLabel: 'load time',
  },
  {
    title: 'Meridian Restaurant Group',
    category: 'Website Modernization',
    description: 'Complete overhaul of a legacy restaurant chain website into a modern, mobile-first platform with online ordering.',
    tags: ['Next.js', 'Stripe', 'CMS'],
    metric: '+180%',
    metricLabel: 'online orders',
  },
  {
    title: 'Velox Fitness',
    category: 'Landing Page',
    description: 'High-converting promotional site for a fitness brand launch, featuring animated product showcases and lead capture.',
    tags: ['Landing Page', 'Animation', 'CRO'],
    metric: '12.4%',
    metricLabel: 'conversion rate',
  },
  {
    title: 'CraftBrew Commerce',
    category: 'E-Commerce',
    description: 'Custom e-commerce platform for an artisan brewery with subscription management and delivery scheduling.',
    tags: ['E-Commerce', 'Payments', 'CMS'],
    metric: '+240%',
    metricLabel: 'revenue growth',
  },
];

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      id="portfolio"
      className="section-padding section-divider"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header - centered with accent */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
            Our Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Real results from real clients. Each project tells a story of transformation and growth.
          </p>
        </ScrollReveal>

        {/* Accordion-style project cards */}
        <ScrollReveal>
          <div className="flex flex-col gap-3">
            {projects.map((project, i) => {
              const isExpanded = expandedIndex === i;
              return (
                <div
                  key={project.title}
                  className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  style={{
                    background: isExpanded ? 'var(--glass-bg)' : 'transparent',
                    border: `1px solid ${isExpanded ? 'var(--accent)' : 'var(--border-color)'}`,
                    boxShadow: isExpanded ? '0 0 30px var(--accent-glow)' : 'none',
                  }}
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                >
                  {/* Header row - always visible */}
                  <div className="flex items-center gap-4 sm:gap-8 px-6 sm:px-8 py-5">
                    {/* Project number */}
                    <span
                      className="text-sm font-bold shrink-0 transition-colors duration-300"
                      style={{
                        color: isExpanded ? 'var(--accent)' : 'var(--text-muted)',
                        fontFamily: 'var(--font-heading)',
                        minWidth: '28px',
                      }}
                    >
                      0{i + 1}
                    </span>

                    {/* Title + category */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-lg sm:text-xl font-bold truncate transition-colors duration-300"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          color: isExpanded ? 'var(--accent)' : 'var(--text-primary)',
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Category badge */}
                    <span
                      className="hidden sm:inline-block text-xs font-medium px-3 py-1 rounded-full shrink-0"
                      style={{
                        background: 'var(--accent-glow)',
                        color: 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {project.category}
                    </span>

                    {/* Expand icon */}
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500"
                      style={{
                        background: isExpanded ? 'var(--accent)' : 'var(--accent-glow)',
                        transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isExpanded ? 'white' : 'var(--accent)'} strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>

                  {/* Expanded content */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: isExpanded ? '300px' : '0',
                      opacity: isExpanded ? 1 : 0,
                    }}
                  >
                    <div className="px-6 sm:px-8 pb-8 grid grid-cols-1 sm:grid-cols-12 gap-6" style={{ paddingLeft: 'calc(28px + 2rem)' }}>
                      {/* Description */}
                      <div className="sm:col-span-7">
                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2.5 py-1 rounded-md font-medium"
                              style={{ background: 'var(--accent-glow)', color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Metric */}
                      <div className="sm:col-span-5 flex items-center justify-start sm:justify-end">
                        <div className="text-right">
                          <div className="text-4xl sm:text-5xl font-black gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
                            {project.metric}
                          </div>
                          <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)' }}>
                            {project.metricLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
