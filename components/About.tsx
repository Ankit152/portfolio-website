import { about } from '@/content/data';

export default function About() {
  return (
    <section id="about" className="border-b border-ink-800/60 px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-[0.35fr,0.65fr]">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">About</h2>

        <div className="max-w-prose space-y-5 text-[1.02rem] leading-relaxed text-fg-muted">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                p.startsWith('I like building')
                  ? 'font-display text-xl italic text-ink-950 dark:text-fg'
                  : ''
              }
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
