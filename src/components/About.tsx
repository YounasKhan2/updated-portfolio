import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Layers, Rocket } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { STATS } from '../data/portfolioData';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-extrabold text-accent">
      {n}
      {suffix}
    </span>
  );
}

const PILLARS = [
  {
    icon: Layers,
    title: 'Full Stack Web',
    text: 'React, Next.js & TypeScript on the front; Node.js, Express, PostgreSQL & Supabase on the back. 2 years of shipping complete products.',
  },
  {
    icon: Code2,
    title: 'Flutter Mobile',
    text: '1 year building buttery-smooth cross-platform apps with Flutter, Dart & Firebase — one codebase, both app stores.',
  },
  {
    icon: Rocket,
    title: 'Product Mindset',
    text: "I don't just write code — I care about the why. Clean architecture, fast load times and UX details that make products feel premium.",
  },
];

export default function About() {
  const stats = STATS;

  return (
    <section id="about" className="relative overflow-hidden py-28">
      <span className="text-outline pointer-events-none absolute -top-4 right-0 select-none font-display text-[11rem] font-extrabold leading-none opacity-60 md:text-[16rem]">
        01
      </span>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading index="01" title="About me" sub="the human behind the code" />

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="absolute -inset-0 translate-x-4 translate-y-4 rounded-2xl border border-accent/40" />
            <picture>
              <source srcSet="/images/portrait.webp" type="image/webp" />
              <img
                src="/images/portrait.png"
                alt="Muhammad Younas — Full Stack Developer"
                width={448}
                height={600}
                loading="lazy"
                decoding="async"
                className="relative w-full rounded-2xl border border-line object-cover shadow-2xl"
                style={{ aspectRatio: '448 / 600' }}
              />
            </picture>
            <div className="absolute bottom-4 left-4 rounded-lg border border-line bg-ink/85 px-4 py-2 font-mono text-xs text-accent backdrop-blur">
              📍 Pakistan — working worldwide
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              I build products end-to-end —{' '}
              <span className="text-accent">from database schema to the last pixel.</span>
            </h3>
            <p className="mt-6 leading-relaxed text-fog">
              Hi, I'm <span className="text-white">Muhammad Younas</span>. For the past{' '}
              <span className="text-white">2 years</span> I've been working as a full stack
              developer — designing APIs, modelling data, and crafting responsive interfaces with
              React and Node.js. Before that, I spent{' '}
              <span className="text-white">1 year as a Flutter developer</span>, shipping
              cross-platform mobile apps and obsessing over 60fps animations.
            </p>
            <p className="mt-4 leading-relaxed text-fog">
              That combination means I can take an idea and carry it across the whole stack: schema
              design, backend services, auth, payments, web frontends and mobile apps — then deploy,
              monitor and iterate. I like small teams, big ownership, and products people actually
              enjoy using.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {PILLARS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-line bg-panel p-5 transition hover:border-accent/50"
                >
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 font-display text-sm font-bold text-white">{title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-fog">{text}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
