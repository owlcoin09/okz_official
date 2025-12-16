import { headers } from "next/headers";
import ThemeRegistry from "../components/ThemeRegistry";
import Footer from "../components/Footer";
import "./globals.css";
import LanguageProvider from "../components/LanguageProvider";
import { generatePageMetadata } from "@/lib/metadata";
import GlobalStructuredData from "../components/GlobalStructuredData";

// 支持的语言代码列表
const supportedLanguages = ['en', 'zh', 'ja', 'de', 'hi', 'fr', 'it', 'pt', 'es', 'nl', 'pl', 'sv', 'da'];
const defaultLanguage = 'en';

/**
 * 从请求头中获取检测到的语言
 */
async function getDetectedLanguage(): Promise<string> {
  const headersList = await headers();
  // 优先使用中间件设置的语言
  const detectedLang = headersList.get('x-detected-lang') || 
                       headersList.get('x-detected-locale') ||
                       defaultLanguage;
  
  // 如果中间件没有设置，尝试从 Accept-Language 检测
  if (detectedLang === defaultLanguage) {
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage) {
      const languages = acceptLanguage
        .split(',')
        .map((lang: string) => {
          const [code] = lang.trim().split(';');
          return code.toLowerCase().trim();
        });

      for (const code of languages) {
        const matchedLang = supportedLanguages.find((lang: string) => 
          code === lang || code.startsWith(lang + '-')
        );
        
        if (matchedLang) {
          return matchedLang === 'zh' ? 'zh-CN' : 
                 matchedLang === 'en' ? 'en-US' :
                 matchedLang === 'pt' ? 'pt-BR' :
                 matchedLang;
        }
        
        const baseLang = code.split('-')[0];
        if (supportedLanguages.includes(baseLang)) {
          return baseLang === 'zh' ? 'zh-CN' : 
                 baseLang === 'en' ? 'en-US' :
                 baseLang === 'pt' ? 'pt-BR' :
                 baseLang;
        }
      }
    }
  }
  
  // 将语言代码转换为标准的 HTML lang 属性格式
  return detectedLang === 'zh' ? 'zh-CN' : 
         detectedLang === 'en' ? 'en-US' :
         detectedLang === 'pt' ? 'pt-BR' :
         detectedLang;
}

// 使用默认语言（英文）生成根 metadata
// 注意：由于 layout 是服务端组件，lang 属性会根据请求头动态设置
export const metadata = generatePageMetadata('home', {
  locale: 'en',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 在服务端检测语言
  const htmlLang = await getDetectedLanguage();

  return (
    <html lang={htmlLang} suppressHydrationWarning>
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
