'use client';

import { useEffect, useState } from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { languages } from '@/i18n/languages';

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, setLocale } = useLanguageStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // 初始化语言设置 - 只在首次加载时执行
    if (typeof window !== 'undefined' && !isInitialized) {
      try {
        const savedData = localStorage.getItem('language-storage');
        let savedLocale: string | null = null;
        
        if (savedData) {
          try {
            const parsed = JSON.parse(savedData);
            savedLocale = parsed?.state?.locale || null;
          } catch (e) {
            // 如果解析失败，忽略
          }
        }

        if (!savedLocale) {
          // 检测浏览器语言
          // 优先使用 navigator.languages（支持多语言偏好列表）
          const browserLanguages = navigator.languages || [navigator.language];
          const supportedLanguageCodes = languages.map(lang => lang.code);
          
          // 默认使用英语
          let detectedLocale = 'en';
          
          // 遍历浏览器语言列表，找到第一个支持的语言
          for (const browserLang of browserLanguages) {
            // 尝试完整匹配（如 zh-CN）
            const fullLang = browserLang.toLowerCase();
            const matchedLang = languages.find(lang => 
              fullLang === lang.code || fullLang.startsWith(lang.code + '-')
            );
            
            if (matchedLang) {
              detectedLocale = matchedLang.code;
              break;
            }
            
            // 尝试基础语言代码匹配（如 zh）
            const baseLang = browserLang.split('-')[0].toLowerCase();
            if (supportedLanguageCodes.includes(baseLang)) {
              detectedLocale = baseLang;
              break;
            }
          }
          
          setLocale(detectedLocale);
        }
        setIsInitialized(true);
      } catch (error) {
        // 如果出错，默认使用英语
        setLocale('en');
        setIsInitialized(true);
      }
    }
  }, [setLocale, isInitialized]);

  useEffect(() => {
    // 更新HTML lang属性
    if (typeof document !== 'undefined' && isInitialized) {
      // 将语言代码转换为标准的 HTML lang 属性格式
      const htmlLang = locale === 'zh' ? 'zh-CN' : 
                      locale === 'en' ? 'en-US' :
                      locale === 'pt' ? 'pt-BR' :
                      locale;
      document.documentElement.lang = htmlLang;
    }
  }, [locale, isInitialized]);

  return <>{children}</>;
}

