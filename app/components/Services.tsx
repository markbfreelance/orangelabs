'use client';

import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Web Development',
    short: 'Build',
    description: 'Bespoke web applications with cutting-edge tech. Scalable architecture that grows with your business.',
    num: '01',
    span: 'lg:col-span-2',
  },
  {
    title: 'Site Modernization',
    short: 'Evolve',
    description: 'Transform legacy platforms into lightning-fast, mobile-first experiences.',
    num: '02',
    span: '',
  },
  {
    title: 'Landing Pages',
    short: 'Convert',
    description: 'High-converting pages that capture attention and drive action.',
    num: '03',
    span: '',
  },
  {
    title: 'E-Commerce',
    short: 'Sell',
    description: 'Online stores built for conversion. Seamless shopping with secure payments and analytics.',
    num: '04',
    span: '',
  },
  {
    title: 'Maintenance',
    short: 'Sustain',
    description: 'Ongoing care — security updates, performance tuning, and priority support.',
    num: '05',
    span: 'lg:col-span-2',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      <div className="ol-grid-lines" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-block w-3 h-3" style={{ background: 'var(--accent)' }} />
              <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>What We Do</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              We don&apos;t just build websites.
              <br />
              <span className="gradient-text">We build growth engines.</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="bento-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <div className={`bento-card group cursor-default ${service.span}`}>
                {/* Large stroke number */}
                <div className="number-stroke text-7xl sm:text-8xl font-black absolute top-4 right-6 group-hover:[-webkit-text-stroke-color:var(--accent)]! transition-all duration-500" style={{ opacity: 0.5 }}>
                  {service.num}
                </div>

                <div className="relative z-10">
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase mb-3 transition-colors duration-300"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
                  >
                    {service.short}
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
