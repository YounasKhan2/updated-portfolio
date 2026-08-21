import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Smartphone, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import type { Skill } from '../lib/types';

const CATEGORIES = [
  { key: 'Frontend', icon: Monitor, blurb: 'interfaces that feel alive' },
  { key: 'Backend', icon: Server, blurb: 'apis, auth & databases' },
  { key: 'Mobile', icon: Smartphone, blurb: 'one codebase, every screen' },
  { key: 'Tools & DevOps', icon: Wrench, blurb: 'ship fast, ship safe' },
];

interface LogoConfig {
  slug: string;
  color?: string;
  light?: string;
  dark?: string;
}

// Simple Icons (cdn.simpleicons.org) slugs + adaptive brand colors per skill
const LOGOS: Record<string, LogoConfig> = {
  // Frontend
  React: { slug: 'react', color: '61DAFB' },
  'Next.js': { slug: 'nextdotjs', light: '000000', dark: 'FFFFFF' },
  TypeScript: { slug: 'typescript', color: '3178C6' },
  'Tailwind CSS': { slug: 'tailwindcss', color: '06B6D4' },
  JavaScript: { slug: 'javascript', color: 'F7DF1E' },
  'Redux / Zustand': { slug: 'redux', color: '764ABC' },

  // Backend
  'Node.js': { slug: 'nodedotjs', color: '5FA04E' },
  'Express.js': { slug: 'express', light: '000000', dark: 'FFFFFF' },
  'PostgreSQL / Supabase': { slug: 'supabase', color: '3FCF8E' },
  MongoDB: { slug: 'mongodb', color: '47A248' },
  'Prisma ORM': { slug: 'prisma', light: '2D3748', dark: 'FFFFFF' },
  'REST & GraphQL APIs': { slug: 'graphql', color: 'E10098' },

  // Mobile
  Flutter: { slug: 'flutter', color: '02569B' },
  Dart: { slug: 'dart', color: '0175C2' },
  Firebase: { slug: 'firebase', color: 'FFCA28' },
  'Android Studio': { slug: 'androidstudio', color: '3DDC84' },

  // Tools & DevOps
  'Git & GitHub': { slug: 'github', light: '181717', dark: 'FFFFFF' },
  Docker: { slug: 'docker', color: '2496ED' },
  'CI/CD & Vercel': { slug: 'vercel', light: '000000', dark: 'FFFFFF' },
  Postman: { slug: 'postman', color: 'FF6C37' },
  Figma: { slug: 'figma', color: 'F24E1E' },
  'Linux / Bash': { slug: 'gnubash', color: '4EAA25' },
};

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => /^[a-z]/i.test(w))
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function SkillTile({ skill, index, isDark }: { skill: Skill; index: number; isDark: boolean }) {
  const [failed, setFailed] = useState(false);
  const logo = LOGOS[skill.name];
  const showLogo = !!logo && !failed;

  // Determine adaptive brand color based on active theme
  const iconColor = logo
    ? isDark
      ? logo.dark || logo.color || 'FFFFFF'
      : logo.light || logo.color || '000000'
    : 'FFFFFF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className="group flex items-center gap-3.5 rounded-xl border border-line bg-panel px-4 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_10px_30px_rgba(201,245,66,0.08)]"
    >
      {showLogo ? (
        <img
          src={`https://cdn.simpleicons.org/${logo.slug}/${iconColor}`}
          alt={`${skill.name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-display text-xs font-bold text-accent">
          {initials(skill.name)}
        </span>
      )}
      <span className="truncate font-mono text-xs text-fog transition group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const skills = SKILLS;
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="skills" className="relative border-t border-line bg-panel/40 py-28 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="02" title="Tech arsenal" sub="weapons of choice" />

        <div className="space-y-12">
          {CATEGORIES.map(({ key, icon: Icon, blurb }) => {
            const items = skills.filter((s) => s.category === key);
            if (items.length === 0) return null;
            return (
              <div key={key}>
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-lg font-bold text-white">{key}</h3>
                  <span className="hidden font-mono text-xs text-fog md:inline">
                    // {blurb}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="font-mono text-xs text-accent">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {items.map((s, i) => (
                    <SkillTile key={s.id} skill={s} index={i} isDark={isDark} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
