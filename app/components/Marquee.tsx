'use client';

const phrases = [
  'WEB DEVELOPMENT',
  '✦',
  'UI/UX DESIGN',
  '✦',
  'MODERNIZATION',
  '✦',
  'LANDING PAGES',
  '✦',
  'E-COMMERCE',
  '✦',
  'PERFORMANCE',
  '✦',
  'WEB DEVELOPMENT',
  '✦',
  'UI/UX DESIGN',
  '✦',
  'MODERNIZATION',
  '✦',
  'LANDING PAGES',
  '✦',
  'E-COMMERCE',
  '✦',
  'PERFORMANCE',
  '✦',
];

export default function Marquee() {
  return (
    <div
      className="relative overflow-hidden py-6"
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--section-divider)',
        borderBottom: '1px solid var(--section-divider)',
      }}
    >
      <div className="marquee-track flex gap-8 items-center whitespace-nowrap">
        {phrases.map((phrase, i) => (
          <span
            key={i}
            className="text-sm font-bold tracking-[0.2em] shrink-0"
            style={{
              fontFamily: 'var(--font-heading)',
              color: phrase === '✦' ? 'var(--accent)' : 'var(--text-muted)',
              opacity: phrase === '✦' ? 1 : 0.5,
            }}
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
