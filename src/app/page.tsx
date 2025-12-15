'use client';

import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Speed, Security, TrendingUp, Analytics, Support, AccountBalance, People, AccountBalanceWallet, BarChart, TrendingUp as TrendingUpIcon, WorkspacePremium, Shield, Verified } from '@mui/icons-material';
import StructuredData from '@/components/StructuredData';
import DynamicMetadata from '@/components/DynamicMetadata';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguageStore } from '@/store/languageStore';

export default function Home() {
  const t = useTranslation();
  const { locale } = useLanguageStore();
  const [showStats, setShowStats] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showWhyChoose, setShowWhyChoose] = useState(false);

  useEffect(() => {
    // 首次进入视图时触发动画
    const timer1 = setTimeout(() => {
      setShowStats(true);
    }, 500);
    
    const timer2 = setTimeout(() => {
      setShowQuote(true);
    }, 800);
    
    const timer3 = setTimeout(() => {
      setShowFeatures(true);
    }, 1000);
    
    const timer4 = setTimeout(() => {
      setShowWhyChoose(true);
    }, 1200);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const features = [
    {
      icon: <Speed sx={{ fontSize: 50 }} />,
      title: t.home.features.smartStrategy.title,
      description: t.home.features.smartStrategy.description,
      color: '#1976d2',
      image: '/images/feature-1.jpg',
    },
    {
      icon: <Security sx={{ fontSize: 50 }} />,
      title: t.home.features.security.title,
      description: t.home.features.security.description,
      color: '#2e7d32',
      image: '/images/feature-2.jpg',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 50 }} />,
      title: t.home.features.stableReturns.title,
      description: t.home.features.stableReturns.description,
      color: '#ed6c02',
      image: '/images/feature-3.jpg',
    },
    {
      icon: <Analytics sx={{ fontSize: 50 }} />,
      title: t.home.features.dataAnalysis.title,
      description: t.home.features.dataAnalysis.description,
      color: '#9c27b0',
      image: '/images/feature-1.jpg',
    },
    {
      icon: <Support sx={{ fontSize: 50 }} />,
      title: t.home.features.professionalService.title,
      description: t.home.features.professionalService.description,
      color: '#0288d1',
      image: '/images/feature-2.jpg',
    },
    {
      icon: <AccountBalance sx={{ fontSize: 50 }} />,
      title: t.home.features.convenientManagement.title,
      description: t.home.features.convenientManagement.description,
      color: '#c2185b',
      image: '/images/feature-3.jpg',
    },
  ];

  const stats = [
    { label: t.home.stats.users, value: '100,000+', desc: t.home.stats.usersDesc, icon: <People sx={{ fontSize: { xs: 40, md: 60 }, color: 'white' }} /> },
    { label: t.home.stats.assets, value: locale === 'zh' ? '$10亿+' : '$1B+', desc: t.home.stats.assetsDesc, icon: <AccountBalanceWallet sx={{ fontSize: { xs: 40, md: 60 }, color: 'white' }} /> },
    { label: t.home.stats.strategies, value: '50+', desc: t.home.stats.strategiesDesc, icon: <BarChart sx={{ fontSize: { xs: 40, md: 60 }, color: 'white' }} /> },
    { label: t.home.stats.returns, value: '25%', desc: t.home.stats.returnsDesc, icon: <TrendingUpIcon sx={{ fontSize: { xs: 40, md: 60 }, color: 'white' }} /> },
  ];

  // 首页使用全局的 Organization 和 WebSite schema（已在 layout 中添加）
  // 这里可以添加首页特定的结构化数据，如 FAQ 等

  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh' }}>
      <DynamicMetadata page="home" />
      <Navigation />

      {/* Hero Section + Status - 合并为一个背景 */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 17 },
          pb: { xs: 8, md: 15 },
          overflow: 'hidden',
        }}
      >
        {/* 统一的背景图 */}
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
            src="/images/hero-main.jpg"
            alt="OKZ量化交易平台 - 专业的量化交易解决方案"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
        
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
            {/* Hero内容 */}
            <Grid container spacing={4} alignItems="center" sx={{ mb: { xs: 6, md: 8 } }}>
              <Grid item xs={12} md={7}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                  >
                    {t.home.heroTitle}
                  </Typography>
                  <Typography
                    variant="h5"
                    paragraph
                    sx={{
                      mt: 2,
                      opacity: 0.95,
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                      lineHeight: 1.6,
                    }}
                  >
                    {t.home.heroSubtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 2, mb: 4, opacity: 0.9, fontSize: { xs: '0.9rem', md: '1rem' } }}
                  >
                    {t.home.heroDescription}
                  </Typography>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      component={Link}
                      href="/solutions"
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
                      {t.home.viewStrategies}
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      component={Link}
                      href="/about"
                      sx={{
                        borderColor: 'white',
                        borderWidth: 2,
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        '&:hover': {
                          borderColor: 'white',
                          bgcolor: 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s',
                      }}
                    >
                      {t.home.learnMore}
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: 400,
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  }}
                >
                  <Image
                    src="/images/hero-main.jpg"
                    alt="OKZ量化交易平台 - 智能自动化交易系统"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* 数据统计 - 合并到同一个背景中，带动画效果 */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'row' },
                flexWrap: { xs: 'wrap', md: 'nowrap' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 0,
                opacity: showStats ? 1 : 0,
                transform: showStats ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              }}
            >
              {stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: { xs: '1 1 50%', md: '1 1 25%' },
                    textAlign: 'center',
                    py: { xs: 4, md: 6 },
                    px: { xs: 1, md: 2 },
                    color: 'white',
                    minWidth: 0,
                    boxSizing: 'border-box',
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    gutterBottom
                    fontWeight="bold"
                    sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 1 }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, mb: 1, fontWeight: 500 }}
                  >
                    {stat.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.875rem', md: '1rem' }, opacity: 0.9 }}>
                    {stat.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 实时报价 - 全宽模块 */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'rgba(25, 118, 210, 0.05)',
          py: { xs: 6, md: 10 },
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
            opacity: 0.15,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/chart-bg.jpg"
            alt="实时市场行情图表 - OKX交易所加密货币价格走势"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
            >
              实时报价
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: 600, mx: 'auto' }}
            >
              实时查看 OKX 交易所市场价格
            </Typography>
          </Box>
          <Box
            id="tradingview-widget-container"
            sx={{
              height: { xs: 400, md: 600 },
              width: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              opacity: showQuote ? 1 : 0,
              transform: showQuote ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <iframe
              src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview-widget-container&symbol=OKX%3ABTCUSDT&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Asia%2FShanghai&withdateranges=1&range=1D&allow_symbol_change=1&calendar=1&support_host=https%3A%2F%2Fwww.tradingview.com"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="TradingView Widget"
            />
          </Box>
          </Box>
        </Container>
      </Box>

      {/* 核心特性 - 全宽模块 */}
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
            src="/images/feature-1.jpg"
            alt="OKZ量化交易核心特性 - 智能策略和数据分析"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
            >
              核心特性
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, maxWidth: 600, mx: 'auto' }}
            >
              为您的量化交易提供全方位的专业服务
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'space-between',
            }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                elevation={2}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 16px)', md: '1 1 calc(33.333% - 22px)' },
                  height: { xs: 420, md: 460 },
                  minHeight: { xs: 420, md: 460 },
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  opacity: showFeatures ? 1 : 0,
                  transform: showFeatures ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out, all 0.3s',
                  transitionDelay: `${index * 0.1}s`,
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: 8,
                  },
                }}
              >
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 200,
                      bgcolor: feature.color,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={`${feature.title} - ${feature.description}`}
                      fill
                      style={{ objectFit: 'cover', opacity: 0.3 }}
                    />
                    <Box
                      className="feature-icon"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        transition: 'all 0.3s',
                      }}
                    >
                      {feature.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                      sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 2 }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7, flexGrow: 1 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
            ))}
          </Box>
          </Box>
        </Container>
      </Box>

      {/* 为什么选择我们 - 全宽模块 */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'rgba(25, 118, 210, 0.05)',
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
            src="/images/team.jpg"
            alt="OKZ专业团队 - 10年+量化交易经验的专家团队"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' } }}
              >
                为什么选择 OKZ
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                alignItems: 'stretch',
                gap: 4,
                flexWrap: 'wrap',
              }}
            >
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: { xs: 3, md: 4 },
                  flex: { xs: '1 1 100%', md: '1 1 0' },
                  minWidth: { xs: '100%', md: 280 },
                  maxWidth: { xs: '100%', md: 360 },
                  opacity: showWhyChoose ? 1 : 0,
                  transform: showWhyChoose ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '0s',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    color: 'white',
                  }}
                >
                  <WorkspacePremium sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h4"
                  color="primary"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  专业
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7 }}
                >
                  10年+行业经验，专业团队，持续技术创新
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: { xs: 3, md: 4 },
                  flex: { xs: '1 1 100%', md: '1 1 0' },
                  minWidth: { xs: '100%', md: 280 },
                  maxWidth: { xs: '100%', md: 360 },
                  opacity: showWhyChoose ? 1 : 0,
                  transform: showWhyChoose ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '0.2s',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'success.main',
                    borderRadius: '50%',
                    color: 'white',
                  }}
                >
                  <Shield sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h4"
                  color="primary"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  安全
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7 }}
                >
                  银行级安全标准，多重加密保护，全方位保障
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  textAlign: 'center', 
                  p: { xs: 3, md: 4 },
                  flex: { xs: '1 1 100%', md: '1 1 0' },
                  minWidth: { xs: '100%', md: 280 },
                  maxWidth: { xs: '100%', md: 360 },
                  opacity: showWhyChoose ? 1 : 0,
                  transform: showWhyChoose ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '0.4s',
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'warning.main',
                    borderRadius: '50%',
                    color: 'white',
                  }}
                >
                  <Verified sx={{ fontSize: 40 }} />
                </Box>
                <Typography
                  variant="h4"
                  color="primary"
                  gutterBottom
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
                >
                  稳定
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7 }}
                >
                  7x24小时稳定运行，99.9%系统可用性
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA Section - 全宽模块 */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', textAlign: 'center' }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 2 }}
            >
              准备好开始您的量化交易之旅了吗？
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              立即注册，体验专业的量化交易服务
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                size="large"
                component="a"
                href="https://okz.okzquant.com/register"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': { bgcolor: 'grey.100', transform: 'translateY(-2px)' },
                  transition: 'all 0.3s',
                }}
              >
                立即注册
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                href="/solutions"
                sx={{
                  borderColor: 'white',
                  borderWidth: 2,
                  color: 'white',
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                查看策略
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
