'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/GenieBannerTranslations'

const TradeMarketUltimate = () => {
  const LIVE_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1'
  const DEMO_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1?p2=Demo&demo=true'
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='relative w-full bg-white pb-0 mb-0' >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='relative w-full mx-auto max-w-6xl px-6 py-10 md:py-0'
      >
        <div
          className='rounded-[50px] md:rounded-t-[50px] md:rounded-b-none w-full md:h-[20rem] mx-auto flex items-center bg-cover bg-center'
          style={{ backgroundImage: "url('/homepage/Homepage-New-Design-17.webp')" }}
        >
          <div className='w-full sm:w-1/2 px-8 md:px-12 py-10'>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-2xl sm:text-3xl font-extrabold heading-gradient text-center sm:text-left leading-relaxed'
            >
              {t.title}
              <br className='hidden sm:block' />{' '}
              <span className={` font-semibold text-2xl ${language === 'ar' ? '' : 'italic'} `}>{t.subtitle1} <br className='md:hidden' /> {t.subtitle2} <br className='md:hidden' /> {t.subtitle3}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className='mt-6 sm:mt-8 flex flex-col items-center sm:items-start'
            >
              <Link
                href={LIVE_ACCOUNT_URL}
                target='_blank'
                className='rounded-full font-semibold text-white text-sm sm:text-sm transition-all duration-300 hover:shadow-xl cta hover:scale-105'
              >
                {t.openLiveAccount}
              </Link>
              <Link
                href={DEMO_ACCOUNT_URL}
                target='_blank'
                className='mt-3 ml-3 text-xs text-[#180248] hover:text-[#7102ba] transition-colors duration-300'
              >
                {t.tryRiskFreeDemo}
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className='h-0 m-0 p-0'></div>
    </section>
  )
}

export default TradeMarketUltimate
