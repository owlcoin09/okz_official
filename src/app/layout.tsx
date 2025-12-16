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
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // 支持的语言代码列表
                  const supportedLanguages = ['en', 'zh', 'ja', 'de', 'hi', 'fr', 'it', 'pt', 'es', 'nl', 'pl', 'sv', 'da'];
                  
                  // 检查 localStorage 中是否有保存的语言设置
                  let detectedLang = 'en';
                  const savedData = localStorage.getItem('language-storage');
                  
                  if (savedData) {
                    try {
                      const parsed = JSON.parse(savedData);
                      const savedLocale = parsed?.state?.locale;
                      if (savedLocale && supportedLanguages.includes(savedLocale)) {
                        detectedLang = savedLocale;
                      }
                    } catch (e) {
                      // 解析失败，继续使用浏览器语言检测
                    }
                  }
                  
                  // 如果没有保存的语言，检测浏览器语言
                  if (detectedLang === 'en' || !savedData) {
                    const browserLanguages = navigator.languages || [navigator.language];
                    
                    for (const browserLang of browserLanguages) {
                      // 尝试完整匹配（如 zh-CN）
                      const fullLang = browserLang.toLowerCase();
                      const matchedLang = supportedLanguages.find(lang => 
                        fullLang === lang || fullLang.startsWith(lang + '-')
                      );
                      
                      if (matchedLang) {
                        detectedLang = matchedLang;
                        break;
                      }
                      
                      // 尝试基础语言代码匹配（如 zh）
                      const baseLang = browserLang.split('-')[0].toLowerCase();
                      if (supportedLanguages.includes(baseLang)) {
                        detectedLang = baseLang;
                        break;
                      }
                    }
                  }
                  
                  // 将语言代码转换为标准的 HTML lang 属性格式
                  const htmlLang = detectedLang === 'zh' ? 'zh-CN' : 
                                  detectedLang === 'en' ? 'en-US' :
                                  detectedLang === 'pt' ? 'pt-BR' :
                                  detectedLang;
                  
                  // 立即设置 HTML lang 属性
                  document.documentElement.lang = htmlLang;
                } catch (error) {
                  // 如果出错，保持默认的 'en'
                }
              })();
            `,
          }}
        />
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
