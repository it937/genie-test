'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const currencyNames = {
  AED: 'UAE Dirham',
  AOA: 'Angolan Kwanza',
  ARS: 'Argentine Peso',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BHD: 'Bahraini Dinar',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CLP: 'Chilean Peso',
  CNY: 'Chinese Yuan Onshore',
  CNH: 'Chinese Yuan Offshore',
  COP: 'Colombian Peso',
  CZK: 'Czech Koruna',
  DKK: 'Danish Krone',
  EUR: 'Euro',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  ISK: 'Icelandic Krona',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  KWD: 'Kuwaiti Dinar',
  MAD: 'Moroccan Dirham',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NGN: 'Nigerian Naira',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  OMR: 'Omani Rial',
  PEN: 'Peruvian Nuevo Sol',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SAR: 'Saudi Arabian Riyal',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  TWD: 'Taiwanese Dollar',
  USD: 'US Dollar',
  VND: 'Vietnamese Dong',
  BTC: 'Bitcoin',
  XAG: 'Silver',
  XAU: 'Gold',
  XPT: 'Platinum',
  XPD: 'Palladium',
  ZAR: 'South African Rand',
};
const UI_UPDATE_DELAY_MS = 250;

const instrumentNames = {
  USOIL: 'US Oil',
  UKOIL: 'Brent Oil',
  NGAS: 'Natural Gas',
  US30: 'Dow Jones 30',
  USA30: 'Dow Jones 30',
  NAS100: 'Nasdaq 100',
  SPX500: 'S&P 500',
  GER30: 'Germany 30',
  GER40: 'Germany 40',
  UK100: 'UK 100',
  FRA40: 'France 40',
  EU50: 'Euro Stoxx 50',
  JPN225: 'Japan 225',
  AUS200: 'Australia 200',
  ASX200: 'Australia 200',
  HK50: 'Hong Kong 50',
  HKG33: 'Hong Kong 33',
};

function cleanSymbol(raw) {
  return raw.replace(/\([^)]*\)/, '').replace('.GNE', '');
}

function buildDisplayName(pair) {
  if (instrumentNames[pair]) return instrumentNames[pair];

  const base = pair.substring(0, 3);
  const quote = pair.substring(3, 6);
  return `${currencyNames[base] || base} vs ${currencyNames[quote] || quote}`;
}

function getPercentDirection(currency) {
  if (typeof currency.percentValue === 'number') {
    if (currency.percentValue > 0) return 'up';
    if (currency.percentValue < 0) return 'down';
    return 'neutral';
  }

  return currency.percentDirection || 'neutral';
}

function buildRateItem({ symbol, price, updatedAt }, baseRatesRef, prevRatesRef) {
  const pair = cleanSymbol(symbol);
  const mid = Number(price);
  if (!pair || Number.isNaN(mid)) return null;

  if (!baseRatesRef.current[pair]) {
    baseRatesRef.current[pair] = mid;
  }

  const base = baseRatesRef.current[pair];
  const prev = prevRatesRef.current[pair] ?? mid;
  const rawPercentValue = base !== 0 ? ((mid - base) / base) * 100 : 0;
  const percentValue = Number(rawPercentValue.toFixed(3));
  const percentChange = Math.abs(percentValue).toFixed(3);
  const percentDirection = percentValue > 0 ? 'up' : percentValue < 0 ? 'down' : 'neutral';
  const trend = mid > prev ? 'up' : mid < prev ? 'down' : 'neutral';
  prevRatesRef.current[pair] = mid;

  return {
    pair,
    displayName: buildDisplayName(pair),
    rate: mid.toFixed(Math.abs(mid) >= 1000 ? 2 : 5),
    percentValue,
    percentChange,
    percentDirection,
    trend,
    updatedAt: updatedAt ?? Date.now(),
  };
}

export default function LegacyCurrencySlider() {
  const [ratesMap, setRatesMap] = useState({});
  const [symbolOrder, setSymbolOrder] = useState([]);
  const [slideDistance, setSlideDistance] = useState(0);
  const baseRatesRef = useRef({});
  const prevRatesRef = useRef({});
  const pendingTicksRef = useRef({});
  const updateTimerRef = useRef(null);
  const firstGroupRef = useRef(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const socket = new WebSocket(`${protocol}//${window.location.host}/api/forex/ws`);

    const flushTicks = () => {
      const pendingTicks = pendingTicksRef.current;
      pendingTicksRef.current = {};
      updateTimerRef.current = null;

      setRatesMap((prevRates) => {
        const newPairs = [];
        const nextRates = {
          ...prevRates,
          ...Object.values(pendingTicks).reduce((updatedRates, tick) => {
            const rateItem = buildRateItem(tick, baseRatesRef, prevRatesRef);
            if (rateItem) {
              updatedRates[rateItem.pair] = rateItem;
              if (!prevRates[rateItem.pair]) newPairs.push(rateItem.pair);
            }
            return updatedRates;
          }, {}),
        };

        if (newPairs.length > 0) {
          setSymbolOrder((prevOrder) => [...prevOrder, ...newPairs]);
        }

        return nextRates;
      });
    };

    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type !== 'tick') return;

      pendingTicksRef.current[message.tick.symbol] = message.tick;

      if (!updateTimerRef.current) {
        updateTimerRef.current = window.setTimeout(flushTicks, UI_UPDATE_DELAY_MS);
      }
    });

    socket.addEventListener('error', (error) => {
      console.error('[CurrencySlider] websocket error:', error);
    });

    return () => {
      if (updateTimerRef.current) {
        window.clearTimeout(updateTimerRef.current);
      }
      socket.close();
    };
  }, []);

  const items = useMemo(
    () => symbolOrder.map((pair) => ratesMap[pair]).filter(Boolean),
    [ratesMap, symbolOrder],
  );

  useLayoutEffect(() => {
    if (!firstGroupRef.current || items.length === 0) return;

    const updateSlideDistance = () => {
      setSlideDistance(firstGroupRef.current?.offsetWidth ?? 0);
    };

    updateSlideDistance();

    const observer = new ResizeObserver(updateSlideDistance);
    observer.observe(firstGroupRef.current);

    return () => observer.disconnect();
  }, [items.length]);

  if (items.length === 0) {
    return (
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-16 w-screen overflow-hidden bg-transparent py-6">
        {/* <div className="animate-pulse py-4 text-center text-sm font-medium text-gray-400">
          Loading live market feed...
        </div> */}
      </div>
    );
  }

  const repeatedItems = Array.from({ length: 4 }, () => items).flat();

  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-16 w-screen overflow-hidden bg-transparent py-6 sm:scale-100">
      <div className="flex w-screen items-center justify-start overflow-hidden bg-transparent py-0.5 sm:justify-center">
        <div
          className="animate-infinite-slide flex w-max"
          style={{ '--slide-distance': `${slideDistance}px` }}
        >
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              ref={groupIndex === 0 ? firstGroupRef : null}
              className="flex shrink-0 gap-4 pr-4"
            >
              {repeatedItems.map((currency, index) => {
                const percentDirection = getPercentDirection(currency);
                const percentClass =
                  percentDirection === 'up'
                    ? 'text-green-800'
                    : percentDirection === 'down'
                      ? 'text-red-500'
                      : 'text-gray-500';

                return (
                  <div
                    key={`${groupIndex}-${currency.pair}-${index}`}
                    className="flex min-w-[250px] items-center justify-between rounded-3xl border border-gray-100 bg-white px-6 py-4 shadow-md sm:min-w-[300px]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-11 w-11 shrink-0">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-300 to-purple-400">
                            <span className="max-w-7 truncate text-[10px] font-bold leading-none text-white">
                              {currency.pair.substring(0, 3)}
                            </span>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-500">
                          <span className="max-w-4 truncate text-[7px] font-bold leading-none text-white">
                            {currency.pair.substring(3, 6)}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-800">{currency.pair}</span>
                        <span className="max-w-[120px] truncate text-xs text-gray-500">
                          {currency.displayName}
                        </span>
                      </div>
                    </div>

                    <div className="flex min-w-[96px] flex-col items-end tabular-nums">
                      <span
                        className={`block w-full text-right text-sm font-bold sm:text-base ${
                          percentDirection === 'neutral' ? 'text-gray-700' : percentClass
                        }`}
                      >
                        {currency.rate}
                      </span>
                      <span className={`block w-full text-right text-xs font-medium ${percentClass}`}>
                        {percentDirection === 'up' ? '+' : percentDirection === 'down' ? '-' : ''}
                        {currency.percentChange}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--slide-distance)));
          }
        }
        .animate-infinite-slide {
          display: flex;
          animation: infinite-slide 320s linear infinite;
          width: max-content;
        }
        .animate-infinite-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
