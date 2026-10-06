'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Monitor, Tag, Filter, ChevronRight, LayoutTemplate } from 'lucide-react';
import { PROJECTS, ProjectGroup, GROUPS } from '@/lib/projects';

export default function ProjectsDashboard() {
  const [activeGroup, setActiveGroup] = useState<ProjectGroup | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const filteredProjects = PROJECTS.filter(
    (p) => activeGroup === 'all' || p.group === activeGroup
  );

  return (
    <div className="flex-1 flex overflow-hidden h-[calc(100vh-64px)] bg-wash selection:bg-signal selection:text-white">
      
      {/* Left Sidebar - Project List */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 380, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="w-full md:w-[380px] flex-shrink-0 border-r border-line flex flex-col bg-paper overflow-hidden shadow-2xl shadow-ink/5 absolute md:relative z-30 h-full"
          >
            <div className="p-5 md:p-6 border-b border-line bg-paper/90 backdrop-blur-xl sticky top-0 z-10">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-signal text-white flex items-center justify-center shadow-lg shadow-signal/20">
                    <LayoutTemplate className="w-4 h-4" />
                  </div>
                  <h2 className="font-serif text-2xl text-ink tracking-tight">Design Library</h2>
                </div>
                {/* Mobile close button inside sidebar */}
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center bg-wash rounded-full text-ink"
                >
                  <ChevronRight className="w-6 h-6 rotate-180" />
                </button>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                {GROUPS.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setActiveGroup(group.id)}
                    className={`min-h-[44px] px-5 py-2 text-xs font-mono uppercase tracking-widest rounded-full whitespace-nowrap transition-all duration-300 font-bold ${
                      activeGroup === group.id
                        ? 'bg-ink text-white shadow-md scale-105'
                        : 'bg-wash text-mute hover:bg-line hover:text-ink'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-wash/30">
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
                  className={`group w-full text-left p-5 rounded-2xl transition-all duration-300 min-h-[80px] ${
                    selectedProject.id === project.id
                      ? 'bg-paper shadow-xl border-transparent ring-2 ring-signal/20 scale-[1.02]'
                      : 'bg-paper/50 hover:bg-paper border border-line hover:border-ocean/30 hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-fluid-h3 font-serif leading-tight ${selectedProject.id === project.id ? 'text-signal' : 'text-ink group-hover:text-ocean'}`}>
                      {project.name}
                    </h3>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded ${
                      selectedProject.id === project.id ? 'bg-signal/10 text-signal font-bold' : 'bg-line/50 text-mute'
                    }`}>
                      {project.kind}
                    </span>
                  </div>
                  <p className="text-sm text-mute line-clamp-2">{project.tagline}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Content - Preview and Details */}
      <div className="flex-1 flex flex-col min-w-0 bg-wash relative">
        
        {/* Toggle Sidebar Button (Mobile/Desktop) */}
        {!isSidebarOpen && (
          <button 
            onClick={() => setSidebarOpen(true)}
            className="absolute left-4 top-4 z-20 min-h-[48px] min-w-[48px] flex items-center justify-center bg-paper border border-line rounded-full shadow-lg hover:scale-105 text-ink transition-all md:hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Project Details Header */}
        <motion.div 
          key={selectedProject.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-auto p-6 md:p-8 border-b border-line flex flex-col lg:flex-row gap-6 items-start justify-between bg-paper/60 backdrop-blur-2xl sticky top-0 z-10"
        >
          <div className="max-w-3xl pl-14 md:pl-0"> {/* padding left for mobile button */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <h1 className="text-fluid-h2 font-serif text-ink tracking-tight">{selectedProject.name}</h1>
              <span className="self-start sm:self-auto px-3 py-1 rounded-full border border-ocean/20 bg-ocean/5 text-[10px] font-mono font-bold text-ocean uppercase tracking-[0.1em]">
                {selectedProject.host}
              </span>
            </div>
            <p className="text-fluid-p text-mute leading-relaxed mb-6">{selectedProject.description}</p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-3 text-xs font-mono text-mute">
              {selectedProject.sections && selectedProject.sections.length > 0 && (
                <div className="flex items-center gap-2 bg-wash px-3 py-1.5 rounded-lg border border-line">
                  <Filter className="w-4 h-4 text-signal" />
                  <span className="text-ink/80 font-bold">Sections: {selectedProject.sections.slice(0, 3).join(', ')}{selectedProject.sections.length > 3 ? '...' : ''}</span>
                </div>
              )}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex items-center gap-2 bg-wash px-3 py-1.5 rounded-lg border border-line">
                  <Tag className="w-4 h-4 text-ocean" />
                  <span className="text-ink/80 font-bold">{selectedProject.tags.slice(0, 3).join(', ')}</span>
                </div>
              )}
            </div>
          </div>
          
          <motion.a
            whileTap={{ scale: 0.95 }}
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 bg-signal text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-ink transition-all hover:scale-105 shadow-2xl shadow-signal/20 w-full lg:w-auto min-h-[48px]"
          >
            Launch Site
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Iframe Preview */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-wash pointer-events-none"></div>
          <motion.div 
            key={`iframe-${selectedProject.id}`}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.8 }}
            className="w-full h-full max-w-[1600px] border border-line rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative z-10 flex flex-col"
          >
            <div className="h-12 bg-paper border-b border-line flex items-center px-6 gap-3 shrink-0">
               <div className="w-3.5 h-3.5 rounded-full bg-signal"></div>
               <div className="w-3.5 h-3.5 rounded-full bg-line-strong"></div>
               <div className="w-3.5 h-3.5 rounded-full bg-ocean"></div>
               <div className="mx-auto px-6 py-1.5 rounded-full bg-wash border border-line text-xs font-mono font-medium text-mute/80 truncate max-w-[400px]">
                 {selectedProject.url}
               </div>
            </div>
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
