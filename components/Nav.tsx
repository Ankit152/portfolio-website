'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#open-source', label: 'Open Source' },
  { href: '#beyond', label: 'Beyond Code' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-800/60 bg-paper-50/85 backdrop-blur dark:bg-ink-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg italic text-ink-950 dark:text-fg"
        >
          Ankit Kurmi
        </a>

        <ul className="hidden items-center gap-7 text-sm text-fg-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-brass-500">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-xs text-fg-faint md:inline">
            press <kbd className="rounded border border-ink-700 px-1 py-0.5">`</kbd> for terminal
          </span>
          <ThemeToggle />
          <button
            className="text-ink-950 dark:text-fg md:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-ink-800/60 px-6 pb-4 text-sm text-fg-muted md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-brass-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
