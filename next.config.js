/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['cdn.cloudflare.steamstatic.com'] },
  typescript: { ignoreBuildErrors: true },
  eslint: {
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/games/horror-tycoon',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
