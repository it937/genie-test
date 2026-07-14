'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/ContactUs/BannerTranslations'

const Banner = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const handleGetInTouchClick = () => {
    const needAssistanceSection = document.getElementById('need-assistance')

    if (needAssistanceSection) {
      needAssistanceSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

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
          className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[#0a0a3a] bg-[url('/homepage/Homepage-02.webp')] md:bg-[url('/Contact-Us/Contact-Us-02.webp')] md:bg-[center_-180px] md:bg-[110%_auto] 2xl:bg-[center_-400px] will-change-transform translate-z-0 ${language === 'ar' ? '-scale-x-100' : ''}`}
        ></motion.div>
        <div className='relative z-10 w-full max-w-6xl px-6 md:px-10'>
          <div className='text-white flex flex-col-reverse md:flex-row mt-30 md:mt-30'>
            {/* Left Content */}
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
                className={`text-2xl md:text-3xl font-extrabold mb-4 text-white md:banner-heading-gradient text-center  max-w-md  ${language === 'ar' ? 'md:py-4 leading-loose md:text-right' : 'leading-tight md:text-left'}`}
              >
                <span className='text-2xl md:text-3xl px-0 md:px-0'>
                  {t.headingPart1} <br />
                  {t.headingPart2}
                </span>
                <br />
                <span className='text-3xl md:text-[40px]'>{t.headingContact}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
                className={`text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-8 md:mb-12  px-4 md:px-0 ${language === 'ar' ? 'md:ml-12 md:text-right leading-loose' : 'md:mr-46'} `}
              >
                {t.description}
              </motion.p>
              <motion.div className='flex flex-wrap justify-center gap-8'>
                <motion.button
                  type='button'
                  onClick={handleGetInTouchClick}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold'
                >
                  <span className='relative z-10'>{t.ctaButton}</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl transition-all duration-300' />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner
