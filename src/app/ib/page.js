import React from 'react';
import Banner from '@/components/IB-Broker/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import WhatIsIB from '@/components/IB-Broker/WhatIsIB';
import WhyChooseGenieIB from '@/components/IB-Broker/WhyChooseGenieIB';
import Perks from '@/components/IB-Broker/Perks';
import QuickSteps from '@/components/IB-Broker/QuickSteps';
import Register from '@/components/IB-Broker/Register';
import FinancialSuccessBanner from '@/components/IB-Broker/FinancialSuccessBanner';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'IB Broker Program',
  description:
    'Explore the Genie IB Broker Program with partner benefits, commission opportunities, and onboarding steps.',
  path: '/ib',
  keywords: ['Genie IB broker', 'introducing broker', 'broker partnership'],
});

const page = () => {
  return (
    <>
        <Banner />
        <CurrencySlider />
        <WhatIsIB />
        <WhyChooseGenieIB />
        <Perks />
        <QuickSteps />
        {/* <Register /> */}
        <FinancialSuccessBanner />
    </>
  )
}

export default page
