import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '策略服务',
  description: 'OKZ提供完善的策略服务支持，包括策略执行、风险控制、技术支持、数据分析等全方位服务。',
  keywords: ['策略服务', '策略执行', '风险控制', '技术支持', '数据分析服务'],
  openGraph: {
    title: '策略服务 - OKZ量化交易平台',
    description: 'OKZ提供完善的策略服务支持，包括策略执行、风险控制、技术支持等全方位服务。',
    url: 'https://www.okzquant.com/solutions/services',
    images: ['/images/services.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/solutions/services',
  },
};

export default function SolutionsServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

