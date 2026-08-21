import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../lib/types';

const FILTERS = ['All', 'Full Stack', 'Flutter'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const projects = PROJECTS;

  const matches = (p: Project) => filter === 'All' || p.category === filter;
  const featured = projects.filter((p) => p.featured && matches(p));
  const others = projects.filter((p) => !p.featured && matches(p));

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <span className="text-outline pointer-events-none absolute -top-2 left-0 select-none font-display text-[11rem] font-extrabold leading-none opacity-60 md:text-[16rem]">
        03
      </span>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="03" title="Selected work" sub="things I've shipped" />
          <div className="mb-14 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-widest transition ${
                  filter === f
                    ? 'border-accent bg-accent text-ink'
                    : 'border-line text-fog hover:border-accent/60 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-panel p-7 transition-colors hover:border-accent/60"
            >
              <div className="pointer-events-none absolute -right-4 -top-8 font-display text-[7rem] font-extrabold text-white/[0.04] transition group-hover:text-accent/10">
                0{i + 1}
              </div>

              <div className="flex items-center justify-between font-mono text-xs text-fog">
                <span className="rounded-full border border-line px-3 py-1 uppercase tracking-wider">
                  {p.category}
                </span>
                <span>{p.year}</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold text-white transition group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-accent">{p.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-fog">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-mist"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-5 pt-6">
                {p.demo_url && (
                  <a
                    href={p.demo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-white transition hover:text-accent"
                  >
                    Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                {p.github_url && (
                  <a
                    href={p.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-fog transition hover:text-accent"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {featured.length === 0 && others.length === 0 && (
          <p className="py-16 text-center font-mono text-sm text-fog">
            // no projects in this category yet
          </p>
        )}

        {others.length > 0 && (
          <div className="mt-16">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-fog">
              // more builds
            </p>
            <div className="border-t border-line">
              {others.map((p, i) => (
                <a
                  key={p.id}
                  href={p.github_url || p.demo_url || '#contact'}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-5 transition hover:bg-panel/60 sm:gap-6"
                >
                  <span className="font-mono text-xs text-fog">/0{i + featured.length + 1}</span>
                  <div className="min-w-0">
                    <span className="font-display text-lg font-bold text-white transition group-hover:text-accent">
                      {p.title}
                    </span>
                    <span className="ml-4 hidden font-mono text-xs text-fog md:inline">
                      {p.tech.slice(0, 3).join(' · ')}
                    </span>
                    <span className="ml-4 hidden rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase text-fog sm:inline">
                      {p.category}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-fog transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
