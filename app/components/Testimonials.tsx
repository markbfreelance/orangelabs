'use client';

import { useEffect, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, NovaTech Solutions',
    text: 'Orange Labs completely transformed our digital presence. Their team delivered a platform that exceeded our expectations — on time and within budget. The attention to detail and responsiveness was outstanding.',
  },
  {
    name: 'James Rodriguez',
    role: 'Marketing Director, Meridian Group',
    text: 'Working with Orange Labs was a game-changer for our business. They took our outdated website and turned it into a modern, conversion-focused powerhouse. Our leads have tripled since launch.',
  },
  {
    name: 'Emily Chen',
    role: 'Founder, Velox Fitness',
    text: 'The landing page they built for our product launch was incredible. Beautiful design, blazing fast, and the conversion rate blew past our targets. Highly recommend their team.',
  },
  {
    name: 'David Park',
    role: 'CTO, CraftBrew Commerce',
    text: 'Their technical expertise is top-notch. They built us a custom e-commerce solution that handles our complex subscription model flawlessly. Support has been fantastic post-launch.',
  },
  {
    name: 'Lisa Thompson',
    role: 'Managing Partner, Summit Advisory',
    text: 'Professional, creative, and incredibly easy to work with. Orange Labs understood our brand immediately and delivered a website that perfectly represents our firm\'s values.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="testimonials"
      className="section-padding section-divider relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
    >
      {/* Large decorative quote mark */}
      <div
        className="absolute top-12 left-8 lg:left-16 pointer-events-none select-none"
        style={{
          fontSize: '20rem',
          fontFamily: 'Georgia, serif',
          color: 'var(--accent)',
          opacity: 0.04,
          lineHeight: 1,
        }}
      >
        &ldquo;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left: Label + navigation */}
            <div className="lg:col-span-4">
              <span
                className="inline-block text-sm font-semibold uppercase tracking-widest mb-4"
                style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}
              >
                Testimonials
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                What Our <span className="gradient-text">Clients Say</span>
              </h2>

              {/* Client selector */}
              <div className="flex flex-col gap-1">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => { setActive(i); setIsPaused(true); }}
                    className="group flex items-center gap-4 py-3 px-4 rounded-xl text-left transition-all duration-300"
                    style={{
                      background: active === i ? 'var(--accent-glow)' : 'transparent',
                      borderLeft: active === i ? '2px solid var(--accent)' : '2px solid transparent',
                    }}
                  >
                    {/* Avatar */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300"
                      style={{
                        background: active === i ? 'var(--accent)' : 'var(--accent-glow)',
                        color: active === i ? '#fff' : 'var(--accent)',
                        fontFamily: 'var(--font-heading)',
                      }}
                    >
                      {t.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{
                          color: active === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {t.name}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active quote */}
            <div
              className="lg:col-span-8 flex items-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full min-h-[280px] flex items-center">
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className="absolute inset-0 flex flex-col justify-center transition-all duration-700"
                    style={{
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
                      pointerEvents: active === i ? 'auto' : 'none',
                    }}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    {/* Quote */}
                    <blockquote
                      className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug mb-8"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    {/* Attribution (mobile) */}
                    <div className="lg:hidden flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-heading)' }}>
                        {t.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-heading)' }}>{t.name}</div>
                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Progress bar */}
        <div className="mt-12 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setIsPaused(true); }}
              className="h-1 rounded-full transition-all duration-500 flex-1"
              style={{
                background: active === i ? 'var(--accent)' : 'var(--border-color)',
                maxWidth: '60px',
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
