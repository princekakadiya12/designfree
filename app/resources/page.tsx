'use client';

import { useState } from 'react';
import { ExternalLink, Search } from 'lucide-react';
import { RESOURCES, RESOURCE_CATEGORIES, ResourceItem } from '@/lib/data/resources';

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = RESOURCES.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-56px)] overflow-hidden bg-paper">
      <div className="flex flex-col md:flex-row h-full">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 lg:w-72 border-r border-line flex flex-col bg-paper-soft overflow-hidden">
          <div className="p-4 border-b border-line">
            <h2 className="font-medium text-ink mb-4">Categories</h2>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-mute" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-paper border border-line rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-ink"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors mb-1 ${
                  activeCategory === cat.id
                    ? 'bg-ink text-paper font-medium'
                    : 'text-mute hover:bg-line/20 hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-paper">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-serif text-ink mb-2">Curated Free Tools</h1>
              <p className="text-mute">
                Hand-picked, lesser-known tools for designers and developers. Showing {filteredResources.length} items.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredResources.map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-5 bg-paper rounded-xl border border-line hover:border-ink/20 transition-all hover:shadow-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono uppercase bg-ink/5 text-ink px-2 py-1 rounded">
                      {resource.category.replace(/-/g, ' ')}
                    </span>
                    <ExternalLink className="w-4 h-4 text-mute group-hover:text-ink transition-colors" />
                  </div>
                  <h3 className="font-medium text-ink mb-1 group-hover:underline underline-offset-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-mute line-clamp-3 mb-4 flex-1">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center text-xs mt-auto pt-3 border-t border-line/50">
                    <span className="text-mute truncate max-w-[120px]">{resource.authorOrOrg}</span>
                    <span className="font-medium text-ink">{resource.badge}</span>
                  </div>
                </a>
              ))}
            </div>
            
            {filteredResources.length === 0 && (
              <div className="text-center py-20 text-mute">
                <p>No tools found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="mt-4 text-ink underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
