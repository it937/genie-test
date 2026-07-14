'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/MT5/UnmatchedTradingTranslations'

const OnlineAccountEasySteps = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='hidden md:block'>
      <div className='relative min-h-[60vh] 2xl:min-h-[45vh] flex items-center justify-center text-center overflow-hidden bg-transparent'>
        <div className='relative z-10 w-full max-w-6xl px-6'>
          <div
            className='bg-cover bg-center rounded-[50px] w-[70rem] h-[22rem] mx-auto'
            style={{
              backgroundImage: "url('/mt5/20251107-171811.webp')"
            }}
          >
            <div className='text-white text-start items-center justify-center w-full pt-16 ml-20'>
              <h1 className={`text-3xl font-extrabold mb-4 max-w-xs banner-heading-gradient  text-start ${language === 'ar' ? 'py-4 leading-relaxed' : 'leading-tight'}`}>
                {t.heading}
              </h1>
              <Link href='https://client.geniefx.com/register-live-trading-account-F1' target='_blank'>
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden rounded-full text-white font-semibold mt-8'
                  style={{ background: 'transparent' }}
                >
                  <span className='relative z-10'>{t.startTrading}</span>
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl pointer-events-none'
                    animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OnlineAccountEasySteps
