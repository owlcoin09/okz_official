'use client';

import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
} from '@mui/material';
import { GridLegacy as Grid } from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
} from '@mui/icons-material';
import { useLanguageStore } from '@/store/languageStore';
import { getTranslation } from '@/i18n/translations';

export default function Footer() {
  const { locale } = useLanguageStore();
  const t = getTranslation(locale);
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
              {t.footer.company}
            </Typography>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.8, mb: 2 }}>
              {t.footer.description}
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
              {t.footer.products}
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
                {t.footer.quantStrategy}
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
                {t.footer.dataAnalysis}
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
                {t.footer.api}
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
                {t.footer.accountManagement}
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
              {t.footer.about}
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
                {t.footer.companyIntro}
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
                {t.footer.history}
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
                {t.footer.honors}
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
                {t.footer.privacyPolicy}
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
              {t.footer.contact}
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Email sx={{ fontSize: 20, color: 'primary.main' }} />
                <Link
                  href={`mailto:${t.footer.email}`}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  {t.footer.email}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Phone sx={{ fontSize: 20, color: 'primary.main' }} />
                <Link
                  href={`tel:+86-${t.footer.phone.replace(/-/g, '')}`}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    textDecoration: 'none',
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.3s',
                  }}
                >
                  {t.footer.phone}
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'start', gap: 1.5 }}>
                <LocationOn sx={{ fontSize: 20, color: 'primary.main', mt: 0.5 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                  {t.footer.address}
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
            {t.footer.copyright}
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
              {t.footer.userAgreement}
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
              {t.footer.privacyPolicy}
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
              {t.footer.riskWarning}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

