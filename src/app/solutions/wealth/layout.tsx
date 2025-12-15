import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('solutions', {
  locale: 'zh',
  title: '财富管理 - OKZ量化交易平台',
  description: 'OKZ提供专业的财富管理服务，通过量化策略帮助客户实现资产增值，年化收益稳定，风险可控。',
  keywords: ['财富管理', '资产管理', '量化财富管理', '资产配置', '投资理财'],
  url: 'https://www.okzquant.com/solutions/wealth',
  image: '/images/feature-3.jpg',
});

export default function WealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

