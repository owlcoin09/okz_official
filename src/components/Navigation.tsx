'use client';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { label: '首页', href: '/' },
    { label: '市场价格', href: '/markets' },
    { label: '解决方案', href: '/solutions' },
    { label: '关于我们', href: '/about' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        bgcolor: '#1a1a2e',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            flexGrow: 0,
            mr: 4,
            fontWeight: 'bold',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          OKZ 量化交易平台
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
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
        <Box>
          <Button color="inherit" component={Link} href="/login">
            登录
          </Button>
          <Button
            color="inherit"
            component={Link}
            href="/register"
            variant="outlined"
            sx={{ ml: 1, borderColor: 'rgba(255,255,255,0.5)' }}
          >
            注册
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
