/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "github.com"
    ],
  },
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
