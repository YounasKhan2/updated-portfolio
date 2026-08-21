export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-fog">
          © {new Date().getFullYear()} Muhammad Younas — designed & built with React, TypeScript &
          Tailwind CSS.
        </p>
        <p className="font-mono text-xs text-fog">
          <span className="text-accent">$</span> npx hire-me{' '}
          <a href="#top" className="ml-3 text-white transition hover:text-accent">
            back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
