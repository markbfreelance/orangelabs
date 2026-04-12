'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

function useCountUp(target: number, suffix: string, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const run = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          setValue(Math.round(ease * target));
          if (p < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return { ref, display: `${value}${suffix}` };
}

const stats = [
  { value: 50, suffix: '+', label: 'Projects shipped' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
  { value: 3, suffix: 'x', label: 'Avg ROI increase' },
];

export default function CTA() {
  const s1 = useCountUp(stats[0].value, stats[0].suffix);
  const s2 = useCountUp(stats[1].value, stats[1].suffix);
  const s3 = useCountUp(stats[2].value, stats[2].suffix, 1200);
  const counters = [s1, s2, s3];

  return (
    <section id="contact" className="relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Multi-layer background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px]" style={{ background: 'radial-gradient(ellipse 70% 100% at 50% 0%, rgba(255,94,26,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[60%] h-[400px]" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(255,94,26,0.08) 0%, transparent 70%)' }} />
      </div>

      {/* Top accent line */}
      <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, var(--accent), transparent)' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-24 sm:py-32 lg:py-40">
        {/* Stats row */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 mb-20" style={{ border: '1px solid var(--border-color)' }}>
            {stats.map((s, i) => (
              <div key={s.label} ref={counters[i].ref} className="flex flex-col gap-1 px-8 py-8 sm:py-10" style={{ borderRight: i < 2 ? '1px solid var(--border-color)' : 'none' }}>
                <span className="text-5xl sm:text-6xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{counters[i].display}</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Main CTA */}
        <ScrollReveal delay={0.1}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3" style={{ background: 'var(--accent)' }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>Ready to grow?</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold leading-[0.95] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Your next website<br />
              <span className="gradient-text">starts with one email.</span>
            </h2>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
              Whether you need a full rebuild, a landing page that converts, or a web app that scales — we move fast and deliver results. No fluff.
            </p>

            {/* Big CTA button */}
            <a
              href="mailto:markb.freelance@gmail.com"
              className="group relative inline-flex items-center gap-3 px-12 py-6 text-base font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,94,26,0.3)]"
              style={{ background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-heading)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              Let&apos;s Build Something Great
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>

              {/* Glow pulse behind button */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'var(--accent)', filter: 'blur(40px)' }} />
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <a href="#services" className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
                View Services &darr;
              </a>
              <span className="hidden sm:inline-block w-px h-4" style={{ background: 'var(--border-color)' }} />
              <a href="#portfolio" className="text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>
                See Our Work &darr;
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
              {['Free Consultation', '24h Response', 'No Lock-in Contracts', 'Results-Driven'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[11px] tracking-[0.08em] uppercase" style={{ color: 'var(--text-muted)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
