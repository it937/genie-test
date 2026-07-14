import React from 'react'
import CalculatorPageClient from '@/components/Calculator/CalculatorPageClient'
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Trading Calculator',
  description:
    'Use the Genie trading calculator to estimate margin, pip value, swaps, and other trade sizing metrics.',
  path: '/calculator',
  keywords: ['Genie calculator', 'trading calculator', 'forex calculator'],
});

const page = () => {
  return (
    <>
      <CalculatorPageClient />
    </>
  )
}

export default page
