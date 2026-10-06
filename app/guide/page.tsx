'use client';

import React from 'react';
import { motion } from 'motion/react';
import guideData from '@/lib/data/user_guide.json';

export default function GuidePage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 md:py-24 selection:bg-ink selection:text-paper">
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-mute block mb-6">Playbook</span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-ink mb-6 tracking-tight leading-[0.9]">{guideData.meta.title}</h1>
        <p className="text-xl md:text-2xl text-mute mb-8 max-w-2xl mx-auto leading-relaxed">{guideData.meta.subtitle}</p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {guideData.meta.audience.map((a: string) => (
            <span key={a} className="px-4 py-1.5 bg-ink/5 border border-ink/10 text-ink text-xs font-medium uppercase tracking-wider rounded-full">
              {a}
            </span>
          ))}
        </div>
      </motion.header>

      <div className="prose prose-neutral md:prose-lg lg:prose-xl max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-signal hover:prose-a:text-ink prose-a:underline-offset-4 prose-a:transition-colors">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-paper-soft border border-line rounded-3xl p-8 md:p-12 mb-20 shadow-xl shadow-ink/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-signal to-ink"></div>
          <h3 className="mt-0 text-2xl font-serif">How to use this guide</h3>
          <ul className="mb-0 text-lg">
            {guideData.meta.how_to_use.map((item: string, i: number) => (
              <li key={i} className="mb-2">{item}</li>
            ))}
          </ul>
        </motion.div>
        
        {Object.entries(guideData).map(([key, section]: [string, any], index) => {
          if (key === 'meta') return null;
          
          return (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={key} 
              className="mb-24"
            >
              <h2 className="text-4xl md:text-5xl border-b border-line pb-6 mb-10 capitalize tracking-tight">{key.replace(/_/g, ' ')}</h2>
              
              {section.title && <h3 className="text-3xl mt-12 mb-6 tracking-tight">{section.title}</h3>}
              {section.description && <p className="text-xl text-mute mb-10 leading-relaxed">{section.description}</p>}
              
              {section.steps && Array.isArray(section.steps) && (
                <div className="space-y-12">
                  {section.steps.map((step: any, i: number) => (
                    <div key={i} className="bg-paper border border-line rounded-2xl p-8 md:p-10 hover:border-line-strong transition-colors relative">
                      <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center font-serif text-xl shadow-md">
                        {i + 1}
                      </div>
                      <h4 className="text-2xl mt-0 mb-4 tracking-tight">{step.name || step.title}</h4>
                      {step.description && <p className="mb-6 text-lg leading-relaxed">{step.description}</p>}
                      {step.prompt && (
                        <div className="relative group">
                          <div className="absolute -inset-1 bg-gradient-to-r from-line to-line-strong rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                          <div className="relative bg-ink text-paper p-6 rounded-xl font-mono text-sm overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-lg">
                            <div className="absolute top-3 right-3 text-xs text-mute/50 uppercase tracking-widest">Prompt</div>
                            {step.prompt}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {!section.steps && typeof section === 'object' && (
                <pre className="bg-paper-soft border border-line p-6 rounded-2xl overflow-x-auto text-sm shadow-inner">
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
