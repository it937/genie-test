let cache = {
  timestamp: 0,
  data: null,
};

const currencyPairs = [
  'AUD/USD',
  'EUR/JPY',
  'GBP/USD',
  'USD/JPY',
  'USD/CAD',
  'AUD/CAD',
  'EUR/USD',
  'NZD/USD',
  'USD/CHF',
  'GBP/JPY',
];

const cacheExpiry = 60 * 1000;

const buildPrice = (from, to, rates) => {
  if (!rates[from] || !rates[to]) return null;
  if (from === to) return 1;
  return rates[to] / rates[from];
};

export async function GET(request) {
  try {
    const now = Date.now();
    const { searchParams } = new URL(request.url);
    const symbol = searchParams.get('symbol');

    if (!cache.data || now - cache.timestamp >= cacheExpiry) {
      const res = await fetch('https://api.frankfurter.app/latest?from=EUR', {
        next: { revalidate: 60 },
      });

      const data = await res.json();

      if (!data || !data.rates) {
        throw new Error('No data received from Frankfurter');
      }

      cache = {
        timestamp: now,
        data: {
          ...data.rates,
          EUR: 1,
        },
      };
    }

    if (symbol) {
      const normalized = symbol.replace('/', '').toUpperCase();
      if (normalized.length !== 6) {
        return Response.json({ error: true, message: 'Invalid symbol format' }, { status: 400 });
      }

      const from = normalized.slice(0, 3);
      const to = normalized.slice(3, 6);
      const price = buildPrice(from, to, cache.data);

      if (!price) {
        return Response.json({ error: true, message: 'Unsupported currency pair' }, { status: 400 });
      }

      return Response.json({
        symbol: `${from}/${to}`,
        price: Number(price.toFixed(5)),
      });
    }

    const processed = currencyPairs.map((pair) => {
      const [from, to] = pair.split('/');
      const price = buildPrice(from, to, cache.data);

      return {
        symbol: pair,
        price: price ? price.toFixed(5) : null,
      };
    });

    return Response.json(processed);
  } catch (err) {
    return Response.json(
      {
        error: true,
        message: err.message,
      },
      { status: 500 },
    );
  }
}
