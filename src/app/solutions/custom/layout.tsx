import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('solutions', {
  locale: 'zh',
  title: '定制策略 - OKZ量化交易平台',
  description: 'OKZ提供专业的定制量化策略服务，根据您的投资需求、风险偏好和资金规模，量身定制专属交易策略。',
  keywords: ['定制策略', '量化策略定制', '策略设计', '策略回测', '策略优化'],
  url: 'https://www.okzquant.com/solutions/custom',
  image: '/images/feature-1.jpg',
});

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

