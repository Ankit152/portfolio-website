import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import OpenSource from '@/components/OpenSource';
import Research from '@/components/Research';
import BeyondCode from '@/components/BeyondCode';
import Community from '@/components/Community';
import Certifications from '@/components/Certifications';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import Terminal from '@/components/Terminal';
import { skills } from '@/content/data';

export default function Home() {
  const stack = [...skills.languages, ...skills.infra, ...skills.data, ...skills.observability];

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-brass-500 focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to work
      </a>

      <Nav />

      <main>
        <Hero />
        <About />

        {/* Compact toolbox strip — keeps the technical surface visible without a skill-bar chart */}
        <section aria-label="Technologies" className="border-b border-ink-800/60 px-6 py-8">
          <div className="mx-auto flex max-w-5xl flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded border border-ink-800/60 px-2.5 py-1 font-mono text-[11px] text-fg-faint"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        <Work />
        <OpenSource />
        <Research />
        <BeyondCode />
        <Community />
        <Certifications />
        <Timeline />
        <Contact />
      </main>

      <Terminal />
    </>
  );
}
