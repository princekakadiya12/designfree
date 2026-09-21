'use client';

import { MessageSquare } from 'lucide-react';

export const CommunityView = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 py-12 animate-in fade-in duration-500">
      <div className="max-w-lg w-full text-center mb-8">
        <h1 className="text-2xl font-semibold text-[#2d2926]">Join the Community</h1>
        <p className="text-sm text-[#78716c] mt-2">Connect with developers, share your work, get feedback, and access weekly design resources.</p>
      </div>

      <div className="max-w-lg w-full bg-white border border-[#e7e5e0] rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)] text-center">
        <MessageSquare className="w-10 h-10 text-[#22c55e] mx-auto" />
        
        <h2 className="text-base font-semibold text-[#2d2926] mt-4">Prince Kakadiya Design Community</h2>
        <p className="text-xs text-[#78716c] mt-1">Free access for designers & developers</p>
        
        <a 
          href="https://chat.whatsapp.com/GNiPtvKuaF89jYzlIZNhNU" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-xl px-8 py-3 text-sm font-medium inline-flex items-center gap-2 mt-6 transition-colors shadow-sm"
        >
          Join WhatsApp Group
        </a>
      </div>

      <div className="mt-8 max-w-lg text-center">
        <a 
          href="https://princekakadiya.tech" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#6366f1] hover:underline"
        >
          princekakadiya.tech
        </a>
      </div>
    </div>
  );
};
