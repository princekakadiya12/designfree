'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV, OWNER } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-xl border-b border-line shadow-sm' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-16">
        <Logo />

        <nav className="hidden items-center gap-2 md:flex p-1 rounded-full border border-line/50 bg-paper/50 backdrop-blur-md" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-4 py-1.5 text-[13.5px] font-medium transition-all ${
                isActive(item.href) ? 'text-paper bg-ink' : 'text-mute hover:text-ink hover:bg-line/20'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={OWNER.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 font-mono text-[11.5px] uppercase tracking-widest text-mute hover:text-ink transition-colors"
          >
            {OWNER.websiteLabel}
            <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-full p-2 text-ink md:hidden hover:bg-line/20 transition-colors"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-b border-line bg-paper/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <nav className="mx-auto flex flex-col px-4 py-6 gap-2" aria-label="Mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-xl text-lg transition-colors ${
                    isActive(item.href) ? 'font-medium bg-ink text-paper' : 'text-mute hover:bg-line/20 hover:text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="h-px bg-line my-4"></div>
              <a
                href={OWNER.website}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 font-mono text-xs uppercase tracking-widest text-mute flex items-center justify-between hover:text-ink"
              >
                {OWNER.websiteLabel}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
