import { strategyDetails } from './strategyData';
import StrategyDetailClient from './StrategyDetailClient';

// 为静态导出生成所有可能的路径参数
export function generateStaticParams() {
  return Object.keys(strategyDetails).map((id) => ({
    id: id,
  }));
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
