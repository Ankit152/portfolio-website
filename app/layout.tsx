import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ankit Kurmi — Site Reliability Engineer',
  description:
    'Site Reliability Engineer at Red Hat, open-source contributor, and photographer. I build systems that stay reliable when everything else gets complicated.',
  metadataBase: new URL('https://theankitkurmi.com'),
  openGraph: {
    title: 'Ankit Kurmi — Site Reliability Engineer',
    description:
      'Reliability engineering, distributed systems, open source — and a life outside of it.',
    type: 'website',
    url: 'https://theankitkurmi.com',
    siteName: 'Ankit Kurmi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Kurmi — Site Reliability Engineer',
    description:
      'Reliability engineering, distributed systems, open source — and a life outside of it.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

// Runs before paint to set the theme class on <html>, avoiding a
// light-mode flash on load. Dark mode is the default per the brief.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${inter.variable} ${jbmono.variable} font-sans antialiased selection:bg-brass-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
