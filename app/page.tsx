'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Layout, Layers, BookOpen, ArrowUpRight } from 'lucide-react';
import { SiteFooter } from '@/components/site/SiteFooter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 }
  }
};

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col relative selection:bg-ink selection:text-paper">
      
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-ruled -z-10 opacity-60"></div>
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="flex-1 min-h-[80vh] flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-12 pb-24">
          <motion.div 
            className="max-w-[1440px] mx-auto w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <span className="h-px w-12 bg-ink/30 block"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-mute">DesignFree v2.0</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-9xl font-serif text-ink tracking-tight leading-[0.9] mb-8 max-w-6xl mix-blend-multiply"
            >
              A working library <br className="hidden md:block"/>
              <span className="text-mute italic">for builders.</span>
            </motion.h1>
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start mt-12 md:mt-24">
              <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4">
                <p className="text-lg md:text-xl text-ink/80 leading-relaxed">
                  Explore live website designs side by side, discover hand-picked tools you've never heard of, and learn how to perfectly replicate any design using AI.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="md:col-span-7 lg:col-span-8 flex flex-wrap gap-4 md:justify-end">
                <Link 
                  href="/projects/" 
                  className="group relative inline-flex items-center justify-center gap-3 bg-ink text-paper px-8 py-4 rounded-full font-medium overflow-hidden transition-all hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Layout className="w-4 h-4" />
                    Open Dashboard
                  </span>
                  <div className="absolute inset-0 bg-ink-soft transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out z-0"></div>
                </Link>
                <Link 
                  href="/resources/" 
                  className="group inline-flex items-center justify-center gap-3 bg-transparent text-ink border border-line px-8 py-4 rounded-full font-medium transition-all hover:border-ink hover:bg-ink/5"
                >
                  <Layers className="w-4 h-4" />
                  Browse Tools
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Feature Modules */}
        <section className="bg-ink text-paper py-24 md:py-32 px-4 sm:px-8 lg:px-16 rounded-t-3xl md:rounded-t-[4rem]">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                  Stop inspecting element. <br />
                  <span className="text-paper/50 italic">Start comparing.</span>
                </h2>
                <p className="text-lg text-paper/70 mb-8 max-w-lg leading-relaxed">
                  The Projects Dashboard is a split-pane environment. Keep your list of references on the left, and interact with the live iframe on the right. No more opening twenty tabs.
                </p>
                <Link href="/projects/" className="inline-flex items-center gap-2 text-paper hover:text-paper/70 transition-colors border-b border-paper/30 hover:border-paper pb-1">
                  Launch the workspace <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-paper/10 bg-ink-soft">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_3s_linear_infinite]"></div>
                <div className="absolute inset-2 md:inset-4 rounded-xl border border-paper/5 bg-ink overflow-hidden flex">
                   <div className="w-1/3 border-r border-paper/10 p-4 opacity-50 hidden md:block">
                     <div className="h-4 w-1/2 bg-paper/20 rounded mb-4"></div>
                     <div className="space-y-2">
                       <div className="h-8 w-full bg-paper/10 rounded"></div>
                       <div className="h-8 w-full bg-paper/10 rounded"></div>
                     </div>
                   </div>
                   <div className="flex-1 p-4 flex flex-col">
                     <div className="h-4 w-3/4 bg-paper/20 rounded mb-auto mx-auto mt-10"></div>
                     <div className="h-32 w-2/3 bg-paper/10 rounded mx-auto mt-4"></div>
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-8 md:p-12 rounded-3xl bg-ink-soft border border-paper/10 hover:border-paper/30 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <Layers className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full border border-paper/20 text-xs font-mono mb-6">Database</span>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">Curated Resources</h3>
                  <p className="text-paper/60 mb-8 max-w-sm leading-relaxed">
                    A constantly updated directory of hidden gems. Open source alternatives, niche design utilities, and developer tools you won't find on Twitter.
                  </p>
                  <Link href="/resources/" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-paper text-ink hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-8 md:p-12 rounded-3xl bg-ink-soft border border-paper/10 hover:border-paper/30 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                  <BookOpen className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full border border-paper/20 text-xs font-mono mb-6">Playbook</span>
                  <h3 className="text-2xl md:text-3xl font-medium mb-4">The Vibe-Coder's Guide</h3>
                  <p className="text-paper/60 mb-8 max-w-sm leading-relaxed">
                    Learn the exact methodology for tearing down a professional design system and perfectly replicating it using AI tools like Cursor and Claude.
                  </p>
                  <Link href="/guide/" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-paper text-ink hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <div className="bg-ink text-paper">
        <SiteFooter />
      </div>
    </div>
  );
}
