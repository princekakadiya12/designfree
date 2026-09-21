'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export interface HeaderProps {
  activeTab: string;
  onSelectTab?: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const tabs = ['projects', 'resources', 'learn', 'support', 'community'];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-[#e7e5e0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <a 
              href="https://princekakadiya.tech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2d2926] text-white font-bold text-sm">
                PK
              </div>
              <span className="text-lg font-semibold text-[#2d2926]">
                Prince Kakadiya
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onSelectTab ? onSelectTab(tab) : (window.location.href = '/designfree/')}
                className={`px-4 py-2 rounded-xl text-sm capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#f5f1ec] text-[#2d2926] font-semibold'
                    : 'text-[#78716c] hover:bg-[#f5f1ec]/50 hover:text-[#2d2926]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#78716c] hover:text-[#2d2926] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#e7e5e0] bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  if (onSelectTab) {
                    onSelectTab(tab);
                    setIsMobileMenuOpen(false);
                  } else {
                    window.location.href = '/designfree/';
                  }
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#f5f1ec] text-[#2d2926] font-semibold'
                    : 'text-[#78716c] hover:bg-[#f5f1ec]/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
