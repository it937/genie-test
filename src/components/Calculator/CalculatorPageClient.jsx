'use client'

import React, { useState } from 'react'
import CalculatorBanner from './CalculatorBanner'
import CalculatorHub from './CalculatorHub'

const CalculatorPageClient = () => {
  const [activeTab, setActiveTab] = useState('pnl')

  return (
    <>
      <CalculatorBanner activeTab={activeTab} onTabChange={setActiveTab} />
      <CalculatorHub activeTab={activeTab} />
    </>
  )
}

export default CalculatorPageClient
