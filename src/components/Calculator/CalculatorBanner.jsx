'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Calculator/CalculatorTranslations'

const TAB_ORDER = ['pnl', 'lotSize', 'margin']

const CalculatorBanner = ({ activeTab, onTabChange }) => {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const isArabic = language === 'ar'

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative min-h-[76vh] overflow-hidden"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div
        className={`absolute inset-0 bg-[#0a0a3a] bg-[url('/homepage/Homepage-02.webp')] bg-cover bg-center md:bg-[center_-180px] md:bg-[110%_auto] ${isArabic ? '-scale-x-100' : ''}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,8,34,0.45)_0%,rgba(25,15,66,0.72)_42%,rgba(255,255,255,0)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[76vh] max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className={`banner-heading-gradient text-3xl font-black md:text-4xl ${isArabic ? 'py-3 leading-[1.5]' : 'leading-tight'}`}>
              {t.tabs[activeTab]}
            </h1>
            <p className="mx-auto mt-5 max-w-4xl text-sm font-medium leading-7 text-white/88 sm:text-base md:text-lg">
              {t.descriptions[activeTab]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {TAB_ORDER.map((tab) => {
              const active = tab === activeTab

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onTabChange(tab)}
                  className={`group rounded-[22px] border px-5 py-4 text-center shadow-[0_18px_40px_rgba(18,8,61,0.24)] backdrop-blur-md transition duration-300 ${
                    active
                      ? 'border-white/80 bg-white text-[#210751] shadow-[0_22px_50px_rgba(255,255,255,0.18)]'
                      : 'border-white/15 bg-white/8 text-white hover:border-white/28 hover:bg-white/14'
                  }`}
                >
                  <div className={`text-sm font-extrabold uppercase tracking-[0.12em] sm:text-base ${active ? 'text-[#5b10bd]' : 'text-white group-hover:text-white'}`}>
                    {t.tabs[tab]}
                  </div>
                </button>
              )
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default CalculatorBanner
