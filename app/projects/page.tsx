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
            animate={{ width: 400, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="w-[400px] flex-shrink-0 border-r border-line flex flex-col bg-paper overflow-hidden shadow-2xl shadow-ink/5"
          >
            <div className="p-6 border-b border-line bg-paper/80 backdrop-blur-xl sticky top-0 z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-signal text-white flex items-center justify-center">
                  <LayoutTemplate className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-2xl text-ink tracking-tight">Design Library</h2>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                {GROUPS.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setActiveGroup(group.id)}
                    className={`px-5 py-2 text-xs font-mono uppercase tracking-widest rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeGroup === group.id
                        ? 'bg-ink text-paper shadow-md scale-105'
                        : 'bg-wash text-mute hover:bg-line hover:text-ink'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-wash/50">
              {filteredProjects.map((project, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group w-full text-left p-5 rounded-2xl transition-all duration-300 ${
                    selectedProject.id === project.id
                      ? 'bg-paper shadow-lg border-transparent ring-2 ring-signal/20 scale-[1.02]'
                      : 'bg-paper/50 hover:bg-paper border border-line hover:border-line-strong hover:shadow-md'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`font-serif text-lg leading-tight ${selectedProject.id === project.id ? 'text-signal' : 'text-ink group-hover:text-ink'}`}>
                      {project.name}
                    </h3>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-sm ${
                      selectedProject.id === project.id ? 'bg-signal/10 text-signal' : 'bg-line/50 text-mute'
                    }`}>
                      {project.kind}
                    </span>
                  </div>
                  <p className="text-sm text-mute line-clamp-2 leading-relaxed">{project.tagline}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right Content - Preview and Details */}
      <div className="flex-1 flex flex-col min-w-0 bg-wash relative">
        
        {/* Toggle Sidebar Button (Mobile/Desktop) */}
        <button 
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="absolute left-4 top-4 z-20 p-2 bg-paper border border-line rounded-full shadow-sm hover:bg-paper-soft text-ink transition-all md:hidden"
        >
          <ChevronRight className={`w-4 h-4 transition-transform ${isSidebarOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Project Details Header */}
        <motion.div 
          key={selectedProject.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="h-auto p-6 md:p-10 border-b border-line flex flex-col lg:flex-row gap-6 items-start justify-between bg-paper/70 backdrop-blur-xl sticky top-0 z-10"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl md:text-5xl font-serif text-ink tracking-tight">{selectedProject.name}</h1>
              <span className="px-3 py-1 rounded-full border border-signal/20 bg-signal/5 text-[11px] font-mono text-signal uppercase tracking-wider">
                {selectedProject.host}
              </span>
            </div>
            <p className="text-base md:text-lg text-mute leading-relaxed mb-6">{selectedProject.description}</p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-xs font-mono text-mute">
              {selectedProject.sections && selectedProject.sections.length > 0 && (
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-signal/70" />
                  <span className="text-ink/70">Sections: {selectedProject.sections.slice(0, 3).join(', ')}{selectedProject.sections.length > 3 ? '...' : ''}</span>
                </div>
              )}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-signal/70" />
                  <span className="text-ink/70">{selectedProject.tags.slice(0, 3).join(', ')}</span>
                </div>
              )}
            </div>
          </div>
          
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-signal text-white text-sm font-medium uppercase tracking-widest rounded-full hover:bg-ink transition-all hover:scale-105 active:scale-95 shadow-xl shadow-signal/20 mt-4 lg:mt-0"
          >
            Launch Site
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Iframe Preview */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 overflow-hidden flex items-center justify-center relative">
          <div className="absolute inset-0 bg-canvas pointer-events-none"></div>
          <motion.div 
            key={`iframe-${selectedProject.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
            className="w-full h-full max-w-[1600px] border border-line rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-ink/5 relative z-10 flex flex-col"
          >
            <div className="h-10 bg-paper border-b border-line flex items-center px-4 gap-2 shrink-0">
               <div className="w-3 h-3 rounded-full bg-line-strong"></div>
               <div className="w-3 h-3 rounded-full bg-line-strong"></div>
               <div className="w-3 h-3 rounded-full bg-line-strong"></div>
               <div className="mx-auto px-4 py-1 rounded bg-wash border border-line text-[10px] font-mono text-mute/70 truncate max-w-[300px]">
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
