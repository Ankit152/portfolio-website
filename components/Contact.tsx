import { profile, socials } from '@/content/data';

const links = [
  { label: 'Email', href: socials.email },
  { label: 'GitHub', href: socials.github },
  { label: 'LinkedIn', href: socials.linkedin },
  { label: 'Instagram / photography', href: socials.instagram },
  { label: 'YouTube / music', href: socials.youtube },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="max-w-2xl font-display text-3xl italic leading-tight text-ink-950 dark:text-fg">
          Have an interesting system, idea, photograph, or rabbit hole to explore?
        </h2>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-sm text-fg-muted transition-colors hover:text-brass-500"
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {l.label} ↗
            </a>
          ))}
        </div>

        <p className="mt-14 font-mono text-xs text-fg-faint">{profile.footerLine}</p>
      </div>
    </section>
  );
}
