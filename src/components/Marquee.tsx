const ITEMS = [
  'React',
  'Node.js',
  'TypeScript',
  'Flutter',
  'Next.js',
  'PostgreSQL',
  'Supabase',
  'Tailwind CSS',
  'Express',
  'Firebase',
  'Docker',
  'MongoDB',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div id="marquee" className="relative z-20 -my-5 overflow-hidden py-6">
      <div className="marquee-banner -rotate-1 border-y border-line bg-panel py-4 shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-colors duration-300">
        <div className="animate-marquee flex w-max items-center gap-10 px-5">
          {row.map((item, i) => (
            <span
              key={i}
              className="marquee-item flex items-center gap-10 whitespace-nowrap font-display text-lg font-bold uppercase tracking-widest text-mist transition-colors duration-300"
            >
              {item}
              <span className="marquee-star text-accent transition-colors duration-300">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
