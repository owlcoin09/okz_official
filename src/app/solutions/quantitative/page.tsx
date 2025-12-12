'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { TrendingUp, People, ArrowForward } from '@mui/icons-material';

interface Strategy {
  id: string;
  name: string;
  description: string;
  type: string;
  riskLevel: '低' | '中' | '高';
  expectedReturn: string;
  totalReturn: number;
  users: number;
  image: string;
}

const strategies: Strategy[] = [
  {
    id: '1',
    name: '网格交易策略',
    description: '在震荡行情中通过买卖价差获利，适合波动较大的市场',
    type: '震荡策略',
    riskLevel: '低',
    expectedReturn: '年化收益 15-25%',
    totalReturn: 31.2,
    users: 12580,
    image: '/images/strategy-icon.jpg',
  },
  {
    id: '2',
    name: '趋势跟踪策略',
    description: '识别并跟随市场趋势，在趋势形成时及时入场，适合趋势明显的市场',
    type: '趋势策略',
    riskLevel: '中',
    expectedReturn: '年化收益 25-40%',
    totalReturn: 48.5,
    users: 8920,
    image: '/images/feature-1.jpg',
  },
  {
    id: '3',
    name: '套利策略',
    description: '利用不同市场或不同品种之间的价差进行套利，风险极低',
    type: '套利策略',
    riskLevel: '低',
    expectedReturn: '年化收益 10-18%',
    totalReturn: 18.2,
    users: 6540,
    image: '/images/feature-2.jpg',
  },
  {
    id: '4',
    name: '高频交易策略',
    description: '利用毫秒级响应速度，捕捉市场的微小价差，适合专业投资者',
    type: '高频策略',
    riskLevel: '高',
    expectedReturn: '年化收益 40-60%',
    totalReturn: 52.5,
    users: 3420,
    image: '/images/strategy.jpg',
  },
];

const riskColor = {
  低: 'success',
  中: 'warning',
  高: 'error',
} as const;

export default function QuantitativeStrategiesPage() {
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
                量化策略
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1rem', md: '1.25rem' },
                  opacity: 0.95,
                  lineHeight: 1.7,
                }}
              >
                多种经过市场验证的量化交易策略，助您实现稳定收益
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ mb: { xs: 6, md: 8 }, pb: 4, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
          <Grid container spacing={4}>
            {strategies.map((strategy) => (
              <Grid item xs={12} md={6} lg={4} key={strategy.id}>
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
                      href={`/solutions/${strategy.id}`}
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
        </Box>
      </Container>
    </Box>
  );
}

