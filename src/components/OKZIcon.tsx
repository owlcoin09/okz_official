import { Box, SxProps, Theme } from '@mui/material';

interface OKZIconProps {
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
  variant?: 'icon' | 'logo';
}

export default function OKZIcon({ width = 40, height = 40, sx, variant = 'icon' }: OKZIconProps) {
  const src = variant === 'logo' ? '/okz-logo.svg' : '/okz-icon.svg';
  
  return (
    <Box
      component="img"
      src={src}
      alt="OKZ Logo"
      sx={{
        width,
        height,
        display: 'inline-block',
        ...sx,
      }}
    />
  );
}

