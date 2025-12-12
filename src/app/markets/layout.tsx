import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '市场行情',
  description: '实时查看OKX交易所的市场行情，包括BTC、ETH等主流加密货币价格、涨跌幅、成交量等实时数据。',
  keywords: ['市场行情', '加密货币价格', 'BTC价格', 'ETH价格', 'OKX交易所', '实时行情', '数字货币行情'],
  openGraph: {
    title: '市场行情 - OKZ量化交易平台',
    description: '实时查看OKX交易所的市场行情，包括BTC、ETH等主流加密货币的实时价格和交易数据。',
    url: 'https://www.okzquant.com/markets',
    images: ['/images/chart-bg.jpg'],
  },
  alternates: {
    canonical: 'https://www.okzquant.com/markets',
  },
};

export default function MarketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

