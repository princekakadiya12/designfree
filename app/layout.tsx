import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Prince Kakadiya World — Web Design Portfolio & Developer Resources',
  description:
    'Explore award-winning website designs by Prince Kakadiya. Free developer resources, AI tools, design tutorials, and curated Hugging Face models & GitHub repos.',
  openGraph: {
    title: 'Prince Kakadiya World',
    description:
      'Award-winning web design portfolio with free developer resources, tutorials, and curated tools.',
    type: 'website',
    url: 'https://princekakadiya.tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prince Kakadiya World',
    description:
      'Award-winning web design portfolio with free developer resources, tutorials, and curated tools.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
