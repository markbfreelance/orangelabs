'use client';

// Interactive grid field: dots at grid intersections that light up into
// orange crosshairs near the cursor, with thin connecting lines. Designed
// to reinforce the site's existing grid + sharp-geometric aesthetic.

import { useEffect, useRef } from 'react';

type Node = {
  x: number;
  y: number;
  /** Smoothed activation 0..1 (near cursor) */
  a: number;
  /** Random weight so not every node reaches full intensity */
  w: number;
};

export default function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const CELL = 72;
    const PROXIMITY = 240; // node activation radius
    const CONNECT = 170;   // connection-line radius

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    let nodes: Node[] = [];

    // Mouse (smoothed)
    let mx = -9999;
    let my = -9999;
    let tmx = -9999;
    let tmy = -9999;

    // Theme-aware colors
    let accent = '#ff5e1a';
    let dotColor = 'rgba(255,255,255,0.22)';
    let lineColor = 'rgba(255,255,255,0.08)';

    const readTheme = () => {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        dotColor = 'rgba(20,20,20,0.30)';
        lineColor = 'rgba(20,20,20,0.10)';
      } else {
        dotColor = 'rgba(255,255,255,0.22)';
        lineColor = 'rgba(255,255,255,0.08)';
      }
      const css = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      if (css) accent = css;
    };
    readTheme();

    const themeObs = new MutationObserver(readTheme);
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const buildNodes = () => {
      nodes = [];
      const cols = Math.floor(width / CELL);
      const rows = Math.floor(height / CELL);
      const offX = (width - cols * CELL) / 2;
      const offY = (height - rows * CELL) / 2;
      for (let i = 1; i < cols; i++) {
        for (let j = 1; j < rows; j++) {
          // Sparse, pseudo-random skip for visual breathing room
          if (Math.random() < 0.35) continue;
          nodes.push({
            x: offX + i * CELL,
            y: offY + j * CELL,
            a: 0,
            w: 0.6 + Math.random() * 0.4,
          });
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      tmx = e.clientX - rect.left;
      tmy = e.clientY - rect.top;
    };
    const onLeave = () => { tmx = -9999; tmy = -9999; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    let raf = 0;
    let lastTs = performance.now();

    const drawCross = (x: number, y: number, size: number) => {
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size);
      ctx.lineTo(x, y + size);
      ctx.stroke();
    };

    const frame = (now: number) => {
      const dt = Math.min(50, now - lastTs) / 16.67;
      lastTs = now;

      // Smooth mouse
      mx += (tmx - mx) * 0.18 * dt;
      my += (tmy - my) * 0.18 * dt;
      const hasMouse = tmx > -1000;

      ctx.clearRect(0, 0, width, height);

      // First pass: update activations + draw connection lines
      ctx.lineWidth = 1;
      for (const n of nodes) {
        let target = 0;
        if (hasMouse) {
          const dx = n.x - mx;
          const dy = n.y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < PROXIMITY) target = (1 - d / PROXIMITY) * n.w;

          if (d < CONNECT) {
            const la = (1 - d / CONNECT) * 0.45 * n.w;
            ctx.strokeStyle = accent;
            ctx.globalAlpha = la;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
        n.a += (target - n.a) * 0.15 * dt;
      }

      // Second pass: draw nodes (dim dots, or accent crosshairs when active)
      for (const n of nodes) {
        if (n.a > 0.04) {
          // Active: crosshair + filled center in accent
          const size = 2 + n.a * 7;
          ctx.strokeStyle = accent;
          ctx.globalAlpha = 0.3 + n.a * 0.7;
          ctx.lineWidth = 1;
          drawCross(n.x, n.y, size);

          ctx.fillStyle = accent;
          ctx.globalAlpha = 0.5 + n.a * 0.5;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1 + n.a * 1.8, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Idle: tiny dim dot
          ctx.fillStyle = dotColor;
          ctx.globalAlpha = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Soft accent halo under cursor — anchors the effect in place
      if (hasMouse) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, CONNECT);
        grad.addColorStop(0, `${accent}22`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.globalAlpha = 1;
        ctx.fillRect(mx - CONNECT, my - CONNECT, CONNECT * 2, CONNECT * 2);
      }

      // Faint baseline line grid highlight rows/cols near cursor — optional
      // touch that unifies with the static grid overlay.
      if (hasMouse) {
        ctx.strokeStyle = lineColor;
        ctx.globalAlpha = 1;
        ctx.lineWidth = 1;
        // Vertical line at nearest column
        const nx = Math.round(mx / CELL) * CELL;
        const ny = Math.round(my / CELL) * CELL;
        ctx.beginPath();
        ctx.moveTo(nx + 0.5, 0);
        ctx.lineTo(nx + 0.5, height);
        ctx.moveTo(0, ny + 0.5);
        ctx.lineTo(width, ny + 0.5);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      themeObs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}
