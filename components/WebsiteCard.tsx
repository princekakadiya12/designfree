'use client';

import React from 'react';
import { WebsiteItem } from '@/lib/data/websites';
import { Eye, ArrowUpRight } from 'lucide-react';

interface WebsiteCardProps {
  website: WebsiteItem;
  onOpenPreview: (w: WebsiteItem) => void;
}

export const WebsiteCard = ({ website, onOpenPreview }: WebsiteCardProps) => {
  return (
    <div className="bg-white border border-[#e7e5e0] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-200 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3">
        <span className="text-[11px] font-mono text-[#78716c] bg-[#f5f1ec] px-2.5 py-1 rounded-lg">
          {website.slug}
        </span>
      </div>
      
      <h3 className="text-base font-semibold text-[#2d2926]">{website.name}</h3>
      <span className="text-xs text-[#a8a29e] block mt-0.5">{website.styleName}</span>
      
      <p className="text-xs text-[#78716c] mt-2 line-clamp-2 flex-grow">
        {website.description}
      </p>
      
      <div className="flex items-center gap-2 mt-4 mb-4">
        <div className="flex -space-x-1">
          {website.palette.map((color, idx) => (
            <div 
              key={idx}
              className="w-4 h-4 rounded-full border border-[#e7e5e0]"
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
        <span className="text-[10px] text-[#a8a29e] ml-1">{website.typography}</span>
      </div>
      
      <div className="flex gap-3 mt-auto pt-4 border-t border-[#e7e5e0]">
        <button
          onClick={() => onOpenPreview(website)}
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#2d2926] text-white rounded-xl py-2 text-xs font-medium hover:bg-black transition-colors"
        >
          <Eye className="w-3.5 h-3.5" />
          Preview
        </button>
        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 border border-[#e7e5e0] rounded-xl py-2 px-3 text-xs text-[#2d2926] hover:bg-[#faf8f5] transition-colors"
        >
          Visit
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
