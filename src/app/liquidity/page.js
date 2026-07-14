import React from 'react'
import Banner from '../../components/Liquidity/Banner';
import CurrencySlider from '@/components/Account/CurrencySlider';
import InstantAccess from '@/components/Liquidity/InstantAccess';
import UnlockGrowth from '@/components/Liquidity/UnlockGrowth';
import LiquidityOfferings from '@/components/Liquidity/LiquidityOfferings';
import QuickSteps from '@/components/Liquidity/QuickSteps';
import GenieConnects from '@/components/Liquidity/GenieConnects';
import LiquidityLeadForm from '@/components/Liquidity/LiquidityLeadForm';
import ReadyToDiveBanner from '@/components/Liquidity/ReadyToDiveBanner';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Liquidity Solutions',
  description:
    'Discover Genie liquidity solutions, market access, and onboarding for partners seeking deeper trading infrastructure.',
  path: '/liquidity',
  keywords: ['Genie liquidity', 'broker liquidity', 'liquidity solutions'],
});

const page = () => {
  return (
    <>
        <Banner />
        <CurrencySlider />
        <InstantAccess />
        <UnlockGrowth />
        <LiquidityOfferings />
        <QuickSteps />
        <GenieConnects />
        <LiquidityLeadForm />
        <ReadyToDiveBanner />
    </>
  )
}

export default page
