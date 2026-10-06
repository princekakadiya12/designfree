import Link from 'next/link';

export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <rect width="40" height="40" rx="10" fill="var(--color-ink)" />
      {/* Abstract geometric mark representing design & code */}
      <path
        d="M14 12 L26 12 L26 28 L14 28 Z"
        fill="var(--color-paper)"
        fillOpacity="0.1"
      />
      <path
        d="M12 16 L22 16 L22 32 L12 32 Z"
        fill="var(--color-paper)"
      />
      <circle cx="28" cy="12" r="4" fill="var(--color-signal)" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 group">
      <LogoMark />
      <span className="flex flex-col leading-[1.1]">
        <span className="text-[17px] font-serif italic tracking-wide text-ink flex gap-1 items-baseline">
          Prince<span className="text-signal not-italic font-medium text-sm mx-0.5">&</span>Gargi <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-ocean ml-1 relative -top-[2px]">Design</span>
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-mute group-hover:text-ink transition-colors flex items-center gap-1.5">
          Curated Portfolio <span className="w-1 h-1 rounded-full bg-signal/50"></span> Studio
        </span>
      </span>
    </Link>
  );
}
