import React from 'react';
import Banner from '@/components/Contact-Us/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import MapComponent from '@/components/Contact-Us/MapComponent';
import NeedAssistance from '@/components/Contact-Us/NeedAssistance';
import TradeMarket from '@/components/Contact-Us/TradeMarket';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Genie for account support, trading assistance, and general company inquiries.',
  path: '/contact-us',
  keywords: ['Genie contact', 'broker support', 'trading support'],
});

const page = () => {
  return (
    <>
        <Banner />
        <CurrencySlider />
        <MapComponent />
        <NeedAssistance />
        <TradeMarket />
    </>
  )
}

export default page
