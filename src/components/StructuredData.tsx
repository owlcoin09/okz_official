'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: object | object[];
  id?: string;
}

/**
 * JSON-LD 结构化数据组件
 * 支持单个对象或对象数组
 * 用于 SEO 优化，帮助搜索引擎理解页面内容
 */
export default function StructuredData({ data, id }: StructuredDataProps) {
  useEffect(() => {
    // 支持多个 JSON-LD 对象
    const schemas = Array.isArray(data) ? data : [data];
    const scriptIds: string[] = [];

    schemas.forEach((schema, index) => {
      const scriptId = id || `structured-data-${index}`;
      scriptIds.push(scriptId);

      // 如果已存在，先移除
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      script.text = JSON.stringify(schema);
      script.setAttribute('data-schema-type', schema['@type'] || 'unknown');
      
      document.head.appendChild(script);
    });

    return () => {
      // 清理所有创建的脚本
      scriptIds.forEach(scriptId => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      });
    };
  }, [data, id]);

  return null;
}

