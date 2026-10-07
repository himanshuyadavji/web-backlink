import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: process.cwd(),
  experimental: { optimizePackageImports: ["react"] },
  images: { remotePatterns: [{ protocol: "https", hostname: "www.raxiwingame.online" }] },
};

export default nextConfig;
