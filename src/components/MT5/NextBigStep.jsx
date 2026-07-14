"use client"

import Image from "next/image"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/MT5/NextBigStepTranslations'

const items = (t) => [
  { value: t.swiftExecution, label: t.swiftExecutionDesc, iconSrc: "/mt5/Platform-MT5-05.svg", iconAlt: "Swift Execution icon" },
  { value: t.dynamicTrading, label: t.dynamicTradingDesc, iconSrc: "/mt5/Platform-MT5-02.svg", iconAlt: "Dynamic Trading icon" },
  { value: t.competitivePricing, label: t.competitivePricingDesc, iconSrc: "/mt5/Platform-MT5-04.svg", iconAlt: "Competitive Pricing icon" },
  { value: t.globalAccess, label: t.globalAccessDesc, iconSrc: "/mt5/Platform-MT5-03.svg", iconAlt: "Global Access icon" },
]

export default function LiquidityPool() {
  const { language } = useLanguage()
  const t = translations[language]
  const itemList = items(t)

  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <header className="mb-10 md:mb-12 text-center">
        <h2 className={`font-extrabold tracking-tight text-3xl heading-gradient ${language === 'ar' ? 'py-4' : ''}`}>
          {t.heading}
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {itemList.map((card, idx) => (
          <StatCard
            key={idx}
            value={card.value}
            label={card.label}
            iconSrc={card.iconSrc}
            iconAlt={card.iconAlt}
          />
        ))}
      </div>
    </section>
  )
}

function StatCard({ value, label, iconSrc, iconAlt }) {
  return (
    <div className="relative rounded-3xl overflow-hidden min-h-48 md:min-h-50 bg-[#f5f5f5] shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1 cursor-pointer group">
      <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
        {iconSrc && (
          <div className="absolute left-7 top-6 h-14 w-14 md:h-14 md:w-14 rounded-lg bg-transparent flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={32}
              height={32}
              className="h-full w-full object-contain p-1"
            />
          </div>
        )}
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          <div className="font-extrabold text-lg md:text-xl text-[#460c63] mt-16">
            {value}
          </div>
          <div className="mt-1 text-base md:text-md text-[#460c63] font-medium">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}