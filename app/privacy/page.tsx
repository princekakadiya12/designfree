import React from 'react';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SITE, OWNER } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy | ${SITE.name}`,
};

export default function PrivacyPage() {
  return (
    <div className="flex-1 flex flex-col bg-paper">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 md:py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-ink mb-8">Privacy Policy</h1>
        
        <div className="prose prose-neutral prose-headings:font-serif prose-headings:font-normal prose-a:text-ink prose-a:underline-offset-4 max-w-none text-mute">
          <p><strong>Effective Date:</strong> October 2026</p>
          
          <h2 className="text-2xl text-ink mt-12 mb-4">1. Information We Collect</h2>
          <p>
            {SITE.name} is a static portfolio and resource directory. We do not use cookies, trackers, or analytics scripts that collect personally identifiable information (PII).
          </p>
          <p>
            If you choose to join our community or support us via UPI, you are subject to the privacy policies of those respective platforms.
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">2. External Links</h2>
          <p>
            Our website contains links to third-party websites, tools, and resources. We are not responsible for the privacy practices or the content of these external sites. We encourage you to read their privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">3. Security</h2>
          <p>
            All rendering and interaction happen on your device. We do not store user data on any backend servers.
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">4. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Effective Date."
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">5. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact {OWNER.name} at: <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
