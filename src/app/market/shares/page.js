import React from 'react'
import Banner from '@/components/Market/Shares/Banner';
import CurrencySlider from '@/components/Market/CurrencySlider';
import TradingBenefits from '@/components/Market/Shares/TradingBenefits';
import WhyTradeWithGenie from '@/components/Market/WhyTradeWithGenie';
import QuickSteps from '@/components/Market/QuickSteps';
import TradeSharesMT5 from '@/components/Market/Shares/TradeSharesMT5';
import MultiAsset from '@/components/Market/MultiAsset';
import TradeMarketShares from '@/components/Market/Shares/TradeMarketShares';
import FAQs from '@/components/Market/Shares/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trade Shares',
  description:
    'Trade shares with Genie on MT5 and access stock market opportunities, platform tools, and trading benefits.',
  path: '/market/shares',
  keywords: ['trade shares', 'Genie shares', 'stock trading'],
});

const page = () => {
  return (
    <>
    <Banner />
    <CurrencySlider />
    <TradingBenefits />
    <WhyTradeWithGenie />
    <QuickSteps />
    <TradeSharesMT5 />
    <MultiAsset />
    <TradeMarketShares />
    <FAQs />
    </>
  )
}

export default page
