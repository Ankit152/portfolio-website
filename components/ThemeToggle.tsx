'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      /* localStorage unavailable — theme just won't persist */
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="group relative flex h-8 w-14 items-center rounded-full border border-ink-700/60 bg-ink-900 px-1 transition-colors dark:border-ink-700/60 dark:bg-ink-900"
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-brass-500 text-[10px] text-ink-950 transition-transform duration-300 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? '☾' : '☀'}
      </span>
    </button>
  );
}
