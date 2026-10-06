import React from 'react';
import { SiteFooter } from '@/components/site/SiteFooter';
import { SITE, OWNER } from '@/lib/site';

export const metadata = {
  title: `Copyright | ${SITE.name}`,
};

export default function CopyrightPage() {
  const year = new Date().getFullYear();
  
  return (
    <div className="flex-1 flex flex-col bg-paper">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 md:py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-serif text-ink mb-8">Copyright & Credits</h1>
        
        <div className="prose prose-neutral prose-headings:font-serif prose-headings:font-normal prose-a:text-ink prose-a:underline-offset-4 max-w-none text-mute">
          <p>
            &copy; {year} {OWNER.name}. All rights reserved.
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">Website Content</h2>
          <p>
            The original designs, text, and layout of {SITE.name} are the intellectual property of {OWNER.name}. They may not be reproduced, distributed, or transmitted in any form without prior written permission, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">Third-Party Assets & Credits</h2>
          <p>
            This website showcases projects and templates created by {OWNER.name}. Some assets used within those projects (such as stock imagery or specific typefaces) are subject to their own respective licenses.
          </p>
          <p>
            The curated tools listed in the Resources section are the property of their respective creators. {SITE.name} claims no ownership over these external tools.
          </p>

          <h2 className="text-2xl text-ink mt-12 mb-4">Open Source</h2>
          <p>
            Portions of the underlying code for this directory are available open-source. Please check the official <a href={SITE.repo} target="_blank" rel="noopener noreferrer">GitHub repository</a> for the specific open-source license applying to the code. The design, branding, and written content remain proprietary unless otherwise stated.
          </p>
          
          <h2 className="text-2xl text-ink mt-12 mb-4">Contact</h2>
          <p>
            For permission requests or questions regarding copyright, please contact: <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
