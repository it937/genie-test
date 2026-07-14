'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/AboutUs/BannerTranslations'

const Banner = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <>
      {/* First Section: Heading and Start Trading Button with Extended Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='relative min-h-[80vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center bg-[#0a0a3a] bg-[url('/About-Us/About-Us-02.webp')] md:bg-[center_-180px] md:bg-[110%_auto] 2xl:bg-[center_-800px] will-change-transform translate-z-0"
        ></motion.div>
        <div className='relative z-10 w-full max-w-6xl px-6 md:px-10'>
          <div className='text-white flex flex-col-reverse md:flex-row mt-30 md:mt-30'>
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='w-full md:w-full flex flex-col justify-center items-center md:items-center text-center md:text-center mt-10 md:mt-30'
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                className={`text-2xl md:text-3xl font-extrabold mb-4 banner-heading-gradient  text-center md:text-center max-w-2xl mx-auto ${language === 'ar' ? 'py-6 leading-relaxed' : 'leading-tight'} `}
              >
                {t.heading}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                className={`text-base sm:text-lg md:text-xl font-medium text-white/90 mb-8 md:mb-12 md:mr-12 px-4 md:px-28 ${language === 'ar' ? 'leading-relaxed' : ''} `}
              >
                {t.paragraph}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner