'use client';

import ScrollReveal from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your business goals, target audience, and competitive landscape to define a clear project roadmap and strategy.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes and high-fidelity mockups are crafted to visualize the user journey before a single line of code is written.',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Clean, modern code built with the latest technologies. Iterative sprints keep you in the loop every step of the way.',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Rigorous testing, performance optimization, and seamless deployment to ensure a flawless launch day.',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Post-launch monitoring, analytics review, and ongoing improvements to keep your platform ahead of the curve.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding section-divider relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Compact header */}
        <ScrollReveal>
          <div className="mb-16 max-w-xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
              Our Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A proven five-step framework that turns your vision into a polished digital product.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps - editorial layout with large numbers */}
        <div className="relative">
          {/* Vertical line connector */}
          <div
            className="absolute left-8 lg:left-16 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(180deg, var(--accent), var(--border-color), transparent)' }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1} variant={i % 2 === 0 ? 'left' : 'right'}>
                <div
                  className="group relative flex items-start gap-6 sm:gap-10 lg:gap-16 py-8 sm:py-10"
                  style={{ borderBottom: i < steps.length - 1 ? '1px solid var(--section-divider)' : 'none' }}
                >
                  {/* Number + dot */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    {/* Dot on timeline */}
                    <div
                      className="hidden sm:block absolute left-1/2 top-3 -translate-x-1/2 w-3 h-3 rounded-full z-10 transition-all duration-500 group-hover:scale-150"
                      style={{
                        background: 'var(--accent)',
                        boxShadow: '0 0 0 4px var(--bg-primary), 0 0 0 5px var(--accent)',
                      }}
                    />
                    {/* Large number */}
                    <span
                      className="text-6xl sm:text-7xl lg:text-8xl font-black transition-colors duration-500 sm:pl-12 lg:pl-20"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--border-color)',
                        WebkitTextStroke: '1px var(--border-color-hover)',
                        lineHeight: 1,
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-300 group-hover:text-accent"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-base leading-relaxed max-w-lg"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow indicator on hover */}
                  <div className="hidden lg:flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 self-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
