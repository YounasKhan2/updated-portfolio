import { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#01';

export function useScramble(text: string, delay = 0) {
  const [output, setOutput] = useState('');

  useEffect(() => {
    let frame = 0;
    let raf = 0;
    const totalFrames = text.length * 3 + 24;
    const start = performance.now() + delay;

    const tick = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }
      frame += 1;
      const progress = Math.min(1, frame / totalFrames);
      const revealed = Math.floor(progress * text.length);
      let out = text.slice(0, revealed);
      for (let i = revealed; i < text.length; i += 1) {
        out += text[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOutput(out);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setOutput(text);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay]);

  return output;
}
