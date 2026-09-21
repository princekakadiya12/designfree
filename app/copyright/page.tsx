import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Copyright & Terms | Prince Kakadiya World',
};

export default function CopyrightPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      <Header activeTab="" />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="bg-white border border-[#e7e5e0] rounded-3xl p-8 md:p-12 shadow-clay">
          <h1 className="text-3xl font-bold text-[#2d2926] mb-6">Copyright & Credits</h1>
          <div className="space-y-6 text-sm text-[#44403c] leading-relaxed">
            
            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">Intellectual Property</h2>
            <p>
              &copy; 2026 Prince Kakadiya. All rights reserved. 
            </p>
            <p>
              The original web designs, UI architectures, code templates, and aesthetic compositions showcased in the "Projects" section of this website are the intellectual property of Prince Kakadiya unless otherwise stated. 
            </p>

            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">Usage Rights</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Free Resources:</strong> The resources, tools, and models listed in the "Resources" section are the property of their respective creators and are subject to their own licenses (MIT, Apache, SIL OFL, etc.).</li>
              <li><strong>Inspiration & Educational Use:</strong> You are free to use the techniques described in the "Learn" section and reference the designs for educational purposes.</li>
              <li><strong>Direct Replication:</strong> Direct cloning or commercial resale of the exact templates displayed in the showcase without permission is prohibited.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">Credits & Acknowledgements</h2>
            <p>
              This portal is built utilizing several incredible open-source tools and platforms:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Icons:</strong> <a href="https://lucide.dev" target="_blank" rel="noreferrer" className="text-[#6366f1] hover:underline">Lucide React</a></li>
              <li><strong>Typography:</strong> Inter by Rasmus Andersson (via Google Fonts)</li>
            </ul>

            <p className="mt-8 pt-6 border-t border-[#e7e5e0]">
              For business inquiries, collaboration, or licensing, please visit <a href="https://princekakadiya.tech" target="_blank" rel="noreferrer" className="text-[#6366f1] hover:underline">princekakadiya.tech</a> or reach out directly.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
