import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Prince Kakadiya World',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col">
      <Header activeTab="" />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="bg-white border border-[#e7e5e0] rounded-3xl p-8 md:p-12 shadow-clay">
          <h1 className="text-3xl font-bold text-[#2d2926] mb-6">Privacy Policy</h1>
          <div className="space-y-6 text-sm text-[#44403c] leading-relaxed">
            <p><strong>Effective Date:</strong> January 1, 2026</p>
            
            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">1. Information We Collect</h2>
            <p>
              Prince Kakadiya World is a static portfolio and resource directory. We do not use cookies, trackers, or analytics scripts that collect personally identifiable information (PII). 
            </p>
            <p>
              If you choose to join our WhatsApp community or support us via UPI, you are subject to the privacy policies of those respective platforms (WhatsApp/Meta and your bank/UPI provider).
            </p>

            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">2. External Links</h2>
            <p>
              Our website contains links to third-party websites, tools, and resources. We are not responsible for the privacy practices or the content of these external sites. We encourage you to read their privacy policies before providing any personal information.
            </p>

            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">3. Security</h2>
            <p>
              We implement basic client-side sanitization to ensure a safe browsing experience. All rendering and interaction happen on your device. We do not store user data on any backend servers.
            </p>

            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">4. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Effective Date."
            </p>

            <h2 className="text-xl font-semibold text-[#2d2926] mt-8 mb-4">5. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:princekakadiya20@gmail.com" className="text-[#6366f1] hover:underline">princekakadiya20@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
