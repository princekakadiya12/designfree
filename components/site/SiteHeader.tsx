'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV, OWNER } from '@/lib/site';

export function SiteHeader() {
  const pathname = usePathname() ?? '/';
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname.startsWith(href.replace(/\/$/, ''));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-md px-3 py-1.5 text-[13.5px] transition-colors ${
                isActive(item.href) ? 'text-ink' : 'text-mute hover:text-ink'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-[13px] h-[2px] bg-ink" aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={OWNER.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-[11.5px] text-mute hover:text-ink transition-colors"
          >
            {OWNER.websiteLabel}
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <Link
            href="/support/"
            className="rounded-md bg-ink px-3 py-1.5 text-[13px] font-medium text-paper hover:bg-ink-soft transition-colors"
          >
            Support the project
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 rounded-md p-2 text-ink md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col px-4 py-2" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-line py-3 text-[15px] last:border-0 ${
                  isActive(item.href) ? 'font-medium text-ink' : 'text-mute'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={OWNER.website}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 font-mono text-[12px] text-mute"
            >
              {OWNER.websiteLabel} ↗
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
