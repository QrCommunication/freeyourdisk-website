import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Screenshots are fixed, pre-sized PNGs served with a ?v= cache-buster.
  // Skipping the optimizer keeps the version query valid and avoids per-image
  // serverless work on Vercel.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
