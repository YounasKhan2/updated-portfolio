import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SideRails from './components/SideRails';
import { CursorGlow, ScrollProgress } from './components/Effects';
import { ThemeProvider } from './context/ThemeContext';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <ThemeProvider>
      <div id="top" className="relative min-h-screen bg-ink text-white antialiased transition-colors duration-300">
        <ScrollProgress />
        <CursorGlow />
        <SideRails />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}
