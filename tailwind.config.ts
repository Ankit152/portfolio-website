import type { Config } from 'tailwindcss';

// Design tokens for the site. Change accent colors here if you ever want
// to re-theme the whole site — everything references these.
const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0b0d', // primary dark background
          900: '#0f1113', // secondary dark background (panels)
          800: '#15181b',
          700: '#202428',
          600: '#31363c',
        },
        paper: {
          50: '#faf8f4', // light-mode background
          100: '#f2efe8',
          200: '#e6e1d6',
        },
        fg: {
          DEFAULT: '#e8e6e1', // primary text on dark
          muted: '#9a9c9f', // secondary text on dark
          faint: '#5c5f63',
        },
        brass: {
          // primary accent — warm, like an old light-meter needle
          300: '#e3c383',
          400: '#d3ab63',
          500: '#c9963e', // core accent
          600: '#a97a2e',
        },
        signal: {
          // secondary accent — used sparingly for data/metrics/links to code
          400: '#7fc7c2',
          500: '#5fb3b3',
          600: '#458f8f',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jbmono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(6px,-6px)' },
          '100%': { transform: 'translate(0,0)' },
        },
      },
      animation: {
        pulseSlow: 'pulseSlow 3.5s ease-in-out infinite',
        drift: 'drift 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
