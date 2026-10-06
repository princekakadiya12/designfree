'use client';

import { useState } from 'react';
import { ExternalLink, Monitor, Tag, Filter } from 'lucide-react';
import { PROJECTS, ProjectGroup, GROUPS } from '@/lib/projects';

export default function ProjectsDashboard() {
  const [activeGroup, setActiveGroup] = useState<ProjectGroup | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState(PROJECTS[0]);

  const filteredProjects = PROJECTS.filter(
    (p) => activeGroup === 'all' || p.group === activeGroup
  );

  return (
    <div className="flex-1 flex overflow-hidden h-[calc(100vh-56px)] bg-paper">
      {/* Left Sidebar - Project List */}
      <div className="w-80 md:w-96 flex-shrink-0 border-r border-line flex flex-col bg-paper-soft overflow-hidden">
        <div className="p-4 border-b border-line bg-paper">
          <div className="flex items-center gap-2 mb-4">
            <Monitor className="w-5 h-5 text-ink" />
            <h2 className="font-medium text-ink">Design Library</h2>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  activeGroup === group.id
                    ? 'bg-ink text-paper'
                    : 'bg-line/20 text-mute hover:bg-line/40 hover:text-ink'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`w-full text-left p-3 rounded-lg transition-all ${
                selectedProject.id === project.id
                  ? 'bg-paper shadow-sm border border-line ring-1 ring-ink/5'
                  : 'hover:bg-line/10 border border-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <h3 className={`font-medium text-sm ${selectedProject.id === project.id ? 'text-ink' : 'text-ink/80'}`}>
                  {project.name}
                </h3>
                <span className="text-[10px] font-mono uppercase text-mute bg-line/20 px-1.5 py-0.5 rounded">
                  {project.kind}
                </span>
              </div>
              <p className="text-xs text-mute line-clamp-1">{project.tagline}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Right Content - Preview and Details */}
      <div className="flex-1 flex flex-col min-w-0 bg-paper">
        {/* Project Details Header */}
        <div className="h-auto p-4 border-b border-line flex flex-col lg:flex-row gap-4 items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-serif text-ink">{selectedProject.name}</h1>
              <span className="px-2 py-0.5 rounded-full border border-line text-[11px] font-medium text-mute">
                {selectedProject.host}
              </span>
            </div>
            <p className="text-sm text-mute max-w-2xl">{selectedProject.description}</p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs text-mute">
              {selectedProject.sections && selectedProject.sections.length > 0 && (
                <div className="flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" />
                  <span>Sections: {selectedProject.sections.slice(0, 3).join(', ')}{selectedProject.sections.length > 3 ? '...' : ''}</span>
                </div>
              )}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex items-center gap-1">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{selectedProject.tags.slice(0, 3).join(', ')}</span>
                </div>
              )}
            </div>
          </div>
          
          <a
            href={selectedProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-ink text-paper text-sm font-medium rounded-lg hover:bg-ink-soft transition-colors"
          >
            Open Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Iframe Preview */}
        <div className="flex-1 p-4 bg-paper-soft">
          <div className="w-full h-full border border-line rounded-xl overflow-hidden bg-paper shadow-sm">
            <iframe
              src={selectedProject.url}
              className="w-full h-full"
              title={selectedProject.name}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
