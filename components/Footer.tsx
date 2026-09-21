'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto w-full bg-[#f5f1ec] border-t border-[#e7e5e0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row md:gap-0">
          <div className="text-sm text-[#78716c]">
            &copy; 2026{' '}
            <a
              href="https://princekakadiya.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d2926] font-medium hover:underline"
            >
              Prince Kakadiya
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-[#78716c] hover:text-[#2d2926] transition-colors">
              Privacy Policy
            </a>
            <a href="/copyright" className="text-sm text-[#78716c] hover:text-[#2d2926] transition-colors">
              Copyright & Credits
            </a>
            <a
              href="https://chat.whatsapp.com/GNiPtvKuaF89jYzlIZNhNU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#6366f1] hover:text-[#4f46e5] transition-colors"
            >
              Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
