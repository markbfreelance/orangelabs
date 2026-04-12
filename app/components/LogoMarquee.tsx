'use client';

const clients = [
  { name: 'APEC Group', abbr: 'AG' },
  { name: 'GeoPetroleum', abbr: 'GP' },
  { name: 'Candonkeys', abbr: 'CK' },
  { name: 'Metal Products USA', abbr: 'MP' },
  { name: '5M Wellness', abbr: '5M' },
  { name: 'My Petro Parts', abbr: 'PP' },
  { name: 'Grit Digital', abbr: 'GD' },
];

function MockLogo({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 px-8 sm:px-12 shrink-0 select-none">
      <div
        className="w-10 h-10 flex items-center justify-center text-sm font-bold tracking-tight"
        style={{
          border: '1.5px solid var(--border-color)',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-heading)',
          background: 'var(--accent-glow)',
        }}
      >
        {abbr}
      </div>
      <span
        className="text-sm font-semibold tracking-wide uppercase whitespace-nowrap"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', letterSpacing: '0.08em' }}
      >
        {name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden py-10 sm:py-14" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
      {/* Label */}
      <div className="text-center mb-6">
        <span className="text-[10px] tracking-[0.35em] uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
          Trusted by forward-thinking companies
        </span>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg-secondary), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, var(--bg-secondary), transparent)' }} />

        <div className="marquee-track flex items-center" aria-hidden="true">
          {doubled.map((c, i) => (
            <MockLogo key={`${c.name}-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </div>
      </div>
    </section>
  );
}
