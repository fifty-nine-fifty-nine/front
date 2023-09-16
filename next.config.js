const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['k.kakaocdn.net', 'firebasestorage.googleapis.com', 'oaidalleapiprodscus.blob.core.windows.net'],
  },
  reactStrictMode: false,
};

module.exports = withVanillaExtract({
  ...nextConfig,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
