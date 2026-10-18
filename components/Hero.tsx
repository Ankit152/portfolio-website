import { profile } from '@/content/data';
import HeroViz from './HeroViz';

export default function Hero() {
  return (
    <section
      id="top"
      className="grid-texture relative overflow-hidden border-b border-ink-800/60"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-[1.15fr,0.85fr] md:py-28">
        <div>
          <p className="mb-5 font-mono text-xs text-signal-500">{profile.role}</p>

          <h1 className="font-display text-[2.35rem] leading-[1.12] tracking-tight text-ink-950 dark:text-fg sm:text-5xl">
            {profile.heroHeadline}
          </h1>

          <p className="mt-6 max-w-prose text-[1.05rem] leading-relaxed text-fg-muted">
            {profile.heroSub}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-md bg-brass-500 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-brass-400"
            >
              Explore my work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-ink-700 px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:border-brass-500 hover:text-brass-500 dark:text-fg"
            >
              Let&apos;s connect
            </a>
          </div>

          <p className="mt-10 max-w-prose border-l-2 border-brass-500/50 pl-4 font-mono text-xs leading-relaxed text-fg-faint">
            currently thinking about: {profile.currentlyThinking}
          </p>
        </div>

        <div className="relative h-64 text-ink-950 dark:text-fg md:h-80">
          <HeroViz />
        </div>
      </div>
    </section>
  );
}
