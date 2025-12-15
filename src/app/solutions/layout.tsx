import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata: Metadata = generatePageMetadata('solutions', {
  locale: 'en',
  url: 'https://www.okzquant.com/solutions',
  image: '/images/strategy-icon.jpg',
});

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

