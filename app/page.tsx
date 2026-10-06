'use client';

import Link from 'next/link';
import { motion, Variants } from 'motion/react';
import { ArrowRight, Layout, Layers, BookOpen, ArrowUpRight, Sparkles, Code2, Palette } from 'lucide-react';
import { SiteFooter } from '@/components/site/SiteFooter';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { stiffness: 80, damping: 20 }
  }
};

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col relative selection:bg-signal selection:text-white">
      
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-ruled -z-10 opacity-70"></div>
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-20 pb-32">
          <motion.div 
            className="max-w-[1440px] mx-auto w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-signal block"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal font-medium">DesignFree v2.0</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-[10rem] font-serif text-ink tracking-tight leading-[0.85] mb-12 max-w-7xl mix-blend-multiply"
            >
              A working library <br className="hidden md:block"/>
              <span className="text-mute italic font-light">for builders.</span>
            </motion.h1>
            
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start mt-12 md:mt-32">
              <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4">
                <p className="text-xl md:text-2xl text-ink/80 leading-relaxed font-serif">
                  Explore live website designs side by side, discover hand-picked tools you've never heard of, and perfectly replicate any design using AI.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row gap-6 md:justify-end items-center">
                <Link 
                  href="/projects/" 
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 bg-ink text-paper px-10 py-5 rounded-full font-medium overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-ink/10"
                >
                  <span className="relative z-10 flex items-center gap-2 text-lg">
                    <Layout className="w-5 h-5" />
                    Open Dashboard
                  </span>
                  <div className="absolute inset-0 bg-signal transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out z-0"></div>
                </Link>
                <Link 
                  href="/resources/" 
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-paper text-ink border border-line-strong px-10 py-5 rounded-full font-medium transition-all hover:border-ink hover:bg-wash text-lg"
                >
                  <Layers className="w-5 h-5" />
                  Browse Tools
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="py-32 px-4 sm:px-8 lg:px-16 bg-wash border-y border-line">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">The Philosophy</h2>
                <p className="text-mute text-lg leading-relaxed">
                  We believe that great design is not magic. It is a series of observable decisions. DesignFree exists to help developers study these decisions in the wild.
                </p>
              </motion.div>

              <div className="md:col-span-2 grid sm:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-signal/10 flex items-center justify-center text-signal mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-ink">Curation over scale</h3>
                  <p className="text-mute leading-relaxed">We don't list every tool on the internet. We only list the tools that actually solve problems for designers and developers.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center text-moss mb-6">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-ink">Live context matters</h3>
                  <p className="text-mute leading-relaxed">Screenshots lie. Our projects dashboard loads the actual live sites so you can inspect the DOM, feel the animations, and see the responsive states.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules */}
        <section className="bg-ink text-paper py-32 md:py-48 px-4 sm:px-8 lg:px-16">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-center"
            >
              <div>
                <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]">
                  Stop inspecting element. <br />
                  <span className="text-signal italic">Start comparing.</span>
                </h2>
                <p className="text-xl text-paper/70 mb-10 max-w-lg leading-relaxed">
                  The Projects Dashboard is a split-pane environment. Keep your list of references on the left, and interact with the live iframe on the right. No more opening twenty tabs.
                </p>
                <Link href="/projects/" className="group inline-flex items-center gap-3 text-paper hover:text-signal transition-colors text-lg font-medium">
                  <span className="border-b border-paper/30 group-hover:border-signal pb-1 transition-colors">Launch the workspace</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-paper/10 bg-ink-soft shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_4s_linear_infinite]"></div>
                <div className="absolute inset-4 md:inset-8 rounded-2xl border border-paper/5 bg-ink overflow-hidden flex shadow-inner">
                   <div className="w-1/3 border-r border-paper/10 p-6 opacity-60 hidden md:flex flex-col gap-4">
                     <div className="h-4 w-1/2 bg-paper/20 rounded"></div>
                     <div className="h-10 w-full bg-paper/10 rounded mt-4"></div>
                     <div className="h-10 w-full bg-paper/10 rounded"></div>
                     <div className="h-10 w-full bg-signal/20 rounded border border-signal/30"></div>
                   </div>
                   <div className="flex-1 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-paper/5">
                     <div className="h-6 w-3/4 bg-paper/20 rounded mb-8"></div>
                     <div className="h-48 w-4/5 bg-paper/10 rounded-xl"></div>
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group p-10 md:p-16 rounded-[2.5rem] bg-ink-soft border border-paper/5 hover:border-signal/50 hover:bg-[#201F1E] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 group-hover:text-signal transition-all transform group-hover:scale-110 duration-700">
                  <Layers className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-paper/20 text-xs font-mono uppercase tracking-widest mb-8 text-paper/60">Database</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Curated Resources</h3>
                  <p className="text-paper/60 mb-12 max-w-sm leading-relaxed text-lg">
                    A constantly updated directory of hidden gems. Open source alternatives, niche design utilities, and developer tools you won't find on Twitter.
                  </p>
                  <Link href="/resources/" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-paper text-ink hover:bg-signal hover:text-white hover:scale-110 transition-all shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-10 md:p-16 rounded-[2.5rem] bg-ink-soft border border-paper/5 hover:border-signal/50 hover:bg-[#201F1E] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 group-hover:text-signal transition-all transform group-hover:scale-110 duration-700">
                  <BookOpen className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-paper/20 text-xs font-mono uppercase tracking-widest mb-8 text-paper/60">Playbook</span>
                  <h3 className="text-4xl md:text-5xl font-serif mb-6">Vibe-Coder's Guide</h3>
                  <p className="text-paper/60 mb-12 max-w-sm leading-relaxed text-lg">
                    Learn the exact methodology for tearing down a professional design system and perfectly replicating it using AI tools like Cursor and Claude.
                  </p>
                  <Link href="/guide/" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-paper text-ink hover:bg-signal hover:text-white hover:scale-110 transition-all shadow-lg">
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-48 px-4 sm:px-8 text-center bg-signal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Ready to build better?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-serif">
              Dive into the dashboard and start studying the web's best designs right now.
            </p>
            <Link 
              href="/projects/" 
              className="inline-flex items-center justify-center gap-3 bg-white text-signal px-10 py-5 rounded-full font-medium hover:bg-ink hover:text-white transition-all text-lg shadow-xl"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>

      </main>

      <div className="bg-ink text-paper border-t border-paper/10">
        <SiteFooter />
      </div>
    </div>
  );
}
