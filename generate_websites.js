const fs = require('fs');
let code = `export interface WebsiteItem {
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

export const WEBSITES: WebsiteItem[] = [`;

const addSite = (id, url, name, category, tagline, description, styleName) => {
  code += `
  {
    id: '${id}',
    slug: '${id}',
    name: '${name}',
    url: '${url}',
    category: '${category}',
    tagline: '${tagline}',
    description: '${description}',
    styleName: '${styleName}',
    palette: [
      { name: 'Dark', hex: '#171717' },
      { name: 'Light', hex: '#f8f8f8' },
      { name: 'Accent', hex: '#3b82f6' },
      { name: 'Muted', hex: '#a3a3a3' }
    ],
    typography: 'Inter / Plus Jakarta Sans',
  },`;
};

// Netlify 1-8 (exclude 4)
[1,2,3,5,6,7,8].forEach(i => {
  addSite('princedemo'+i+'-netlify', 'https://princedemo'+i+'.netlify.app', 'Prince Demo '+i+' (Netlify)', 'minimal', 'Clean minimalist portfolio demo on Netlify', 'A beautiful, clean, and highly responsive web design portfolio. Hosted on Netlify.', 'Minimalist Netlify');
});

// Vercel 1-10
for(let i=1; i<=10; i++) {
  addSite('princedemo'+i+'-vercel', 'https://princedemo'+i+'.vercel.app', 'Prince Demo '+i+' (Vercel)', 'swiss', 'Swiss-style corporate site on Vercel', 'Elegant corporate website featuring Swiss design principles, strong typography, and grids. Hosted on Vercel.', 'Swiss Vercel');
}

// Princetem 1-7 (Vercel)
for(let i=1; i<=7; i++) {
  addSite('princetem'+i+'-vercel', 'https://princetem'+i+'.vercel.app', 'Prince Template '+i, 'luxury', 'Luxury digital experience', 'Premium luxury digital template with sophisticated animations, smooth scrolling, and elegant layouts.', 'Premium Luxury');
}

code += `
];
`;

fs.writeFileSync('lib/data/websites.ts', code);
console.log('Fixed websites.ts');
