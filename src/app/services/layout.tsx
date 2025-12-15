import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('services', {
  locale: 'en',
  url: 'https://www.okzquant.com/services',
  image: '/images/services.jpg',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

