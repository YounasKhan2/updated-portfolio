import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { EXPERIENCES } from '../data/portfolioData';

export default function ExperienceSection() {
  const experiences = EXPERIENCES;

  return (
    <section id="experience" className="relative border-t border-line bg-panel/40 py-28 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading index="04" title="Experience" sub="where I've made an impact" />

        <div className="experience-timeline relative ml-3 space-y-16 border-l border-line pl-10">
          {experiences.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
              className="experience-card relative"
            >
              <span className="experience-dot absolute -left-[49px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-ink">
                <span className="experience-dot-inner h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="experience-badge rounded-full bg-accent/10 px-3 py-1 text-accent">{e.period}</span>
                <span className="experience-location text-fog">{e.location}</span>
              </div>

              <h3 className="experience-role mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                {e.role}
              </h3>
              <p className="experience-company mt-1 font-mono text-sm text-fog">{e.company}</p>
              <p className="experience-desc mt-4 max-w-2xl leading-relaxed text-fog">{e.description}</p>

              <ul className="mt-5 space-y-2.5">
                {e.highlights.map((h, hi) => (
                  <li key={hi} className="experience-highlight flex items-start gap-3 text-sm text-mist">
                    <span className="experience-bullet mt-0.5 text-accent">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
