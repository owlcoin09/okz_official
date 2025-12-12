export type TradingMethod = 'okx_token' | 'platform' | 'custom' | 'api';

export type StrategyDetail = {
  id: string;
  name: string;
  description: string;
  type: string;
  category?: 'trading' | 'wealth';
  riskLevel: '低' | '中' | '高';
  expectedReturn: string;
  minInvestment: string;
  chartData: {
    dates: string[];
    profits: number[];
    totalReturn: number;
  };
  details: string;
  features: string[];
  image: string;
  tradingMethods?: TradingMethod[];
};

export const strategyDetails: Record<string, StrategyDetail> = {
  '1': {
    id: '1',
    name: '网格交易策略',
    description: '在震荡行情中通过买卖价差获利，适合波动较大的市场',
    type: '震荡策略',
    riskLevel: '低',
    expectedReturn: '年化收益 15-25%',
    minInvestment: '最低 1000 USDT',
    chartData: {
      dates: [
        '2024-01',
        '2024-02',
        '2024-03',
        '2024-04',
        '2024-05',
        '2024-06',
        '2024-07',
        '2024-08',
        '2024-09',
        '2024-10',
        '2024-11',
        '2024-12',
      ],
      profits: [2.5, 5.2, 8.1, 10.5, 13.2, 15.8, 18.5, 21.2, 23.8, 26.5, 28.9, 31.2],
      totalReturn: 31.2,
    },
    details: `网格交易策略是一种在震荡市场中非常有效的量化交易策略。它通过在预设的价格区间内设置多个买卖网格，利用价格的上下波动来获取利润。

策略原理：
- 在选定的价格区间内，自动设置多个买入和卖出订单
- 当价格下跌触发买入网格时，自动买入
- 当价格上涨触发卖出网格时，自动卖出
- 通过买卖价差不断积累利润

适用场景：
- 震荡行情，价格在一定范围内波动
- 横盘整理阶段
- 波动性较大的市场

优势：
- 风险相对较低
- 自动化执行，无需人工干预
- 在震荡市场中收益稳定
- 资金利用率高`,
    features: [
      '自动网格管理',
      '风险控制机制',
      '24小时运行',
      '实时监控',
      '历史回测验证',
    ],
    image: '/images/strategy-icon.jpg',
    category: 'trading',
    tradingMethods: ['okx_token', 'platform', 'custom', 'api'],
  },
  '2': {
    id: '2',
    name: '趋势跟踪策略',
    description: '识别并跟随市场趋势，在趋势形成时及时入场，适合趋势明显的市场',
    type: '趋势策略',
    riskLevel: '中',
    expectedReturn: '年化收益 25-40%',
    minInvestment: '最低 5000 USDT',
    chartData: {
      dates: [
        '2024-01',
        '2024-02',
        '2024-03',
        '2024-04',
        '2024-05',
        '2024-06',
        '2024-07',
        '2024-08',
        '2024-09',
        '2024-10',
        '2024-11',
        '2024-12',
      ],
      profits: [3.2, 7.5, 12.8, 18.5, 22.3, 26.8, 31.5, 35.2, 38.9, 42.5, 45.8, 48.5],
      totalReturn: 48.5,
    },
    details: `趋势跟踪策略是一种基于技术分析的量化交易策略，通过识别和跟随市场趋势来获取利润。

策略原理：
- 使用多种技术指标（如移动平均线、MACD、RSI等）识别趋势
- 在趋势确认时及时入场
- 设置止损和止盈点，控制风险
- 趋势反转时及时退出

适用场景：
- 明显的上涨或下跌趋势
- 单边行情
- 波动性适中的市场

优势：
- 在趋势市场中收益丰厚
- 利用市场的惯性效应
- 多种技术指标组合，提高准确性
- 自动止损保护`,
    features: [
      '多指标组合',
      '智能止损止盈',
      '趋势识别算法',
      '仓位管理',
      '实时风险监控',
    ],
    image: '/images/feature-1.jpg',
    category: 'trading',
    tradingMethods: ['okx_token', 'platform', 'custom', 'api'],
  },
  '3': {
    id: '3',
    name: '套利策略',
    description: '利用不同市场或不同品种之间的价差进行套利，风险极低',
    type: '套利策略',
    riskLevel: '低',
    expectedReturn: '年化收益 10-18%',
    minInvestment: '最低 10000 USDT',
    chartData: {
      dates: [
        '2024-01',
        '2024-02',
        '2024-03',
        '2024-04',
        '2024-05',
        '2024-06',
        '2024-07',
        '2024-08',
        '2024-09',
        '2024-10',
        '2024-11',
        '2024-12',
      ],
      profits: [1.2, 2.5, 3.8, 5.2, 6.8, 8.5, 10.2, 11.8, 13.5, 15.2, 16.8, 18.2],
      totalReturn: 18.2,
    },
    details: `套利策略是一种低风险的量化交易策略，通过捕捉不同市场或品种之间的价格差异来获取无风险或低风险利润。

策略类型：
- 期现套利：利用现货和期货之间的价差
- 跨市场套利：利用不同交易所之间的价差
- 跨品种套利：利用相关品种之间的价差
- 统计套利：基于历史统计关系的套利

策略原理：
- 实时监控多个市场或品种的价格
- 发现价差超过预设阈值时，同时进行买卖操作
- 价差回归时平仓获利

适用场景：
- 市场效率较低时
- 流动性充足的品种
- 价差波动较大的时段

优势：
- 风险极低
- 收益稳定
- 几乎不受市场方向影响
- 资金利用效率高`,
    features: [
      '多市场监控',
      '毫秒级执行',
      '风险对冲',
      '自动价差计算',
      '实时预警系统',
    ],
    image: '/images/feature-2.jpg',
    category: 'trading',
    tradingMethods: ['okx_token', 'platform', 'custom', 'api'],
  },
  '4': {
    id: '4',
    name: '量化选股策略',
    description: '基于多因子模型和机器学习算法，自动筛选优质交易标的',
    type: '选股策略',
    riskLevel: '中',
    expectedReturn: '年化收益 30-50%',
    minInvestment: '最低 3000 USDT',
    chartData: {
      dates: [
        '2024-01',
        '2024-02',
        '2024-03',
        '2024-04',
        '2024-05',
        '2024-06',
        '2024-07',
        '2024-08',
        '2024-09',
        '2024-10',
        '2024-11',
        '2024-12',
      ],
      profits: [4.5, 9.2, 14.8, 21.5, 28.3, 35.2, 42.8, 48.5, 54.2, 58.9, 62.5, 65.8],
      totalReturn: 65.8,
    },
    details: `量化选股策略结合了多因子模型、机器学习算法和大数据分析，自动筛选具有投资价值的交易标的。

策略原理：
- 构建多因子模型，综合评估标的的各项指标
- 使用机器学习算法预测未来表现
- 动态调整持仓组合
- 持续优化模型参数

评估因子：
- 技术指标：价格动量、成交量、波动率等
- 基本面：市值、流动性、交易活跃度等
- 市场情绪：资金流向、持仓变化等
- 宏观因素：市场整体趋势、相关性分析等

适用场景：
- 多品种交易
- 中长期投资
- 分散投资组合

优势：
- 科学选股，避免情绪化交易
- 分散风险
- 持续优化，适应市场变化
- 自动化执行`,
    features: [
      '多因子模型',
      '机器学习算法',
      '动态组合优化',
      '风险分散',
      '持续学习更新',
    ],
    image: '/images/feature-3.jpg',
    category: 'trading',
    tradingMethods: ['okx_token', 'platform', 'custom', 'api'],
  },
};

