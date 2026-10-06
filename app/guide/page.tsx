import React from 'react';
import guideData from '@/lib/data/user_guide.json';

export default function GuidePage() {
  return (
    <div className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">{guideData.meta.title}</h1>
        <p className="text-xl text-mute mb-6">{guideData.meta.subtitle}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {guideData.meta.audience.map((a: string) => (
            <span key={a} className="px-3 py-1 bg-ink/5 text-ink text-sm rounded-full">
              {a}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-neutral max-w-none prose-headings:font-serif prose-headings:font-normal prose-a:text-ink prose-a:underline-offset-4 hover:prose-a:text-mute">
        <div className="bg-paper-soft border border-line rounded-xl p-6 mb-12">
          <h3 className="mt-0">How to use this guide</h3>
          <ul className="mb-0">
            {guideData.meta.how_to_use.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Render parts dynamically if needed, or simply render the raw JSON as formatted text */}
        {Object.entries(guideData).map(([key, section]: [string, any]) => {
          if (key === 'meta') return null;
          
          return (
            <div key={key} className="mb-16">
              <h2 className="text-3xl border-b border-line pb-2 mb-6 capitalize">{key.replace(/_/g, ' ')}</h2>
              
              {section.title && <h3 className="text-2xl mt-8 mb-4">{section.title}</h3>}
              {section.description && <p className="text-lg text-mute mb-6">{section.description}</p>}
              
              {section.steps && Array.isArray(section.steps) && (
                <div className="space-y-8">
                  {section.steps.map((step: any, i: number) => (
                    <div key={i} className="bg-paper border border-line rounded-lg p-6">
                      <h4 className="text-xl mt-0 mb-3">{step.name || step.title || `Step ${i + 1}`}</h4>
                      {step.description && <p className="mb-4">{step.description}</p>}
                      {step.prompt && (
                        <div className="bg-ink text-paper p-4 rounded-md font-mono text-sm overflow-x-auto whitespace-pre-wrap">
                          {step.prompt}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {/* Fallback for other structures */}
              {!section.steps && typeof section === 'object' && (
                <pre className="bg-paper-soft border border-line p-4 rounded-lg overflow-x-auto text-sm">
                  {JSON.stringify(section, null, 2)}
                </pre>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
