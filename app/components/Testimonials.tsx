'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CEO, NovaTech Solutions', text: 'Orange Labs completely transformed our digital presence. Their team delivered a platform that exceeded our expectations — on time and within budget.' },
  { name: 'James Rodriguez', role: 'Marketing Director, Meridian Group', text: 'They took our outdated website and turned it into a modern, conversion-focused powerhouse. Our leads have tripled since launch.' },
  { name: 'Emily Chen', role: 'Founder, Velox Fitness', text: 'Beautiful design, blazing fast, and the conversion rate blew past our targets. Highly recommend their team.' },
  { name: 'David Park', role: 'CTO, CraftBrew Commerce', text: 'They built us a custom e-commerce solution that handles our complex subscription model flawlessly. Support has been fantastic.' },
  { name: 'Lisa Thompson', role: 'Managing Partner, Summit Advisory', text: "Orange Labs understood our brand immediately and delivered a website that perfectly represents our firm's values." },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const c = testimonials[active];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3" style={{ background: 'var(--accent)' }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>Client Voices</span>
          </div>
        </ScrollReveal>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {/* Giant quote mark */}
          <div className="absolute -top-2 -left-2 pointer-events-none select-none" style={{ fontSize: 'clamp(10rem, 20vw, 20rem)', fontFamily: 'var(--font-heading)', color: 'var(--accent)', opacity: 0.04, lineHeight: 0.8 }}>
            &ldquo;
          </div>

          {/* Quote area */}
          <div className="relative min-h-[220px] sm:min-h-[280px] flex items-center">
            {testimonials.map((t, i) => (
              <blockquote key={t.name} className="absolute inset-0 flex items-center transition-all duration-700" style={{ opacity: active === i ? 1 : 0, transform: active === i ? 'translateY(0)' : 'translateY(30px)', pointerEvents: active === i ? 'auto' : 'none' }}>
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] max-w-5xl" style={{ fontFamily: 'var(--font-heading)' }}>
                  {t.text}
                </p>
              </blockquote>
            ))}
          </div>

          {/* Attribution + navigation */}
          <div className="mt-12 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6" style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center text-sm font-bold shrink-0" style={{ background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-heading)' }}>
                {c.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <div className="text-base font-bold" style={{ fontFamily: 'var(--font-heading)' }}>{c.name}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{c.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => { setActive((active - 1 + testimonials.length) % testimonials.length); setPaused(true); }} className="w-10 h-10 flex items-center justify-center transition-all duration-300" style={{ border: '1px solid var(--border-color)' }} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => { setActive(i); setPaused(true); }} className="h-1 transition-all duration-500" style={{ background: active === i ? 'var(--accent)' : 'var(--border-color)', width: active === i ? '32px' : '16px' }} aria-label={`Testimonial ${i + 1}`} />
                ))}
              </div>
              <button onClick={() => { setActive((active + 1) % testimonials.length); setPaused(true); }} className="w-10 h-10 flex items-center justify-center transition-all duration-300" style={{ border: '1px solid var(--border-color)' }} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
