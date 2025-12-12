'use client';

import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import {
  CheckCircle,
  Settings,
  Support,
  Analytics,
  Security,
  ArrowBack,
} from '@mui/icons-material';

const services = [
  {
    icon: <Settings sx={{ fontSize: 40 }} />,
    title: '策略设计',
    description: '根据您的投资需求、风险偏好和资金规模，量身定制专属交易策略',
  },
  {
    icon: <Analytics sx={{ fontSize: 40 }} />,
    title: '策略回测',
    description: '使用历史数据对策略进行全面回测，验证策略的有效性和稳定性',
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: '风险控制',
    description: '建立完善的风险控制体系，设置止损止盈，保护您的资金安全',
  },
  {
    icon: <Support sx={{ fontSize: 40 }} />,
    title: '持续优化',
    description: '定期监控策略表现，根据市场变化及时调整和优化策略参数',
  },
];

const advantages = [
  '专业的策略设计团队，10年+行业经验',
  '一对一咨询服务，深入了解您的需求',
  '完整的策略回测和优化服务',
  '持续的策略监控和调整支持',
  '灵活的策略参数配置',
  '完善的文档和技术支持',
];

export default function CustomStrategyPage() {
  return (
    <Box sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)', minHeight: '100vh' }}>
      <Navigation />

      {/* Header */}
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
            alt="Custom Strategy Background"
            fill
            style={{ objectFit: 'cover' }}
          />
        </Box>
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 } }}>
            <Button
              component={Link}
              href="/"
              startIcon={<ArrowBack />}
              sx={{ color: 'white', mb: 3 }}
            >
              返回首页
            </Button>
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
              >
                策略定制服务
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  opacity: 0.95,
                  lineHeight: 1.7,
                }}
              >
                根据您的投资需求、风险偏好和资金规模，为您量身定制专属的量化交易策略
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ mb: { xs: 6, md: 8 }, pb: 4, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
          {/* 服务内容 */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              align="center"
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
            >
              服务内容
            </Typography>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                          sx={{
                            width: 70,
                            height: 70,
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight="bold"
                          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7 }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* 服务优势 */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              align="center"
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
            >
              服务优势
            </Typography>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 3,
                maxWidth: 900,
                mx: 'auto',
              }}
            >
              <List>
                {advantages.map((advantage, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={advantage}
                      primaryTypographyProps={{
                        variant: 'body1',
                        sx: { fontSize: { xs: '0.95rem', md: '1.05rem' } },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>

          {/* 服务流程 */}
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              align="center"
              fontWeight="bold"
              sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
            >
              服务流程
            </Typography>
            <Grid container spacing={4}>
              {[
                { step: '1', title: '需求沟通', desc: '与您深入沟通，了解投资目标、风险偏好和资金规模' },
                { step: '2', title: '策略设计', desc: '专业团队根据您的需求设计专属交易策略' },
                { step: '3', title: '回测验证', desc: '使用历史数据对策略进行全面回测和验证' },
                { step: '4', title: '策略优化', desc: '根据回测结果优化策略参数，确保最佳表现' },
                { step: '5', title: '上线运行', desc: '策略上线运行，持续监控和调整' },
                { step: '6', title: '持续支持', desc: '提供持续的技术支持和策略优化服务' },
              ].map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      borderRadius: 3,
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.step}
                    </Box>
                    <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* CTA */}
          <Box sx={{ textAlign: 'center' }}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                bgcolor: 'primary.main',
                color: 'white',
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                fontWeight="bold"
                sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, mb: 2 }}
              >
                开始您的定制策略之旅
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  opacity: 0.95,
                  fontSize: { xs: '1rem', md: '1.25rem' },
                }}
              >
                联系我们的专业团队，获取专属策略定制服务
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: 'grey.100' },
                  }}
                >
                  联系咨询
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={Link}
                  href="/"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.15)',
                    },
                  }}
                >
                  返回首页
                </Button>
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

