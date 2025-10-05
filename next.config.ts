import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',             // static export
  basePath: '/Birthday_Wish',   // GitHub Pages repo name
  assetPrefix: './',            // relative paths fix CSS/JS
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'dc42isc7oti09.cloudfront.net', pathname: '/**' },
    ],
  },
};

export default nextConfig;
