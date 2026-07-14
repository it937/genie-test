import React from 'react'
import Banner from '@/components/Market/Forex/Banner';
import CurrencySlider from '@/components/Market/CurrencySlider';
import TradingBenefits from '@/components/Market/Forex/TradingBenefits';
import WhyTradeWithGenie from '@/components/Market/WhyTradeWithGenie';
import QuickSteps from '@/components/Market/QuickSteps';
import TradeForexMT5 from '@/components/Market/Forex/TradeForexMT5';
import MultiAsset from '@/components/Market/MultiAsset';
import TradeMarketForex from '@/components/Market/Forex/TradeMarketForex';
// import FAQs from '@/components/Market/Forex/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trade Forex',
  description:
    'Trade forex with Genie and explore currency pairs, MT5 access, trading benefits, and market tools.',
  path: '/market/forex',
  keywords: ['trade forex', 'Genie forex', 'forex trading'],
});

const page = () => {
  return (
    <>
    <Banner />
    <CurrencySlider />
    <TradingBenefits />
    <WhyTradeWithGenie />
    <QuickSteps />
    <TradeForexMT5 />
    <MultiAsset />
    <TradeMarketForex />
    {/* <FAQs /> */}
    </>
  )
}

export default page
