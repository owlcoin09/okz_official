import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '量化策略',
  description: '探索OKZ提供的50+种量化交易策略，包括网格交易、趋势跟踪、套利策略等。年化收益25%+，适合不同风险偏好的投资者。',
  keywords: ['量化策略', '交易策略', '网格交易', '趋势跟踪', '套利策略', '量化投资策略'],
  openGraph: {
    title: '量化策略 - OKZ量化交易平台',
    description: '探索OKZ提供的50+种量化交易策略，年化收益25%+，适合不同风险偏好的投资者。',
    url: 'https://www.okzquant.com/solutions',
    images: ['/images/strategy-icon.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

