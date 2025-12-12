'use client';

import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import {
  CheckCircle,
  Speed,
  Security,
  Support,
  Analytics,
  AccountBalance,
  Settings,
  Api,
} from '@mui/icons-material';

export default function ServicesPage() {
  const services = [
    {
      icon: <Speed sx={{ fontSize: 40 }} />,
      title: '量化交易服务',
      description: '提供多种经过市场验证的量化交易策略，自动执行交易',
      features: [
        '50+种量化策略可选',
        '自动执行，无需人工干预',
        '实时监控和风险控制',
        '历史回测数据验证',
        '个性化策略定制',
      ],
    },
    {
      icon: <Analytics sx={{ fontSize: 40 }} />,
      title: '数据分析服务',
      description: '提供专业的数据分析和市场洞察，助您做出更好的投资决策',
      features: [
        '实时市场数据分析',
        '策略表现评估',
        '风险分析报告',
        '收益预测模型',
        '定制化数据报表',
      ],
    },
    {
      icon: <Security sx={{ fontSize: 40 }} />,
      title: '资产安全保障',
      description: '多重安全机制，全方位保障您的资产安全',
      features: [
        '银行级加密技术',
        '多重身份验证',
        '冷热钱包分离',
        '实时安全监控',
        '保险保障',
      ],
    },
    {
      icon: <AccountBalance sx={{ fontSize: 40 }} />,
      title: '账户管理服务',
      description: '便捷的账户管理和资金操作，支持多账户管理',
      features: [
        '多账户统一管理',
        '资金划转便捷',
        '交易记录查询',
        '收益统计报表',
        '账户权限管理',
      ],
    },
    {
      icon: <Api sx={{ fontSize: 40 }} />,
      title: 'API 接口服务',
      description: '提供完善的 API 接口，支持第三方系统集成',
      features: [
        'RESTful API',
        'WebSocket 实时推送',
        '完整的开发文档',
        'SDK 支持多语言',
        '技术支持服务',
      ],
    },
    {
      icon: <Support sx={{ fontSize: 40 }} />,
      title: '专业客户支持',
      description: '7x24小时专业客服，快速响应您的需求',
      features: [
        '在线客服支持',
        '电话咨询服务',
        '技术问题解答',
        '使用培训指导',
        'VIP 专属服务',
      ],
    },
  ];

  const vipServices = [
    {
      level: '基础版',
      price: '免费',
      features: [
        '基础量化策略',
        '标准客服支持',
        '基础数据报表',
        '单账户管理',
      ],
      limitations: ['策略数量有限', '不支持API'],
    },
    {
      level: '专业版',
      price: '299 USDT/月',
      features: [
        '全部量化策略',
        '优先客服支持',
        '高级数据报表',
        '多账户管理',
        'API 接口访问',
        '策略定制服务',
      ],
      limitations: [],
    },
    {
      level: '企业版',
      price: '定制报价',
      features: [
        '所有专业版功能',
        '专属客户经理',
        '定制化策略开发',
        '私有化部署',
        '专属技术支持',
        'SLA 服务保障',
      ],
      limitations: [],
    },
  ];

  return (
    <Box sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)', minHeight: '100vh' }}>
      <Navigation />
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 14 }, // 增加顶部padding以避免被fixed Navigation遮挡
          pb: { xs: 8, md: 12 },
          mb: { xs: 6, md: 10 },
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
            src="/images/services.jpg"
            alt="Background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
        <Box sx={{ position: 'relative', zIndex: 1, px: { xs: 2, md: 4 } }}>
          <Box sx={{ textAlign: 'center', maxWidth: 1200, mx: 'auto' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
              sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
            >
              公司服务
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                opacity: 0.95,
                lineHeight: 1.7,
              }}
            >
              为全球投资者提供全方位的量化交易服务，从策略执行到资产保障，从技术支持到客户服务，
              我们致力于为您提供最优质的服务体验。
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 }, mb: { xs: 6, md: 10 }, pb: 4 }}>
        {/* 核心服务 */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
          >
            核心服务
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
                      paragraph
                      sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, lineHeight: 1.7, mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <List dense>
                      {service.features.map((feature, idx) => (
                        <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ fontSize: { xs: '0.85rem', md: '0.95rem' } }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* 服务优势 */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}>
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
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 3,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <Settings sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ fontSize: '1.3rem', mb: 2 }}>
                  技术先进
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                  采用最新的量化交易技术，毫秒级响应，7x24小时稳定运行
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 3,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <Security sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ fontSize: '1.3rem', mb: 2 }}>
                  安全可靠
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                  银行级安全标准，多重加密保护，全方位保障资产安全
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 3,
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 8,
                  },
                }}
              >
                <Support sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom fontWeight="bold" sx={{ fontSize: '1.3rem', mb: 2 }}>
                  服务完善
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                  7x24小时专业客服，快速响应，及时解决您的问题
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* 服务套餐 */}
        <Box sx={{ maxWidth: 1400, mx: 'auto' }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            align="center"
            fontWeight="bold"
            sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: { xs: 4, md: 6 } }}
          >
            服务套餐
          </Typography>
          <Grid container spacing={4}>
            {vipServices.map((vip, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={index === 1 ? 6 : 3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    border: index === 1 ? '3px solid' : 'none',
                    borderColor: index === 1 ? 'primary.main' : 'transparent',
                    borderRadius: 3,
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                >
                  {index === 1 && (
                    <Chip
                      label="推荐"
                      color="primary"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      align="center"
                      fontWeight="bold"
                      sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, mb: 2 }}
                    >
                      {vip.level}
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      align="center"
                      color="primary"
                      gutterBottom
                      fontWeight="bold"
                      sx={{ fontSize: { xs: '1.8rem', md: '2.5rem' }, mb: 3 }}
                    >
                      {vip.price}
                    </Typography>
                    <List dense sx={{ mt: 2 }}>
                      {vip.features.map((feature, idx) => (
                        <ListItem key={idx} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ fontSize: { xs: '0.85rem', md: '0.95rem' } }}
                          />
                        </ListItem>
                      ))}
                      {vip.limitations.map((limitation, idx) => (
                        <ListItem key={`limitation-${idx}`} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon>
                            <Typography color="text.disabled" sx={{ fontSize: '1.2rem' }}>×</Typography>
                          </ListItemIcon>
                          <ListItemText
                            primary={limitation}
                            primaryTypographyProps={{
                              color: 'text.disabled',
                              fontSize: { xs: '0.85rem', md: '0.95rem' },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

