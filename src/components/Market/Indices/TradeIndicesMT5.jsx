"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Market/Indices/TradeIndicesMT5Translations'

export default function TradeIndicesMT5() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    { title: t.feature1Title, description: t.feature1Desc },
    { title: t.feature2Title, description: t.feature2Desc },
    { title: t.feature3Title, description: t.feature3Desc },
    { title: t.feature4Title, description: t.feature4Desc },
  ]

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className={`text-3xl font-extrabold heading-gradient ${language === 'ar' ? 'py-4' : ''}`}>
          {t.title}
        </h2>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-[#f5f5f5] rounded-[3rem] px-12 py-12 space-y-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
          >
            <div className="space-y-0">
              <h3 className="text-xl font-bold text-[#460c63]">{feature.title}</h3>
              <p className="text-lg font-medium leading-relaxed">{feature.description}</p>
            </div>
            {index < features.length - 1 && <div className="mt-10 border-t border-gray-300"></div>}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}