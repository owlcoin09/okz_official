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

  return {
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
    openGraph: {
      title: `${strategy.name} - OKZ量化交易平台`,
      description: `${strategy.description}。${strategy.expectedReturn}，风险等级：${strategy.riskLevel}。`,
      url: `https://www.okzquant.com/solutions/${id}`,
      images: [strategy.image],
    },
    alternates: {
      canonical: `https://www.okzquant.com/solutions/${id}`,
    },
  };
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
