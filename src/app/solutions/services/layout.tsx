import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('solutions', {
  locale: 'zh',
  title: '策略服务 - OKZ量化交易平台',
  description: 'OKZ提供完善的策略服务支持，包括策略执行、风险控制、技术支持、数据分析等全方位服务。',
  keywords: ['策略服务', '策略执行', '风险控制', '技术支持', '数据分析服务'],
  url: 'https://www.okzquant.com/solutions/services',
  image: '/images/services.jpg',
});

export default function SolutionsServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

