import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除 output: 'export' 以支持中间件和服务端渲染
  // 如果需要静态导出，可以考虑使用 i18n 路由为每种语言生成单独的页面
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
        pathname: '/coins/images/**',
      },
    ],
  },
};

export default nextConfig;
