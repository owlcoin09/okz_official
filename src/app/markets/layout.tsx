import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('markets', {
  locale: 'en',
  url: 'https://www.okzquant.com/markets',
  image: '/images/chart-bg.jpg',
});

export default function MarketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

