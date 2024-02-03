/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true, // styled component 활성화
  // },
  // experimental: {
  //   serverActions: true, // App Router에서 server actions 활성화
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ], // 외부 이미지 uri
  },
  reactStrictMode: true,
}

module.exports = nextConfig
