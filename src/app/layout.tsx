import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry";
import Footer from "../components/Footer";
import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.okzquant.com'),
  title: {
    default: "OKZ - 专业的量化交易平台 | OKX交易所量化策略",
    template: "%s | OKZ量化交易平台",
  },
  description: "OKZ是专业的量化交易平台，基于OKX交易所提供安全、高效、智能的量化交易解决方案。50+种策略选择，年化收益25%+，累计管理资产超过10亿美元。",
  keywords: [
    "量化交易",
    "量化策略",
    "OKX交易所",
    "自动化交易",
    "量化投资",
    "数字货币交易",
    "加密货币量化",
    "量化交易平台",
    "量化交易系统",
    "策略回测",
    "风险管理",
    "资产配置",
  ],
  authors: [{ name: "OKZ Team" }],
  creator: "OKZ",
  publisher: "OKZ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/okz-icon.svg',
    shortcut: '/okz-icon.svg',
    apple: '/okz-icon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.okzquant.com',
    siteName: 'OKZ量化交易平台',
    title: 'OKZ - 专业的量化交易平台 | OKX交易所量化策略',
    description: 'OKZ是专业的量化交易平台，基于OKX交易所提供安全、高效、智能的量化交易解决方案。50+种策略选择，年化收益25%+。',
    images: [
      {
        url: '/images/hero-main.jpg',
        width: 1200,
        height: 630,
        alt: 'OKZ量化交易平台',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OKZ - 专业的量化交易平台',
    description: '基于OKX交易所的专业量化交易解决方案，50+种策略，年化收益25%+',
    images: ['/images/hero-main.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // 如果有Google Search Console验证码，可以在这里添加
    // google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.okzquant.com',
  },
  category: 'Finance',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <ThemeRegistry>
          <LanguageProvider>
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
