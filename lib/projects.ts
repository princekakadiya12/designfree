export type ProjectGroup = 'live' | 'concept' | 'template';

export interface Project {
  id: string;
  name: string;
  url: string;
  host: 'Netlify' | 'Vercel' | 'Google Cloud Run' | 'Firebase App Hosting';
  group: ProjectGroup;
  /** Short type label shown in lists, e.g. "Restaurant", "Design agency". */
  kind: string;
  tagline: string;
  description: string;
  /** Sections visible on the live page (verified by fetching it). */
  sections: string[];
  /** Fonts verified from the page's own font links, when available. */
  fonts?: string[];
  tags: string[];
}

export const GROUPS: { id: ProjectGroup | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live apps' },
  { id: 'concept', label: 'Concept sites' },
  { id: 'template', label: 'Templates' },
];

/**
 * Every URL below was fetched and returned HTTP 200.
 * Not included because they currently return 404 (not deployed):
 *   princedemo10.vercel.app, princetem6.vercel.app, princetem7.vercel.app
 * Not included by request: princedemo4.netlify.app
 */
export const PROJECTS: Project[] = [
  /* ───────────── Live apps ───────────── */
  {
    id: 'the-prince-dhaba',
    name: 'The Prince Dhaba',
    url: 'https://the-prince-dhaba-395667281824.asia-southeast1.run.app',
    host: 'Google Cloud Run',
    group: 'live',
    kind: 'Restaurant',
    tagline: 'Punjabi highway-dhaba site with an "Ask the Chef" widget',
    description:
      'A website for a Punjabi dhaba: street-food menu, the story behind the tandoor and hand-ground spices, guest reviews and opening hours. Includes an interactive "Ask the Chef" question box.',
    sections: ['Street food menu', 'Ask the Chef', 'The Dhaba Difference', 'Guest testimonials', 'About Chef Prince', 'Contact & timings'],
    tags: ['restaurant', 'menu', 'interactive', 'cloud run'],
  },
  {
    id: 'prince-restaurant',
    name: 'Prince Modern Dining',
    url: 'https://prince-restaurant-395667281824.asia-southeast1.run.app',
    host: 'Google Cloud Run',
    group: 'live',
    kind: 'Restaurant',
    tagline: 'Contemporary fine-dining Indian restaurant',
    description:
      'A fine-dining restaurant site with a categorised digital menu (starters, curries, biryanis), chef specials, table reservations and location details.',
    sections: ['Hero', 'Categorised menu', 'Chef specials', 'Table reservations', 'Location & hours'],
    tags: ['restaurant', 'reservations', 'menu', 'cloud run'],
  },
  {
    id: 'prince-classes',
    name: 'Prince Classes',
    url: 'https://princeclasses--princekakadiya-c305e.us-central1.hosted.app',
    host: 'Firebase App Hosting',
    group: 'live',
    kind: 'Education',
    tagline: "Tuition institute in Surat, grades 1 to 12",
    description:
      'A coaching institute website covering science, maths and commerce for grades 1 to 12, with faculty profiles, student testimonials, a campus gallery, enrolment counters and an enquiry form.',
    sections: ['Courses (grades 1-12)', 'Faculty', 'Testimonials', 'Campus life', 'Enrolment counters', 'Contact'],
    tags: ['education', 'enquiry form', 'surat', 'firebase'],
  },
  {
    id: 'potoconverter',
    name: 'PotoConverter',
    url: 'https://princedemo5.netlify.app',
    host: 'Netlify',
    group: 'live',
    kind: 'Web tool',
    tagline: 'Free in-browser file converter and utilities',
    description:
      'A utility web app with 50+ tools for converting and compressing images, PDFs and video without an account, plus developer utilities and a meme generator.',
    sections: ['Popular conversion tools', 'How it works', 'Image & PDF tools', 'Developer utilities', 'Meme tools', 'FAQ'],
    tags: ['tool', 'converter', 'saas', 'no sign-up'],
  },
  {
    id: 'techtofun',
    name: 'TechToFun',
    url: 'https://princedemo6.netlify.app',
    host: 'Netlify',
    group: 'live',
    kind: 'Community',
    tagline: 'Tech community with tutorials and mentoring',
    description:
      'A community site for developers and tech enthusiasts: services, an about section and a form to book a mentoring session.',
    sections: ['Welcome', 'Our services', 'About', 'Book a mentoring session'],
    tags: ['community', 'tutorials', 'mentoring'],
  },
  {
    id: 'princefav',
    name: 'Prince Creative Events',
    url: 'https://princefav.vercel.app',
    host: 'Vercel',
    group: 'live',
    kind: 'Event agency',
    tagline: 'Event production and spatial design studio',
    description:
      'A dark cinematic site for an event and entertainment agency: manifesto, showreel, featured activations, services, awards and a contact portal. Animated with GSAP.',
    sections: ['Manifesto', 'Showreel', 'Featured activations', 'Services', 'Awards', 'Contact'],
    tags: ['agency', 'cinematic', 'gsap', 'events'],
  },

  /* ───────────── Concept sites ───────────── */
  {
    id: 'rivva',
    name: 'Rivva Design Studio',
    url: 'https://princedemo1.netlify.app',
    host: 'Netlify',
    group: 'concept',
    kind: 'Design agency',
    tagline: 'Design that works. Results that last.',
    description:
      'A design agency site that sells brand, web and product design: bold headline, project showcase and a services section.',
    sections: ['Hero', 'Our projects', 'Design services'],
    tags: ['agency', 'portfolio', 'next.js'],
  },
  {
    id: 'juice-project',
    name: 'Juice Project',
    url: 'https://princedemo2.netlify.app',
    host: 'Netlify',
    group: 'concept',
    kind: 'Landing page',
    tagline: 'High-impact landing page built with Tailwind',
    description:
      'A bold single-page demo using condensed display type (Anton) on a black theme, built with Tailwind via CDN.',
    sections: ['Landing page'],
    fonts: ['Anton'],
    tags: ['landing', 'tailwind', 'dark'],
  },
  {
    id: 'wellness-balance',
    name: 'Wellness & Balance',
    url: 'https://princedemo3.netlify.app',
    host: 'Netlify',
    group: 'concept',
    kind: 'Wellness',
    tagline: 'Calm wellness brand site',
    description: 'A wellness and balance brand site built with Vite, Tailwind and the Inter typeface.',
    sections: ['Landing page'],
    fonts: ['Inter'],
    tags: ['wellness', 'vite', 'tailwind'],
  },
  {
    id: 'arvind-home',
    name: 'Arvind Home',
    url: 'https://princedemo7.netlify.app',
    host: 'Netlify',
    group: 'concept',
    kind: 'E-commerce',
    tagline: 'Premium home textiles storefront',
    description:
      'A storefront-style demo for luxury bedding, curtains and towels, built as a Vite single-page app.',
    sections: ['Collections', 'Product categories'],
    tags: ['ecommerce', 'textiles', 'vite'],
  },
  {
    id: 'raoul-hair-beauty',
    name: 'Raoul Hair & Beauty',
    url: 'https://princedemo8.netlify.app',
    host: 'Netlify',
    group: 'concept',
    kind: 'Salon',
    tagline: 'Dutch-language salon website',
    description:
      'A salon site in Dutch with a "Premium cuts" hero, a services list and an exclusive-products section.',
    sections: ['Welkom hero', 'Services', 'Exclusive products'],
    tags: ['salon', 'dutch', 'next.js'],
  },
  {
    id: 'prince-national-archive',
    name: 'National Archive',
    url: 'https://princedemo1.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Archive',
    tagline: 'Minimal dark Swiss typographic archive',
    description:
      'A rare-manuscript library: archive search, folio showcase, a typographic grid section, archivist profiles, bulletins and vault access.',
    sections: ['Search the archive', 'Rare manuscripts', 'The typographic grid', 'The Keepers', 'Archive bulletins', 'Vault access'],
    tags: ['swiss', 'typographic', 'dark', 'grid'],
  },
  {
    id: 'swiss-studio',
    name: 'Swiss Design Studio',
    url: 'https://princedemo2.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Architecture studio',
    tagline: 'Black-and-white Swiss grid editorial',
    description:
      'An architecture and industrial design studio built on functional reduction: selected projects, case studies, studio metrics, leadership and international addresses.',
    sections: ['Philosophy', 'Selected projects', 'Case studies', 'Metrics', 'Leadership', 'Locations'],
    tags: ['swiss', 'architecture', 'editorial', 'monochrome'],
  },
  {
    id: 'haute-coiffure',
    name: 'Haute Coiffure',
    url: 'https://princedemo3.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Luxury salon',
    tagline: 'Parisian couture hair salon',
    description:
      'A dark, high-fashion salon site: architectural styling, salon interior tour, creative directors, service disciplines and a VIP membership club.',
    sections: ['Haute coiffure', 'Structural mastery', 'Salon architecture', 'Creative directors', 'VIP club booking'],
    tags: ['luxury', 'editorial', 'dark', 'booking'],
  },
  {
    id: 'strategic-presence',
    name: 'Strategic Presence',
    url: 'https://princedemo4.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Consultancy',
    tagline: 'Tactile dark neumorphic consultancy site',
    description:
      'A digital-presence consultancy for enterprise leaders: intentional aesthetics, disciplines, a digital vault, performance metrics and executive testimonials.',
    sections: ['Intentional aesthetics', 'Disciplines & systems', 'Digital vault', 'Metrics', 'Testimonials', 'Contact'],
    tags: ['neumorphic', 'dark', 'consultancy'],
  },
  {
    id: 'vaporwave-studio',
    name: 'Vaporwave Studio',
    url: 'https://princedemo5.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Creative agency',
    tagline: 'Windows 95 meets classical marble',
    description:
      'A retro agency site that mixes Greek marble busts with an old desktop OS: terminal windows, a manifesto as a text file, service modules and a status console.',
    sections: ['Executive.exe', 'Agency manifesto', 'Strategy.exe', 'Classical gallery', 'Status console'],
    tags: ['retro', 'vaporwave', 'windows 95'],
  },
  {
    id: 'scrapbook-studio',
    name: 'Scrapbook Studio',
    url: 'https://princedemo6.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Creative studio',
    tagline: 'Tactile scrapbook editorial',
    description:
      'A boutique brand studio presented as a scrapbook: taped paper, polaroid frames, handwritten notes, process chapters, a collection and an enquiry notebook.',
    sections: ['Our story', 'Chapter 1: The core', 'Disciplines', 'The Noir collection', 'Studio enquiries'],
    tags: ['scrapbook', 'tactile', 'collage'],
  },
  {
    id: 'wabi-sabi-atelier',
    name: 'Wabi-Sabi Atelier',
    url: 'https://princedemo7.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Ceramics studio',
    tagline: 'Kintsugi pottery and the beauty of imperfection',
    description:
      'An artisan ceramics studio: handmade vessels, kiln-firing process, gold-repaired pottery, a ceramic collection and a philosophy of repair.',
    sections: ['Embracing imperfection', 'Clay & fire', 'Kintsugi', 'Ceramic collection', 'Philosophy of repair'],
    tags: ['wabi-sabi', 'earthy', 'minimal', 'craft'],
  },
  {
    id: 'eight-bit-rpg',
    name: '8-Bit RPG Agency',
    url: 'https://princedemo8.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Creative agency',
    tagline: 'Agency services framed as an arcade RPG',
    description:
      'Brand and development services presented as a game: start screen, quest stages, inventory, player stats and an insert-coin restart.',
    sections: ['Main menu', 'Quest stages', 'Inventory & gear', 'Score & status', 'Insert coin'],
    tags: ['pixel art', 'gamified', 'retro'],
  },
  {
    id: 'ethereal-digital',
    name: 'Ethereal Digital',
    url: 'https://princedemo9.vercel.app',
    host: 'Vercel',
    group: 'concept',
    kind: 'Business site',
    tagline: 'Light, atmospheric luxury',
    description: 'An airy business website set in Cormorant Garamond and Montserrat with a soft, atmospheric feel.',
    sections: ['Landing page'],
    fonts: ['Cormorant Garamond', 'Montserrat'],
    tags: ['ethereal', 'serif', 'luxury'],
  },

  /* ───────────── Templates ───────────── */
  {
    id: 'high-end-studio',
    name: 'High-End Studio',
    url: 'https://princetem1.vercel.app',
    host: 'Vercel',
    group: 'template',
    kind: 'Salon & fragrance',
    tagline: 'Luxury salon and olfactory design studio',
    description: 'A premium template for a luxury salon and fragrance studio.',
    sections: ['Landing page'],
    tags: ['luxury', 'salon', 'fragrance'],
  },
  {
    id: 'private-reading-library',
    name: 'Private Reading Library',
    url: 'https://princetem2.vercel.app',
    host: 'Vercel',
    group: 'template',
    kind: 'Library',
    tagline: 'Exclusive library and literary society',
    description: 'A template for a members-only private library, set in Cormorant Garamond.',
    sections: ['Landing page'],
    fonts: ['Cormorant Garamond'],
    tags: ['library', 'serif', 'members'],
  },
  {
    id: 'bespoke-luxury',
    name: 'Bespoke Luxury',
    url: 'https://princetem3.vercel.app',
    host: 'Vercel',
    group: 'template',
    kind: 'Business site',
    tagline: 'Luxury bespoke web experience',
    description: 'A luxury business template pairing Cormorant Garamond with Manrope.',
    sections: ['Landing page'],
    fonts: ['Cormorant Garamond', 'Manrope'],
    tags: ['luxury', 'serif', 'bespoke'],
  },
  {
    id: 'underground-agency',
    name: 'Underground Agency',
    url: 'https://princetem4.vercel.app',
    host: 'Vercel',
    group: 'template',
    kind: 'Creative agency',
    tagline: 'Street-art themed luxury agency',
    description: 'A creative agency template with a street-art, underground attitude.',
    sections: ['Landing page'],
    tags: ['street art', 'agency', 'bold'],
  },
  {
    id: 'brutalist-it',
    name: 'Brutalist IT Infrastructure',
    url: 'https://princetem5.vercel.app',
    host: 'Vercel',
    group: 'template',
    kind: 'IT & security',
    tagline: 'Uncompromising IT infrastructure',
    description:
      'A neo-brutalist enterprise site for cyber defence and cloud infrastructure: capability marquee, firewall and DDoS metrics, client stress-test quotes and architecture maps.',
    sections: ['Cyber defence protocol', 'Zero-trust security', 'Core server architecture', 'DDoS metrics', 'Case studies'],
    tags: ['brutalist', 'security', 'high contrast'],
  },
];

export const HOSTS = Array.from(new Set(PROJECTS.map((p) => p.host)));
