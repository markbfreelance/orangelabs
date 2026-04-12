'use client';

import ScrollReveal from './ScrollReveal';

const steps = [
  { num: '01', title: 'Discover', description: 'Your goals, audience, and landscape — mapped out before we touch a pixel.' },
  { num: '02', title: 'Design', description: 'Wireframes to high-fidelity mockups. You see the journey before code begins.' },
  { num: '03', title: 'Develop', description: 'Modern tech, iterative sprints. You stay in the loop every step.' },
  { num: '04', title: 'Deploy', description: 'Testing, optimization, and seamless launch. Zero-downtime go-live.' },
  { num: '05', title: 'Support', description: 'Monitoring, analytics, and ongoing iteration to keep you ahead.' },
];

export default function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3" style={{ background: 'var(--accent)' }} />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>How It Works</span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1]" style={{ fontFamily: 'var(--font-heading)' }}>
                Five steps to<br />
                <span className="gradient-text">your next launch.</span>
              </h2>
            </div>
            <p className="text-base max-w-sm leading-relaxed lg:text-right" style={{ color: 'var(--text-secondary)' }}>
              A proven framework that takes you from idea to shipped — fast, transparent, and collaborative.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-[28px] top-0 bottom-0 w-px" style={{ background: 'var(--border-color)' }} />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className="group relative flex items-start gap-8 lg:gap-12 py-10 border-b transition-all duration-500" style={{ borderColor: 'var(--border-color)' }}>
                  {/* Number circle */}
                  <div className="relative z-10 shrink-0 w-14 h-14 flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{
                    border: '2px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                  }}>
                    <span className="transition-colors duration-300 group-hover:text-[var(--accent)]">{step.num}</span>
                  </div>

                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-extrabold mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow on hover */}
                    <div className="shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
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
