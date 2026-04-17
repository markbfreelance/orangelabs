'use client';

const clients = [
  { name: 'APEC Group', abbr: 'AG', logo: '/logos/APEC.webp' },
  { name: 'GeoPetroleum', abbr: 'GP', logo: '/logos/GeoPetroleum.webp' },
  { name: 'Candonkeys', abbr: 'CK', logo: '/logos/CanDonkeys.png' },
  { name: 'Metal Products USA', abbr: 'MP', logo: '/logos/MPC.webp' },
  { name: '5M Wellness', abbr: '5M', logo: '/logos/5MWellness.png' },
  { name: 'My Petro Parts', abbr: 'PP', logo: '/logos/MyPetroParts.png' },
  { name: 'Grit Digital', abbr: 'GD', logo: '/logos/Grit.png' },
];

const BG = '#faf8f5';

function ClientLogo({ name, abbr, logo }: { name: string; abbr: string; logo?: string }) {
  return (
    <div className="flex items-center justify-center px-10 sm:px-14 shrink-0 select-none group/logo">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-12 sm:h-14 w-auto object-contain opacity-70 grayscale transition-all duration-500 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
        />
      ) : (
        <div
          className="w-14 h-14 flex items-center justify-center text-base font-bold tracking-tight opacity-40 grayscale transition-all duration-500 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
          style={{
            border: '1.5px solid #d4d0c8',
            color: '#888',
            fontFamily: 'var(--font-heading)',
            background: '#f0ece4',
          }}
        >
          {abbr}
        </div>
      )}
    </div>
  );
}

export default function LogoMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16"
      style={{ background: BG }}
    >
      {/* Accent line */}
      <div className="mx-auto mb-6 w-8 h-[3px] rounded-full" style={{ background: 'var(--accent)' }} />

      {/* Label */}
      <div className="text-center mb-8">
        <span
          className="text-[11px] tracking-[0.3em] uppercase"
          style={{ color: '#999', fontFamily: 'var(--font-heading)' }}
        >
          Trusted by forward-thinking companies
        </span>
      </div>

      {/* Marquee */}
      <div className="relative cursor-grab active:cursor-grabbing">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-48 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${BG}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-48 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${BG}, transparent)` }} />

        <div className="marquee-track flex items-center" aria-hidden="true">
          {doubled.map((c, i) => (
            <ClientLogo key={`${c.name}-${i}`} name={c.name} abbr={c.abbr} logo={c.logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
