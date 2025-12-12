import type { Metadata } from "next";
import ThemeRegistry from "../components/ThemeRegistry";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "OKZ - 量化交易平台",
  description: "专业的量化交易平台，基于OKX交易所",
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
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
