import Link from 'next/link';
import { Logo } from './Logo';
import { COMMUNITY, NAV, OWNER, GARGI, SITE } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-mute">
            {SITE.description}
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            <li><Link href="/" className="text-ink-soft hover:text-ink">Home</Link></li>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ink-soft hover:text-ink">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">The Curators</h3>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            <li>
              <a href={OWNER.website} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Prince Kakadiya ↗
              </a>
            </li>
            <li>
              <a href={GARGI.website} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Gargi ↗
              </a>
            </li>
            <li>
              <a href={`mailto:${OWNER.email}`} className="text-ink-soft hover:text-ink">{OWNER.email}</a>
            </li>
            <li>
              <a href={COMMUNITY.whatsapp} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                WhatsApp community ↗
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Legal</h3>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            <li><Link href="/privacy/" className="text-ink-soft hover:text-ink">Privacy policy</Link></li>
            <li><Link href="/copyright/" className="text-ink-soft hover:text-ink">Copyright &amp; credits</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-4 py-5 text-[12.5px] text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} {OWNER.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">Free to use. Kept alive by supporters.</p>
        </div>
      </div>
    </footer>
  );
}
