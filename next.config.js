/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['upload.wikimedia.org', 'res.cloudinary.com', 'cdn.freebiesupply.com']
  },
};

module.exports = nextConfig;
