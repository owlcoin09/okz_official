import { create } from 'zustand';

interface TickerData {
  instId: string; // 交易对，如 BTC-USDT
  last: string; // 最新价格
  lastSz: string; // 最新成交数量
  askPx: string; // 卖一价
  askSz: string; // 卖一价对应的数量
  bidPx: string; // 买一价
  bidSz: string; // 买一价对应的数量
  open24h: string; // 24小时开盘价
  high24h: string; // 24小时最高价
  low24h: string; // 24小时最低价
  vol24h: string; // 24小时成交量（以计价货币为单位）
  volCcy24h: string; // 24小时成交量（以交易货币为单位）
  ts: string; // 数据更新时间
  sodUtc8: string; // UTC+8 时区下的开盘价
  sodUtc0: string; // UTC+0 时区下的开盘价
}

interface MarketPriceData {
  current: TickerData | null;
  previous: TickerData | null;
  priceChange: number; // 价格变化（当前价格 - 上一次价格）
  priceChangePercent: number; // 价格变化百分比
}

interface MarketStore {
  // 存储每个交易对的价格数据（包括当前和上一次）
  marketData: Map<string, MarketPriceData>;
  // 更新市场价格
  updateMarketPrice: (instId: string, ticker: TickerData) => void;
  // 获取指定交易对的价格数据
  getMarketPrice: (instId: string) => MarketPriceData | undefined;
}

export const useMarketStore = create<MarketStore>((set, get) => ({
  marketData: new Map(),

  updateMarketPrice: (instId: string, ticker: TickerData) => {
    set((state) => {
      const newMarketData = new Map(state.marketData);
      const existing = newMarketData.get(instId);

      let priceChange = 0;
      let priceChangePercent = 0;

      if (existing?.current) {
        // 如果有上一次的数据，计算价格变化
        const currentPrice = parseFloat(ticker.last);
        const previousPrice = parseFloat(existing.current.last);
        priceChange = currentPrice - previousPrice;
        priceChangePercent = previousPrice !== 0 ? (priceChange / previousPrice) * 100 : 0;
      }

      newMarketData.set(instId, {
        current: ticker,
        previous: existing?.current || null,
        priceChange,
        priceChangePercent,
      });

      return { marketData: newMarketData };
    });
  },

  getMarketPrice: (instId: string) => {
    return get().marketData.get(instId);
  },
}));

