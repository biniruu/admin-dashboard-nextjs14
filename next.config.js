/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  reactStrictMode: true,
  typescript: {
    tsconfigPath: process.env.NODE_ENV === 'development' ? './tsconfig.json' : './tsconfig.build.json',
  },
}

module.exports = nextConfig
