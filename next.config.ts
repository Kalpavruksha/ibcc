import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  // Enable strict mode for better dev experience
  reactStrictMode: true,
};

export default nextConfig;
