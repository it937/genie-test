import React from 'react'
import Banner from '@/components/Market/Commodities/Banner';
import CurrencySlider from '@/components/Market/CurrencySlider';
import TradingBenefits from '@/components/Market/Commodities/TradingBenefits';
import WhyTradeWithGenie from '@/components/Market/WhyTradeWithGenie';
import QuickSteps from '@/components/Market/QuickSteps';
import TradeCommoditiesMT5 from '@/components/Market/Commodities/TradeCommoditiesMT5';
import MultiAsset from '@/components/Market/MultiAsset';
import TradeMarketCommodity from '@/components/Market/Commodities/TradeMarketCommodity';
import FAQs from '@/components/Market/Commodities/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trade Commodities',
  description:
    'Trade commodities with Genie on MT5 and explore market benefits, product access, and platform features.',
  path: '/market/commodities',
  keywords: ['trade commodities', 'Genie commodities', 'commodity trading'],
});

const page = () => {
  return (
    <>
    <Banner />
    <CurrencySlider />
    <TradingBenefits />
    <WhyTradeWithGenie />
    <QuickSteps />
    <TradeCommoditiesMT5 />
    <MultiAsset />
    <TradeMarketCommodity />
    <FAQs />
    </>
  )
}

export default page
