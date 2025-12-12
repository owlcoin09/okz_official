'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  TextField,
  InputAdornment,
  Stack,
  keyframes,
} from '@mui/material';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useOKXWebSocket } from '@/hooks/useOKXWebSocket';
import { useMarketStore } from '@/store/marketStore';

interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  changePercent: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  icon?: string;
  instId?: string; // OKX 交易对 ID，如 BTC-USDT
  priceChange?: number; // 相对于上一次的价格变化
  priceChangePercent?: number; // 相对于上一次的价格变化百分比
  previousPrice?: number; // 上一次的价格
}

// 币种 logo 映射（使用 CoinGecko 或其他 CDN）
const coinLogos: Record<string, string> = {
  'BTC': 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
  'ETH': 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  'BNB': 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
  'SOL': 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
  'XRP': 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
  'ADA': 'https://assets.coingecko.com/coins/images/975/small/cardano.png',
  'DOGE': 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png',
  'AVAX': 'https://assets.coingecko.com/coins/images/12559/small/avalanche-avax-logo.png',
  'LINK': 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png',
  'DOT': 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png',
};

// 初始市场数据配置（用于显示名称和默认值）
const initialMarketData: Omit<MarketData, 'price' | 'change24h' | 'changePercent' | 'volume24h' | 'high24h' | 'low24h'>[] = [
  { symbol: 'BTC/USDT', name: 'Bitcoin', instId: 'BTC-USDT', icon: coinLogos['BTC'] },
  { symbol: 'ETH/USDT', name: 'Ethereum', instId: 'ETH-USDT', icon: coinLogos['ETH'] },
  { symbol: 'BNB/USDT', name: 'BNB', instId: 'BNB-USDT', icon: coinLogos['BNB'] },
  { symbol: 'SOL/USDT', name: 'Solana', instId: 'SOL-USDT', icon: coinLogos['SOL'] },
  { symbol: 'XRP/USDT', name: 'Ripple', instId: 'XRP-USDT', icon: coinLogos['XRP'] },
  { symbol: 'ADA/USDT', name: 'Cardano', instId: 'ADA-USDT', icon: coinLogos['ADA'] },
  { symbol: 'DOGE/USDT', name: 'Dogecoin', instId: 'DOGE-USDT', icon: coinLogos['DOGE'] },
  { symbol: 'AVAX/USDT', name: 'Avalanche', instId: 'AVAX-USDT', icon: coinLogos['AVAX'] },
  { symbol: 'LINK/USDT', name: 'Chainlink', instId: 'LINK-USDT', icon: coinLogos['LINK'] },
  { symbol: 'DOT/USDT', name: 'Polkadot', instId: 'DOT-USDT', icon: coinLogos['DOT'] },
];

// 价格变化动画
const priceUpAnimation = keyframes`
  0% {
    background-color: rgba(76, 175, 80, 0.1);
  }
  50% {
    background-color: rgba(76, 175, 80, 0.3);
  }
  100% {
    background-color: transparent;
  }
`;

const priceDownAnimation = keyframes`
  0% {
    background-color: rgba(244, 67, 54, 0.1);
  }
  50% {
    background-color: rgba(244, 67, 54, 0.3);
  }
  100% {
    background-color: transparent;
  }
`;

function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(2) + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(2) + 'K';
  }
  return num.toFixed(2);
}

export default function MarketsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  // 跟踪每个交易对的价格变化状态（用于动画）
  const [priceChangeStates, setPriceChangeStates] = useState<Map<string, 'up' | 'down' | null>>(new Map());
  const prevPricesRef = useRef<Map<string, number>>(new Map());

  // 获取要订阅的交易对列表
  const symbols = useMemo(
    () => initialMarketData.map((item) => item.instId!).filter(Boolean),
    []
  );

  // 从 zustand store 获取市场价格数据
  const marketDataMap = useMarketStore((state) => state.marketData);

  // 连接 OKX WebSocket
  useOKXWebSocket({
    symbols,
  });

  // 监听价格变化，触发动画（使用价格字符串作为依赖，避免无限循环）
  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const newStates = new Map<string, 'up' | 'down' | null>();
    
    // 创建价格快照用于比较
    const priceSnapshot = new Map<string, number>();
    marketDataMap.forEach((priceData, instId) => {
      if (priceData.current) {
        const currentPrice = parseFloat(priceData.current.last);
        priceSnapshot.set(instId, currentPrice);
      }
    });
    
    // 比较价格变化
    priceSnapshot.forEach((currentPrice, instId) => {
      const prevPrice = prevPricesRef.current.get(instId);
      
      if (prevPrice !== undefined && prevPrice !== currentPrice) {
        newStates.set(instId, currentPrice > prevPrice ? 'up' : 'down');
        
        // 1秒后清除动画状态
        const timeout1 = setTimeout(() => {
          setPriceChangeStates((prev) => {
            const updated = new Map(prev);
            updated.set(instId, null);
            return updated;
          });
        }, 1000);
        timeouts.push(timeout1);
      }
      
      // 更新上一次的价格
      prevPricesRef.current.set(instId, currentPrice);
    });
    
    // 更新价格变化状态
    if (newStates.size > 0) {
      const timeout2 = setTimeout(() => {
        setPriceChangeStates((prev) => {
          const updated = new Map(prev);
          newStates.forEach((value, key) => {
            updated.set(key, value);
          });
          return updated;
        });
      }, 0);
      timeouts.push(timeout2);
    }

    // 清理函数：组件卸载时清除所有定时器
    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
    // 使用价格快照的字符串化版本作为依赖，避免 Map 引用变化导致的无限循环
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Array.from(marketDataMap.entries()).map(([k, v]) => `${k}:${v.current?.last || ''}`).join(',')]);

  // 合并 WebSocket 数据和初始配置
  const marketData = useMemo<MarketData[]>(() => {
    return initialMarketData.map((item) => {
      if (!item.instId) {
        return {
          ...item,
          price: 0,
          change24h: 0,
          changePercent: 0,
          volume24h: 0,
          high24h: 0,
          low24h: 0,
        };
      }

      const marketPriceData = marketDataMap.get(item.instId);
      const ticker = marketPriceData?.current;

      // 如果有当前价格数据
      if (ticker) {
        const price = parseFloat(ticker.last);
        const open24h = parseFloat(ticker.open24h);
        const high24h = parseFloat(ticker.high24h);
        const low24h = parseFloat(ticker.low24h);
        const volume24h = parseFloat(ticker.volCcy24h || ticker.vol24h);
        const change24h = price - open24h;
        const changePercent = open24h !== 0 ? (change24h / open24h) * 100 : 0;

        // 获取上一次的价格（用于显示涨跌）
        const previousPrice = marketPriceData.previous
          ? parseFloat(marketPriceData.previous.last)
          : price; // 如果没有上一次价格，使用当前价格

        return {
          ...item,
          price,
          change24h,
          changePercent,
          volume24h,
          high24h,
          low24h,
          priceChange: marketPriceData.priceChange,
          priceChangePercent: marketPriceData.priceChangePercent,
          previousPrice,
        };
      }

      // 如果没有当前价格数据，尝试使用上一次的价格
      const previousTicker = marketPriceData?.previous;
      if (previousTicker) {
        const price = parseFloat(previousTicker.last);
        const open24h = parseFloat(previousTicker.open24h);
        const high24h = parseFloat(previousTicker.high24h);
        const low24h = parseFloat(previousTicker.low24h);
        const volume24h = parseFloat(previousTicker.volCcy24h || previousTicker.vol24h);
        const change24h = price - open24h;
        const changePercent = open24h !== 0 ? (change24h / open24h) * 100 : 0;

        return {
          ...item,
          price,
          change24h,
          changePercent,
          volume24h,
          high24h,
          low24h,
          previousPrice: price,
        };
      }

      // 如果完全没有数据，返回默认值
      return {
        ...item,
        price: 0,
        change24h: 0,
        changePercent: 0,
        volume24h: 0,
        high24h: 0,
        low24h: 0,
      };
    });
  }, [marketDataMap]);

  const filteredData = marketData.filter(
    (item) =>
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ bgcolor: 'rgba(25, 118, 210, 0.05)', minHeight: '100vh' }}>
      <Navigation />

      {/* Header */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(66, 165, 245, 0.95) 100%)',
          color: 'white',
          pt: { xs: 10, md: 14 }, // 增加顶部padding以避免被fixed Navigation遮挡
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
            src="/images/chart-bg.jpg"
            alt="Market Background"
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
              市场价格
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', md: '1.25rem' },
                opacity: 0.95,
                lineHeight: 1.7,
              }}
            >
              实时查看 OKX 交易所市场价格和交易数据
            </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth={false} sx={{ mb: { xs: 6, md: 8 }, pb: 4, px: { xs: 2, md: 4 } }}>
        <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
          {/* 搜索框 */}
          <Box sx={{ mb: 4, mt: 4 }}>
            <TextField
              fullWidth
              placeholder="搜索交易对..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                bgcolor: 'white',
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
          </Box>

        {/* 价格表格 */}
        <Card elevation={3} sx={{ borderRadius: 3 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell sx={{ fontWeight: 'bold' }}>交易对</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>最新价格</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>24h涨跌</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>24h涨幅</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>24h成交量</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>24h最高</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold' }}>24h最低</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row) => {
                  const priceChangeState = row.instId ? priceChangeStates.get(row.instId) : null;
                  const coinSymbol = row.symbol.split('/')[0];
                  
                  return (
                    <TableRow
                      key={row.symbol}
                      sx={{
                        '&:hover': {
                          bgcolor: 'action.hover',
                        },
                        cursor: 'pointer',
                        animation: priceChangeState === 'up' 
                          ? `${priceUpAnimation} 1s ease-out`
                          : priceChangeState === 'down'
                          ? `${priceDownAnimation} 1s ease-out`
                          : 'none',
                      }}
                    >
                      <TableCell>
                        <Stack direction="row" spacing={1} alignItems="center">
                          {row.icon ? (
                            <Box
                              sx={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'grey.100',
                                position: 'relative',
                              }}
                            >
                              <img
                                src={row.icon}
                                alt={row.name}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                }}
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  // 如果图片加载失败，显示文字
                                  const target = e.target as HTMLImageElement;
                                  const parent = target.parentElement;
                                  if (parent) {
                                    target.style.display = 'none';
                                    parent.innerHTML = coinSymbol.substring(0, 2);
                                    parent.style.display = 'flex';
                                    parent.style.alignItems = 'center';
                                    parent.style.justifyContent = 'center';
                                    parent.style.color = 'white';
                                    parent.style.fontWeight = 'bold';
                                    parent.style.fontSize = '0.75rem';
                                    parent.style.backgroundColor = 'primary.main';
                                  }
                                }}
                              />
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '0.75rem',
                              }}
                            >
                              {coinSymbol.substring(0, 2)}
                            </Box>
                          )}
                          <Box>
                            <Typography variant="body2" fontWeight="bold">
                              {row.symbol}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {row.name}
                            </Typography>
                          </Box>
                        </Stack>
                      </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={0.5} justifyContent="flex-end" alignItems="center">
                        {row.price > 0 ? (
                          <>
                            <Typography variant="body2" fontWeight="bold">
                              ${row.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}
                            </Typography>
                            {/* 固定宽度的箭头容器，避免表格抖动 */}
                            <Box sx={{ width: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              {row.priceChange !== undefined && row.priceChange !== 0 ? (
                                row.priceChange > 0 ? (
                                  <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
                                ) : (
                                  <TrendingDownIcon sx={{ fontSize: 16, color: 'error.main' }} />
                                )
                              ) : null}
                            </Box>
                          </>
                        ) : (
                          <>
                            <Typography variant="body2" fontWeight="bold" color="text.secondary">
                              -
                            </Typography>
                            {/* 即使没有价格，也保留箭头占位空间 */}
                            <Box sx={{ width: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                          </>
                        )}
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={0.5} justifyContent="flex-end" alignItems="center">
                        {row.change24h >= 0 ? (
                          <TrendingUpIcon sx={{ fontSize: 16, color: 'success.main' }} />
                        ) : (
                          <TrendingDownIcon sx={{ fontSize: 16, color: 'error.main' }} />
                        )}
                        <Typography
                          variant="body2"
                          sx={{
                            color: row.change24h >= 0 ? 'success.main' : 'error.main',
                            fontWeight: 'bold',
                          }}
                        >
                          {row.change24h >= 0 ? '+' : ''}
                          {row.change24h.toFixed(2)}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Chip
                        label={`${row.changePercent >= 0 ? '+' : ''}${row.changePercent.toFixed(2)}%`}
                        size="small"
                        color={row.changePercent >= 0 ? 'success' : 'error'}
                        sx={{ fontWeight: 'bold' }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2">
                        {row.volume24h > 0 ? `$${formatNumber(row.volume24h)}` : '-'}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="success.main">
                        {row.high24h > 0 ? `$${row.high24h.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}` : '-'}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="body2" color="error.main">
                        {row.low24h > 0 ? `$${row.low24h.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 8 })}` : '-'}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

          {/* 说明 */}
          <Paper
            sx={{
              p: 3,
              mt: 4,
              bgcolor: 'info.light',
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" color="info.dark">
              <strong>说明：</strong>
              以上价格数据来源于 OKX 交易所，数据实时更新。所有价格仅供参考，实际交易价格可能有所不同。
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

