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

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '/' },
    { label: '市场价格', href: '/markets' },
    { label: '解决方案', href: '/solutions' },
    { label: '关于我们', href: '/about' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold' }}>
        OKZ 量化交易平台
      </Typography>
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
            <ListItemText primary="登录" />
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
            <ListItemText primary="注册" />
          </ListItemButton>
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
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 0,
              mr: { xs: 2, md: 4 },
              fontWeight: 'bold',
              textDecoration: 'none',
              color: 'inherit',
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            OKZ 量化交易平台
          </Typography>
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
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Button 
              color="inherit" 
              component="a"
              href="https://okz.okzquant.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              登录
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
              注册
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
