'use client';

import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discover',
    verb: 'Listen',
    description: 'Your goals, audience, and landscape — mapped out before we touch a pixel.',
  },
  {
    number: '02',
    title: 'Design',
    verb: 'Craft',
    description: 'Wireframes to high-fidelity mockups. You see the journey before code begins.',
  },
  {
    number: '03',
    title: 'Develop',
    verb: 'Build',
    description: 'Modern tech, iterative sprints. You stay in the loop every step of the way.',
  },
  {
    number: '04',
    title: 'Deploy',
    verb: 'Ship',
    description: 'Testing, optimization, and seamless launch. Zero-downtime go-live.',
  },
  {
    number: '05',
    title: 'Support',
    verb: 'Grow',
    description: 'Monitoring, analytics, and ongoing iteration to keep you ahead.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="ol-grid-lines" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="inline-block w-3 h-3" style={{ background: 'var(--accent)' }} />
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>How It Works</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                Five steps to<br />
                <span className="gradient-text">your next launch.</span>
              </h2>
            </div>
            <p className="text-base max-w-sm leading-relaxed lg:text-right" style={{ color: 'var(--text-secondary)' }}>
              A proven framework that takes you from &ldquo;idea&rdquo; to &ldquo;shipped&rdquo; — fast, transparent, and collaborative.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px" style={{ background: 'rgba(255,102,0,0.08)' }}>
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <div className="group relative bg-[var(--bg-primary)] p-8 sm:p-10 h-full flex flex-col transition-all duration-500 hover:bg-[var(--bg-secondary)]">
                {/* Number */}
                <span className="number-stroke text-6xl font-black mb-6 block transition-all duration-500 group-hover:![-webkit-text-stroke-color:var(--accent)]">
                  {step.number}
                </span>

                {/* Verb tag */}
                <span
                  className="inline-block self-start text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 transition-all duration-300"
                  style={{ background: 'var(--accent-glow)', color: 'var(--accent)', fontFamily: 'var(--font-heading)', border: '1px solid rgba(255,102,0,0.15)' }}
                >
                  {step.verb}
                </span>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-accent"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mt-auto" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left"
                  style={{ background: 'var(--accent)' }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
