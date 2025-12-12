'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a1a2e',
        color: 'rgba(255, 255, 255, 0.8)',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: '1400px' }}>
        <Grid container spacing={6}>
          {/* 公司介绍 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}
            >
              OKZ 量化交易
            </Typography>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.8, mb: 2 }}>
              专业的量化交易平台，基于 OKX 交易所，为全球投资者提供安全、高效、智能的量化交易解决方案。
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link
                href="#"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                <LinkedIn />
              </Link>
              <Link
                href="#"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s',
                }}
              >
                <GitHub />
              </Link>
            </Stack>
          </Grid>

          {/* 产品服务 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}
            >
              产品服务
            </Typography>
            <Stack spacing={1.5}>
              <Link
                href="/solutions"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                量化策略
              </Link>
              <Link
                href="/services"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                数据分析
              </Link>
              <Link
                href="/services"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                API 接口
              </Link>
              <Link
                href="/services"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                账户管理
              </Link>
            </Stack>
          </Grid>

          {/* 关于我们 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}
            >
              关于我们
            </Typography>
            <Stack spacing={1.5}>
              <Link
                href="/about"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                公司简介
              </Link>
              <Link
                href="/about"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                发展历程
              </Link>
              <Link
                href="/about"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                荣誉资质
              </Link>
              <Link
                href="/about"
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main', textDecoration: 'underline' },
                  transition: 'color 0.3s',
                }}
              >
                隐私政策
              </Link>
            </Stack>
          </Grid>

          {/* 联系我们 */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: 'white', fontWeight: 'bold', mb: 3 }}
            >
              联系我们
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ fontSize: 20, color: 'primary.main' }} />
                <Link
                  href="mailto:support@okz.com"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  support@okz.com
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ fontSize: 20, color: 'primary.main' }} />
                <Link
                  href="tel:+86-400-888-8888"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  400-888-8888
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                <LocationOn sx={{ fontSize: 20, color: 'primary.main', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6 }}>
                  北京市朝阳区
                  <br />
                  金融科技大厦
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © 2024 OKZ 量化交易平台. 保留所有权利.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/policies"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.3s',
              }}
            >
              用户协议
            </Link>
            <Link
              href="/policies"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.3s',
              }}
            >
              隐私政策
            </Link>
            <Link
              href="/policies"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { color: 'primary.main' },
                transition: 'color 0.3s',
              }}
            >
              风险提示
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

