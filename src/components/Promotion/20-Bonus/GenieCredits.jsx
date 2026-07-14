'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Promotion/Promotion20/GenieCreditsTranslations'

const features = [
  { text: "feature1" },
  { text: "feature2" },
  { text: "feature3" },
  { text: "feature4" },
  { text: "feature5" },
  { text: "feature6" },
]

export default function TradingFeatures() {
  const { language } = useLanguage()
  const t = translations[language]
  const MotionLink = motion(Link)

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mb-12 mt-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-2xl md:text-3xl heading-gradient font-extrabold text-center mb-4 md:mx-40 ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}
        >
          {t.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-md md:text-lg font-medium text-start mb-6"
        >
          {t.subtitle}
        </motion.p>

        <div className="space-y-2 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 pt-1.5">
                <Image src="/promotion/20-bonus/20-Bonus-08.webp" alt="checkmark" width={24} height={24} className="w-5 h-5" />
              </div>
              <p className="text-lg text-black font-medium leading-relaxed">{t[feature.text]}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <MotionLink
            href='https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-semibold text-white text-xs transition-all duration-300 hover:shadow-lg cta"
          >
            {t.cta}
          </MotionLink>
        </div>
      </div>
    </section>
  )
}