'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { ExternalLink, Search, Layers, ChevronRight } from 'lucide-react';
import { RESOURCES, RESOURCE_CATEGORIES, ResourceItem } from '@/lib/data/resources';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { stiffness: 80, damping: 20 } }
};

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const filteredResources = RESOURCES.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-80px)] bg-wash selection:bg-ocean selection:text-white relative">
      
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden p-4 bg-paper border-b border-line flex justify-between items-center sticky top-[80px] z-20">
        <h2 className="font-serif text-xl tracking-tight text-ink">Curated Tools</h2>
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="min-h-[48px] px-6 rounded-full bg-ocean text-white font-medium text-sm flex items-center gap-2"
        >
          {isSidebarOpen ? 'Close Filters' : 'Filters'}
          <FilterIcon />
        </button>
      </div>

      {/* Sidebar Filters */}
      <AnimatePresence>
        {(isSidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-line flex flex-col bg-paper overflow-hidden shrink-0 md:sticky top-[80px] md:h-[calc(100vh-80px)] shadow-2xl shadow-ink/5"
          >
            <div className="p-6 md:p-8 border-b border-line bg-paper/90 backdrop-blur-xl">
              <div className="hidden md:flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-ocean/10 text-ocean flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-3xl tracking-tight text-ink">Tools</h2>
              </div>
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-mute group-focus-within:text-ocean transition-colors" />
                <input
                  type="text"
                  placeholder="Search hidden gems..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 min-h-[56px] bg-wash border border-line rounded-2xl text-base focus:outline-none focus:ring-2 focus:ring-ocean/50 transition-all shadow-inner"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-2 mask-fade-bottom bg-wash/30">
              {RESOURCE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (window.innerWidth < 768) setSidebarOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 rounded-xl text-base transition-all duration-300 min-h-[56px] flex justify-between items-center ${
                    activeCategory === cat.id
                      ? 'bg-ink text-paper font-bold shadow-xl translate-x-2'
                      : 'bg-paper text-mute hover:bg-white hover:text-ink hover:shadow-md border border-line/50 hover:border-line'
                  }`}
                >
                  {cat.label}
                  {activeCategory === cat.id && <ChevronRight className="w-5 h-5" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resources Grid */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-16 bg-wash">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h1 className="text-fluid-h1 font-serif text-ink mb-6 tracking-tight">Developer Resources</h1>
            <p className="text-fluid-p text-mute max-w-3xl leading-relaxed">
              Hundreds of hand-picked tools, open-source alternatives, and utilities.
              Currently showing <span className="text-ocean font-bold">{filteredResources.length}</span> items.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory + searchQuery}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource) => (
                <motion.a
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col p-8 bg-paper rounded-[2rem] border border-line hover:border-ocean/30 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300 min-h-[300px]"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-[0.1em] bg-ocean/10 text-ocean px-3 py-1.5 rounded-lg group-hover:bg-ocean group-hover:text-white transition-colors">
                      {resource.category.replace(/-/g, ' ')}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-wash flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors shadow-sm">
                      <ExternalLink className="w-5 h-5 text-mute group-hover:text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-ink mb-4 group-hover:text-signal transition-colors leading-tight">
                    {resource.title}
                  </h3>
                  <p className="text-base text-mute line-clamp-3 mb-8 flex-1 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex justify-between items-center text-sm mt-auto pt-6 border-t border-line border-dashed">
                    <span className="text-mute truncate max-w-[150px] font-medium">{resource.authorOrOrg}</span>
                    <span className="font-bold text-ink bg-wash px-3 py-1.5 rounded-lg border border-line/50">{resource.badge}</span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredResources.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-40 text-mute"
            >
              <Search className="w-16 h-16 mx-auto mb-6 opacity-20" />
              <p className="text-2xl font-serif">No tools found matching your criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-8 px-8 py-4 bg-ink text-white font-bold rounded-full hover:bg-ocean transition-all shadow-xl min-h-[48px]"
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

function FilterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
}
