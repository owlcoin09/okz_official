'use client';

import { useEffect } from 'react';
import { useLanguageStore } from '@/store/languageStore';
import { getMetadataTranslation } from '@/i18n/metadata';

/**
 * 动态更新页面 metadata 的客户端组件
 * 根据当前语言动态更新 title、description 等
 */
export default function DynamicMetadata({
  page = 'home',
}: {
  page?: 'home' | 'about' | 'markets' | 'services' | 'solutions';
}) {
  const { locale } = useLanguageStore();

  useEffect(() => {
    const meta = getMetadataTranslation(locale);
    const pageMeta = meta[page];

    // 更新页面标题
    if (pageMeta?.title) {
      document.title = pageMeta.title;
    }

    // 更新 meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (pageMeta?.description) {
      metaDescription.setAttribute('content', pageMeta.description);
    }

    // 更新 OpenGraph title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    if (pageMeta?.title) {
      ogTitle.setAttribute('content', pageMeta.title);
    }

    // 更新 OpenGraph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    if (pageMeta?.description) {
      ogDescription.setAttribute('content', pageMeta.description);
    }

    // 更新 Twitter title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    if (pageMeta?.title) {
      twitterTitle.setAttribute('content', pageMeta.title);
    }

    // 更新 Twitter description
    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    if (pageMeta?.description) {
      twitterDescription.setAttribute('content', pageMeta.description);
    }
  }, [locale, page]);

  return null;
}

