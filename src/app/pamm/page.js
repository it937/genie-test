import React from 'react'
import Banner from '@/components/PAMM/Banner';
import CurrencySlider from "@/components/Account/CurrencySlider";
import PAMMSolution from '@/components/PAMM/PAMMSolution';
import WhatIsPAMM from '@/components/PAMM/WhatIsPAMM';
import PAMMBenefits from '@/components/PAMM/PAMMBenefits';
import PAMMInvesting from '@/components/PAMM/PAMMInvesting';
import PAMMSolutionSteps from '@/components/PAMM/PAMMSolutionSteps';
import FAQSection from '@/components/PAMM/FAQSection';

const page = () => {
  return (
    <>
    <Banner />
    <CurrencySlider />
    <PAMMSolution />
    <WhatIsPAMM />
    <PAMMBenefits />
    <PAMMInvesting />   
    <PAMMSolutionSteps />
    <FAQSection />
    </>
  )
}

export default page
