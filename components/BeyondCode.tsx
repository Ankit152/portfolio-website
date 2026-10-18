import Image from 'next/image';
import { photography, music, travel, curiosity, socials } from '@/content/data';

export default function BeyondCode() {
  return (
    <section
      id="beyond"
      className="border-b border-ink-800/60 bg-paper-100/60 px-6 py-20 dark:bg-ink-900/40"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-2xl italic text-ink-950 dark:text-fg">
          When I&apos;m not debugging production.
        </h2>

        {/* Photography */}
        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-lg text-ink-950 dark:text-fg">Photography</h3>
            <a
              href={socials.instagram}
              className="font-mono text-xs text-signal-500 hover:underline"
            >
              @ {photography.identity}
            </a>
          </div>
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-fg-muted">
            {photography.intro}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photography.gallery.map((g) => (
              <div
                key={g.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-md border border-ink-800/60"
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-mono text-[11px] text-fg">{g.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Music */}
          <div>
            <h3 className="font-display text-lg text-ink-950 dark:text-fg">Music</h3>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">{music.description}</p>
            <a
              href={socials.youtube}
              className="mt-3 inline-block font-mono text-xs text-signal-500 hover:underline"
            >
              {music.project} ↗
            </a>
          </div>

          {/* Travel */}
          <div>
            <h3 className="font-display text-lg text-ink-950 dark:text-fg">Travel</h3>
            <p className="mt-3 text-sm text-fg-muted">{travel.intro}</p>
            <ul className="mt-3 space-y-2">
              {travel.places.map((p) => (
                <li key={p.name} className="text-sm text-fg-muted">
                  <span className="text-ink-950 dark:text-fg">{p.name}</span> — {p.note}
                </li>
              ))}
            </ul>
          </div>

          {/* Curiosity */}
          <div>
            <h3 className="font-display text-lg text-ink-950 dark:text-fg">Curiosity</h3>
            <p className="mt-3 text-sm text-fg-muted">{curiosity.intro}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-fg-muted">
              {curiosity.items.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-brass-500">·</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
