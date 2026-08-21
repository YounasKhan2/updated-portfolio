import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

const ROLES = [
  'scalable web apps.',
  'Flutter mobile apps.',
  'robust REST APIs.',
  'pixel-perfect UIs.',
];

const SOCIALS = [
  { icon: Github, href: 'https://github.com/YounasKhan2', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/muhammadyounas', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:younaskk120@gmail.com', label: 'Email' },
];

const CHIPS = [
  { label: '⚛ React', cls: 'left-[6%] top-[26%]', delay: '0s' },
  { label: '⚡ Supabase', cls: 'right-[16%] top-[18%]', delay: '0.9s' },
  { label: '⬢ Node.js', cls: 'right-[5%] top-[36%]', delay: '1.2s' },
  { label: '◆ Flutter', cls: 'left-[9%] bottom-[22%]', delay: '0.6s' },
  { label: '◈ TypeScript', cls: 'right-[8%] bottom-[18%]', delay: '1.8s' },
];

const wrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function CyclingRole() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  const current = ROLES[idx];

  return (
    <span className="relative inline-flex h-[1.5em] items-end overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="text-accent"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const glowA = useRef<HTMLDivElement>(null);
  const glowB = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  // Parallax: glow orbs + ghost word drift with the cursor (desktop only)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      if (glowA.current) glowA.current.style.transform = `translate(${x * 36}px, ${y * 36}px)`;
      if (glowB.current) glowB.current.style.transform = `translate(${x * -24}px, ${y * -24}px)`;
      if (ghostRef.current)
        ghostRef.current.style.transform = `translate(calc(-50% + ${x * -20}px), calc(-50% + ${y * -14}px))`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('younaskk120@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section className="bg-grid relative flex min-h-screen items-center justify-center overflow-hidden pb-24 pt-28">
      {/* parallax glow orbs */}
      <div
        ref={glowA}
        className="pointer-events-none absolute -top-40 right-[-12%] h-[560px] w-[560px] rounded-full bg-accent/10 blur-[140px] transition-transform duration-300 ease-out"
      />
      <div
        ref={glowB}
        className="pointer-events-none absolute bottom-[-22%] left-[-12%] h-[460px] w-[460px] rounded-full bg-accent/[0.06] blur-[120px] transition-transform duration-300 ease-out"
      />

      {/* ghost word behind everything */}
      <div
        ref={ghostRef}
        aria-hidden
        className="text-outline pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[19vw] font-extrabold leading-none tracking-tight transition-transform duration-300 ease-out"
      >
        DEVELOPER
      </div>

      {/* floating tech chips */}
      {CHIPS.map((c) => (
        <span
          key={c.label}
          className={`animate-float-slow absolute z-10 hidden rounded-full border border-line bg-panel/90 px-4 py-2 font-mono text-xs text-mist shadow-xl backdrop-blur lg:block ${c.cls}`}
          style={{ animationDelay: c.delay }}
        >
          {c.label}
        </span>
      ))}

      {/* ————— centered content ————— */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          variants={wrap}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-1.5 font-mono text-xs text-mist">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to freelance & full-time
            </div>
            <span className="font-mono text-xs text-fog">
              <span className="text-accent">&lt;</span>hello_world
              <span className="text-accent">/&gt;</span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-extrabold leading-[0.93] tracking-tight"
          >
            <span className="block text-[clamp(3rem,11vw,8.2rem)] text-white">
              MUHAMMAD
            </span>
            <span className="text-outline-hover block text-[clamp(3rem,11vw,8.2rem)]">
              YOUNAS
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 font-display text-2xl font-semibold text-white sm:text-3xl"
          >
            I craft <CyclingRole />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base leading-relaxed text-fog sm:text-lg"
          >
            Full stack developer with <span className="text-white">2 years</span> of experience
            shipping web products on React & Node — plus <span className="text-white">1 year</span>{' '}
            building cross-platform apps with Flutter. From database schema to the final pixel.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-ink transition hover:shadow-[0_0_40px_rgba(201,245,66,0.35)]"
            >
              View my work
              <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-display text-sm font-bold uppercase tracking-wider text-white transition hover:border-accent hover:text-accent"
            >
              Let's talk
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={copyEmail}
              aria-label="Send email to younaskk120@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-4 font-mono text-xs text-fog transition hover:border-accent hover:text-accent"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-accent" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? 'copied!' : 'younaskk120@gmail.com'}
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-fog"
          >
            <span>
              <span className="text-accent">2 yrs</span> full stack
            </span>
            <span className="h-3 w-px bg-line" aria-hidden />
            <span>
              <span className="text-accent">1 yr</span> flutter
            </span>
            <span className="h-3 w-px bg-line" aria-hidden />
            <span>web + mobile · end to end</span>
            <span className="h-3 w-px bg-line" aria-hidden />
            <span>📍 pakistan · remote worldwide</span>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-ink" />

      {/* scroll cue */}
      <a
        href="#about"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-fog transition group-hover:text-accent">
          scroll
        </span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-line pt-1.5 transition group-hover:border-accent/60">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-accent" />
        </span>
      </a>
    </section>
  );
}
