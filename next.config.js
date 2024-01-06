/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   styledComponents: true, // styled component 활성화
  // },
  // experimental: {
  //   serverActions: true, // App Router에서 server actions 활성화
  // },
  images: {
    domains: [], // 외부 이미지 uri
  },
  reactStrictMode: true,
}

module.exports = nextConfig
