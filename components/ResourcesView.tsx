'use client';

import { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { RESOURCES, ResourceItem, RESOURCE_CATEGORIES } from '@/lib/data/resources';
import { sanitizeInput } from '@/lib/security';

export const ResourcesView = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(sanitizeInput(e.target.value));
  };

  const filteredResources = RESOURCES.filter((resource: ResourceItem) => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    
    if (!searchQuery) return matchesCategory;

    const lowerQuery = searchQuery.toLowerCase();
    const matchesSearch = 
      resource.title.toLowerCase().includes(lowerQuery) ||
      resource.description.toLowerCase().includes(lowerQuery) ||
      (resource.authorOrOrg && resource.authorOrOrg.toLowerCase().includes(lowerQuery)) ||
      resource.badge.toLowerCase().includes(lowerQuery);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full h-full p-6 lg:p-10 space-y-8 animate-in fade-in duration-500">
      <header>
        <h1 className="text-2xl font-semibold text-[#2d2926]">Developer Resources</h1>
        <p className="text-sm text-[#78716c] mt-1">Curated free tools, repos, models, and learning resources</p>
      </header>

      <div className="space-y-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#a8a29e]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search resources..."
            className="w-full rounded-xl border border-[#e7e5e0] bg-white px-10 py-2.5 text-sm outline-none focus:border-[#6366f1] transition-all"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {RESOURCE_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-xl text-sm font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-[#2d2926] text-white' 
                  : 'bg-[#f5f1ec] text-[#78716c] hover:bg-[#e7e5e0]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-[#a8a29e]">
        Showing {filteredResources.length} results
      </div>

      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource) => (
            <div 
              key={resource.id} 
              className="bg-white border border-[#e7e5e0] rounded-2xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.08)] transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] uppercase font-medium bg-[#f5f1ec] text-[#78716c] px-2 py-0.5 rounded-md">
                  {resource.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#2d2926] mb-1">{resource.title}</h3>
              {resource.authorOrOrg && (
                <p className="text-[11px] text-[#a8a29e] mb-2">by {resource.authorOrOrg}</p>
              )}
              <p className="text-xs text-[#78716c] mt-2 line-clamp-2 flex-grow">
                {resource.description}
              </p>
              <div className="mt-4 pt-4 border-t border-[#e7e5e0] flex items-center justify-between">
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#6366f1] hover:underline flex items-center gap-1"
                >
                  Visit <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center border border-dashed border-[#e7e5e0] rounded-2xl bg-white/50">
          <p className="text-[#78716c] text-sm">No resources found matching your search.</p>
        </div>
      )}
    </div>
  );
};
