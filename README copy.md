# Ankit Kurmi — Personal Site

A personal site built with Next.js (App Router), TypeScript, and Tailwind CSS.
Dark mode by default, with a light-mode toggle, an animated hero visualization,
a GitHub-style open-source contribution stream, and a hidden terminal easter
egg (press `` ` `` anywhere on the site).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Where to edit things

You do **not** need to touch component code to update the content of the
site. Everything lives in one place:

```
content/data.ts
```

That file contains, in plain objects/arrays:

- `profile` — name, role, hero headline & sub-copy
- `socials` — email, GitHub, LinkedIn, Instagram, YouTube links
- `about` — the About section's paragraphs
- `caseStudies` — the engineering case studies (problem / build / stack / outcome)
- `openSource` — the contribution timeline
- `research` — research interests & academic work
- `photography`, `music`, `travel`, `curiosity` — the "Beyond Code" section
- `community` — speaking / mentoring / hackathon items
- `certifications` — the compact certifications list
- `timeline` — the career/growth timeline stages
- `skills` — the toolbox strip
- `terminalCommands` — what the hidden terminal prints for each command

Edit the values, save, and the site updates — no component changes required.

## Where to replace images

Photography placeholders live in:

```
public/images/photography/frame-01.svg ... frame-06.svg
```

These are abstract, generated placeholders so the gallery has something to
show out of the box. Replace them with real photos (`.jpg`, `.png`, `.webp`)
and update the matching `src` path in `content/data.ts` under
`photography.gallery`. If you host images remotely (e.g. a CDN), add that
host to `images.remotePatterns` in `next.config.js`.

## Project structure

```
app/                Next.js App Router entry (layout, page, global styles)
components/          One component per section (Hero, Work, OpenSource, ...)
content/data.ts       All editable content — the file described above
public/images/         Static images (photography placeholders, etc.)
tailwind.config.ts     Design tokens: colors, fonts, animation keyframes
```

## Design notes

- Dark mode is the default; the toggle persists the choice in `localStorage`
  and the theme is applied before first paint to avoid a flash.
- The hidden terminal (press `` ` ``) is a small easter egg for technically
  curious visitors — commands are defined in `terminalCommands` in
  `content/data.ts`.
- Motion is intentionally minimal: a slow pulse/drift in the hero graphic,
  hover states, and a few transitions — nothing that fights for attention.
