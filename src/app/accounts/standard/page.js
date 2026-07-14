import React from 'react'
import Banner from '@/components/Account/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import EndlessPossibilitiesJourney from '@/components/Account/Standard/EndlessPossibilitiesJourney';
import StandardAccountFeatures from '@/components/Account/Standard/Features';
import ChooseYourBait from '@/components/Account/ChooseYourBait';
import QuickSteps from '@/components/Account/QuickSteps';
import TradeMarketStandard from '@/components/Account/Standard/TradeMarketStandard';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Standard Account',
  description:
    'Review the Genie Standard Account features, trading conditions, and account setup details for everyday traders.',
  path: '/accounts/standard',
  keywords: ['Genie standard account', 'trading account', 'forex standard account'],
});

const page = () => {
  return (
    <>
    <Banner type="standard" />
    <CurrencySlider />
    <EndlessPossibilitiesJourney />
    <StandardAccountFeatures />
    <ChooseYourBait />
    <QuickSteps />
    <TradeMarketStandard />
    </>
  )
}

export default page
