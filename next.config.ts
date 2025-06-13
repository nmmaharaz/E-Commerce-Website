import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
      }
    ],
  },
};

export default nextConfig;
