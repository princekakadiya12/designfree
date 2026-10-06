'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Search, Layers } from 'lucide-react';
import { RESOURCES, RESOURCE_CATEGORIES, ResourceItem } from '@/lib/data/resources';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
};

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
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-64px)] bg-paper selection:bg-ink selection:text-paper">
      
      {/* Sidebar Filters */}
      <div className="w-full md:w-72 lg:w-80 border-b md:border-b-0 md:border-r border-line flex flex-col bg-paper-soft overflow-hidden shrink-0 z-10 sticky top-16 md:h-[calc(100vh-64px)]">
        <div className="p-6 border-b border-line bg-paper/50 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-6 text-ink">
            <Layers className="w-5 h-5" />
            <h2 className="font-serif text-xl tracking-tight">Curated Tools</h2>
          </div>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-mute group-focus-within:text-ink transition-colors" />
            <input
              type="text"
              placeholder="Search hidden gems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-paper border border-line rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-ink transition-all shadow-sm"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1 mask-fade-bottom">
          {RESOURCE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-ink text-paper font-medium shadow-md translate-x-1'
                  : 'text-mute hover:bg-line/30 hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Resources Grid */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12 bg-canvas">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink mb-4 tracking-tight">Developer Resources</h1>
            <p className="text-lg text-mute max-w-2xl leading-relaxed">
              Hundreds of hand-picked tools, open-source alternatives, and utilities.
              Currently showing <span className="text-ink font-medium">{filteredResources.length}</span> items.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory + searchQuery}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource) => (
                <motion.a
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-6 bg-paper rounded-2xl border border-line hover:border-ink/20 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-line/30 text-ink/70 px-2 py-1 rounded-sm group-hover:bg-ink group-hover:text-paper transition-colors">
                      {resource.category.replace(/-/g, ' ')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-paper-soft flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                      <ExternalLink className="w-3.5 h-3.5 text-mute group-hover:text-paper" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-ink mb-2 group-hover:text-signal transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-mute line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center text-xs mt-auto pt-4 border-t border-line border-dashed">
                    <span className="text-mute truncate max-w-[120px]">{resource.authorOrOrg}</span>
                    <span className="font-medium text-ink bg-paper-soft px-2 py-1 rounded">{resource.badge}</span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredResources.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-32 text-mute"
            >
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-xl">No tools found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-6 px-6 py-2 bg-ink text-paper rounded-full hover:bg-ink-soft transition-colors"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
