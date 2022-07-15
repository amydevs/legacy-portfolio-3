/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GH_USERNAME: "jy1263"
  },
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
