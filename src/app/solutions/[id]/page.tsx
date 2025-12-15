import { strategyDetails } from './strategyData';
import StrategyDetailClient from './StrategyDetailClient';
import type { Metadata } from 'next';

// 为静态导出生成所有可能的路径参数
export function generateStaticParams() {
  return Object.keys(strategyDetails).map((id) => ({
    id: id,
  }));
}

// 生成动态 metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const strategy = strategyDetails[id];

  if (!strategy) {
    return {
      title: '策略详情',
    };
  }

  const { generateMetadata: generateMeta } = await import('@/lib/metadata');
  
  return generateMeta({
    locale: 'en',
    page: 'solutions',
    title: `${strategy.name} - ${strategy.type}`,
    description: `${strategy.description}。${strategy.expectedReturn}，风险等级：${strategy.riskLevel}，最低投资：${strategy.minInvestment}。${strategy.details.substring(0, 100)}...`,
    keywords: [
      strategy.name,
      strategy.type,
      '量化策略',
      '量化交易',
      strategy.riskLevel + '风险',
      'OKX量化',
    ],
    url: `https://www.okzquant.com/solutions/${id}`,
    image: strategy.image,
  });
}

export default async function StrategyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const strategy = strategyDetails[id];

  if (!strategy) {
    // 如果策略不存在，返回 null（在 generateStaticParams 中已经定义了所有有效的 id）
    return null;
  }

  return <StrategyDetailClient strategy={strategy} />;
}
