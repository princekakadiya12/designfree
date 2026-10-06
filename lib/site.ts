// Site-wide constants. Edit here, not in components.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prefix a /public asset path with the deploy base path. */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const SITE = {
  name: 'Prince & Gargi Design',
  tagline: 'A working library for people who build the web',
  description:
    'Live website designs, hand-picked free tools most developers have never heard of, and a field guide to replicating any design with AI. Curated by Prince Kakadiya and Gargi.',
  url: 'https://princekakadiya12.github.io/designfree/',
  repo: 'https://github.com/princekakadiya12/designfree',
} as const;

export const OWNER = {
  name: 'Prince & Gargi',
  email: 'princekakadiya20@gmail.com',
  website: 'https://princekakadiya.tech',
  websiteLabel: 'princekakadiya.tech',
} as const;

export const GARGI = {
  name: 'Gargi',
  website: 'https://gargiui.netlify.app/',
  websiteLabel: 'gargiui.netlify.app',
} as const;

export const SUPPORT = {
  upiId: 'princekakadiya20-1@okicici',
  payeeName: 'Prince Kakadiya',
  qrImage: '/qr_code.png',
} as const;

export const COMMUNITY = {
  whatsapp: 'https://chat.whatsapp.com/GNiPtvKuaF89jYzlIZNhNU',
} as const;

export const NAV = [
  { href: '/projects/', label: 'Projects' },
  { href: '/resources/', label: 'Free tools' },
  { href: '/guide/', label: 'Guide' },
  { href: '/support/', label: 'Support' },
] as const;

export const upiLink = (amount?: number) => {
  const params = new URLSearchParams({
    pa: SUPPORT.upiId,
    pn: SUPPORT.payeeName,
    cu: 'INR',
    tn: 'Support DesignFree',
  });
  if (amount) params.set('am', String(amount));
  return `upi://pay?${params.toString()}`;
};
