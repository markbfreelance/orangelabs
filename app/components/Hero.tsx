'use client';

import { useEffect, useRef, useState } from 'react';

const WORDS = ['Digital', 'Creative', 'Powerful', 'Blazing', 'Premium', 'Killer'];
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function useScramble(words: string[], interval = 3200) {
  const [text, setText] = useState('');
  const idx = useRef(0);
  const mounted = useRef(false);

  useEffect(() => {
    const scramble = (final: string) => {
      let frame = 0;
      const total = 30;
      const go = () => {
        frame++;
        const r = frame / total;
        setText(final.split('').map((c, i) =>
          i < Math.floor(r * final.length) ? c : CHARS[Math.floor(Math.random() * CHARS.length)]
        ).join(''));
        if (frame < total) setTimeout(go, 35);
        else setText(final);
      };
      go();
    };
    if (!mounted.current) {
      mounted.current = true;
      setText(words[0]);
    }
    scramble(words[0]);
    const id = setInterval(() => {
      idx.current = (idx.current + 1) % words.length;
      scramble(words[idx.current]);
    }, interval);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}

function useCountUp(target: number, decimals = false, delay = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        setTimeout(() => {
          const dur = 2000;
          const t0 = performance.now();
          const run = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 4);
            setValue(decimals ? parseFloat((ease * target).toFixed(1)) : Math.round(ease * target));
            if (p < 1) requestAnimationFrame(run);
          };
          requestAnimationFrame(run);
        }, delay);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, delay, decimals]);

  return { ref, value };
}

export default function Hero() {
  const scrambled = useScramble(WORDS);
  const spotRef = useRef<HTMLDivElement>(null);

  const s1 = useCountUp(50, false, 300);
  const s2 = useCountUp(100, false, 500);
  const s3 = useCountUp(5.0, true, 700);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(255,94,26,0.06) 0%, transparent 70%)`;
      }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
      {/* Ambient gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(255,94,26,0.15), transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, rgba(255,94,26,0.1), transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* Cursor spotlight */}
      <div ref={spotRef} className="absolute inset-0 pointer-events-none z-[1]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,94,26,0.03) 0px, rgba(255,94,26,0.03) 1px, transparent 1px, transparent 100px), repeating-linear-gradient(0deg, rgba(255,94,26,0.03) 0px, rgba(255,94,26,0.03) 1px, transparent 1px, transparent 100px)',
      }} />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-28 pb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 animate-[fadeInUp_0.6s_0.1s_both]">
          <div className="w-3 h-3" style={{ background: 'var(--accent)' }} />
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
            Digital Product Studio
          </span>
        </div>

        {/* Headline */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-extrabold leading-[0.9] tracking-[-0.04em]" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="block overflow-hidden">
              <span className="block animate-[slideUp_0.8s_0.15s_both]">We Build</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-[slideUp_0.8s_0.3s_both] gradient-text" suppressHydrationWarning>{scrambled || WORDS[0]}</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-[slideUp_0.8s_0.45s_both]" style={{ color: 'transparent', WebkitTextStroke: '2px var(--text-muted)' }}>Experiences.</span>
            </span>
          </h1>
        </div>

        {/* Sub + CTAs */}
        <div className="max-w-xl animate-[fadeInUp_0.6s_0.7s_both]">
          <p className="text-base sm:text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            We craft high-performance websites and digital products that look stunning, load instantly, and convert like crazy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" className="btn-primary px-8 py-4 text-sm">
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#portfolio" className="btn-secondary px-8 py-4 text-sm">
              See Our Work
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 border-t grid grid-cols-1 sm:grid-cols-3" style={{ borderColor: 'var(--border-color)' }}>
        <div ref={s1.ref} className="flex flex-col items-center gap-1 px-6 sm:px-12 lg:px-20 py-6 sm:border-r" style={{ borderColor: 'var(--border-color)' }}>
          <span className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{s1.value}+</span>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Projects Shipped</span>
        </div>
        <div ref={s2.ref} className="flex flex-col items-center gap-1 px-6 sm:px-12 lg:px-20 py-6 sm:border-r" style={{ borderColor: 'var(--border-color)' }}>
          <span className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{s2.value}%</span>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Client Satisfaction</span>
        </div>
        <div ref={s3.ref} className="flex flex-col items-center gap-1 px-6 sm:px-12 lg:px-20 py-6">
          <span className="text-4xl sm:text-5xl font-extrabold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--accent)' }}>{s3.value.toFixed(1)}&#9733;</span>
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Average Rating</span>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(110%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
