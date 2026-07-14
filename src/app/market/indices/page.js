import React from 'react'
import Banner from '@/components/Market/Indices/Banner';
import CurrencySlider from '@/components/Market/CurrencySlider';
import TradingBenefits from '@/components/Market/Indices/TradingBenefits';
import WhyTradeWithGenie from '@/components/Market/WhyTradeWithGenie';
import QuickSteps from '@/components/Market/QuickSteps';
import TradeIndicesMT5 from '@/components/Market/Indices/TradeIndicesMT5';
import MultiAsset from '@/components/Market/MultiAsset';
import TradeMarketIndices from '@/components/Market/Indices/TradeMarketIndices';
import FAQs from '@/components/Market/Indices/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trade Indices',
  description:
    'Trade global indices with Genie on MT5 and review market benefits, trading access, and platform features.',
  path: '/market/indices',
  keywords: ['trade indices', 'Genie indices', 'index trading'],
});

const page = () => {
  return (
    <>
    <Banner />
    <CurrencySlider />
    <TradingBenefits />
    <WhyTradeWithGenie />
    <QuickSteps />
    <TradeIndicesMT5 />
    <MultiAsset />
    <TradeMarketIndices />
    <FAQs />
    </>
  )
}

export default page
