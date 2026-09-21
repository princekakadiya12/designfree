export interface WebsiteItem {
  id: string;
  slug: string;
  name: string;
  url: string;
  category: 'swiss' | 'luxury' | 'brutalist' | 'retro-cyber' | 'minimal' | 'fintech';
  tagline: string;
  description: string;
  styleName: string;
  palette: { name: string; hex: string }[];
  typography: string;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'swiss', label: 'Swiss Style' },
  { id: 'luxury', label: 'Luxury & Atelier' },
  { id: 'brutalist', label: 'Neo-Brutalist' },
  { id: 'retro-cyber', label: 'Retro & Cyber' },
  { id: 'minimal', label: 'Minimalist' },
  { id: 'fintech', label: 'Fintech' },
] as const;

export const WEBSITES: WebsiteItem[] = [
  {
    id: 'princedemo1-netlify',
    slug: 'princedemo1-netlify',
    name: 'Prince Demo 1 (Netlify)',
    url: 'https://princedemo1.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo2-netlify',
    slug: 'princedemo2-netlify',
    name: 'Prince Demo 2 (Netlify)',
    url: 'https://princedemo2.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo3-netlify',
    slug: 'princedemo3-netlify',
    name: 'Prince Demo 3 (Netlify)',
    url: 'https://princedemo3.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo5-netlify',
    slug: 'princedemo5-netlify',
    name: 'Prince Demo 5 (Netlify)',
    url: 'https://princedemo5.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo6-netlify',
    slug: 'princedemo6-netlify',
    name: 'Prince Demo 6 (Netlify)',
    url: 'https://princedemo6.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo7-netlify',
    slug: 'princedemo7-netlify',
    name: 'Prince Demo 7 (Netlify)',
    url: 'https://princedemo7.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo8-netlify',
    slug: 'princedemo8-netlify',
    name: 'Prince Demo 8 (Netlify)',
    url: 'https://princedemo8.netlify.app',
    category: 'minimal',
    tagline: 'Clean minimalist portfolio demo on Netlify',
    description: 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.',
    styleName: 'Minimalist Netlify',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo1-vercel',
    slug: 'princedemo1-vercel',
    name: 'Prince Demo 1 (Vercel)',
    url: 'https://princedemo1.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo2-vercel',
    slug: 'princedemo2-vercel',
    name: 'Prince Demo 2 (Vercel)',
    url: 'https://princedemo2.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo3-vercel',
    slug: 'princedemo3-vercel',
    name: 'Prince Demo 3 (Vercel)',
    url: 'https://princedemo3.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo4-vercel',
    slug: 'princedemo4-vercel',
    name: 'Prince Demo 4 (Vercel)',
    url: 'https://princedemo4.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo5-vercel',
    slug: 'princedemo5-vercel',
    name: 'Prince Demo 5 (Vercel)',
    url: 'https://princedemo5.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo6-vercel',
    slug: 'princedemo6-vercel',
    name: 'Prince Demo 6 (Vercel)',
    url: 'https://princedemo6.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo7-vercel',
    slug: 'princedemo7-vercel',
    name: 'Prince Demo 7 (Vercel)',
    url: 'https://princedemo7.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo8-vercel',
    slug: 'princedemo8-vercel',
    name: 'Prince Demo 8 (Vercel)',
    url: 'https://princedemo8.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo9-vercel',
    slug: 'princedemo9-vercel',
    name: 'Prince Demo 9 (Vercel)',
    url: 'https://princedemo9.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princedemo10-vercel',
    slug: 'princedemo10-vercel',
    name: 'Prince Demo 10 (Vercel)',
    url: 'https://princedemo10.vercel.app',
    category: 'swiss',
    tagline: 'Swiss-style corporate site on Vercel',
    description: 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.',
    styleName: 'Swiss Vercel',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem1-vercel',
    slug: 'princetem1-vercel',
    name: 'Prince Template 1',
    url: 'https://princetem1.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem2-vercel',
    slug: 'princetem2-vercel',
    name: 'Prince Template 2',
    url: 'https://princetem2.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem3-vercel',
    slug: 'princetem3-vercel',
    name: 'Prince Template 3',
    url: 'https://princetem3.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem4-vercel',
    slug: 'princetem4-vercel',
    name: 'Prince Template 4',
    url: 'https://princetem4.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem5-vercel',
    slug: 'princetem5-vercel',
    name: 'Prince Template 5',
    url: 'https://princetem5.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem6-vercel',
    slug: 'princetem6-vercel',
    name: 'Prince Template 6',
    url: 'https://princetem6.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
  {
    id: 'princetem7-vercel',
    slug: 'princetem7-vercel',
    name: 'Prince Template 7',
    url: 'https://princetem7.vercel.app',
    category: 'luxury',
    tagline: 'Luxury digital experience',
    description: 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.',
    styleName: 'Premium Luxury',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },
];
