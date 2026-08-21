import { motion } from 'framer-motion';

export default function SectionHeading({
  index,
  title,
  sub,
}: {
  index: string;
  title: string;
  sub?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-14"
    >
      <div className="flex items-center gap-4 font-mono text-sm text-accent">
        <span>[{index}]</span>
        <span className="h-px w-16 bg-accent/50" />
        {sub && <span className="uppercase tracking-[0.25em] text-fog">{sub}</span>}
      </div>
      <h2 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </motion.div>
  );
}
