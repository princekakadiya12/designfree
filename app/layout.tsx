import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { SITE, OWNER } from '@/lib/site';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: OWNER.name, url: OWNER.website }],
  creator: OWNER.name,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: 'website',
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary',
    title: SITE.name,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: '#fafaf7',
};

import { SiteHeader } from '@/components/site/SiteHeader';
import { SiteFooter } from '@/components/site/SiteFooter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}>
      <body className="font-sans min-h-dvh flex flex-col bg-paper text-ink" suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
