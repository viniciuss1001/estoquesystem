import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: /src-tauri\/target/,
    });
    return config;
  },
  reactStrictMode: true,
  output: "standalone",
  distDir: ".next",
};

export default nextConfig
