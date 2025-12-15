import type { Metadata } from 'next';
import { getMetadataTranslation, getLocaleCode } from '@/i18n/metadata';

const baseUrl = 'https://www.okzquant.com';

// 分享图片配置 - 推荐尺寸 1200x630 for OpenGraph/Twitter/Telegram
// 当前图片为 1920x1280，可以工作但建议优化为 1200x630 以获得最佳分享效果
const defaultImage = {
  url: `${baseUrl}/images/hero-main.jpg`,
  width: 1200,
  height: 630,
  alt: 'OKZ Quantitative Trading Platform',
};

interface GenerateMetadataOptions {
  locale?: string;
  page?: 'home' | 'about' | 'markets' | 'services' | 'solutions';
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string | { url: string; width?: number; height?: number; alt?: string };
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * 生成多语言 SEO metadata
 * 优化了 OpenGraph、Twitter Card 和 Telegram 分享
 */
export function generateMetadata(options: GenerateMetadataOptions = {}): Metadata {
  const {
    locale = 'en', // 默认使用英文
    page = 'home',
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
  } = options;

  const meta = getMetadataTranslation(locale);
  const localeCode = getLocaleCode(locale);
  const pageMeta = meta[page];

  // 确定最终使用的标题和描述
  const finalTitle = title || pageMeta.title;
  const finalDescription = description || pageMeta.description;
  const finalKeywords = keywords || pageMeta.keywords;
  const finalUrl = url || baseUrl;
  
  // 处理图片
  let finalImage = defaultImage;
  if (image) {
    if (typeof image === 'string') {
      finalImage = {
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
        width: 1200,
        height: 630,
        alt: finalTitle,
      };
    } else {
      finalImage = {
        url: image.url.startsWith('http') ? image.url : `${baseUrl}${image.url}`,
        width: image.width || 1200,
        height: image.height || 630,
        alt: image.alt || finalTitle,
      };
    }
  }

  // 构建完整的 metadata
  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
      default: finalTitle,
      template: `%s | ${meta.siteName}`,
    },
    description: finalDescription,
    keywords: finalKeywords,
    authors: authors
      ? authors.map(name => (typeof name === 'string' ? { name } : name))
      : [{ name: 'OKZ Team' }],
    creator: 'OKZ',
    publisher: 'OKZ',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/okz-icon.svg', type: 'image/svg+xml' },
      ],
      shortcut: '/favicon.ico',
      apple: '/okz-icon.svg',
    },
    manifest: '/manifest.json',
    // OpenGraph - 用于 Facebook, LinkedIn, Telegram 等
    openGraph: {
      type,
      locale: localeCode,
      url: finalUrl,
      siteName: meta.siteName,
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: finalImage.url,
          width: finalImage.width,
          height: finalImage.height,
          alt: finalImage.alt,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors: authors.map(name => ({ name })) }),
    },
    // Twitter Card - 用于 X.com (Twitter)
    twitter: {
      card: 'summary_large_image', // 大图卡片，最佳分享效果
      title: finalTitle,
      description: finalDescription,
      images: [finalImage.url],
      creator: '@okzquant', // 如果有 Twitter 账号
      site: '@okzquant', // 如果有 Twitter 账号
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
    alternates: {
      canonical: finalUrl,
      languages: {
        'zh-CN': `${baseUrl}?lang=zh`,
        'en-US': `${baseUrl}?lang=en`,
        'ja-JP': `${baseUrl}?lang=ja`,
        'de-DE': `${baseUrl}?lang=de`,
        'hi-IN': `${baseUrl}?lang=hi`,
        'fr-FR': `${baseUrl}?lang=fr`,
        'it-IT': `${baseUrl}?lang=it`,
        'pt-BR': `${baseUrl}?lang=pt`,
        'es-ES': `${baseUrl}?lang=es`,
        'nl-NL': `${baseUrl}?lang=nl`,
        'pl-PL': `${baseUrl}?lang=pl`,
        'sv-SE': `${baseUrl}?lang=sv`,
        'da-DK': `${baseUrl}?lang=da`,
      },
    },
    category: 'Finance',
  };

  return metadata;
}

/**
 * 生成页面特定的 metadata
 */
export function generatePageMetadata(
  page: 'home' | 'about' | 'markets' | 'services' | 'solutions',
  options: Omit<GenerateMetadataOptions, 'page'> = {}
): Metadata {
  return generateMetadata({ ...options, page });
}

