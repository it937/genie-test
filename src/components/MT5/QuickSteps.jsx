'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/MT5/QuickStepsTranslations'

const items = (t) => [
  { value: t.register, label: t.registerDesc, iconSrc: "/mt5/Platform-MT5-curved-10.svg", iconAlt: "Register icon" },
  { value: t.download, label: t.downloadDesc, iconSrc: "/mt5/Platform-MT5-curved-11.webp", iconAlt: "Download icon" },
  { value: t.fund, label: t.fundDesc, iconSrc: "/mt5/Platform-MT5-curved-12.webp", iconAlt: "Fund icon" },
  { value: t.trade, label: t.tradeDesc, iconSrc: "/mt5/Platform-MT5-curved-07.webp", iconAlt: "Trade icon" },
]

const QuickSteps = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const itemList = items(t)

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 mb-8 mt-12 md:mt-0" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 md:mb-12 text-center"
      >
        <h2 className={`text-balance font-extrabold tracking-tight text-3xl heading-gradient ${language === 'ar' ? 'py-4' : ''}`}>
          {t.heading}
        </h2>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {itemList.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <StatCard value={card.value} label={card.label} iconSrc={card.iconSrc} iconAlt={card.iconAlt} />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link href="https://client.geniefx.com/register-live-trading-account-F1" target="_blank" rel="noopener noreferrer">
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-20 py-3 rounded-full font-semibold text-white text-lg transition-all duration-300 hover:shadow-lg cta"
          >
            {t.startTrading}
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

function StatCard({ value, label, iconSrc, iconAlt }) {
  return (
    <div className="relative rounded-3xl overflow-hidden min-h-48 md:min-h-48 bg-[#f5f5f5] shadow-md">
      <div className="relative h-full p-6 md:px-8 flex flex-col justify-between">
        {iconSrc && (
          <div className="absolute left-7 top-6 h-10 w-10 md:h-12 md:w-12 rounded-lg flex items-center justify-center">
            <Image src={iconSrc} alt={iconAlt} width={32} height={32} className="h-full w-full object-contain p-1" />
          </div>
        )}
        <div>
          <div className="font-extrabold text-xl md:text-xl text-[#460c63] mt-14">
            {value}
          </div>
          <div className="mt-0 text-base md:text-md text-[#460c63] font-medium">
            {label}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickSteps;