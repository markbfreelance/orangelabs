'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  b: number;
  a: number;
}

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ target, suffix = '', duration = 2000 }: {
  target: number; suffix?: string; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Particle canvas ──────────────────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let particles: Particle[] = [];
    let alive = true;

    // Orange Labs accent: #FF6600
    const AR = 255, AG = 102, AB = 0;

    const makeParticle = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      b: Math.floor(Math.random() * 80 + 40),
      a: Math.random() * 0.35 + 0.15,
    });

    const init = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = Array.from(
        { length: Math.floor((W * H) / 9000) },
        makeParticle
      );
    };

    const tick = () => {
      if (!alive) return;
      ctx.clearRect(0, 0, W, H);

      const { x: mx, y: my } = mouse.current;
      const maxDist = 155;

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p = particles[i], q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            const t = 1 - d / maxDist;
            const mp = Math.hypot(mx - p.x, my - p.y);
            const mq = Math.hypot(mx - q.x, my - q.y);
            const boost = Math.max(0, 1 - Math.min(mp, mq) / 160);

            const bri = (p.b + q.b) >> 1;
            const r = Math.round(bri + (AR - bri) * boost);
            const g = Math.round(bri * 0.4 + (AG - bri * 0.4) * boost);
            const b = Math.round(bri * 0.1 + (AB - bri * 0.1) * boost);

            ctx.strokeStyle = `rgba(${r},${g},${b},${t * 0.09 + boost * 0.4})`;
            ctx.lineWidth = t * 0.6 + boost * 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of particles) {
        const md = Math.hypot(mx - p.x, my - p.y);
        const inf = Math.max(0, 1 - md / 200);

        const r = Math.round(p.b + (AR - p.b) * inf);
        const g = Math.round(p.b * 0.4 + (AG - p.b * 0.4) * inf);
        const b = Math.round(p.b * 0.1 + (AB - p.b * 0.1) * inf);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r + inf * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.a + inf * 0.55})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = W + 10;
        else if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        else if (p.y > H + 10) p.y = -10;
      }

      animFrame.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      const cx = 'touches' in e ? e.touches[0]?.clientX ?? -9999 : e.clientX;
      const cy = 'touches' in e ? e.touches[0]?.clientY ?? -9999 : e.clientY;
      mouse.current = { x: cx, y: cy };
    };
    const onLeave = () => { mouse.current = { x: -9999, y: -9999 }; };
    const onResize = () => { ctx.setTransform(1, 0, 0, 1, 0, 0); init(); };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onLeave);
    window.addEventListener('resize', onResize);

    init();
    tick();

    return () => {
      alive = false;
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center hero-gradient-bg overflow-hidden">
      <ParticleCanvas />

      {/* Spotlight + grid */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(255,102,0,0.18) 0%, transparent 65%)',
            filter: 'blur(40px)',
          }}
        />
        <div className="absolute inset-0 bg-grid-pattern" style={{ opacity: 0.3 }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none">

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 pointer-events-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ background: 'var(--accent-glow)', border: '1px solid rgba(255,102,0,0.3)' }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
            Now Accepting New Projects
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          We Build{' '}
          <span className="gradient-text">Digital Experiences</span>
          <br />
          That Drive Results
        </h1>

        {/* Sub */}
        <p
          className={`text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ color: 'var(--text-secondary)' }}
        >
          From modern web applications to high-converting landing pages, Orange Labs crafts
          premium digital solutions that elevate your brand and accelerate growth.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Start Your Project
          </a>
          <a href="#services" className="btn-secondary text-base px-8 py-4">
            Explore Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { value: 50, suffix: '+', label: 'Projects Delivered' },
            { value: 98, suffix: '%', label: 'Client Satisfaction' },
            { value: 5, suffix: '★', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold gradient-text"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs sm:text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}