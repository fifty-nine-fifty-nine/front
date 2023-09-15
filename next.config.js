const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['k.kakaocdn.net'],
  },
};

module.exports = withVanillaExtract(nextConfig);