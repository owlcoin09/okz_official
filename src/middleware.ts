import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 支持的语言代码列表
const supportedLanguages = ['en', 'zh', 'ja', 'de', 'hi', 'fr', 'it', 'pt', 'es', 'nl', 'pl', 'sv', 'da'];
const defaultLanguage = 'en';

/**
 * 从 Accept-Language 请求头中检测语言
 */
function detectLanguageFromHeaders(acceptLanguage: string | null): string {
  if (!acceptLanguage) {
    return defaultLanguage;
  }

  // 解析 Accept-Language 头（格式：en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7）
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const [code, q = 'q=1.0'] = lang.trim().split(';');
      const quality = parseFloat(q.split('=')[1] || '1.0');
      return { code: code.toLowerCase().trim(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // 查找第一个支持的语言
  for (const { code } of languages) {
    // 尝试完整匹配（如 zh-CN）
    const matchedLang = supportedLanguages.find(lang => 
      code === lang || code.startsWith(lang + '-')
    );
    
    if (matchedLang) {
      return matchedLang;
    }
    
    // 尝试基础语言代码匹配（如 zh）
    const baseLang = code.split('-')[0];
    if (supportedLanguages.includes(baseLang)) {
      return baseLang;
    }
  }

  return defaultLanguage;
}

export function middleware(request: NextRequest) {
  // 检测语言
  const acceptLanguage = request.headers.get('accept-language');
  const detectedLang = detectLanguageFromHeaders(acceptLanguage);
  
  // 将语言代码转换为标准的 HTML lang 属性格式
  const htmlLang = detectedLang === 'zh' ? 'zh-CN' : 
                  detectedLang === 'en' ? 'en-US' :
                  detectedLang === 'pt' ? 'pt-BR' :
                  detectedLang;

  // 创建响应
  const response = NextResponse.next();
  
  // 将检测到的语言存储在请求头中，供 layout 使用
  response.headers.set('x-detected-lang', htmlLang);
  response.headers.set('x-detected-locale', detectedLang);

  return response;
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径，除了：
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - 静态资源文件
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};

