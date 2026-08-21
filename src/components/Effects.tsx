import { useEffect, useRef, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[70] h-[3px] bg-accent shadow-[0_0_12px_var(--color-accent)]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 260}px, ${e.clientY - 260}px)`;
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[520px] w-[520px] rounded-full md:block"
      style={{ background: 'radial-gradient(circle, rgba(22, 163, 74, 0.05) 0%, transparent 60%)' }}
    />
  );
}

export function SectionLoader({ label = 'loading' }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-20 font-mono text-sm text-fog">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      {label}...
    </div>
  );
}

export function LoadError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <p className="font-mono text-sm text-fog">// failed to load data from the server</p>
      <button
        onClick={onRetry}
        className="rounded-full border border-accent/60 px-6 py-2 font-mono text-xs uppercase tracking-widest text-accent transition hover:bg-accent hover:text-ink"
      >
        Retry
      </button>
    </div>
  );
}
