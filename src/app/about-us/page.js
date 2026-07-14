import React from 'react';
import Banner from '@/components/About-Us/Banner.jsx';
import CurrencySlider from '@/components/Account/CurrencySlider';
import MissionVision from '@/components/About-Us/MissionVision.jsx';
import StandOut from '@/components/About-Us/StandOut.jsx';
import GenieValues from '@/components/About-Us/GenieValues.jsx';
import TradeMarket from '@/components/About-Us/TradeMarket.jsx';
import FAQs from '@/components/About-Us/FAQSection.jsx';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About Us',
  description:
    'Learn more about Genie, our mission, values, trading vision, and what sets our brokerage experience apart.',
  path: '/about-us',
  keywords: ['Genie about us', 'broker mission', 'trading company'],
});

const page = () => {
  return (
    <>
        <Banner />
        <CurrencySlider />
        <MissionVision />
        <StandOut />
        <GenieValues />
        <TradeMarket />
        <FAQs />
    </>
  )
}

export default page
