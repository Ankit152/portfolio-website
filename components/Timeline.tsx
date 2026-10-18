'use client';

import { useState } from 'react';
import { timeline } from '@/content/data';

export default function Timeline() {
  const [active, setActive] = useState(timeline.length - 1);

  return (
    <section id="timeline" className="border-b border-ink-800/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">
          Student to systems.
        </h2>
        <p className="mt-3 max-w-prose text-fg-muted">
          Fewer job titles, more of what actually changed along the way.
        </p>

        <div className="mt-12">
          {/* Track */}
          <div className="relative flex justify-between">
            <div className="absolute left-0 right-0 top-2 h-px bg-ink-800" />
            {timeline.map((stage, i) => (
              <button
                key={stage.title}
                onClick={() => setActive(i)}
                className="group relative z-10 flex flex-col items-center gap-3"
                aria-pressed={active === i}
                aria-label={stage.title}
              >
                <span
                  className={`h-4 w-4 rounded-full border-2 transition-colors ${
                    active === i
                      ? 'border-brass-500 bg-brass-500'
                      : 'border-ink-700 bg-ink-950 group-hover:border-brass-500/60'
                  }`}
                />
                <span
                  className={`hidden text-center font-mono text-[11px] sm:block ${
                    active === i ? 'text-brass-500' : 'text-fg-faint'
                  }`}
                >
                  {stage.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active stage detail */}
          <div className="mt-10 max-w-prose border-l-2 border-brass-500/50 pl-5">
            {timeline[active].year && (
              <p className="font-mono text-xs text-fg-faint">{timeline[active].year}</p>
            )}
            <h3 className="mt-1 font-display text-xl text-ink-950 dark:text-fg">
              {timeline[active].title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              {timeline[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
