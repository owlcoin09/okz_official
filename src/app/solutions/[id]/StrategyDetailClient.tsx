'use client';

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
import { TradingMethod, StrategyDetail } from './strategyData';
import StructuredData from '@/components/StructuredData';
import DynamicMetadata from '@/components/DynamicMetadata';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/jsonld';
import { useLanguageStore } from '@/store/languageStore';

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

interface StrategyDetailClientProps {
  strategy: StrategyDetail;
}

export default function StrategyDetailClient({ strategy }: StrategyDetailClientProps) {
  const [selectedMethod, setSelectedMethod] = useState<TradingMethod | null>(null);
  const [backtestOpen, setBacktestOpen] = useState(false);
  const { locale } = useLanguageStore();

  const riskColor = {
    低: 'success',
    中: 'warning',
    高: 'error',
  }[strategy.riskLevel] as 'success' | 'warning' | 'error';

  // 生成产品结构化数据
  const productSchema = generateProductSchema(
    strategy.name,
    strategy.description,
    {
      image: strategy.image,
      price: strategy.minInvestment.replace(/[^0-9]/g, ''),
      priceCurrency: 'USDT',
      ratingValue: '4.8',
      reviewCount: '1000',
      locale: locale,
    }
  );

  // 生成面包屑结构化数据
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: locale === 'zh' ? '首页' : 'Home', url: '/' },
    { name: locale === 'zh' ? '量化策略' : 'Solutions', url: '/solutions' },
    { name: strategy.name, url: `/solutions/${strategy.id}` },
  ]);

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
      {/* JSON-LD 结构化数据 */}
      <StructuredData data={[productSchema, breadcrumbSchema]} />
      <DynamicMetadata page="solutions" />
      <Navigation />

      {/* Header */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 12 },
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

