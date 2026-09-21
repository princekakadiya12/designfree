'use client';

import React, { useState } from 'react';
import { WebsiteItem, CATEGORIES, WEBSITES } from '@/lib/data/websites';
import { Search, ExternalLink, Monitor, Tablet, Smartphone, Palette, Type } from 'lucide-react';
import { sanitizeInput } from '@/lib/security';

export const ProjectsView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWebsite, setSelectedWebsite] = useState<WebsiteItem | null>(WEBSITES[0] || null);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const filteredWebsites = WEBSITES.filter((w) => {
    const matchesCat = selectedCategory === 'all' || w.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesSearch =
      w.name.toLowerCase().includes(q) ||
      w.tagline.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.styleName.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] md:flex-row bg-[#faf8f5]">
      {/* Left Sidebar: List */}
      <div className="w-full md:w-80 lg:w-96 flex flex-col border-r border-[#e7e5e0] bg-white h-[40vh] md:h-full shrink-0">
        <div className="p-4 border-b border-[#e7e5e0] space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-[#2d2926]">Projects</h2>
            <p className="text-xs text-[#78716c]">Select a project to preview</p>
          </div>
          
          <div className="relative">
            <Search className="w-4 h-4 text-[#a8a29e] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(sanitizeInput(e.target.value))}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#e7e5e0] bg-[#faf8f5] text-sm focus:outline-none focus:border-[#6366f1] transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#2d2926] text-white'
                    : 'bg-[#f5f1ec] text-[#78716c] hover:bg-[#e7e5e0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-none">
          {filteredWebsites.map((site) => (
            <button
              key={site.id}
              onClick={() => setSelectedWebsite(site)}
              className={`w-full text-left p-3 rounded-xl transition-all ${
                selectedWebsite?.id === site.id
                  ? 'bg-[#f5f1ec] border border-[#e7e5e0] shadow-sm'
                  : 'hover:bg-[#faf8f5] border border-transparent'
              }`}
            >
              <div className="flex items-start justify-between">
                <h3 className={`text-sm font-semibold ${selectedWebsite?.id === site.id ? 'text-[#2d2926]' : 'text-[#44403c]'}`}>
                  {site.name}
                </h3>
                <span className="text-[10px] uppercase font-mono text-[#a8a29e] bg-white px-1.5 py-0.5 rounded border border-[#e7e5e0]">
                  {site.slug}
                </span>
              </div>
              <p className="text-xs text-[#78716c] mt-1 line-clamp-1">{site.tagline}</p>
            </button>
          ))}
          {filteredWebsites.length === 0 && (
            <div className="p-4 text-center text-sm text-[#a8a29e]">
              No projects found.
            </div>
          )}
        </div>
      </div>

      {/* Right Pane: Preview */}
      <div className="flex-1 flex flex-col h-[60vh] md:h-full bg-[#f5f1ec] overflow-hidden relative">
        {selectedWebsite ? (
          <>
            {/* Toolbar */}
            <div className="h-14 border-b border-[#e7e5e0] bg-white flex items-center justify-between px-4 shrink-0 shadow-sm z-10">
              <div className="flex items-center gap-3">
                <h2 className="text-sm font-semibold text-[#2d2926] truncate max-w-[200px] sm:max-w-md">
                  {selectedWebsite.name}
                </h2>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-[#f5f1ec] p-1 rounded-lg border border-[#e7e5e0]">
                  <button onClick={() => setDeviceMode('desktop')} className={`p-1.5 rounded-md transition-colors ${deviceMode === 'desktop' ? 'bg-white shadow-sm text-[#2d2926]' : 'text-[#78716c] hover:text-[#2d2926]'}`} title="Desktop"><Monitor className="w-4 h-4" /></button>
                  <button onClick={() => setDeviceMode('tablet')} className={`p-1.5 rounded-md transition-colors ${deviceMode === 'tablet' ? 'bg-white shadow-sm text-[#2d2926]' : 'text-[#78716c] hover:text-[#2d2926]'}`} title="Tablet"><Tablet className="w-4 h-4" /></button>
                  <button onClick={() => setDeviceMode('mobile')} className={`p-1.5 rounded-md transition-colors ${deviceMode === 'mobile' ? 'bg-white shadow-sm text-[#2d2926]' : 'text-[#78716c] hover:text-[#2d2926]'}`} title="Mobile"><Smartphone className="w-4 h-4" /></button>
                </div>
                
                <a
                  href={selectedWebsite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2926] hover:bg-black text-white text-xs font-medium rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open Full Screen</span>
                </a>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 overflow-hidden p-4 md:p-8 flex items-center justify-center relative">
              <div 
                className={`h-full w-full bg-white transition-all duration-300 shadow-clay rounded-xl border border-[#e7e5e0] overflow-hidden ${
                  deviceMode === 'desktop' ? 'max-w-full' : 
                  deviceMode === 'tablet' ? 'max-w-[768px]' : 
                  'max-w-[390px]'
                }`}
              >
                <iframe
                  src={selectedWebsite.url}
                  title={selectedWebsite.name}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  className="w-full h-full border-none bg-white"
                />
              </div>
            </div>

            {/* Info Bar at Bottom */}
            <div className="bg-white border-t border-[#e7e5e0] p-4 shrink-0 overflow-y-auto max-h-48 md:max-h-32">
              <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                <div className="flex-1">
                  <p className="text-sm text-[#2d2926] font-medium">{selectedWebsite.styleName}</p>
                  <p className="text-xs text-[#78716c] mt-1 line-clamp-2 md:line-clamp-1">{selectedWebsite.description}</p>
                </div>
                
                <div className="flex items-center gap-6 shrink-0">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#a8a29e] uppercase tracking-wider">
                      <Palette className="w-3 h-3" /> Palette
                    </div>
                    <div className="flex -space-x-1">
                      {selectedWebsite.palette.map((color, i) => (
                        <div key={i} className="w-5 h-5 rounded-full border border-[#e7e5e0] shadow-sm" style={{ backgroundColor: color.hex }} title={color.name} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1 text-[10px] font-semibold text-[#a8a29e] uppercase tracking-wider">
                      <Type className="w-3 h-3" /> Typography
                    </div>
                    <p className="text-xs text-[#2d2926] font-medium">{selectedWebsite.typography}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-[#a8a29e] text-sm">
            Select a project to preview
          </div>
        )}
      </div>
    </div>
  );
};
