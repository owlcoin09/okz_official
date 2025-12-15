import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('solutions', {
  locale: 'zh',
  title: '量化策略 - OKZ量化交易平台',
  description: 'OKZ提供多种量化交易策略，包括网格交易、趋势跟踪、套利策略等。经过市场验证，适合不同风险偏好的投资者。',
  keywords: ['量化策略', '量化交易策略', '网格交易', '趋势跟踪', '套利策略'],
  url: 'https://www.okzquant.com/solutions/quantitative',
  image: '/images/strategy-icon.jpg',
});

export default function QuantitativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

