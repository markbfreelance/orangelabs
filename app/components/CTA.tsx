'use client';

import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'var(--cta-bg)',
        color: 'var(--cta-text)',
      }}
    >
      {/* Orange accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      {/* Subtle pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--cta-border) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      {/* Orange corner glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,102,0,0.1) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,102,0,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
            Ready to Start?
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--cta-text)' }}
          >
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: 'var(--cta-text-secondary)' }}
          >
            Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s explore how Orange Labs can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@orangelabs.digital"
              className="btn-primary text-base px-10 py-4"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get In Touch
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                fontFamily: 'var(--font-heading)',
                border: '1px solid var(--cta-border)',
                color: 'var(--cta-text)',
                background: 'transparent',
                letterSpacing: '0.02em',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--cta-border)'; e.currentTarget.style.color = 'var(--cta-text)'; }}
            >
              View Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm" style={{ color: 'var(--cta-text-muted)' }}>
            {['Free Consultation', 'No Obligation Quote', 'Fast Response Time'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                {item}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />
    </section>
  );
}
