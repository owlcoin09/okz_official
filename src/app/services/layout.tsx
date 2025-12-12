import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '公司服务',
  description: 'OKZ为全球投资者提供全方位的量化交易服务：策略执行、资产管理、风险控制、技术支持、客户服务等专业服务。',
  keywords: ['量化交易服务', '资产管理', '风险控制', '技术支持', '客户服务', '量化交易平台服务'],
  openGraph: {
    title: '公司服务 - OKZ量化交易平台',
    description: 'OKZ为全球投资者提供全方位的量化交易服务：策略执行、资产管理、风险控制、技术支持等。',
    url: 'https://www.okzquant.com/services',
    images: ['/images/services.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

