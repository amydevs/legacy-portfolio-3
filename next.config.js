/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/img/",
    domains: [
      "github.com"
    ]
  }
}

module.exports = nextConfig
