import { certifications } from '@/content/data';

export default function Certifications() {
  return (
    <section className="border-b border-ink-800/60 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-xl italic text-ink-950 dark:text-fg">Certifications</h2>
        <ul className="mt-6 divide-y divide-ink-800/60 border-y border-ink-800/60">
          {certifications.map((c) => (
            <li key={c.name} className="flex flex-wrap items-center justify-between gap-2 py-3">
              <span className="text-sm text-ink-950 dark:text-fg">{c.name}</span>
              <span className="font-mono text-xs text-fg-faint">{c.issuer}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
