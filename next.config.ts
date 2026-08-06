import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: [
    'robbie-thirty-hobby-here.trycloudflare.com',
    'versions-sacrifice-input-tickets.trycloudflare.com',
    'finish-they-properly-respiratory.trycloudflare.com',
    'alfred-officially-tours-rankings.trycloudflare.com'
  ],
};

export default nextConfig;
