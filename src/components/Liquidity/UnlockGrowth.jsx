"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/UnlockGrowthTranslations'

export default function TradingAccountsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="text-white p-4 md:p-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-cover bg-center rounded-[40px] md:rounded-[50px] w-full max-w-[65rem] mx-auto overflow-hidden"
        style={{ backgroundImage: "url('/homepage/Homepage-02.webp')", backgroundPositionY: "100%" }}
      >
        <div className="px-6 md:px-12 pt-12 md:pt-16 pb-8">
          <div className="text-center mb-10 md:mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`text-3xl md:text-3xl font-extrabold mb-3 md:mb-4 leading-tight banner-heading-gradient max-w-md mx-auto ${language === 'ar' ? 'py-6' : ''} `}
            >
              {t.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col  justify-start mb-8 ${language === 'ar' ? 'py-6 text-right' : 'text-left'} `}
            >
              <h2 className={`text-xl md:text-2xl font-extrabold mb-3 md:mb-4 leading-tight ${language === 'ar' ? 'mr-12' : ''}`}>
                {t.mt5Bridge}
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed max-w-4xl mr-auto">
                {t.mt5Desc}
              </p>
            </motion.div>

            {/* Mobile-only image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex pr-5 justify-center my-10 md:hidden"
              >
                <Image
                  src="/homepage/Homepage-17.webp"
                  width={400}
                  height={400}
                  alt="Liquidity"
                />
              </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col  justify-start mb-8 ${language === 'ar' ? 'py-6 text-left' : 'text-right'} `}
            >
              <h2 className={`text-xl md:text-2xl font-extrabold mb-3 md:mb-4 leading-tight ${language === 'ar' ? 'ml-12' : ''}`}>
                {t.customStreams}
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed max-w-4xl ml-auto">
                {t.customDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden md:flex justify-center mt-12"
            >
              <Image src="/homepage/Homepage-17.webp" width={600} height={600} alt="Liquidity" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}