import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules = config.module.rules.map((rule: any) => {
      if (rule.test?.toString().includes("svg")) {
        return { ...rule, test: /\.(jpg|jpeg|png|gif|webp|ico|bmp|tiff)$/i };
      }
      return rule
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config
  },
}

export default nextConfig