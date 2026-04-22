'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
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
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const nav = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, mobileOpen ? 350 : 0);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : ''}`}
        style={{ borderBottom: scrolled ? undefined : 'none' }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 group relative z-[60]"
            >
              <Image
                src="/logos/OrangeLabs.png"
                alt="OrangeLabs"
                width={160}
                height={40}
                priority
                className="h-9 w-auto"
              />
              <span
                className="font-extrabold text-lg tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
              >
                Orange<span className="gradient-text">Labs</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); nav(link.href); }}
                  className="px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-[var(--accent)]"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)' }}
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-4 flex items-center gap-3">
                <ThemeToggle />
                <a href="#contact" onClick={(e) => { e.preventDefault(); nav('#contact'); }} className="btn-primary text-xs py-3 px-6">
                  Get Started
                </a>
              </div>
            </nav>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3 relative z-[60]">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5 items-center justify-center w-5">
                  <span className="block h-0.5 rounded-full transition-all duration-500" style={{
                    background: mobileOpen ? 'var(--text-primary)' : 'var(--accent)',
                    width: mobileOpen ? '22px' : '20px',
                    transform: mobileOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none',
                  }} />
                  <span className="block h-0.5 w-5 rounded-full transition-all duration-500" style={{
                    background: mobileOpen ? 'var(--text-primary)' : 'var(--accent)',
                    opacity: mobileOpen ? 0 : 1,
                  }} />
                  <span className="block h-0.5 rounded-full transition-all duration-500" style={{
                    background: mobileOpen ? 'var(--text-primary)' : 'var(--accent)',
                    width: mobileOpen ? '22px' : '20px',
                    transform: mobileOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none',
                  }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-700 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'var(--bg-primary)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(255,94,26,0.08) 0%, transparent 60%)',
        }} />

        <div className="relative h-full flex flex-col justify-center px-10">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); nav(link.href); }}
                className="group flex items-center gap-4 py-3 transition-all duration-500"
                style={{
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-30px)',
                  transitionDelay: mobileOpen ? `${200 + i * 70}ms` : '0ms',
                }}
              >
                <span className="text-5xl font-extrabold tracking-tight transition-all duration-300 group-hover:text-[var(--accent)] group-hover:translate-x-2" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-10 transition-all duration-700" style={{ opacity: mobileOpen ? 1 : 0, transitionDelay: mobileOpen ? '600ms' : '0ms' }}>
            <a href="#contact" onClick={(e) => { e.preventDefault(); nav('#contact'); }} className="btn-primary text-base px-8 py-4 w-full text-center">
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
