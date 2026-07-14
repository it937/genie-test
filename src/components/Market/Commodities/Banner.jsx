'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Market/Commodities/BannerTranslations'

const Banner = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const MotionLink = motion(Link)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className='relative min-h-[120vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
        className={`absolute inset-0 z-0 bg-cover bg-no-repeat bg-center bg-[#0a0a3a] 
        bg-[url('/commodities/Products-Mobile-Version-06.webp')]
        md:bg-[url('/commodities/20251021-170253.webp')]
        md:bg-[center_-180px] md:bg-[110%_auto] 2xl:bg-[center_-550px]
        will-change-transform translate-z-0  
        ${language === 'ar' ? '-scale-x-100' : ''}`}
      ></motion.div>

      <div className='relative z-10 w-full max-w-6xl px-6 md:px-10'>
        <div className='text-white flex flex-col-reverse md:flex-row mt-30 md:mt-30'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
            className={` w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center  mt-10 md:mt-30 ${
              language === 'ar' ? 'md:text-right' : 'md:text-left'
            }`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0, ease: 'easeOut' }}
              className={`text-2xl md:text-3xl font-extrabold mb-4 banner-heading-gradient leading-tight text-center md:text-left  ${
                language === 'ar' ? 'py-12 md:text-right' : 'md:text-left'
              }`}
            >
              <span className='text-4xl'>{t.heading1}</span>
              <br />
              {t.heading2}
              <br />
              <span className='text-4xl md:text-[40px]'>{t.heading3}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
              className={`text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-8 md:mb-12 px-4 md:px-0  ${
                language === 'ar'
                  ? 'md:text-right md:ml-24'
                  : 'md:text-left md:mr-12 '
              }`}
            >
              {t.paragraph}
            </motion.p>

            <MotionLink
              href='https://client.geniefx.com/register-live-trading-account-F1'
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
              className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold inline-block'
            >
              <span className='relative z-10'>{t.startTrading}</span>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl transition-all duration-300' />
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Banner
