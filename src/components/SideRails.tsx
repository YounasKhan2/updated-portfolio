import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { icon: Github, href: 'https://github.com/YounasKhan2', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/muhammadyounas', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:younaskk120@gmail.com', label: 'Email' },
];

export default function SideRails() {
  const [isOverExperience, setIsOverExperience] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const exp = document.getElementById('experience');
      if (!exp) {
        setIsOverExperience(false);
        return;
      }

      const rect = exp.getBoundingClientRect();
      const vh = window.innerHeight;

      // The side rail icons are in the bottom ~220px of the viewport.
      // They are only "over" the green experience section when that section covers the bottom rail area.
      const isOver = rect.top <= vh - 80 && rect.bottom >= vh - 220;
      setIsOverExperience(isOver);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={isOverExperience ? 'side-rails-green-mode' : ''}>
      {/* Left rail — vertical social links */}
      <div className="fixed bottom-0 left-7 z-40 hidden flex-col items-center gap-5 transition-all duration-300 2xl:flex">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="side-rail-link transition-all duration-300 hover:-translate-y-1"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
        <span className="side-rail-line h-24 w-px transition-all duration-300" />
      </div>

      {/* Right rail — vertical mail */}
      <div className="fixed bottom-0 right-7 z-40 hidden flex-col items-center gap-6 transition-all duration-300 2xl:flex">
        <a
          href="mailto:younaskk120@gmail.com"
          style={{ writingMode: 'vertical-rl' }}
          className="side-rail-link font-mono text-xs tracking-[0.25em] transition-all duration-300 hover:scale-105"
        >
          younaskk120@gmail.com
        </a>
        <span className="side-rail-line h-24 w-px transition-all duration-300" />
      </div>
    </div>
  );
}
