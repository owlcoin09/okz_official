import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('about', {
  locale: 'en',
  url: 'https://www.okzquant.com/about',
  image: '/images/about-company.jpg',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

