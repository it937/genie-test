const http = require('http');
const next = require('next');
const { WebSocketServer } = require('ws');
const { io } = require('socket.io-client');
const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = Number(process.env.PORT) || 3000;

const SOCKET_URL = process.env.MT5_SOCKET_URL;
const SOCKET_PATH = process.env.MT5_SOCKET_PATH || '/socket.io';
const SOCKET_TOKEN = process.env.MT5_SOCKET_TOKEN;
const SYMBOLS = [
  ...new Set(
    (process.env.MT5_SYMBOLS || '')
      .split(',')
      .map((symbol) => symbol.trim())
      .filter(Boolean),
  ),
];

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const clients = new Set();
const latestRates = new Map();
let mt5Socket = null;

function cleanSymbol(raw) {
  return raw.replace(/\([^)]*\)/, '').replace('.GNE', '');
}

function getTickPayload(data) {
  return data?.Payload?.Data ?? data?.data ?? data;
}

function formatTick({ Symbol, Ask, Bid }) {
  const pair = cleanSymbol(Symbol);
  const mid = (Number(Ask) + Number(Bid)) / 2;

  return {
    symbol: pair,
    price: mid.toFixed(Math.abs(mid) >= 1000 ? 2 : 5),
    ask: Number(Ask),
    bid: Number(Bid),
    updatedAt: Date.now(),
  };
}

function send(client, message) {
  if (client.readyState !== client.OPEN) return;
  client.send(JSON.stringify(message));
}

function broadcast(message) {
  clients.forEach((client) => send(client, message));
}

function connectMt5Socket() {
  if (mt5Socket?.connected || mt5Socket?.active) return;

  if (!SOCKET_URL || !SOCKET_TOKEN || SYMBOLS.length === 0) {
    console.error('[mt5Proxy] Missing MT5_SOCKET_URL, MT5_SOCKET_TOKEN, or MT5_SYMBOLS.');
    return;
  }

  mt5Socket = io(SOCKET_URL, {
    path: SOCKET_PATH,
    transports: ['websocket'],
    reconnection: true,
    extraHeaders: {
      authorization: `Bearer ${SOCKET_TOKEN}`,
    },
  });

  mt5Socket.on('connect', () => {
    console.log('[mt5Proxy] connected:', mt5Socket.id);
    mt5Socket.emit('subscribe_symbol', SYMBOLS);
  });

  mt5Socket.on('mt5_events_tick', (data) => {
    const payload = getTickPayload(data);
    if (!payload?.Symbol || payload.Ask == null || payload.Bid == null) return;

    const tick = formatTick(payload);
    latestRates.set(tick.symbol, tick);
    broadcast({ type: 'tick', tick });
  });

  mt5Socket.on('connect_error', (err) => {
    console.error('[mt5Proxy] connect_error:', err.message);
  });
}

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    handle(req, res);
  });

  const wss = new WebSocketServer({ noServer: true });

  wss.on('connection', (ws) => {
    clients.add(ws);

    latestRates.forEach((tick) => {
      send(ws, { type: 'tick', tick });
    });

    ws.on('close', () => {
      clients.delete(ws);
    });
  });

  server.on('upgrade', (req, socket, head) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (url.pathname !== '/api/forex/ws') {
      socket.destroy();
      return;
    }

    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit('connection', ws, req);
    });
  });

  server.listen(port, hostname, () => {
    console.log(`> Ready on http://localhost:${port}`);
    connectMt5Socket();
  });
});
