'use client';

import { use } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ReactECharts from 'echarts-for-react';
import Navigation from '@/components/Navigation';
import { ArrowBack, CheckCircle, TrendingUp, Api, AccountBalanceWallet, Settings, BarChart } from '@mui/icons-material';
import { useState } from 'react';

type TradingMethod = 'okx_token' | 'platform' | 'custom' | 'api';

const tradingMethodLabels: Record<TradingMethod, { label: string; icon: React.ReactNode; desc: string }> = {
  okx_token: {
    label: 'OKX Token 自动下单',
    icon: <Api />,
    desc: '提供 OKX API Token，策略自动连接到您的 OKX 账户下单交易',
  },
  platform: {
    label: '平台统一交易',
    icon: <AccountBalanceWallet />,
    desc: '充值到平台，由平台统一管理和执行交易策略',
  },
  custom: {
    label: '定制策略服务',
    icon: <Settings />,
    desc: '根据您的需求定制专属策略',
  },
  api: {
    label: 'API 开发',
    icon: <Api />,
    desc: '提供 API 接口，开发人员可以自行开发和集成策略',
  },
};

const strategyDetails: Record<
  string,
  {
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
  }
> = {
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

export default function StrategyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const strategy = strategyDetails[id];
  const [selectedMethod, setSelectedMethod] = useState<TradingMethod | null>(null);
  const [backtestOpen, setBacktestOpen] = useState(false);

  if (!strategy) {
    return (
      <Box>
        <Navigation />
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4">策略不存在</Typography>
          <Button component={Link} href="/solutions" sx={{ mt: 2 }}>
            返回策略列表
          </Button>
        </Container>
      </Box>
    );
  }

  const riskColor = {
    低: 'success',
    中: 'warning',
    高: 'error',
  }[strategy.riskLevel] as 'success' | 'warning' | 'error';

  const chartOption = {
    title: {
      text: '策略收益曲线',
      left: 'center',
      textStyle: { fontSize: 18, fontWeight: 'bold' },
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const param = params[0];
        return `${param.name}<br/>累计收益: ${param.value.toFixed(2)}%`;
      },
    },
    xAxis: {
      type: 'category',
      data: strategy.chartData.dates,
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
      },
    },
    series: [
      {
        data: strategy.chartData.profits,
        type: 'line',
        smooth: true,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(25, 118, 210, 0.4)' },
              { offset: 1, color: 'rgba(25, 118, 210, 0.1)' },
            ],
          },
        },
        lineStyle: {
          color: '#1976d2',
          width: 3,
        },
        itemStyle: {
          color: '#1976d2',
        },
      },
    ],
    grid: {
      left: '10%',
      right: '10%',
      bottom: '10%',
      top: '15%',
    },
  };

  return (
    <Box sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)', minHeight: '100vh' }}>
      <Navigation />

      {/* Header */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 12 }, // 增加顶部padding以避免被fixed Navigation遮挡
          pb: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            zIndex: 0,
          }}
        >
          <Image
            src={strategy.image}
            alt={strategy.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 } }}>
            <Button
              component={Link}
              href="/solutions"
              startIcon={<ArrowBack />}
              sx={{ color: 'white', mb: 3 }}
            >
              返回列表
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
              >
                {strategy.name}
              </Typography>
              <Chip label={strategy.type} sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'primary.main' }} />
              <Chip
                label={strategy.riskLevel}
                color={riskColor}
                sx={{ bgcolor: 'rgba(255,255,255,0.9)' }}
              />
            </Box>
            <Typography variant="h6" sx={{ opacity: 0.95, maxWidth: 800 }}>
              {strategy.description}
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ mb: { xs: 6, md: 8 }, pb: 4, px: { xs: 2, md: 4 } }}>
        <Grid container spacing={4}>
          {/* 主要内容 */}
          <Grid item xs={12} md={8}>
            {/* 策略详情 */}
            <Card elevation={3} sx={{ mb: 4, borderRadius: 3 }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 300,
                  bgcolor: 'primary.main',
                }}
              >
                <Image
                  src={strategy.image}
                  alt={strategy.name}
                  fill
                  style={{ objectFit: 'cover', opacity: 0.8 }}
                />
              </Box>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                  策略详情
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ whiteSpace: 'pre-line', lineHeight: 1.8, fontSize: '1.05rem' }}
                >
                  {strategy.details}
                </Typography>
              </CardContent>
            </Card>

            {/* 收益图表 */}
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                  收益表现
                </Typography>
                <Box sx={{ height: 500 }}>
                  <ReactECharts option={chartOption} style={{ height: '100%', width: '100%' }} />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* 侧边栏 */}
          <Grid item xs={12} md={4}>
            {/* 策略信息 */}
            <Card elevation={3} sx={{ mb: 4, borderRadius: 3, position: 'sticky', top: 100 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                  策略信息
                </Typography>
                <List>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <TrendingUp color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="预期收益"
                      secondary={strategy.expectedReturn}
                      secondaryTypographyProps={{ fontWeight: 'bold', color: 'primary.main' }}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding sx={{ my: 2 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="最低投资"
                      secondary={strategy.minInvestment}
                      secondaryTypographyProps={{ fontWeight: 'bold' }}
                    />
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding sx={{ my: 2 }}>
                    <ListItemIcon>
                      <TrendingUp color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary="累计收益"
                      secondary={`+${strategy.chartData.totalReturn}%`}
                      secondaryTypographyProps={{ fontWeight: 'bold', color: 'success.main', fontSize: '1.2rem' }}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            {/* 核心特性 */}
            <Card elevation={3} sx={{ borderRadius: 3 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 3 }}>
                  核心特性
                </Typography>
                <List>
                  {strategy.features.map((feature, index) => (
                    <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
                      <ListItemIcon>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                {strategy.tradingMethods && strategy.tradingMethods.length > 0 && (
                  <>
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 2 }}>
                      交易方式
                    </Typography>
                    <FormControl component="fieldset" fullWidth>
                      <RadioGroup
                        value={selectedMethod || ''}
                        onChange={(e) => setSelectedMethod(e.target.value as TradingMethod)}
                      >
                        {strategy.tradingMethods.map((method) => {
                          const methodInfo = tradingMethodLabels[method];
                          return (
                            <FormControlLabel
                              key={method}
                              value={method}
                              control={<Radio />}
                              label={
                                <Box>
                                  <Stack direction="row" spacing={1} alignItems="center">
                                    {methodInfo.icon}
                                    <Typography variant="body2" fontWeight="bold">
                                      {methodInfo.label}
                                    </Typography>
                                  </Stack>
                                  <Typography variant="caption" color="text.secondary" sx={{ ml: 4, display: 'block' }}>
                                    {methodInfo.desc}
                                  </Typography>
                                </Box>
                              }
                              sx={{ mb: 1, alignItems: 'flex-start' }}
                            />
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                  </>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={!selectedMethod}
                  sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
                >
                  {selectedMethod ? '立即使用' : '请选择交易方式'}
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<BarChart />}
                  onClick={() => setBacktestOpen(true)}
                  sx={{ mt: 2 }}
                >
                  查看详细回测数据
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* 回测数据对话框 */}
      <Dialog open={backtestOpen} onClose={() => setBacktestOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>详细回测数据 - {strategy.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body2" paragraph>
            策略回测期间：2024年1月 - 2024年12月
          </Typography>
          <Paper sx={{ p: 2, bgcolor: 'grey.50', mb: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">总收益率</Typography>
                <Typography variant="h6" color="primary">+{strategy.chartData.totalReturn}%</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">最大回撤</Typography>
                <Typography variant="h6" color="error">-{strategy.riskLevel === '高' ? '12.5' : strategy.riskLevel === '中' ? '8.5' : '5.2'}%</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">夏普比率</Typography>
                <Typography variant="h6">{strategy.riskLevel === '高' ? '1.85' : strategy.riskLevel === '中' ? '2.35' : '2.85'}</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">胜率</Typography>
                <Typography variant="h6">{strategy.riskLevel === '高' ? '58.5%' : strategy.riskLevel === '中' ? '68.5%' : '75.2%'}</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">年化收益率</Typography>
                <Typography variant="h6" color="success.main">{strategy.expectedReturn.split(' ')[1]}</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">交易次数</Typography>
                <Typography variant="h6">1,248</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">平均持仓时间</Typography>
                <Typography variant="h6">{strategy.category === 'wealth' ? '30天' : '5天'}</Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="caption" color="text.secondary">波动率</Typography>
                <Typography variant="h6">{strategy.riskLevel === '高' ? '18.5%' : strategy.riskLevel === '中' ? '12.3%' : '8.2%'}</Typography>
              </Grid>
            </Grid>
          </Paper>
          <Box sx={{ height: 400 }}>
            <ReactECharts option={chartOption} style={{ height: '100%', width: '100%' }} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBacktestOpen(false)}>关闭</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

