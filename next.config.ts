/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/register',
        destination: 'http://localhost:3333/register',
      },
      {
        source: '/login',
        destination: 'http://localhost:3333/login',
      },
    ];
  },
};

module.exports = nextConfig;
