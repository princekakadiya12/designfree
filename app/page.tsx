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
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { stiffness: 80, damping: 20 }
  }
};

const tapAnimation = { scale: 0.96 };

export default function LandingPage() {
  return (
    <div className="flex-1 flex flex-col relative selection:bg-signal selection:text-white">
      
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-ruled -z-10 opacity-70 pointer-events-none"></div>
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-32 overflow-hidden">
          <motion.div 
            className="max-w-[1440px] mx-auto w-full relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-10 flex items-center gap-4">
              <span className="h-0.5 w-20 bg-signal block"></span>
              <span className="font-mono text-sm md:text-base uppercase tracking-[0.25em] text-signal font-bold">DesignFree v2.0</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-fluid-hero font-serif text-ink tracking-tight mb-12 max-w-7xl mix-blend-multiply"
            >
              A working library <br className="hidden md:block"/>
              <span className="text-ocean italic font-light">for builders.</span>
            </motion.h1>
            
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start mt-12 md:mt-24">
              <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-5">
                <p className="text-fluid-p text-ink/80 font-serif">
                  Explore live website designs side by side, discover hand-picked tools you've never heard of, and perfectly replicate any design using AI.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row gap-4 md:justify-end items-center">
                <motion.div whileTap={tapAnimation} className="w-full sm:w-auto">
                  <Link 
                    href="/projects/" 
                    className="w-full sm:w-auto min-h-[64px] min-w-[64px] group relative inline-flex items-center justify-center gap-4 bg-signal text-white px-10 py-5 rounded-full font-medium overflow-hidden transition-all hover:shadow-2xl shadow-signal/20"
                  >
                    <span className="relative z-10 flex items-center gap-3 text-lg md:text-xl font-bold tracking-wide">
                      <Layout className="w-6 h-6" />
                      Open Dashboard
                    </span>
                    <div className="absolute inset-0 bg-ink transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                  </Link>
                </motion.div>

                <motion.div whileTap={tapAnimation} className="w-full sm:w-auto">
                  <Link 
                    href="/resources/" 
                    className="w-full sm:w-auto min-h-[64px] min-w-[64px] group inline-flex items-center justify-center gap-4 bg-transparent text-ink border-2 border-ink/20 px-10 py-5 rounded-full font-medium transition-all hover:border-ocean hover:text-ocean text-lg md:text-xl"
                  >
                    <Layers className="w-6 h-6" />
                    Browse Tools
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Decorative abstract elements */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="absolute top-[10%] right-[5%] w-64 h-64 bg-signal/10 rounded-full blur-3xl -z-10 pointer-events-none" 
          />
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, delay: 0.7 }}
             className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-ocean/10 rounded-full blur-3xl -z-10 pointer-events-none" 
          />
        </section>

        {/* Philosophy Section */}
        <section className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 bg-wash border-y border-line/50 relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="col-span-1"
              >
                <h2 className="text-fluid-h2 font-serif text-ink mb-6">The Philosophy</h2>
                <p className="text-mute text-fluid-p">
                  We believe that great design is not magic. It is a series of observable decisions. DesignFree exists to help developers study these decisions in the wild.
                </p>
              </motion.div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 md:gap-12">
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className="bg-paper p-8 md:p-10 rounded-3xl shadow-sm border border-line/30 hover:border-signal/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-signal/10 flex items-center justify-center text-signal mb-6">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-fluid-h3 font-serif mb-3 text-ink">Curation over scale</h3>
                  <p className="text-mute text-fluid-p">We don't list every tool on the internet. We only list the tools that actually solve problems for designers and developers.</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="bg-paper p-8 md:p-10 rounded-3xl shadow-sm border border-line/30 hover:border-ocean/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-ocean/10 flex items-center justify-center text-ocean mb-6">
                    <Palette className="w-7 h-7" />
                  </div>
                  <h3 className="text-fluid-h3 font-serif mb-3 text-ink">Live context matters</h3>
                  <p className="text-mute text-fluid-p">Screenshots lie. Our projects dashboard loads the actual live sites so you can inspect the DOM, feel the animations, and see the responsive states.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules */}
        <section className="bg-ink text-paper py-24 md:py-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center"
            >
              <div>
                <h2 className="text-fluid-h1 font-serif mb-6 text-paper">
                  Stop inspecting element. <br />
                  <span className="text-signal italic">Start comparing.</span>
                </h2>
                <p className="text-fluid-p text-paper/70 mb-10 max-w-lg">
                  The Projects Dashboard is a split-pane environment. Keep your list of references on the left, and interact with the live iframe on the right. No more opening twenty tabs.
                </p>
                <motion.div whileTap={tapAnimation} className="inline-block">
                  <Link href="/projects/" className="group flex items-center gap-4 text-white hover:text-signal transition-colors text-xl font-medium min-h-[64px]">
                    <span className="border-b-2 border-paper/30 group-hover:border-signal pb-1 transition-colors">Launch the workspace</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
              
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-paper/10 bg-ink-soft shadow-[0_0_100px_rgba(230,57,70,0.1)]">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:250%_250%] animate-[gradient_4s_linear_infinite]"></div>
                <div className="absolute inset-6 md:inset-8 rounded-2xl border border-paper/5 bg-ink overflow-hidden flex shadow-inner">
                   <div className="w-1/3 border-r border-paper/10 p-6 opacity-60 hidden md:flex flex-col gap-4">
                     <div className="h-3 w-1/2 bg-paper/20 rounded-full"></div>
                     <div className="h-10 w-full bg-paper/10 rounded-xl mt-5"></div>
                     <div className="h-10 w-full bg-paper/10 rounded-xl"></div>
                     <div className="h-10 w-full bg-signal/20 rounded-xl border border-signal/30"></div>
                   </div>
                   <div className="flex-1 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-ocean/5">
                     <div className="h-6 w-3/4 bg-paper/20 rounded-full mb-8"></div>
                     <div className="h-40 w-4/5 bg-paper/10 rounded-2xl"></div>
                   </div>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group p-8 md:p-12 rounded-[2.5rem] bg-ink-soft border border-paper/5 hover:border-ocean/50 hover:bg-[#1A303A] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:text-ocean transition-all transform group-hover:scale-110 duration-700">
                  <Layers className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-paper/20 text-xs font-mono uppercase tracking-widest mb-8 text-paper/60">Database</span>
                  <h3 className="text-fluid-h2 font-serif mb-6 text-paper">Curated Resources</h3>
                  <p className="text-paper/60 mb-10 max-w-sm text-fluid-p">
                    A constantly updated directory of hidden gems. Open source alternatives, niche utilities, and developer tools you won't find on Twitter.
                  </p>
                  <motion.div whileTap={tapAnimation} className="inline-block">
                    <Link href="/resources/" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-paper text-ink hover:bg-ocean hover:text-white transition-colors shadow-lg">
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group p-8 md:p-12 rounded-[2.5rem] bg-ink-soft border border-paper/5 hover:border-signal/50 hover:bg-[#3A1F22] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:text-signal transition-all transform group-hover:scale-110 duration-700">
                  <BookOpen className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-paper/20 text-xs font-mono uppercase tracking-widest mb-8 text-paper/60">Playbook</span>
                  <h3 className="text-fluid-h2 font-serif mb-6 text-paper">Vibe-Coder's Guide</h3>
                  <p className="text-paper/60 mb-10 max-w-sm text-fluid-p">
                    Learn the exact methodology for tearing down a professional design system and perfectly replicating it using AI tools like Cursor and Claude.
                  </p>
                  <motion.div whileTap={tapAnimation} className="inline-block">
                    <Link href="/guide/" className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-paper text-ink hover:bg-signal hover:text-white transition-colors shadow-lg">
                      <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-48 px-4 sm:px-8 text-center bg-signal text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <h2 className="text-fluid-h1 font-serif mb-10 text-white">Ready to build better?</h2>
            <p className="text-fluid-p text-white/90 mb-16 max-w-2xl mx-auto font-serif">
              Dive into the dashboard and start studying the web's best designs right now.
            </p>
            <motion.div whileTap={tapAnimation} className="inline-block">
              <Link 
                href="/projects/" 
                className="inline-flex items-center justify-center gap-4 bg-white text-signal px-12 py-6 rounded-full font-bold hover:bg-ink hover:text-white transition-all text-xl shadow-2xl min-h-[64px]"
              >
                Get Started
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </main>

      <div className="bg-ink text-paper border-t border-paper/10">
        <SiteFooter />
      </div>
    </div>
  );
}
