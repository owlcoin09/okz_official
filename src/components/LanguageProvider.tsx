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
          const browserLang = navigator.language.split('-')[0].toLowerCase();
          const supportedLanguageCodes = languages.map(lang => lang.code);
          
          // 检查是否支持浏览器语言
          let detectedLocale = 'en'; // 默认使用英语
          
          if (supportedLanguageCodes.includes(browserLang)) {
            detectedLocale = browserLang;
          } else {
            // 尝试匹配完整语言代码（如 zh-CN）
            const fullLang = navigator.language.toLowerCase();
            const matchedLang = languages.find(lang => 
              fullLang.startsWith(lang.code + '-') || fullLang === lang.code
            );
            if (matchedLang) {
              detectedLocale = matchedLang.code;
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
      document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale;
    }
  }, [locale, isInitialized]);

  return <>{children}</>;
}

