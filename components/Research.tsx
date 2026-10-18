import { research } from '@/content/data';

export default function Research() {
  return (
    <section className="border-b border-ink-800/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">
          {research.intro}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[0.5fr,0.5fr]">
          <div className="flex flex-wrap gap-2 content-start">
            {research.interests.map((r) => (
              <span
                key={r}
                className="rounded-full border border-ink-700 px-3 py-1.5 text-sm text-fg-muted"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="space-y-6">
            {research.entries.map((e) => (
              <div key={e.title} className="border-l-2 border-signal-500/50 pl-4">
                <p className="font-display text-base text-ink-950 dark:text-fg">{e.title}</p>
                <p className="font-mono text-xs text-fg-faint">{e.place}</p>
                <p className="mt-1 text-sm text-fg-muted">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
