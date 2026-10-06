import type { NextConfig } from 'next';

// GitHub Pages serves this site from https://<user>.github.io/designfree.
// Only apply the sub-path in production so `npm run dev` works at localhost:3000/.
const basePath = process.env.NODE_ENV === 'production' ? '/designfree' : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
