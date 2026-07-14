import React from 'react';
import Banner from '@/components/MT5/Banner';
import TradingEdge from '@/components/MT5/TradingEdge';
import NextBigStep from '@/components/MT5/NextBigStep';
import UnmatchedTrading from '@/components/MT5/UnmatchedTrading';
import QuickSteps from '@/components/MT5/QuickSteps';
import TradeWithGenie from '@/components/MT5/TradeWithGenie';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'MT5 Trading Platform',
  description:
    'Trade with Genie on MetaTrader 5 and access platform features, downloads, trading tools, and setup guidance.',
  path: '/mt5',
  keywords: ['Genie MT5', 'MetaTrader 5', 'MT5 broker'],
});

const page = () => {
  return (
    <>
        <Banner />
        <TradingEdge />
        <NextBigStep />
        <UnmatchedTrading />
        <QuickSteps />
        <TradeWithGenie />
    </>
  )
}

export default page
