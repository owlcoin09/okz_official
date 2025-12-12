import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '财富管理',
  description: 'OKZ提供专业的财富管理服务，通过量化策略帮助客户实现资产增值，年化收益稳定，风险可控。',
  keywords: ['财富管理', '资产管理', '量化财富管理', '资产配置', '投资理财'],
  openGraph: {
    title: '财富管理 - OKZ量化交易平台',
    description: 'OKZ提供专业的财富管理服务，通过量化策略帮助客户实现资产增值。',
    url: 'https://www.okzquant.com/solutions/wealth',
    images: ['/images/feature-3.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/solutions/wealth',
  },
};

export default function WealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

