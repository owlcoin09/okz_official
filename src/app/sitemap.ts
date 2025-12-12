import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://okz.okzquant.com';
  
  // 静态页面路由
  const staticRoutes = [
    '',
    '/about',
    '/markets',
    '/services',
    '/solutions',
    '/solutions/quantitative',
    '/solutions/wealth',
    '/solutions/custom',
    '/solutions/services',
  ];

  // 动态路由 - 策略详情页
  const strategyIds = ['1', '2', '3', '4'];
  const dynamicRoutes = strategyIds.map(id => `/solutions/${id}`);

  // 所有路由
  const routes = [...staticRoutes, ...dynamicRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/solutions' ? 0.9 : 0.8,
  }));
}

