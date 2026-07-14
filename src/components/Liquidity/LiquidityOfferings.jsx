'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/LiquidityOfferingsTranslations'

const decodeText = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
}

const offeringVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
}

export default function LiquidityOfferings() {
  const { language } = useLanguage()
  const t = translations[language]
  const handleScrollToForm = () => {
    const leadForm = document.getElementById('liquidity-lead-form')

    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const offerings = [
    { number: 1, title: t.reliableHosting, description: t.reliableDesc },
    { number: 2, title: t.smartRisk, description: t.smartRiskDesc },
    { number: 3, title: t.lightningExecution, description: t.lightningDesc },
    { number: 4, title: t.lowLatency, description: t.lowLatencyDesc },
    { number: 5, title: t.advancedConnectivity, description: t.advancedDesc },
    { number: 6, title: t.dedicatedSupport, description: t.dedicatedDesc },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-background" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          variants={decodeText}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`text-2xl md:text-3xl font-extrabold text-center mb-16 heading-gradient ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}
        >
          {t.title}
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-8 md:space-y-10"
        >
          {offerings.map((offering) => (
            <motion.div key={offering.number} variants={offeringVariant} className="flex gap-4 md:gap-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg md:text-xl font-bold text-[#180248]"
              >
                {offering.number}.
              </motion.span>
              <div className="flex-1">
                <motion.h2 variants={decodeText} className={`text-lg md:text-xl font-bold text-[#180248] mb-1 ${language === 'ar' ? 'py-1' : ''}`}>
                  {offering.title}
                </motion.h2>
                <motion.p variants={offeringVariant} className="text-base md:text-lg text-[#180248] font-medium leading-relaxed">
                  {offering.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            type='button'
            onClick={handleScrollToForm}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-12 px-12 py-3 rounded-full text-white cta shadow-xl hover:shadow-2xl transition-all"
          >
            {t.connectNow}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
