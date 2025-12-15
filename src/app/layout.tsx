import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry";
import Footer from "../components/Footer";
import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";
import { generatePageMetadata } from "@/lib/metadata";
import GlobalStructuredData from "../components/GlobalStructuredData";

// 使用默认语言（英文）生成根 metadata
// 注意：由于 Next.js 静态导出，这里使用默认语言
// 实际页面会根据浏览器语言自动切换，客户端会动态更新
export const metadata: Metadata = generatePageMetadata('home', {
  locale: 'en',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <LanguageProvider>
            {/* 全局 JSON-LD 结构化数据 */}
            <GlobalStructuredData />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
