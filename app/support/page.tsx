'use client';

import { Heart, Coffee, Shield, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { SUPPORT, upiLink } from '@/lib/site';

export default function SupportPage() {
  const [copied, setCopied] = useState(false);

  const copyUpiId = () => {
    navigator.clipboard.writeText(SUPPORT.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 flex flex-col bg-paper">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 md:py-24 w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ink/5 text-ink mb-6">
            <Heart className="w-8 h-8 fill-ink/20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">Support the Project</h1>
          <p className="text-lg text-mute max-w-xl mx-auto leading-relaxed">
            If you find this directory, the free tools, or the guide useful, consider buying me a coffee. Your support helps keep this project free and ad-free.
          </p>
        </div>

        <div className="bg-paper-soft border border-line rounded-2xl p-8 md:p-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            
            {/* QR Code Section */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white p-2 rounded-xl border border-line shadow-sm mb-4">
                <img 
                  src={SUPPORT.qrImage} 
                  alt="UPI QR Code" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if QR image is missing
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNWU1ZTUiIHN0cm9rZS13aWR0aD0iMSI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmYWZhZjciLz48dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSIjOTk5Ij5RUiBDb2RlIE1pc3Npbmc8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <p className="text-sm font-medium text-ink mb-1">Scan to Pay via UPI</p>
              <p className="text-xs text-mute mb-4">Google Pay, PhonePe, Paytm, etc.</p>
              
              <div className="flex items-center gap-2 bg-paper border border-line rounded-lg p-1.5 pl-4">
                <code className="text-sm text-ink">{SUPPORT.upiId}</code>
                <button 
                  onClick={copyUpiId}
                  className="p-2 hover:bg-ink/5 rounded-md transition-colors text-mute hover:text-ink"
                  title="Copy UPI ID"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="hidden md:block w-px h-48 bg-line" />

            {/* Direct Pay Options */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <a 
                href={upiLink(50)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-ink text-paper rounded-lg hover:bg-ink-soft transition-colors font-medium"
              >
                <Coffee className="w-4 h-4" />
                Buy a Coffee (₹50)
              </a>
              <a 
                href={upiLink(150)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-line bg-paper hover:bg-paper-soft text-ink rounded-lg transition-colors font-medium"
              >
                <Coffee className="w-4 h-4" />
                Buy a Lunch (₹150)
              </a>
              
              <div className="mt-6 flex items-start gap-3 text-left">
                <Shield className="w-5 h-5 text-mute shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-ink">Secure Payment</h3>
                  <p className="text-xs text-mute mt-1 max-w-[200px]">
                    Payments are processed directly through your secure UPI app. No data is stored on our servers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
