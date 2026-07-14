import React from 'react'
import Banner from '@/components/Account/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import EndlessPossibilitiesJourney from '@/components/Account/ECN/EndlessPossibilitiesJourney';
import ECNAccountFeatures from '@/components/Account/ECN/Features';
import ChooseYourBait from '@/components/Account/ChooseYourBait';
import QuickSteps from '@/components/Account/QuickSteps';
import TradeMarketECN from '@/components/Account/ECN/TradeMarketECN';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'ECN Account',
  description:
    'Discover the Genie ECN Account, including premium account features, trading conditions, and market access.',
  path: '/accounts/ecn',
  keywords: ['Genie ecn account', 'premium trading account', 'forex account'],
});

const page = () => {
  return (
    <>
    <Banner type="ecn" />
    <CurrencySlider />
    <EndlessPossibilitiesJourney />
    <ECNAccountFeatures />
    <ChooseYourBait />
    <QuickSteps />
    <TradeMarketECN />
    </>
  )
}

export default page
