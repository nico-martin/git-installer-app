/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    modern: true,
  },
  images: {},
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: "@svgr/webpack",
    });

    return config;
  },
};

module.exports = nextConfig;
