import { useEffect, useRef, useState, useCallback } from 'react';
import { useMarketStore } from '@/store/marketStore';

export interface TickerData {
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

interface TickerMessage {
  arg: {
    channel: string;
    instId: string;
  };
  data: TickerData[];
}

interface UseOKXWebSocketOptions {
  symbols: string[]; // 交易对列表，如 ['BTC-USDT', 'ETH-USDT']
  onMessage?: (data: Map<string, TickerData>) => void;
  onError?: (error: Event) => void;
}

const OKX_WS_URL = 'wss://ws.okx.com:8443/ws/v5/public';
const PING_INTERVAL = 20000; // 20秒发送一次 ping
const RECONNECT_DELAY = 3000; // 重连延迟 3 秒

export function useOKXWebSocket({ symbols, onMessage, onError }: UseOKXWebSocketOptions) {
  const [isConnected, setIsConnected] = useState(false);
  const updateMarketPrice = useMarketStore((state) => state.updateMarketPrice);
  const wsRef = useRef<WebSocket | null>(null);
  const pingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectTimerRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const lastMessageTimeRef = useRef(Date.now());

  const connect = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      return;
    }

    try {
      const ws = new WebSocket(OKX_WS_URL);
      wsRef.current = ws;

      ws.onopen = () => {
        console.log('OKX WebSocket 连接成功');
        setIsConnected(true);
        reconnectAttemptsRef.current = 0;

        // 订阅所有交易对的 ticker 频道
        if (symbols.length > 0) {
          const args = symbols.map((symbol) => ({
            channel: 'tickers',
            instId: symbol,
          }));

          ws.send(
            JSON.stringify({
              op: 'subscribe',
              args,
            })
          );
        }

        // 启动心跳
        pingTimerRef.current = setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) {
            const now = Date.now();
            // 如果超过 30 秒没有收到消息，发送 ping
            if (now - lastMessageTimeRef.current > 30000) {
              ws.send('ping');
            }
          }
        }, PING_INTERVAL);
      };

      ws.onmessage = (event) => {
        lastMessageTimeRef.current = Date.now();

        // 处理 pong 响应
        if (event.data === 'pong') {
          return;
        }

        try {
          const message = JSON.parse(event.data);

          // 处理订阅成功响应
          if (message.event === 'subscribe') {
            console.log('订阅成功:', message.arg);
            return;
          }

          // 处理 ticker 数据
          if (message.arg?.channel === 'tickers' && message.data) {
            const tickerMessage = message as TickerMessage;
            
            // 更新 zustand store
            tickerMessage.data.forEach((ticker) => {
              updateMarketPrice(ticker.instId, ticker);
            });

            // 调用回调（如果提供）
            if (onMessage) {
              const newData = new Map<string, TickerData>();
              tickerMessage.data.forEach((ticker) => {
                newData.set(ticker.instId, ticker);
              });
              onMessage(newData);
            }
          }
        } catch (error) {
          console.error('解析 WebSocket 消息失败:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('OKX WebSocket 错误:', error);
        onError?.(error);
      };

      ws.onclose = () => {
        console.log('OKX WebSocket 连接关闭');
        setIsConnected(false);

        // 清除心跳定时器
        if (pingTimerRef.current) {
          clearInterval(pingTimerRef.current);
          pingTimerRef.current = null;
        }

        // 自动重连
        if (reconnectAttemptsRef.current < 5) {
          reconnectAttemptsRef.current += 1;
          reconnectTimerRef.current = setTimeout(() => {
            console.log(`尝试重连 (${reconnectAttemptsRef.current}/5)...`);
            connect();
          }, RECONNECT_DELAY);
        } else {
          console.error('重连次数过多，停止重连');
        }
      };
    } catch (error) {
      console.error('创建 WebSocket 连接失败:', error);
      onError?.(error as Event);
    }
  }, [symbols, onMessage, onError, updateMarketPrice]);

  const disconnect = useCallback(() => {
    if (pingTimerRef.current) {
      clearInterval(pingTimerRef.current);
      pingTimerRef.current = null;
    }

    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
      reconnectTimerRef.current = null;
    }

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setIsConnected(false);
  }, []);

  useEffect(() => {
    if (symbols.length > 0) {
      connect();
    }

    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbols.join(',')]); // 当交易对列表变化时重新连接

  return {
    isConnected,
    connect,
    disconnect,
  };
}

