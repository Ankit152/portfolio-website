import { community } from '@/content/data';

export default function Community() {
  return (
    <section className="border-b border-ink-800/60 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">
          Sharing what I learn.
        </h2>
        <p className="mt-3 max-w-prose text-fg-muted">{community.intro}</p>

        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {community.items.map((item) => (
            <div key={item.title} className="border-t border-ink-800/60 pt-4">
              <h3 className="font-display text-base text-ink-950 dark:text-fg">{item.title}</h3>
              <p className="mt-1.5 text-sm text-fg-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
