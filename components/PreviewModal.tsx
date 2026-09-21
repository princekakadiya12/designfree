'use client';

import React, { useState, useEffect } from 'react';
import { WebsiteItem } from '@/lib/data/websites';
import { Monitor, Tablet, Smartphone, ExternalLink, X } from 'lucide-react';

interface PreviewModalProps {
  website: WebsiteItem | null;
  isOpen: boolean;
  onClose: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const PreviewModal = ({ website, isOpen, onClose }: PreviewModalProps) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !website) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-label="Close modal background"
      />
      
      <div className="relative bg-white rounded-2xl w-full max-w-5xl h-[90vh] mx-auto mt-[5vh] shadow-2xl flex flex-col overflow-hidden z-10">
        <div className="px-5 py-3 border-b border-[#e7e5e0] bg-[#faf8f5] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="font-semibold text-sm text-[#2d2926] truncate max-w-[150px] sm:max-w-none">{website.name}</h2>
            <span className="font-mono text-xs text-[#a8a29e] hidden md:inline-block">
              {website.url}
            </span>
          </div>
          
          <div className="flex items-center gap-1 bg-[#e7e5e0]/50 p-1 rounded-lg">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`p-1.5 rounded-md transition-colors ${deviceMode === 'desktop' ? 'bg-white shadow-sm text-[#2d2926]' : 'text-[#78716c] hover:text-[#2d2926]'}`}
              title="Desktop View"
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('tablet')}
              className={`p-1.5 rounded-md transition-colors ${deviceMode === 'tablet' ? 'bg-white shadow-sm text-[#2d2926]' : 'text-[#78716c] hover:text-[#2d2926]'}`}
              title="Tablet View"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDeviceMode('mobile')}
              className={`p-1.5 rounded-md transition-colors ${deviceMode === 'mobile' ? 'bg-white shadow-sm text-[#2d2926]' : 'text-[#78716c] hover:text-[#2d2926]'}`}
              title="Mobile View"
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#78716c] hover:text-[#2d2926] hover:bg-[#e7e5e0]/50 rounded-md transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-[#78716c] hover:text-[#2d2926] hover:bg-[#e7e5e0]/50 rounded-md transition-colors"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="flex-1 bg-[#f5f1ec] overflow-hidden flex items-center justify-center p-4 sm:p-6">
          <div 
            className={`h-full bg-white transition-all duration-300 ease-in-out border border-[#e7e5e0] shadow-sm rounded-lg overflow-hidden ${
              deviceMode === 'desktop' ? 'w-full' : 
              deviceMode === 'tablet' ? 'w-full max-w-[768px]' : 
              'w-full max-w-[390px]'
            }`}
          >
            <iframe
              src={website.url}
              title={`${website.name} Preview`}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              loading="lazy"
              className="w-full h-full border-none bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
