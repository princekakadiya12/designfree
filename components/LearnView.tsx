'use client';

import React from 'react';
import guideData from '@/lib/data/guide.json';
import { BookOpen, Map, Settings, Zap, ArrowRight, ShieldCheck, Terminal, Lightbulb } from 'lucide-react';

export const LearnView = () => {
  const { meta, read_this_first, quick_paths, part_0_before_you_replicate, part_5_ai_tool_map } = guideData as any;

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2d2926] tracking-tight">{meta.title}</h1>
        <p className="text-base text-[#78716c] leading-relaxed">{meta.subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <span className="text-xs font-semibold bg-[#eef2ff] text-[#6366f1] px-3 py-1 rounded-full">
            {meta.reading_time_minutes} Min Read
          </span>
          <span className="text-xs font-medium bg-[#f5f1ec] text-[#78716c] px-3 py-1 rounded-full">
            Version {meta.version}
          </span>
        </div>
      </div>

      {/* Read This First */}
      <section className="bg-white border-l-4 border-l-[#6366f1] border border-[#e7e5e0] rounded-2xl p-6 md:p-8 shadow-clay-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#eef2ff] rounded-lg">
            <ShieldCheck className="w-6 h-6 text-[#6366f1]" />
          </div>
          <h2 className="text-xl font-semibold text-[#2d2926]">{read_this_first.title || 'Read This First'}</h2>
        </div>
        <p className="text-sm text-[#44403c] mb-6 font-medium bg-[#faf8f5] p-4 rounded-xl border border-[#e7e5e0]">
          {read_this_first.big_idea}
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-[#2d2926] mb-3 border-b border-[#e7e5e0] pb-2">The Five Step Loop</h3>
            <ul className="space-y-4">
              {read_this_first.the_five_step_loop.map((item: any, idx: number) => (
                <li key={idx} className="text-sm">
                  <span className="font-bold text-[#6366f1] block mb-1">Step {item.step}: {item.name}</span>
                  <span className="text-[#78716c]">{item.what}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-[#2d2926] mb-3 border-b border-[#e7e5e0] pb-2">Why Specs Beat Screenshots</h3>
            <ul className="space-y-3">
              {read_this_first.why_spec_beats_screenshot_only.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-sm text-[#78716c]">
                  <span className="text-[#22c55e] font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="bg-white border border-[#e7e5e0] rounded-2xl p-6 md:p-8 shadow-clay">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#f5f1ec] rounded-lg">
            <BookOpen className="w-6 h-6 text-[#2d2926]" />
          </div>
          <h2 className="text-xl font-semibold text-[#2d2926]">{part_0_before_you_replicate.title}</h2>
        </div>
        <p className="text-sm text-[#78716c] mb-6">{part_0_before_you_replicate.why_this_is_first}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#f0fdf4] p-5 rounded-xl border border-[#bbf7d0]">
            <h3 className="text-sm font-bold text-[#166534] mb-3">Generally Safe to Reuse</h3>
            <ul className="space-y-3 text-sm text-[#166534]">
              {part_0_before_you_replicate.generally_safe_to_reuse.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <span className="font-bold">✓</span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#fef2f2] p-5 rounded-xl border border-[#fecaca]">
            <h3 className="text-sm font-bold text-[#991b1b] mb-3">Do Not Copy</h3>
            <ul className="space-y-3 text-sm text-[#991b1b]">
              {part_0_before_you_replicate.do_not_copy.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <span className="font-bold">×</span> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Paths */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#fdf4ff] rounded-lg">
            <Map className="w-6 h-6 text-[#d946ef]" />
          </div>
          <h2 className="text-xl font-semibold text-[#2d2926]">Learning Paths</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {quick_paths.map((path: any) => (
            <div key={path.id} className="bg-white border border-[#e7e5e0] rounded-2xl p-6 shadow-clay-sm hover:shadow-clay transition-shadow">
              <h3 className="text-base font-bold text-[#2d2926] mb-1">{path.name}</h3>
              <p className="text-xs text-[#a8a29e] mb-4">Goal: {path.goal}</p>
              <div className="space-y-4">
                <div className="bg-[#faf8f5] p-3 rounded-lg border border-[#e7e5e0]">
                  <h4 className="text-xs font-semibold text-[#44403c] mb-1">Cost & Skill</h4>
                  <p className="text-xs text-[#78716c]">Cost: {path.cost} | Skill: {path.skill_needed}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#2d2926] mb-2 flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" /> Steps
                  </h4>
                  <ul className="space-y-2">
                    {path.steps.map((step: string, idx: number) => (
                      <li key={idx} className="flex gap-2 text-xs text-[#78716c]">
                        <span className="w-4 h-4 rounded-full bg-[#f5f1ec] text-[#44403c] flex items-center justify-center shrink-0 font-mono text-[10px] mt-0.5">{idx+1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Tool Map */}
      <section className="bg-[#2d2926] rounded-2xl p-6 md:p-8 shadow-clay text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-white/10 rounded-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-semibold text-white">{part_5_ai_tool_map.title}</h2>
        </div>
        <p className="text-sm text-zinc-300 mb-8">{part_5_ai_tool_map.confidence_note}</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {part_5_ai_tool_map.jobs.map((jobData: any, idx: number) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wider flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#6366f1]" /> {jobData.job}
              </h3>
              <p className="text-xs text-zinc-400 mb-4">{jobData.why}</p>
              <div className="space-y-4">
                {jobData.tools.map((tool: any, toolIdx: number) => (
                  <div key={toolIdx}>
                    <h4 className="text-sm font-semibold text-[#eef2ff] mb-1">{tool.name}</h4>
                    {tool.free_facts && (
                      <div className="text-[10px] bg-white/10 inline-block px-2 py-1 rounded text-zinc-300">
                        {tool.free_facts}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
