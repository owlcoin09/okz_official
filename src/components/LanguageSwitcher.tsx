'use client';

import { useState } from 'react';
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
} from '@mui/material';
import { useLanguageStore } from '@/store/languageStore';
import { languages, getLanguageByCode } from '@/i18n/languages';
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguageStore();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const currentLanguage = getLanguageByCode(locale) || languages[0];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (langCode: string) => {
    setLocale(langCode);
    handleClose();
    // 更新HTML lang属性
    if (typeof document !== 'undefined') {
      document.documentElement.lang = langCode === 'zh' ? 'zh-CN' : langCode;
    }
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          color: 'inherit',
          textTransform: 'none',
          minWidth: 'auto',
          px: 1.5,
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        startIcon={<LanguageIcon />}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Typography component="span" sx={{ fontSize: '1.2rem' }}>
            {currentLanguage.flag}
          </Typography>
          <Typography
            component="span"
            sx={{
              display: { xs: 'none', sm: 'inline' },
              fontSize: '0.875rem',
            }}
          >
            {currentLanguage.code.toUpperCase()}
          </Typography>
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            maxHeight: 400,
            '& .MuiMenuItem-root': {
              px: 2,
              py: 1,
            },
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            selected={locale === lang.code}
            sx={{
              '&.Mui-selected': {
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 36 }}>
              <Typography sx={{ fontSize: '1.5rem' }}>{lang.flag}</Typography>
            </ListItemIcon>
            <ListItemText
              primary={lang.nativeName}
              secondary={lang.name}
              primaryTypographyProps={{
                fontSize: '0.875rem',
                fontWeight: locale === lang.code ? 'bold' : 'normal',
              }}
              secondaryTypographyProps={{
                fontSize: '0.75rem',
                sx: { opacity: 0.7 },
              }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

