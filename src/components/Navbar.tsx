import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#skills', label: 'Skills', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  { href: '#experience', label: 'Experience', num: '04' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <motion.a
          href="#top"
          whileHover="hover"
          whileTap={{ scale: 0.96 }}
          className="group flex items-baseline gap-2.5 select-none"
        >
          <div className="relative flex items-center">
            <motion.span
              variants={{
                hover: { x: -1.5, scale: 1.05 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="font-display text-2xl font-black tracking-tighter text-white transition-colors duration-300 group-hover:text-accent"
            >
              M
            </motion.span>
            <motion.span
              variants={{
                hover: { x: 1.5, scale: 1.05 },
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="font-display text-2xl font-black tracking-tighter text-accent transition-colors duration-300 group-hover:text-white"
            >
              Y
            </motion.span>
          </div>
        </motion.a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-fog transition hover:text-white"
            >
              <span className="text-accent">{l.num}.</span> {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent/60 px-5 py-2 font-mono text-xs uppercase tracking-widest text-accent transition hover:bg-accent hover:text-ink"
          >
            Hire me
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button className="text-white" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-display text-lg font-bold text-white transition hover:bg-panel hover:text-accent"
              >
                <span className="mr-2 font-mono text-xs text-accent">{l.num}.</span>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-accent px-3 py-3 text-center font-display text-lg font-bold text-ink"
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
