import free1Data from './free1.json';
import free2Data from './free2.json';

export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  badge: string;
  authorOrOrg: string;
}

// Convert JSON data into ResourceItem array safely
const extractResources = (data: any): ResourceItem[] => {
  if (!data || !data.resources || !Array.isArray(data.resources)) return [];
  
  return data.resources.map((r: any) => {
    // Determine title from possible fields (name, title)
    const title = r.name || r.title || r.id;
    // Determine category from tags or primary_category
    let category = 'other';
    if (r.primary_category) category = r.primary_category;
    else if (r.tags && r.tags.length > 0) category = r.tags[0];
    else if (r.category) category = r.category;
    
    // Determine author from developer, creator, organization
    const authorOrOrg = r.developer || r.creator || r.organization || r.author || 'Unknown';
    
    // Determine badge from pricing, tier, or type
    let badge = 'Free';
    if (r.pricing_model) badge = r.pricing_model;
    else if (r.tier) badge = r.tier;
    else if (r.type) badge = r.type;
    
    // Grab the first valid url
    let url = '#';
    if (r.urls) {
      if (typeof r.urls === 'string') url = r.urls;
      else if (r.urls.main) url = r.urls.main;
      else if (r.urls.homepage) url = r.urls.homepage;
      else if (r.urls.github) url = r.urls.github;
      else if (Object.values(r.urls).length > 0) url = Object.values(r.urls)[0] as string;
    } else if (r.url) {
      url = r.url;
    }

    return {
      id: r.id || String(Math.random()),
      title: title,
      category: category,
      description: r.description || r.short_description || '',
      url: url,
      badge: badge,
      authorOrOrg: authorOrOrg,
    };
  });
};

const oldResources: ResourceItem[] = [
  // Keeping the most essential AI ones from before just in case they aren't in the JSON
  {
    id: 'v0-dev',
    title: 'v0 by Vercel',
    category: 'ai-coding-tools',
    description: 'AI-powered UI generation. Describe what you want and get production-ready React + Tailwind code instantly.',
    url: 'https://v0.dev',
    badge: 'Free Tier',
    authorOrOrg: 'Vercel',
  },
  {
    id: 'shadcn-ui',
    title: 'shadcn/ui',
    category: 'design-ui',
    description: 'Beautifully designed, accessible components built with Radix UI and Tailwind CSS. Copy-paste into your projects.',
    url: 'https://github.com/shadcn-ui/ui',
    badge: 'Open Source',
    authorOrOrg: 'shadcn',
  }
];

const newResources1 = extractResources(free1Data);
const newResources2 = extractResources(free2Data);

// Combine, removing duplicates by ID
const combined = [...oldResources, ...newResources1, ...newResources2];
const uniqueResourcesMap = new Map();
combined.forEach(r => uniqueResourcesMap.set(r.id, r));

export const RESOURCES: ResourceItem[] = Array.from(uniqueResourcesMap.values());

// Generate unique categories dynamically from the data
const allCategoryKeys = Array.from(new Set(RESOURCES.map(r => r.category)))
  .filter(Boolean)
  .sort();

export const RESOURCE_CATEGORIES = [
  { id: 'all', label: 'All' },
  ...allCategoryKeys.map(cat => {
    // Format category id to label (e.g., 'ai-coding-tools' -> 'AI Coding Tools')
    const label = cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return { id: cat, label };
  })
];
