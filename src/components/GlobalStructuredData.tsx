'use client';

import { useLanguageStore } from '@/store/languageStore';
import StructuredData from './StructuredData';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/jsonld';

/**
 * 全局结构化数据组件
 * 在所有页面中显示，包含 Organization 和 WebSite schema
 */
export default function GlobalStructuredData() {
  const { locale } = useLanguageStore();

  const organizationSchema = generateOrganizationSchema(locale);
  const websiteSchema = generateWebSiteSchema(locale);

  return (
    <>
      <StructuredData data={organizationSchema} id="global-organization-schema" />
      <StructuredData data={websiteSchema} id="global-website-schema" />
    </>
  );
}

