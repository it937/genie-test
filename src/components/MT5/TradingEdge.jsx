'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/MT5/TradingEdgeTranslations'

const features = (t) => [
  { text: t.feature1 },
  { text: t.feature2 },
  { text: t.feature3 },
  { text: t.feature4 },
  { text: t.feature5 },
];

export default function TradingFeatures() {
  const { language } = useLanguage()
  const t = translations[language]
  const featureList = features(t)
  const handleScrollToDownloads = () => {
    const downloadsSection = document.getElementById('mt5-downloads')

    if (downloadsSection) {
      downloadsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mb-12 mt-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl heading-gradient font-extrabold text-center mb-8 ${language === 'ar' ? 'py-8' : ''}`}
        >
          {t.heading}
        </motion.h1>

        <div className="space-y-2 mb-12">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 pt-1.5">
                <Image
                  src="/mt5/Platform-MT5-curved-05.webp"
                  alt="checkmark"
                  width={24}
                  height={24}
                  className="w-5 h-5"
                />
              </div>
              <p className="text-lg text-black font-medium leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button
            type='button'
            onClick={handleScrollToDownloads}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold text-white text-xs transition-all duration-300 hover:shadow-lg cta"
          >
            {t.exploreButton}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
