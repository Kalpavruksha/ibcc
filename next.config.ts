import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents your site being embedded in an iframe on another site (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Prevents browsers from guessing file types (MIME sniffing attacks)
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send referrer within your own domain
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable access to camera/mic/location from your pages
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Strict Transport Security — forces HTTPS
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Basic Content Security Policy
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
