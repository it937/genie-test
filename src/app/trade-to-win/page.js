import React from 'react';
import Banner from '@/components/TradeToWin/Banner';
import ProgramDuration from '@/components/TradeToWin/ProgramDuration';
import Participate from  '@/components/TradeToWin/Participate';
import RewardTiers from '@/components/TradeToWin/RewardTiers';
import SimpleSteps from '@/components/TradeToWin/SimpleSteps';
import WhyTradeWithGenie from '@/components/TradeToWin/WhyTradeWithGenie';
import FAQSection from '@/components/TradeToWin/FAQSection';
import FinalCTA from '@/components/TradeToWin/FinalCTA';
import ClaimRewardForm from '@/components/TradeToWin/ClaimRewardForm';
import CurrencySlider from "@/components/Account/CurrencySlider";
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trade to Win',
  description:
    'Join the Genie Trade to Win campaign to explore reward tiers, participation steps, and program details.',
  path: '/trade-to-win',
  keywords: ['Genie trade to win', 'trading rewards', 'trading competition'],
});

const page = () => {
  return (
    <>
      <Banner />
      <CurrencySlider />
      <Participate />
      <ProgramDuration />
      <RewardTiers />
      <SimpleSteps />
      <WhyTradeWithGenie />
      <FAQSection />
      <FinalCTA />
      <ClaimRewardForm />
    </>
  )
}

export default page
