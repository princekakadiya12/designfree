'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Monitor, Tag, Filter, ChevronRight, LayoutTemplate } from 'lucide-react';
import { PROJECTS, ProjectGroup, GROUPS } from '@/lib/projects';

export default function ProjectsDashboard() {
  const [activeGroup, setActiveGroup] = useState<ProjectGroup | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const filteredProjects = PROJECTS.filter(
    (p) => activeGroup === 'all' || p.group === activeGroup
  );

  return (
    <div className="flex-1 flex overflow-hidden h-[calc(100vh-64px)] bg-wash selection:bg-signal selection:text-white">
      {/* Left Sidebar - Project List */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && !isFullscreen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="w-full md:w-[320px] flex-shrink-0 border-r border-line flex flex-col bg-paper overflow-hidden shadow-2xl shadow-ink/5 absolute md:relative z-30 h-full"
          >
            <div className="p-4 md:p-5 border-b border-line bg-paper/90 backdrop-blur-xl sticky top-0 z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-signal text-white flex items-center justify-center shadow-lg shadow-signal/20">
                    <LayoutTemplate className="w-3 h-3" />
                  </div>
                  <h2 className="font-serif text-lg text-ink tracking-tight">Design Collection</h2>
                </div>
                {/* Mobile close button inside sidebar */}
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden w-8 h-8 flex items-center justify-center bg-wash rounded-full text-ink"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                </button>
              </div>
              
              <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide mask-fade-right">
                {GROUPS.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setActiveGroup(group.id)}
                    className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest rounded-full whitespace-nowrap transition-all duration-300 font-bold ${
                      activeGroup === group.id
                        ? 'bg-ink text-white shadow-md'
                        : 'bg-wash text-mute hover:bg-line hover:text-ink'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-wash/30">
              {filteredProjects.map((project, idx) => (
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    if (window.innerWidth < 768) setSidebarOpen(false);
                  }}
                  className={`group w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedProject.id === project.id
                      ? 'bg-paper shadow-lg border-transparent ring-1 ring-signal/20'
                      : 'bg-paper/50 hover:bg-paper border border-line hover:border-ocean/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-base font-serif leading-tight ${selectedProject.id === project.id ? 'text-signal' : 'text-ink group-hover:text-ocean'}`}>
                      {project.name}
                    </h3>
                    <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      selectedProject.id === project.id ? 'bg-signal/10 text-signal font-bold' : 'bg-line/50 text-mute'
                    }`}>
                      {project.kind}
                    </span>
                  </div>
                  <p className="text-xs text-mute line-clamp-2 leading-relaxed">{project.tagline}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Content - Preview and Details */}
      <div className={`flex-1 flex flex-col min-w-0 bg-wash relative ${isFullscreen ? 'fixed inset-0 z-50 bg-ink' : ''}`}>
        
        {/* Toggle Sidebar Button (Mobile/Desktop) */}
        {!isSidebarOpen && !isFullscreen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            className="absolute left-4 top-4 z-20 w-10 h-10 flex items-center justify-center bg-paper border border-line rounded-full shadow-lg hover:scale-105 text-ink transition-all md:hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Project Details Header */}
        {!isFullscreen && (
          <motion.div 
            key={selectedProject.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-auto p-4 md:p-6 border-b border-line flex flex-col lg:flex-row gap-4 items-start justify-between bg-paper/60 backdrop-blur-2xl sticky top-0 z-10"
          >
            <div className="max-w-2xl pl-12 md:pl-0"> {/* padding left for mobile button */}
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-xl md:text-2xl font-serif text-ink tracking-tight">{selectedProject.name}</h1>
              </div>
              <p className="text-sm text-mute leading-relaxed mb-4">{selectedProject.description}</p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-mono text-mute">
                {selectedProject.sections && selectedProject.sections.length > 0 && (
                  <div className="flex items-center gap-1.5 bg-wash px-2 py-1 rounded border border-line">
                    <Filter className="w-3 h-3 text-signal" />
                    <span className="text-ink/80 font-bold">Sections: {selectedProject.sections.slice(0, 3).join(', ')}{selectedProject.sections.length > 3 ? '...' : ''}</span>
                  </div>
                )}
                {selectedProject.tags && selectedProject.tags.length > 0 && (
                  <div className="flex items-center gap-1.5 bg-wash px-2 py-1 rounded border border-line">
                    <Tag className="w-3 h-3 text-ocean" />
                    <span className="text-ink/80 font-bold">{selectedProject.tags.slice(0, 3).join(', ')}</span>
                  </div>
                )}
              </div>
            </div>
            
            <button
              onClick={() => setIsFullscreen(true)}
              className="group shrink-0 inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-ink text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-signal transition-all shadow-lg w-full lg:w-auto"
            >
              Full View
              <Monitor className="w-3 h-3" />
            </button>
          </motion.div>
        )}

        {/* Iframe Preview */}
        <div className={`flex-1 overflow-hidden flex items-center justify-center relative ${isFullscreen ? 'p-0' : 'p-2 md:p-4'}`}>
          <div className="absolute inset-0 bg-wash pointer-events-none"></div>
          
          <motion.div 
            key={`iframe-${selectedProject.id}`}
            initial={{ opacity: 0, scale: isFullscreen ? 1 : 0.98, y: isFullscreen ? 0 : 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className={`w-full h-full border-line overflow-hidden bg-white relative z-10 flex flex-col ${isFullscreen ? 'rounded-none border-0' : 'rounded-2xl border shadow-xl max-w-[1600px]'}`}
          >
            {isFullscreen && (
              <div className="absolute top-4 right-6 z-50 flex gap-2">
                 <button 
                   onClick={() => setIsFullscreen(false)}
                   className="px-4 py-2 bg-ink/80 backdrop-blur text-white text-xs font-mono font-bold uppercase tracking-widest rounded-full hover:bg-signal transition-colors shadow-xl border border-white/10"
                 >
                   Exit Full View
                 </button>
              </div>
            )}
            {!isFullscreen && (
              <div className="h-8 bg-paper border-b border-line flex items-center px-4 gap-2 shrink-0">
                 <div className="w-2.5 h-2.5 rounded-full bg-signal"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-line-strong"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-ocean"></div>
                 <div className="mx-auto text-[10px] font-mono font-medium text-mute/50">
                   Protected View
                 </div>
              </div>
            )}
            <iframe
              src={selectedProject.url}
              className="w-full flex-1 bg-white"
              title={selectedProject.name}
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
