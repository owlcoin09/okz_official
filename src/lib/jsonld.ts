// JSON-LD 结构化数据生成工具
// 用于 SEO 优化，帮助搜索引擎更好地理解网站内容

import { getMetadataTranslation } from '@/i18n/metadata';
import { getTranslation } from '@/i18n/translations';

const baseUrl = 'https://www.okzquant.com';

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  logo: string;
  image?: string;
  address?: {
    '@type': string;
    addressCountry: string;
    addressLocality?: string;
    addressRegion?: string;
    streetAddress?: string;
  };
  contactPoint?: {
    '@type': string;
    telephone?: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
}

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description?: string;
  publisher?: {
    '@type': string;
    name: string;
  };
  potentialAction?: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
  hasPart?: Array<{
    '@type': string;
    name: string;
    url: string;
  }>;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ArticleSchema {
  '@context': string;
  '@type': string;
  headline: string;
  description: string;
  image?: string | string[];
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name: string;
  };
  publisher?: {
    '@type': string;
    name: string;
    logo?: {
      '@type': string;
      url: string;
    };
  };
}

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  image?: string | string[];
  brand?: {
    '@type': string;
    name: string;
  };
  offers?: {
    '@type': string;
    priceCurrency: string;
    price?: string;
    availability?: string;
    url?: string;
  };
  aggregateRating?: {
    '@type': string;
    ratingValue: string;
    reviewCount: string;
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export interface SiteNavigationElementSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
}

/**
 * 生成组织（Organization）结构化数据
 */
export function generateOrganizationSchema(locale: string = 'en'): OrganizationSchema {
  const meta = getMetadataTranslation(locale);
  
  // 地址翻译映射
  const addressTranslations: Record<string, { locality: string; region: string }> = {
    zh: { locality: '北京', region: '朝阳区' },
    en: { locality: 'Beijing', region: 'Chaoyang District' },
    ja: { locality: '北京', region: '朝陽区' },
    de: { locality: 'Peking', region: 'Chaoyang Bezirk' },
    hi: { locality: 'बीजिंग', region: 'चाओयांग जिला' },
    fr: { locality: 'Pékin', region: 'District de Chaoyang' },
    it: { locality: 'Pechino', region: 'Distretto di Chaoyang' },
    pt: { locality: 'Pequim', region: 'Distrito de Chaoyang' },
    es: { locality: 'Pekín', region: 'Distrito de Chaoyang' },
    nl: { locality: 'Peking', region: 'Chaoyang District' },
    pl: { locality: 'Pekin', region: 'Dzielnica Chaoyang' },
    sv: { locality: 'Peking', region: 'Chaoyang-distriktet' },
    da: { locality: 'Beijing', region: 'Chaoyang-distriktet' },
  };
  
  const address = addressTranslations[locale] || addressTranslations.en;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: meta.siteName,
    description: meta.defaultDescription,
    url: baseUrl,
    logo: `${baseUrl}/okz-logo.svg`,
    image: `${baseUrl}/images/hero-main.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CN',
      addressLocality: address.locality,
      addressRegion: address.region,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-400-888-8888',
      contactType: 'customer service',
      email: 'support@okzquant.com',
    },
    sameAs: [
      // 如果有社交媒体账号，可以添加
      // 'https://twitter.com/okzquant',
      // 'https://www.facebook.com/okzquant',
      // 'https://www.linkedin.com/company/okzquant',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '10000',
    },
  };
}

/**
 * 生成网站（WebSite）结构化数据
 */
export function generateWebSiteSchema(locale: string = 'en'): WebSiteSchema {
  const meta = getMetadataTranslation(locale);
  const t = getTranslation(locale);
  
  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.markets, href: '/markets' },
    { label: t.nav.solutions, href: '/solutions' },
    { label: t.nav.about, href: '/about' },
  ];
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: meta.siteName,
    url: baseUrl,
    description: meta.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: meta.siteName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    hasPart: navItems.map(item => ({
      '@type': 'SiteNavigationElement',
      name: item.label,
      url: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
    })),
  };
}

/**
 * 生成面包屑（BreadcrumbList）结构化数据
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * 生成文章（Article）结构化数据
 */
export function generateArticleSchema(
  title: string,
  description: string,
  options: {
    image?: string | string[];
    datePublished?: string;
    dateModified?: string;
    author?: string;
    locale?: string;
  } = {}
): ArticleSchema {
  const { image, datePublished, dateModified, author, locale = 'en' } = options;
  const meta = getMetadataTranslation(locale);
  
  const schema: ArticleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    publisher: {
      '@type': 'Organization',
      name: meta.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/okz-logo.svg`,
      },
    },
  };

  if (image) {
    schema.image = Array.isArray(image)
      ? image.map(img => (img.startsWith('http') ? img : `${baseUrl}${img}`))
      : image.startsWith('http')
      ? image
      : `${baseUrl}${image}`;
  }

  if (datePublished) {
    schema.datePublished = datePublished;
  }

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  if (author) {
    schema.author = {
      '@type': 'Person',
      name: author,
    };
  }

  return schema;
}

/**
 * 生成产品/服务（Product/Service）结构化数据
 */
export function generateProductSchema(
  name: string,
  description: string,
  options: {
    image?: string | string[];
    price?: string;
    priceCurrency?: string;
    availability?: string;
    ratingValue?: string;
    reviewCount?: string;
    locale?: string;
  } = {}
): ProductSchema {
  const {
    image,
    price,
    priceCurrency = 'USDT',
    availability = 'https://schema.org/InStock',
    ratingValue,
    reviewCount,
  } = options;

  const schema: ProductSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: 'OKZ', // 品牌名称在所有语言中保持一致
    },
  };

  if (image) {
    schema.image = Array.isArray(image)
      ? image.map(img => (img.startsWith('http') ? img : `${baseUrl}${img}`))
      : image.startsWith('http')
      ? image
      : `${baseUrl}${image}`;
  }

  if (price) {
    schema.offers = {
      '@type': 'Offer',
      priceCurrency: priceCurrency,
      price: price,
      availability: availability,
      url: baseUrl,
    };
  }

  if (ratingValue && reviewCount) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: ratingValue,
      reviewCount: reviewCount,
    };
  }

  return schema;
}

/**
 * 生成服务（Service）结构化数据
 */
export function generateServiceSchema(
  name: string,
  description: string,
  options: {
    serviceType?: string;
    areaServed?: string;
    locale?: string;
  } = {}
): ServiceSchema {
  const { serviceType, areaServed, locale = 'en' } = options;
  const meta = getMetadataTranslation(locale);

  const schema: ServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: meta.siteName,
    },
  };

  if (serviceType) {
    schema.serviceType = serviceType;
  }

  if (areaServed) {
    schema.areaServed = areaServed;
  }

  return schema;
}

/**
 * 生成 FAQ（FAQPage）结构化数据
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * 生成网站导航（SiteNavigationElement）结构化数据
 */
export function generateSiteNavigationElementSchema(locale: string = 'en'): SiteNavigationElementSchema[] {
  const t = getTranslation(locale);
  
  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.markets, href: '/markets' },
    { label: t.nav.solutions, href: '/solutions' },
    { label: t.nav.about, href: '/about' },
  ];
  
  return navItems.map(item => ({
    '@context': 'https://schema.org',
    '@type': 'SiteNavigationElement',
    name: item.label,
    url: item.href.startsWith('http') ? item.href : `${baseUrl}${item.href}`,
  }));
}

