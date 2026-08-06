import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: [
    'robbie-thirty-hobby-here.trycloudflare.com',
    'versions-sacrifice-input-tickets.trycloudflare.com',
    'finish-they-properly-respiratory.trycloudflare.com'
  ],
};

export default nextConfig;
