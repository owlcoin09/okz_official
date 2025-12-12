'use client';

import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useLanguageStore } from '@/store/languageStore';
import { getTranslation } from '@/i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';
import OKZIcon from './OKZIcon';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale } = useLanguageStore();
  const t = getTranslation(locale);

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.markets, href: '/markets' },
    { label: t.nav.solutions, href: '/solutions' },
    { label: t.nav.about, href: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2, gap: 1 }}>
        <OKZIcon width={32} height={32} />
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          OKZ {locale === 'zh' ? '量化交易平台' : 'Quantitative Trading Platform'}
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={pathname === item.href}
              sx={{
                textAlign: 'center',
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://okz.okzquant.com/login"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={t.nav.login} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href="https://okz.okzquant.com/register"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={t.nav.register} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <Box sx={{ px: 2, py: 1, width: '100%' }}>
            <LanguageSwitcher />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: '#1a1a2e',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexGrow: 0,
              mr: { xs: 2, md: 4 },
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <OKZIcon width={32} height={32} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1rem', md: '1.25rem' },
              }}
            >
              OKZ {locale === 'zh' ? '量化交易平台' : 'Quantitative Trading Platform'}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                color="inherit"
                component={Link}
                href={item.href}
                sx={{
                  fontWeight: pathname === item.href ? 'bold' : 'normal',
                  borderBottom: pathname === item.href ? '2px solid' : 'none',
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <LanguageSwitcher />
            <Button 
              color="inherit" 
              component="a"
              href="https://okz.okzquant.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.login}
            </Button>
            <Button
              color="inherit"
              component="a"
              href="https://okz.okzquant.com/register"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{ ml: 1, borderColor: 'rgba(255,255,255,0.5)' }}
            >
              {t.nav.register}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
