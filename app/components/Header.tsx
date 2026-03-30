'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Services', href: '#services', num: '01' },
  { label: 'Process', href: '#process', num: '02' },
  { label: 'Portfolio', href: '#portfolio', num: '03' },
  { label: 'Testimonials', href: '#testimonials', num: '04' },
  { label: 'Contact', href: '#contact', num: '05' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, mobileOpen ? 400 : 0);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass shadow-lg' : ''
          }`}
        style={{ borderBottom: scrolled ? undefined : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group relative z-60"
              id="logo-link"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L34.5 12V28L20 36L5.5 28V12L20 4Z" fill="var(--accent)" opacity="0.15" className="transition-all duration-300 group-hover:opacity-30" />
                  <path d="M20 4L34.5 12V28L20 36L5.5 28V12L20 4Z" stroke="var(--accent)" strokeWidth="1.5" fill="none" />
                  <text x="20" y="24" textAnchor="middle" fill="var(--accent)" fontSize="14" fontWeight="bold" fontFamily="var(--font-heading), system-ui">O</text>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-lg tracking-tight" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                  Orange<span className="gradient-text">Labs</span>
                </span>
                <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>Digital</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-accent"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-3 flex items-center gap-3">
                <ThemeToggle />
                <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }} className="btn-primary text-sm py-2.5 px-5">
                  Get Started
                </a>
              </div>
            </nav>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3 relative z-60">
              <ThemeToggle />
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
                style={{
                  background: mobileOpen ? 'transparent' : 'var(--accent-glow)',
                  border: mobileOpen ? 'none' : '1px solid var(--glass-border)',
                }}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                  <span
                    className="block h-0.5 rounded-full transition-all duration-500"
                    style={{
                      background: mobileOpen ? '#fff' : 'var(--accent)',
                      width: mobileOpen ? '24px' : '20px',
                      transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                    }}
                  />
                  <span
                    className="block h-0.5 w-5 rounded-full transition-all duration-500"
                    style={{
                      background: mobileOpen ? '#fff' : 'var(--accent)',
                      opacity: mobileOpen ? 0 : 1,
                      transform: mobileOpen ? 'scaleX(0)' : 'scaleX(1)',
                    }}
                  />
                  <span
                    className="block h-0.5 rounded-full transition-all duration-500"
                    style={{
                      background: mobileOpen ? '#fff' : 'var(--accent)',
                      width: mobileOpen ? '24px' : '20px',
                      transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ====== FULL-SCREEN CINEMATIC MOBILE MENU ====== */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-55 md:hidden transition-all duration-700 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        style={{
          background: 'linear-gradient(160deg, #0a0b0e 0%, #141720 40%, #1a1510 100%)',
        }}
      >
        {/* Ambient background glow */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(255,102,0,0.12) 0%, transparent 70%)',
            transform: mobileOpen ? 'translate(10%, -20%) scale(1)' : 'translate(10%, -20%) scale(0.5)',
            opacity: mobileOpen ? 1 : 0,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full transition-all duration-1000 delay-200"
          style={{
            background: 'radial-gradient(circle, rgba(255,102,0,0.06) 0%, transparent 70%)',
            transform: mobileOpen ? 'translate(-30%, 30%) scale(1)' : 'translate(-30%, 30%) scale(0.5)',
            opacity: mobileOpen ? 1 : 0,
          }}
        />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.04 }}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute h-px w-full" style={{ top: `${12 + i * 12}%`, background: 'white' }} />
          ))}
          <div className="absolute w-px h-full" style={{ left: '8%', background: 'white' }} />
          <div className="absolute w-px h-full" style={{ right: '8%', background: 'white' }} />
        </div>

        {/* Navigation Content */}
        <div className="relative h-full flex flex-col justify-center px-10">
          {/* Small label */}
          <div
            className="mb-8 transition-all duration-700 delay-200"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>
              Navigation
            </span>
            <div className="mt-3 w-12 h-px" style={{ background: 'var(--accent)' }} />
          </div>

          {/* Nav Items - Big Typography */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="group flex items-center gap-4 py-3 transition-all duration-500"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-40px)',
                  transitionDelay: mobileOpen ? `${300 + i * 80}ms` : '0ms',
                }}
              >
                {/* Step number */}
                <span
                  className="text-xs font-mono tabular-nums transition-colors duration-300 group-hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-heading)', minWidth: '24px' }}
                >
                  {link.num}
                </span>
                {/* Divider dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150"
                  style={{ background: 'var(--accent)', opacity: 0.4 }}
                />
                {/* Label */}
                <span
                  className="text-4xl font-bold tracking-tight transition-all duration-300 group-hover:text-accent group-hover:translate-x-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div
            className="mt-10 transition-all duration-700"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: mobileOpen ? '700ms' : '0ms',
            }}
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="btn-primary text-base px-8 py-4 w-full text-center"
            >
              Start Your Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Bottom info */}
          <div
            className="absolute bottom-8 left-10 right-10 flex items-center justify-between transition-all duration-700"
            style={{
              opacity: mobileOpen ? 0.4 : 0,
              transitionDelay: mobileOpen ? '800ms' : '0ms',
            }}
          >
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>hello@orangelabs.digital</span>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>© 2026</span>
          </div>
        </div>
      </div>
    </>
  );
}
