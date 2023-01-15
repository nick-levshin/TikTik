/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['sun9-19.userapi.com', 'lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig;
