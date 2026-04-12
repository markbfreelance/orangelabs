'use client';

import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Web Development',
    description: 'Custom-built web apps with modern frameworks. Scalable, fast, and maintainable.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Site Modernization',
    description: 'Transform outdated platforms into blazing-fast, mobile-first experiences.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages engineered to capture attention and drive action.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    description: 'Online stores built for revenue. Seamless checkout, analytics, and growth.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Interfaces that feel intuitive. Research-driven design that users love.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    title: 'Maintenance',
    description: 'Ongoing care — security patches, performance tuning, and priority support.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3" style={{ background: 'var(--accent)' }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>What We Do</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1]" style={{ fontFamily: 'var(--font-heading)' }}>
              We don&apos;t just build websites.<br />
              <span className="gradient-text">We build growth engines.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border-color)' }}>
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.07}>
              <div className="group relative p-8 sm:p-10 h-full flex flex-col transition-all duration-500 cursor-default" style={{ background: 'var(--bg-primary)' }}>
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,94,26,0.06) 0%, transparent 60%)' }} />

                {/* Number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-extrabold pointer-events-none select-none" style={{ fontFamily: 'var(--font-heading)', color: 'transparent', WebkitTextStroke: '1px var(--border-color)', opacity: 0.6 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center" style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-color)' }}>
                    {s.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {s.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-500 scale-x-0 group-hover:scale-x-100 origin-left" style={{ background: 'var(--accent)' }} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
