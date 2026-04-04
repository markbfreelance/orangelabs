"use client";

import { useEffect, useRef, useState } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$";
const WORDS = [
  "Digital",
  "Creative",
  "Powerful",
  "Blazing",
  "Premium",
  "Killer",
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number[];
}

function useScramble(words: string[], interval = 3000) {
  const [text, setText] = useState(words[0]);
  const indexRef = useRef(0);

  function scramble(final: string, dur = 1200) {
    let frame = 0;
    const total = Math.round(dur / 40);
    const go = () => {
      frame++;
      const ratio = frame / total;
      setText(
        final
          .split("")
          .map((c, i) =>
            i < Math.floor(ratio * final.length)
              ? c
              : SCRAMBLE_CHARS[
                  Math.floor(Math.random() * SCRAMBLE_CHARS.length)
                ],
          )
          .join(""),
      );
      if (frame < total) setTimeout(go, 40);
      else setText(final);
    };
    go();
  }

  useEffect(() => {
    scramble(words[0]);
    const id = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      scramble(words[indexRef.current]);
    }, interval);
    return () => clearInterval(id);
  }, []);

  return text;
}

function useAnimatedCounter(target: number, decimals: boolean, delay: number) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => {
            const dur = 2000;
            const start = performance.now();
            const run = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const e = 1 - Math.pow(1 - p, 4);
              setValue(
                decimals
                  ? parseFloat((e * target).toFixed(1))
                  : Math.round(e * target),
              );
              if (p < 1) requestAnimationFrame(run);
            };
            requestAnimationFrame(run);
          }, delay);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay, decimals]);

  return { ref, value };
}

function StatCell({
  label,
  target,
  suffix,
  decimals,
  sub,
  delay,
}: {
  label: string;
  target: number;
  suffix: string;
  decimals: boolean;
  sub: string;
  delay: number;
}) {
  const { ref, value } = useAnimatedCounter(target, decimals, delay);
  return (
    <div className="ol-bottom-cell" ref={ref}>
      <div className="ol-cell-label">{label}</div>
      <div className="ol-cell-value">
        {decimals ? value.toFixed(1) : value}
        {suffix}
      </div>
      <div className="ol-cell-sub">{sub}</div>
    </div>
  );
}

function useInteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = 60;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        connections: [],
      });
    }

    particlesRef.current = particles;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(255, 102, 0, 0.02)');
      gradient.addColorStop(1, 'rgba(255, 102, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 0.02;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Add some random movement
        particle.vx += (Math.random() - 0.5) * 0.01;
        particle.vy += (Math.random() - 0.5) * 0.01;

        // Draw connections
        particlesRef.current.slice(i + 1).forEach((otherParticle, j) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const opacity = (1 - distance / 150) * 0.3;
            ctx.strokeStyle = `rgba(255, 144, 51, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 144, 51, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return canvasRef;
}

export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const scrambled = useScramble(WORDS);
  const canvasRef = useInteractiveBackground();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(450px circle at ${e.clientX}px ${e.clientY}px, rgba(255,102,0,0.055) 0%, transparent 70%)`;
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="ol-wrap">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      <div className="ol-grid-lines" />
      <div className="ol-spotlight" ref={spotlightRef} />

      <div className="ol-hero-layout">
        {/* Main content */}
        <div className="ol-main-content">
          <div className="ol-eyebrow">
            <span className="ol-orange-box" />
            Digital Product Studio — Est. 2026
          </div>

          <div className="ol-headline-block">
            <div className="ol-h-line">
              <span>We Build</span>
            </div>
            <div className="ol-h-line ol-accent">
              <span>{scrambled}</span>
            </div>
            <div className="ol-h-line ol-outline">
              <span>Experiences</span>
            </div>
          </div>

          <div className="ol-cta-row">
            <a href="#contact" className="ol-cta-primary">
              Start a project
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#work" className="ol-cta-secondary">
              Explore our work →
            </a>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="ol-bottom-row">
          <StatCell
            label="Projects Shipped"
            target={50}
            suffix="+"
            decimals={false}
            sub="Web apps, brands & pages"
            delay={400}
          />
          <StatCell
            label="Client Satisfaction"
            target={100}
            suffix="%"
            decimals={false}
            sub="Based on post-project surveys"
            delay={550}
          />
          <StatCell
            label="Average Rating"
            target={5.0}
            suffix="★"
            decimals={true}
            sub="Across all platforms"
            delay={700}
          />
        </div>
      </div>

      <div className="ol-side-text">
        Premium Digital Solutions — Orange Labs Studio
      </div>
    </section>
  );
}
