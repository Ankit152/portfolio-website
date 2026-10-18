import { caseStudies } from '@/content/data';

export default function Work() {
  return (
    <section id="work" className="border-b border-ink-800/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">
          Things I&apos;ve built, broken, fixed, and learned from.
        </h2>
        <p className="mt-3 max-w-prose text-fg-muted">
          A few selected pieces of work, not a full list of responsibilities.
        </p>

        <div className="mt-14 space-y-16">
          {caseStudies.map((cs) => (
            <article
              key={cs.id}
              className="grid grid-cols-1 gap-6 border-t border-ink-800/60 pt-8 md:grid-cols-[0.62fr,0.38fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-signal-500">
                  {cs.category}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink-950 dark:text-fg">
                  {cs.title}
                </h3>

                <dl className="mt-5 space-y-3 text-sm leading-relaxed text-fg-muted">
                  <div>
                    <dt className="font-medium text-ink-950 dark:text-fg">The problem</dt>
                    <dd>{cs.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-ink-950 dark:text-fg">What I built</dt>
                    <dd>{cs.build}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-ink-700 px-2 py-1 font-mono text-[11px] text-fg-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5 border-ink-800/60 md:border-l md:pl-8">
                {cs.outcome.map((o) => (
                  <div key={o.label}>
                    <p className="font-mono-nums font-display text-3xl text-brass-500">
                      {o.metric}
                    </p>
                    <p className="text-sm text-fg-muted">{o.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
