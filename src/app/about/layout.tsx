import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们',
  description: '了解OKZ量化交易平台：10年+行业经验的专业团队，银行级安全标准，7x24小时稳定运行，为全球投资者提供专业的量化交易服务。',
  keywords: ['关于OKZ', '公司介绍', '团队', '量化交易平台', '专业团队'],
  openGraph: {
    title: '关于我们 - OKZ量化交易平台',
    description: '了解OKZ量化交易平台：10年+行业经验的专业团队，银行级安全标准，7x24小时稳定运行。',
    url: 'https://www.okzquant.com/about',
    images: ['/images/about-company.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

