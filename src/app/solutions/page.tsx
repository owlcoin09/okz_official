'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Stack,
  Chip,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import DynamicMetadata from '@/components/DynamicMetadata';
import { TrendingUp, People, ArrowForward } from '@mui/icons-material';

// 量化策略示例数据（显示前3个）
const tradingStrategies = [
  {
    id: '1',
    name: '网格交易策略',
    description: '在震荡行情中通过买卖价差获利，适合波动较大的市场',
    expectedReturn: '年化收益 15-25%',
    totalReturn: 31.2,
    users: 12580,
    image: '/images/strategy-icon.jpg',
    type: '震荡策略',
    riskLevel: '低',
  },
  {
    id: '2',
    name: '趋势跟踪策略',
    description: '识别并跟随市场趋势，在趋势形成时及时入场',
    expectedReturn: '年化收益 25-40%',
    totalReturn: 48.5,
    users: 8920,
    image: '/images/feature-1.jpg',
    type: '趋势策略',
    riskLevel: '中',
  },
  {
    id: '3',
    name: '套利策略',
    description: '利用不同市场或不同品种之间的价差进行套利',
    expectedReturn: '年化收益 10-18%',
    totalReturn: 18.2,
    users: 6540,
    image: '/images/feature-2.jpg',
    type: '套利策略',
    riskLevel: '低',
  },
];

// 稳健理财策略示例数据（显示前3个）
const wealthStrategies = [
  {
    id: '5',
    name: 'DeFi 借贷策略',
    description: '通过 DeFi 协议进行借贷，获取稳定的利息收益',
    expectedReturn: '年化收益 8-15%',
    totalReturn: 12.5,
    users: 15230,
    image: '/images/feature-3.jpg',
    type: '理财策略',
    riskLevel: '低',
  },
  {
    id: '6',
    name: 'OKZ 定投组合',
    description: '定期定额投资，分散风险，长期持有获取收益',
    expectedReturn: '年化收益 12-20%',
    totalReturn: 15.0,
    users: 18950,
    image: '/images/chart-bg.jpg',
    type: '理财策略',
    riskLevel: '低',
  },
  {
    id: '7',
    name: '稳定币理财',
    description: '投资稳定币相关理财产品，获取稳定收益',
    expectedReturn: '年化收益 5-10%',
    totalReturn: 8.5,
    users: 22340,
    image: '/images/feature-1.jpg',
    type: '理财策略',
    riskLevel: '低',
  },
];

const riskColor: Record<string, 'success' | 'warning' | 'error'> = {
  低: 'success',
  中: 'warning',
  高: 'error',
} as const;

export default function SolutionsPage() {
  return (
    <Box sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)', minHeight: '100vh' }}>
      <DynamicMetadata page="solutions" />
      <Navigation />

      {/* Banner Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 14 },
          pb: { xs: 6, md: 10 },
          overflow: 'hidden',
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
            src="/images/strategy.jpg"
            alt="Strategy Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                量化交易解决方案
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  opacity: 0.95,
                  lineHeight: 1.7,
                }}
              >
                多种经过市场验证的量化策略，助您实现稳定收益
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 量化策略 Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'rgba(25, 118, 210, 0.05)',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
              >
                量化策略
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: 600, mx: 'auto', mb: 4 }}
              >
                多种经过市场验证的量化交易策略，助您实现稳定收益
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {tradingStrategies.map((strategy) => (
                <Grid item xs={12} md={4} key={strategy.id}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 250,
                        bgcolor: 'primary.main',
                      }}
                    >
                      <Image
                        src={strategy.image}
                        alt={strategy.name}
                        fill
                        style={{ objectFit: 'cover', opacity: 0.8 }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          display: 'flex',
                          gap: 1,
                        }}
                      >
                        <Chip
                          label={strategy.type}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'primary.main' }}
                        />
                        <Chip
                          label={strategy.riskLevel}
                          color={riskColor[strategy.riskLevel]}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.9)' }}
                        />
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight="bold"
                        sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 2 }}
                      >
                        {strategy.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.7 }}
                      >
                        {strategy.description}
                      </Typography>
                      <Stack spacing={2}>
                        <Box>
                          <Typography variant="caption" color="text.secondary">预期收益</Typography>
                          <Typography variant="body1" fontWeight="bold" color="primary.main">
                            {strategy.expectedReturn}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">累计收益</Typography>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <TrendingUp color="success" />
                            <Typography variant="h6" fontWeight="bold" color="success.main">
                              +{strategy.totalReturn}%
                            </Typography>
                          </Stack>
                        </Box>
                        <Box>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <People fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {strategy.users.toLocaleString()} 人正在使用
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        component={Link}
                        href="/solutions/quantitative"
                        endIcon={<ArrowForward />}
                        sx={{ fontWeight: 'bold' }}
                      >
                        查看详情
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/solutions/quantitative"
                endIcon={<ArrowForward />}
                sx={{ px: 4, py: 1.5 }}
              >
                查看更多量化策略
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 稳健理财 Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'white',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
              >
                稳健理财
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: 600, mx: 'auto', mb: 4 }}
              >
                低风险、稳定收益的理财策略，适合追求稳健收益的投资者
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {wealthStrategies.map((strategy) => (
                <Grid item xs={12} md={4} key={strategy.id}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: 250,
                        bgcolor: 'success.main',
                      }}
                    >
                      <Image
                        src={strategy.image}
                        alt={strategy.name}
                        fill
                        style={{ objectFit: 'cover', opacity: 0.8 }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          display: 'flex',
                          gap: 1,
                        }}
                      >
                        <Chip
                          label={strategy.type}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: 'success.main' }}
                        />
                        <Chip
                          label={strategy.riskLevel}
                          color={riskColor[strategy.riskLevel]}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.9)' }}
                        />
                      </Box>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        fontWeight="bold"
                        sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 2 }}
                      >
                        {strategy.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.7 }}
                      >
                        {strategy.description}
                      </Typography>
                      <Stack spacing={2}>
                        <Box>
                          <Typography variant="caption" color="text.secondary">预期收益</Typography>
                          <Typography variant="body1" fontWeight="bold" color="success.main">
                            {strategy.expectedReturn}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography variant="caption" color="text.secondary">累计收益</Typography>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <TrendingUp color="success" />
                            <Typography variant="h6" fontWeight="bold" color="success.main">
                              +{strategy.totalReturn}%
                            </Typography>
                          </Stack>
                        </Box>
                        <Box>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <People fontSize="small" color="action" />
                            <Typography variant="body2" color="text.secondary">
                              {strategy.users.toLocaleString()} 人正在使用
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        component={Link}
                        href="/solutions/wealth"
                        endIcon={<ArrowForward />}
                        sx={{ fontWeight: 'bold', bgcolor: 'success.main', '&:hover': { bgcolor: 'success.dark' } }}
                      >
                        查看详情
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/solutions/wealth"
                endIcon={<ArrowForward />}
                sx={{ px: 4, py: 1.5 }}
              >
                查看更多稳健理财策略
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 策略定制 Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          py: { xs: 8, md: 12 },
          overflow: 'hidden',
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
            src="/images/strategy.jpg"
            alt="Strategy Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, color: 'white', mb: 3 }}
                >
                  策略定制服务
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: 'white', opacity: 0.95, mb: 3, lineHeight: 1.7 }}
                >
                  根据您的投资需求、风险偏好和资金规模，为您量身定制专属的量化交易策略。
                  我们的专业团队将为您提供一对一的策略设计服务，确保策略完全符合您的投资目标。
                </Typography>
                <Stack spacing={2} sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ color: 'white', mt: 0.5 }}>✓</Box>
                    <Typography variant="body1" sx={{ color: 'white', opacity: 0.95 }}>
                      专业的策略设计团队，10年+行业经验
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ color: 'white', mt: 0.5 }}>✓</Box>
                    <Typography variant="body1" sx={{ color: 'white', opacity: 0.95 }}>
                      一对一咨询服务，深入了解您的需求
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ color: 'white', mt: 0.5 }}>✓</Box>
                    <Typography variant="body1" sx={{ color: 'white', opacity: 0.95 }}>
                      完整的策略回测和优化服务
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{ color: 'white', mt: 0.5 }}>✓</Box>
                    <Typography variant="body1" sx={{ color: 'white', opacity: 0.95 }}>
                      持续的策略监控和调整支持
                    </Typography>
                  </Box>
                </Stack>
                <Button
                  variant="contained"
                  size="large"
                  component={Link}
                  href="/solutions/custom"
                  endIcon={<ArrowForward />}
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: 'grey.100', transform: 'translateY(-2px)' },
                    transition: 'all 0.3s',
                  }}
                >
                  查看详情
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: 400 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  <Image
                    src="/images/strategy.jpg"
                    alt="策略定制"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
