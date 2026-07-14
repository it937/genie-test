import React from 'react';
import Banner from '@/components/Promotion/20-Bonus/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import WhatMakesGenieMagical from '@/components/Promotion/20-Bonus/WhatMakesGenieMagical';
import ClaimYourBonus from '@/components/Promotion/20-Bonus/ClaimYourBonus';
import GenieCredits from '@/components/Promotion/20-Bonus/GenieCredits';
import WhyTrade from '@/components/Promotion/20-Bonus/WhyTrade';
import FAQSection from '@/components/Promotion/20-Bonus/FAQSection';
import StrongerWishBanner from '@/components/Promotion/20-Bonus/StrongerWishBanner';
import ClaimBonus from '@/components/Promotion/20-Bonus/ClaimBonus';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: '20% Bonus Promotion',
  description:
    'Discover the Genie 20% Bonus Promotion, campaign benefits, bonus details, and how to claim your offer.',
  path: '/promotion/20-bonus',
  keywords: ['Genie bonus', '20 bonus', 'trading promotion', 'forex bonus'],
});

const page = () => {
  return (
    <>
        <Banner type="advanced" />
        <CurrencySlider />
        <WhatMakesGenieMagical />
        <ClaimYourBonus />
        <GenieCredits />
        <WhyTrade />
        <FAQSection />
        <StrongerWishBanner />
        <ClaimBonus />
    </>
  )
}

export default page
