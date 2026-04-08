'use client';

import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: 'var(--accent)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0px, rgba(0,0,0,0.2) 1px, transparent 1px, transparent 80px)',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            {/* Left — big type */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="inline-block w-3 h-3" style={{ background: 'var(--bg-primary)' }} />
                <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--bg-primary)', fontFamily: 'var(--font-heading)', opacity: 0.7 }}>Let&apos;s Talk</span>
              </div>
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-6"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--bg-primary)' }}
              >
                Have an idea?<br />
                Let&apos;s make it real.
              </h2>
              <p
                className="text-lg max-w-xl leading-relaxed"
                style={{ color: 'var(--bg-primary)', opacity: 0.75 }}
              >
                Whether you need a full website, web app, or digital experience — we&apos;re ready to bring your vision to life. No fluff, just results.
              </p>
            </div>

            {/* Right — actions */}
            <div className="flex flex-col gap-4 lg:items-end shrink-0">
              <a
                href="mailto:markb.freelance@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 font-bold transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: 'var(--bg-primary)',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get In Touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 font-bold transition-all duration-300 hover:bg-white/10"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: '1px solid var(--bg-primary)',
                  color: 'var(--bg-primary)',
                  background: 'transparent',
                  textDecoration: 'none',
                  opacity: 0.8,
                }}
              >
                View Our Services
              </a>

              {/* Trust row */}
              <div className="flex flex-wrap gap-6 mt-4" style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--bg-primary)', opacity: 0.6 }}>
                {['Free Consultation', 'Fast Response', 'No Obligation'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
