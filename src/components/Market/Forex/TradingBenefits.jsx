'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Market/Forex/TradingBenefitsTranslations'

export default function TradingBenefits() {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = [
    { title: t.benefit1Title, description: t.benefit1Desc, align: "left" },
    { title: t.benefit2Title, description: t.benefit2Desc, align: "right" },
    { title: t.benefit3Title, description: t.benefit3Desc, align: "left" },
    { title: t.benefit4Title, description: t.benefit4Desc, align: "right" },
  ]

  return (
    <section className="w-full px-4 sm:px-6 py-10 sm:py-16" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-10 bg-[#f5f5f5] rounded-[30px] sm:rounded-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-8"
        >
          <h1 className={`text-2xl md:text-3xl font-extrabold mb-3 heading-gradient  ${language === 'ar' ? 'py-8' : ''}`}>
            {t.title}
          </h1>
          <p className="text-md md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: benefit.align === "left" ? -30 : 30, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex justify-center">
                <div className={`absolute top-5 ${benefit.align === "right" ? "right-0 md:right-20" : "left-0 md:left-20"} z-10`}>
                  <div className={`${benefit.align === "right" ? "rounded-l-xl rounded-tr-2xl pl-10 pr-6 md:pl-16 md:pr-10 bg-gradient-to-r from-[#180248] to-[#7102ba]" : "rounded-r-xl rounded-tl-2xl pr-10 pl-6 md:pr-16 md:pl-10 bg-gradient-to-r from-[#7102ba] to-[#180248]"} py-3 shadow-md whitespace-nowrap`}>
                    <h3 className="text-white font-bold text-lg md:text-xl">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                <div className="max-w-3xl w-full pt-10 sm:pt-12">
                  <div className="bg-transparent border-2 border-purple-300 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-8 sm:py-10 shadow-sm">
                    <p className={`text-black text-base md:text-lg leading-relaxed font-medium ${benefit.align === "right" ? "text-right" : "text-left"}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}