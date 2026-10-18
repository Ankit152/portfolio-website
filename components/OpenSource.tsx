import { openSource } from '@/content/data';

const tagColor: Record<string, string> = {
  merged: 'bg-signal-500',
  mentorship: 'bg-brass-500',
  recognition: 'bg-brass-300',
};

const tagLabel: Record<string, string> = {
  merged: 'contribution',
  mentorship: 'mentorship',
  recognition: 'recognition',
};

export default function OpenSource() {
  return (
    <section id="open-source" className="border-b border-ink-800/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">
          Building in public.
        </h2>
        <p className="mt-3 max-w-prose text-fg-muted">{openSource.intro}</p>

        <ol className="mt-12 space-y-0 border-l border-ink-800/60 pl-8">
          {openSource.contributions.map((c, i) => (
            <li key={i} className="relative pb-10 last:pb-0">
              <span
                className={`absolute -left-[calc(2rem+4.5px)] top-1.5 h-2 w-2 rounded-full ${tagColor[c.tag]}`}
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-fg-faint">{c.date}</p>
              <h3 className="mt-1 font-display text-lg text-ink-950 dark:text-fg">
                {c.project}
                <span className="ml-3 rounded border border-ink-700 px-2 py-0.5 align-middle font-mono text-[10px] font-normal text-fg-muted">
                  {tagLabel[c.tag]}
                </span>
              </h3>
              <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-fg-muted">
                {c.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-ink-800/60 pt-8">
          {openSource.projects.map((p) => (
            <span
              key={p}
              className="rounded border border-ink-700 px-3 py-1.5 font-mono text-xs text-fg-muted"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
