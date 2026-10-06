'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Monitor, Tag, Filter, ChevronRight } from 'lucide-react';
import { PROJECTS, ProjectGroup, GROUPS } from '@/lib/projects';

export default function ProjectsDashboard() {
  const [activeGroup, setActiveGroup] = useState<ProjectGroup | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const filteredProjects = PROJECTS.filter(
    (p) => activeGroup === 'all' || p.group === activeGroup
  );

  return (
    <div className="flex-1 flex overflow-hidden h-[calc(100vh-56px)] bg-paper selection:bg-ink selection:text-paper">
      
      {/* Left Sidebar - Project List */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 384, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="w-96 flex-shrink-0 border-r border-line flex flex-col bg-paper-soft overflow-hidden"
          >
            <div className="p-5 border-b border-line bg-paper sticky top-0 z-10">
              <div className="flex items-center gap-2 mb-5">
                <Monitor className="w-5 h-5 text-ink" />
                <h2 className="font-serif text-xl text-ink tracking-tight">Design Library</h2>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                {GROUPS.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setActiveGroup(group.id)}
                    className={`px-4 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all ${
                      activeGroup === group.id
                        ? 'bg-ink text-paper shadow-md'
                        : 'bg-line/30 text-mute hover:bg-line/50 hover:text-ink'
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {filteredProjects.map((project, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.02 }}
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    selectedProject.id === project.id
                      ? 'bg-paper shadow-sm border border-line ring-1 ring-ink/5'
                      : 'hover:bg-paper border border-transparent hover:border-line/50'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`font-medium ${selectedProject.id === project.id ? 'text-ink' : 'text-ink/80 group-hover:text-ink'}`}>
                      {project.name}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-mute bg-line/20 px-2 py-0.5 rounded-sm">
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
      <div className="flex-1 flex flex-col min-w-0 bg-canvas relative">
        
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
          className="h-auto p-6 md:p-8 border-b border-line flex flex-col lg:flex-row gap-6 items-start justify-between bg-paper/80 backdrop-blur-xl sticky top-0 z-10"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-3">
              <h1 className="text-2xl md:text-3xl font-serif text-ink tracking-tight">{selectedProject.name}</h1>
              <span className="px-3 py-1 rounded-full border border-line text-[11px] font-medium text-mute uppercase tracking-wider">
                {selectedProject.host}
              </span>
            </div>
            <p className="text-sm md:text-base text-mute leading-relaxed mb-4">{selectedProject.description}</p>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-4 text-xs font-mono text-mute">
              {selectedProject.sections && selectedProject.sections.length > 0 && (
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  <span className="text-ink/70">Sections: {selectedProject.sections.slice(0, 3).join(', ')}{selectedProject.sections.length > 3 ? '...' : ''}</span>
                </div>
              )}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="text-ink/70">{selectedProject.tags.slice(0, 3).join(', ')}</span>
                </div>
              )}
            </div>
          </div>
          
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper text-sm font-medium rounded-full hover:bg-ink-soft transition-all hover:scale-105 active:scale-95 shadow-lg shadow-ink/10 mt-4 lg:mt-0"
          >
            Launch Site
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Iframe Preview */}
        <div className="flex-1 p-4 md:p-8 lg:p-12 overflow-hidden flex items-center justify-center">
          <motion.div 
            key={`iframe-${selectedProject.id}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
            className="w-full h-full max-w-[1600px] border border-line/50 rounded-2xl overflow-hidden bg-paper shadow-2xl ring-1 ring-ink/5"
          >
            <div className="h-8 bg-paper-soft border-b border-line flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-line-strong/50"></div>
               <div className="w-3 h-3 rounded-full bg-line-strong/50"></div>
               <div className="w-3 h-3 rounded-full bg-line-strong/50"></div>
               <div className="mx-auto text-[10px] font-mono text-mute/50 truncate max-w-[200px]">{selectedProject.url}</div>
            </div>
            <iframe
              src={selectedProject.url}
              className="w-full h-[calc(100%-32px)] bg-white"
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
