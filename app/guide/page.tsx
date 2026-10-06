'use client';

import React from 'react';
import { motion } from 'motion/react';
import guideData from '@/lib/data/user_guide.json';

export default function GuidePage() {
  return (
    <div className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-8 lg:px-16 py-16 md:py-32 selection:bg-ocean selection:text-white">
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-24 text-center"
      >
        <span className="font-mono text-sm md:text-base uppercase tracking-[0.25em] text-ocean font-bold block mb-8">Playbook</span>
        <h1 className="text-fluid-hero font-serif text-ink mb-8 tracking-tight leading-[0.9]">{guideData.meta.title}</h1>
        <p className="text-fluid-h3 text-mute mb-10 max-w-3xl mx-auto leading-relaxed">{guideData.meta.subtitle}</p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {guideData.meta.audience.map((a: string) => (
            <span key={a} className="px-5 py-2.5 bg-ocean/10 text-ocean text-xs font-mono font-bold uppercase tracking-widest rounded-full">
              {a}
            </span>
          ))}
        </div>
      </motion.header>

      <div className="prose prose-neutral md:prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-ocean hover:prose-a:text-signal prose-a:underline-offset-4 prose-a:transition-colors">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-paper border border-line rounded-[3rem] p-10 md:p-16 mb-32 shadow-xl shadow-ink/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ocean to-signal"></div>
          <h3 className="mt-0 text-fluid-h2 font-serif text-ink">How to use this guide</h3>
          <ul className="mb-0 text-fluid-p text-mute">
            {guideData.meta.how_to_use.map((item: string, i: number) => (
              <li key={i} className="mb-4">{item}</li>
            ))}
          </ul>
        </motion.div>
        
        {Object.entries(guideData).map(([key, section]: [string, any], index) => {
          if (key === 'meta') return null;
          
          return (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={key} 
              className="mb-32"
            >
              <h2 className="text-fluid-h1 border-b border-line/50 pb-8 mb-12 capitalize tracking-tight text-ink">{key.replace(/_/g, ' ')}</h2>
              
              {section.title && <h3 className="text-fluid-h2 mt-16 mb-8 tracking-tight text-ink">{section.title}</h3>}
              {section.description && <p className="text-fluid-p text-mute mb-12 leading-relaxed">{section.description}</p>}
              
              {section.steps && Array.isArray(section.steps) && (
                <div className="space-y-16">
                  {section.steps.map((step: any, i: number) => (
                    <div key={i} className="bg-paper border border-line rounded-[2rem] p-10 md:p-16 hover:border-ocean/30 transition-colors relative shadow-sm">
                      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-signal text-white flex items-center justify-center font-serif text-3xl shadow-xl">
                        {i + 1}
                      </div>
                      <h4 className="text-fluid-h3 mt-0 mb-6 tracking-tight text-ink font-serif">{step.name || step.title}</h4>
                      {step.description && <p className="mb-8 text-fluid-p leading-relaxed text-mute">{step.description}</p>}
                      {step.prompt && (
                        <div className="relative group mt-8">
                          <div className="absolute -inset-1 bg-gradient-to-r from-line to-line-strong rounded-[1.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                          <div className="relative bg-ink text-paper p-8 rounded-[1.5rem] font-mono text-sm md:text-base overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-2xl">
                            <div className="absolute top-4 right-4 text-[10px] text-mute/60 font-bold uppercase tracking-[0.2em]">Prompt</div>
                            {step.prompt}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {!section.steps && typeof section === 'object' && (
                <pre className="bg-paper-soft border border-line p-8 rounded-[2rem] overflow-x-auto text-sm shadow-inner text-mute">
                  {JSON.stringify(section, null, 2)}
                </pre>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
