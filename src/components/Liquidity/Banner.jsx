'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/BannerTranslations'

const Banner = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='relative min-h-screen md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          className={`absolute inset-0 z-0 bg-cover bg-no-repeat bg-center bg-[#0a0a3a] bg-[url('/Liquidity/Liquidity-02.webp')] md:bg-[center_-180px] md:bg-[110%_auto] 2xl:bg-[center_-400px] will-change-transform translate-z-0 ${language === 'ar' ? '-scale-x-100' : ''}`}
        ></motion.div>
        <div className='relative z-10 w-full max-w-6xl px-6 md:px-10'>
          <div className='text-white flex flex-col-reverse md:flex-row mt-30 md:mt-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-10 md:mt-30'
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                className={`text-2xl md:text-3xl font-extrabold mb-4 banner-heading-gradient  text-center md:text-left max-w-md ${language === 'ar' ? 'md:py-4 leading-relaxed' : 'leading-tight'}`}
              >
                <span className='text-2xl md:text-3xl px-4 md:px-0'>{t.heading1}</span>
                <br />
                <span className='text-3xl md:text-4xl'>{t.heading2}</span>
                <br />
                <span className='text-3xl md:text-4xl'>{t.heading3}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                className={`text-base sm:text-lg md:text-lg font-medium text-gray-300 mb-8 md:mb-12  px-4 md:px-0 ${language === 'ar' ? 'md:ml-12 md:text-right' : 'md:mr-12'} `}
              >
                {t.description}
              </motion.p>
              <motion.div className='grid grid-cols-2 gap-6 px-4 md:px-0'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  className='relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5d02a0] via-[#0a0137] to-[#0a0137] text-white font-bold flex items-center justify-center p-3 text-base sm:text-lg'
                >
                  <span className='relative z-10 text-center'>
                    <span className='font-bold'>100</span> <span className='font-medium'>{t.statProducts}</span>
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  className='relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5d02a0] via-[#0a0137] to-[#0a0137] text-white font-bold flex items-center justify-center p-3 text-base sm:text-lg'
                >
                  <span className='relative z-10 text-center'>
                    <span className='font-bold'>1:100</span> <span className='font-medium'>{t.statLeverage}</span>
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  className='relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5d02a0] via-[#0a0137] to-[#0a0137] text-white font-bold flex items-center justify-center p-3 text-base sm:text-lg'
                >
                  <span className='relative z-10 text-center'>
                    <span className='font-bold'>0</span> <span className='font-medium'>{t.statSpread}</span>
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  className='relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5d02a0] via-[#0a0137] to-[#0a0137] text-white font-bold flex items-center justify-center p-3 text-base sm:text-lg'
                >
                  <span className='relative z-10 text-center'>
                    <span className='font-bold'>24/5</span> <span className='font-medium'>{t.statHours}</span>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner