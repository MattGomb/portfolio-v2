/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
