import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.okzquant.com';
  const lastModified = new Date();
  
  // 静态页面路由 - 带有优先级和更新频率
  const staticRoutes: Array<{
    route: string;
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  }> = [
    { route: '', priority: 1.0, changeFrequency: 'daily' },
    { route: '/solutions', priority: 0.9, changeFrequency: 'daily' },
    { route: '/about', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/markets', priority: 0.8, changeFrequency: 'hourly' }, // 市场行情需要频繁更新
    { route: '/services', priority: 0.8, changeFrequency: 'weekly' },
    { route: '/solutions/quantitative', priority: 0.7, changeFrequency: 'weekly' },
    { route: '/solutions/wealth', priority: 0.7, changeFrequency: 'weekly' },
    { route: '/solutions/custom', priority: 0.7, changeFrequency: 'weekly' },
    { route: '/solutions/services', priority: 0.7, changeFrequency: 'weekly' },
  ];

  // 动态路由 - 策略详情页
  const strategyIds = ['1', '2', '3', '4'];
  const dynamicRoutes = strategyIds.map(id => ({
    route: `/solutions/${id}`,
    priority: 0.8,
    changeFrequency: 'weekly' as const,
  }));

  // 所有路由
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}

