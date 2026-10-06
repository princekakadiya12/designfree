import Link from 'next/link';

export function LogoMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#121211" />
      <path
        d="M9 8h6.2c5 0 8.3 3.2 8.3 8s-3.3 8-8.3 8H9V8zm4 3.4v9.2h2c2.7 0 4.4-1.8 4.4-4.6s-1.7-4.6-4.4-4.6h-2z"
        fill="#fafaf7"
      />
      <circle cx="25" cy="24.5" r="2.5" fill="#ff5b1f" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="DesignFree home">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-ink">DesignFree</span>
        <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-faint group-hover:text-mute transition-colors">
          by Prince Kakadiya
        </span>
      </span>
    </Link>
  );
}
