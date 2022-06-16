/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['cdn.cloudflare.steamstatic.com'] },
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
