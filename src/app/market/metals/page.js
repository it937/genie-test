import React from 'react'
import Banner from '@/components/Market/Metals/Banner';
import CurrencySlider from '@/components/Market/CurrencySlider';
import TradingBenefits from '@/components/Market/Metals/TradingBenefits';
import WhyTradeWithGenie from '@/components/Market/WhyTradeWithGenie';
import QuickSteps from '@/components/Market/QuickSteps';
import TradeMetalsMT5 from '@/components/Market/Metals/TradeMetalsMT5';
import MultiAsset from '@/components/Market/MultiAsset';
import TradeMarketMetals from '@/components/Market/Metals/TradeMarketMetals';
import FAQs from '@/components/Market/Metals/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trade Metals',
  description:
    'Trade metals with Genie on MT5 and explore trading conditions, market benefits, and product access.',
  path: '/market/metals',
  keywords: ['trade metals', 'Genie metals', 'metal trading'],
});

const page = () => {
  return (
    <>
    <Banner />
    <CurrencySlider />
    <TradingBenefits />
    <WhyTradeWithGenie />
    <QuickSteps />
    <TradeMetalsMT5 />
    <MultiAsset />
    <TradeMarketMetals />
    <FAQs />
    </>
  )
}

export default page
