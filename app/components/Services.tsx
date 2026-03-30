'use client';

import ScrollReveal from './ScrollReveal';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Custom Web Development',
    description: 'Bespoke, high-performance web applications built with cutting-edge technology. Scalable architecture designed to grow with your business.',
    num: '01',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    title: 'Website Modernization',
    description: 'Transform your outdated website into a lightning-fast, mobile-first experience. We breathe new life into legacy platforms without losing your brand.',
    num: '02',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h4" />
      </svg>
    ),
    title: 'Landing Pages & Promotions',
    description: 'High-converting, single-page marketing sites that capture attention and drive action. Perfect for campaigns, product launches, and lead generation.',
    num: '03',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: 'E-Commerce Solutions',
    description: 'Online stores built for conversion and scale. Seamless shopping experiences with secure payments, inventory management, and analytics built in.',
    num: '04',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Maintenance & Support',
    description: 'Ongoing care to keep your digital presence running at peak performance. Security updates, performance tuning, and priority tech support when you need it.',
    num: '05',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding section-divider" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>What We Do</span>
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                Services That <span className="gradient-text">Transform</span>
              </h2>
            </div>
            <p className="text-lg max-w-md leading-relaxed lg:text-right" style={{ color: 'var(--text-secondary)' }}>
              Every solution we build is tailored to your goals — blending strategy, design, and engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div
                className="group flex items-start sm:items-center gap-6 sm:gap-8 py-8 transition-all duration-500 cursor-default"
                style={{ borderTop: '1px solid var(--border-color)' }}
              >
                {/* Number */}
                <span
                  className="text-sm font-bold shrink-0 mt-1 sm:mt-0 transition-colors duration-300 group-hover:text-accent"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', minWidth: '28px' }}
                >
                  {service.num}
                </span>

                {/* Icon */}
                <div
                  className="hidden sm:flex w-14 h-14 rounded-xl items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: 'var(--accent-glow)', border: '1px solid rgba(255,102,0,0.15)', color: 'var(--accent)' }}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-accent" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-1 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex shrink-0 w-10 h-10 rounded-full items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0" style={{ background: 'var(--accent-glow)', border: '1px solid rgba(255,102,0,0.2)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid var(--border-color)' }} />
        </div>
      </div>
    </section>
  );
}
