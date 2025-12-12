import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '定制策略',
  description: 'OKZ提供专业的定制量化策略服务，根据您的投资需求、风险偏好和资金规模，量身定制专属交易策略。',
  keywords: ['定制策略', '量化策略定制', '策略设计', '策略回测', '策略优化'],
  openGraph: {
    title: '定制策略 - OKZ量化交易平台',
    description: 'OKZ提供专业的定制量化策略服务，根据您的需求量身定制专属交易策略。',
    url: 'https://www.okzquant.com/solutions/custom',
    images: ['/images/feature-1.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/solutions/custom',
  },
};

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

