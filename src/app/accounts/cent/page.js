import React from 'react'
import Banner from '@/components/Account/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import EndlessPossibilitiesJourney from '@/components/Account/Cent/EndlessPossibilitiesJourney';
import CentAccountFeatures from '@/components/Account/Cent/Features';
import ChooseYourBait from '@/components/Account/ChooseYourBait';
import QuickSteps from '@/components/Account/QuickSteps';
import TradeMarketCent from '@/components/Account/Cent/TradeMarketCent';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Cent Account',
  description:
    'Explore the Genie Cent Account with trading features, account conditions, and platform access for active traders.',
  path: '/accounts/cent',
  keywords: ['Genie cent account', 'trading account', 'forex account'],
});

const page = () => {
  return (
    <>
    <Banner type="cent" />
    <CurrencySlider />
    <EndlessPossibilitiesJourney />
    <CentAccountFeatures />
    <ChooseYourBait />
    <QuickSteps />
    <TradeMarketCent />
    </>
  )
}

export default page
