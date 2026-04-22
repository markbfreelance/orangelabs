'use client';

import Image from 'next/image';

const links = {
  services: [
    { label: 'Web Development', href: '#services' },
    { label: 'Site Modernization', href: '#services' },
    { label: 'Landing Pages', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
  ],
  company: [
    { label: 'Our Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--bg-secondary)' }}>
      <div className="h-px w-full" style={{ background: 'var(--accent)' }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logos/OrangeLabs.png"
                alt="OrangeLabs"
                width={160}
                height={40}
                className="h-9 w-auto"
              />
              <span
                className="font-extrabold text-lg tracking-tight leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Orange<span className="gradient-text">Labs</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              We craft high-performance digital products that drive real business results. No templates, no fluff — just results.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'X', 'Instagram'].map((s) => (
                <a key={s} href="#" aria-label={s} className="w-10 h-10 flex items-center justify-center text-xs font-bold transition-all duration-300 hover:text-[var(--accent)] hover:border-[var(--accent)]" style={{ border: '1px solid var(--border-color)', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Services</h4>
            <ul className="flex flex-col gap-2.5">
              {links.services.map((l) => (
                <li key={l.label}><a href={l.href} className="text-sm transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>Company</h4>
            <ul className="flex flex-col gap-2.5">
              {links.company.map((l) => (
                <li key={l.label}><a href={l.href} className="text-sm transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--text-secondary)' }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '11px' }}>
          <p>&copy; {new Date().getFullYear()} <span className="font-bold">OrangeLabs</span>. All rights reserved.</p>
          <p>
            Built by{' '}
            <a href="https://orangelabs-neon.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold transition-opacity hover:opacity-80">
              <span style={{ color: 'var(--accent)' }}>Orange</span><span>Labs</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
