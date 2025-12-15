import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry";
import Footer from "../components/Footer";
import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";
import { generatePageMetadata } from "@/lib/metadata";

// 使用默认语言（中文）生成根 metadata
// 注意：由于 Next.js 静态导出，这里使用默认语言
// 实际页面可以使用 generateMetadata 函数动态生成
export const metadata: Metadata = generatePageMetadata('home', {
  locale: 'zh',
});

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
