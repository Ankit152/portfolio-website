'use client';

import { useEffect, useRef, useState } from 'react';
import { terminalCommands } from '@/content/data';

type Line = { type: 'input' | 'output'; text: string };

const commandList = Object.keys(terminalCommands);

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: "type `help` to see available commands" },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      const typing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

      if (e.key === '`' && !typing) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [lines]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const known = terminalCommands as Record<string, string>;
    const output =
      cmd in known
        ? known[cmd]
        : `command not found: ${cmd} — try "help"`;

    setLines((prev) => [...prev, { type: 'input', text: cmd }, { type: 'output', text: output }]);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink-950/70 px-4 pt-24 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Hidden terminal"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl overflow-hidden rounded-lg border border-ink-700 bg-ink-900 shadow-2xl shadow-black/50"
      >
        <div className="flex items-center gap-1.5 border-b border-ink-700/70 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="ml-3 font-mono text-xs text-fg-faint">
            you found this — {commandList.length} commands available
          </span>
        </div>

        <div className="thin-scroll max-h-80 overflow-y-auto px-4 py-3 font-mono text-sm">
          {lines.map((l, i) => (
            <div key={i} className="mb-1.5 leading-relaxed">
              {l.type === 'input' ? (
                <span className="text-brass-400">
                  <span className="text-signal-500">➜</span> {l.text}
                </span>
              ) : (
                <span className="text-fg-muted">{l.text}</span>
              )}
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            runCommand(value);
            setValue('');
          }}
          className="flex items-center gap-2 border-t border-ink-700/70 px-4 py-3"
        >
          <span className="font-mono text-signal-500">➜</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="whoami, projects, contact…"
            className="w-full bg-transparent font-mono text-sm text-fg placeholder:text-fg-faint focus:outline-none"
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}
