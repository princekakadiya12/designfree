import Link from 'next/link';
import { ArrowRight, Code, Layout, BookOpen, Layers } from 'lucide-react';
import { SITE } from '@/lib/site';
import { SiteFooter } from '@/components/site/SiteFooter';

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-6 py-12 md:py-24 flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-ink tracking-tight mb-6">
            A working library for people who build the web.
          </h1>
          <p className="text-lg md:text-xl text-mute mb-10 max-w-2xl leading-relaxed">
            Explore live website designs side by side, discover hand-picked free tools you've probably never heard of, and learn how to replicate any design with AI-assisted vibe coding.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="/projects/" 
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 rounded-lg font-medium hover:bg-ink-soft transition-colors"
            >
              <Layout className="w-4 h-4" />
              Explore Projects
            </Link>
            <Link 
              href="/resources/" 
              className="inline-flex items-center gap-2 bg-line/30 text-ink px-6 py-3 rounded-lg font-medium hover:bg-line/50 transition-colors"
            >
              <Layers className="w-4 h-4" />
              Browse Tools
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <Link href="/projects/" className="group p-6 rounded-xl border border-line bg-paper-soft hover:border-ink/20 hover:bg-paper transition-all">
            <div className="w-10 h-10 rounded-lg bg-ink/5 flex items-center justify-center mb-4 text-ink group-hover:bg-ink group-hover:text-paper transition-colors">
              <Layout className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-ink mb-2">Projects Dashboard</h3>
            <p className="text-mute text-sm leading-relaxed mb-4">
              Side-by-side preview environment to inspect, compare, and study live application designs.
            </p>
            <span className="text-ink text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              View projects <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/resources/" className="group p-6 rounded-xl border border-line bg-paper-soft hover:border-ink/20 hover:bg-paper transition-all">
            <div className="w-10 h-10 rounded-lg bg-ink/5 flex items-center justify-center mb-4 text-ink group-hover:bg-ink group-hover:text-paper transition-colors">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-ink mb-2">Curated Free Tools</h3>
            <p className="text-mute text-sm leading-relaxed mb-4">
              Hundreds of hidden gems, free GitHub repos, open source alternatives, and niche utilities.
            </p>
            <span className="text-ink text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Browse tools <ArrowRight className="w-4 h-4" />
            </span>
          </Link>

          <Link href="/guide/" className="group p-6 rounded-xl border border-line bg-paper-soft hover:border-ink/20 hover:bg-paper transition-all">
            <div className="w-10 h-10 rounded-lg bg-ink/5 flex items-center justify-center mb-4 text-ink group-hover:bg-ink group-hover:text-paper transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium text-ink mb-2">Vibe Coding Guide</h3>
            <p className="text-mute text-sm leading-relaxed mb-4">
              A comprehensive playbook for using AI and LLMs to perfectly replicate professional designs.
            </p>
            <span className="text-ink text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Read the guide <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
