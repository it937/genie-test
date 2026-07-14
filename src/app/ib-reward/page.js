import React from 'react';
import Banner from '@/components/IB-Reward/Banner';
import KickstartRewards from '@/components/IB-Reward/KickstartRewards';
import StrongNetwork from '@/components/IB-Reward/StrongNetwork';
import RewardsShowcase from '@/components/IB-Reward/RewardsShowcase';
import IBEcoSystem from '@/components/IB-Reward/IBEcoSystem';
import QuickSteps from '@/components/IB-Reward/QuickSteps';
import TreasureBanner from '@/components/IB-Reward/TreasureBanner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import ClaimRewardsCTA from '@/components/IB-Reward/ClaimRewardsCTA';
import FAQSection from '@/components/IB-Reward/FAQSection';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'IB Reward Program',
  description:
    'Explore the Genie IB Reward Program with partner incentives, ecosystem benefits, and reward opportunities.',
  path: '/ib-reward',
  keywords: ['Genie IB reward', 'introducing broker rewards', 'partner incentives'],
});

const page = () => {
  return (
    <>
        <Banner />
        <div className='relative z-10'>
          <CurrencySlider />
        </div>
        <KickstartRewards />
        <StrongNetwork />
        <RewardsShowcase />
        <IBEcoSystem />
        <QuickSteps />
        <FAQSection />
        <TreasureBanner />
        <ClaimRewardsCTA />
    </>
  )
}

export default page
