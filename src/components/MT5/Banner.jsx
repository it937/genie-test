'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/MT5/BannerTranslations'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4,
      ease: 'easeInOut'
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeInOut' }
  }
}

const Banner = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const handleScrollToDownloads = () => {
    const downloadsSection = document.getElementById('mt5-downloads')

    if (downloadsSection) {
      downloadsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <motion.section
        variants={container}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='relative min-h-[100vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className='absolute inset-0 z-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('/homepage/Homepage-02.webp')`,
            backgroundColor: '#0a0a3a'
          }}
        />

        <div className='relative z-10 w-full max-w-6xl px-6 md:px-10'>
          <div className='text-white flex flex-col-reverse md:flex-row mt-10 md:mt-20'>
            <motion.div
              variants={container}
              className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-10 md:mt-30'
            >
              <motion.h1
                variants={fadeUp}
                className={`text-2xl md:text-4xl font-extrabold mb-8 banner-heading-gradient  text-center md:text-left  ${language === 'ar' ? 'py-6 md:text-right leading-relaxed' : 'leading-tight'}`}
              >
                {t.heading1}
                <br />
                <span className='text-3xl md:text-4xl'>{t.heading2}</span>
              </motion.h1>

              <motion.button
                type='button'
                onClick={handleScrollToDownloads}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden group'
              >
                <span className='relative z-10'>{t.downloadNow}</span>
                <motion.div
                  className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                  animate={{ scale: [0.9, 1.4], opacity: [0.4, 0.7, 0.4] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300' />
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className='w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-32'
            >
              <motion.img
                src='/mt5/20251119-192518.webp'
                className='object-contain w-64 sm:w-80 md:w-[450px] h-auto drop-shadow-2xl'
                loading='eager'
                animate={{
                  y: [0, -15, 0],
                  filter: [
                    'drop-shadow(0 0 20px rgba(34,211,238,0.4))',
                    'drop-shadow(0 0 45px rgba(34,211,238,0.8))',
                    'drop-shadow(0 0 20px rgba(34,211,238,0.4))'
                  ]
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                  filter: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
        className='relative flex items-center justify-center text-center overflow-visible bg-transparent -mt-32'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className='relative z-10 w-full max-w-6xl px-4 sm:px-6'>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className='bg-cover bg-center rounded-[20px] sm:rounded-[40px] lg:rounded-[50px] w-full lg:w-[55rem] h-auto lg:h-[32.5rem] mx-auto flex flex-col'
            style={{ backgroundColor: '#f5f5f5' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className='text-purple text-center items-center justify-center max-w-3xl mx-auto pt-8 px-4 sm:px-8'
            >
              <h1 className={`text-2xl md:text-3xl font-extrabold heading-gradient mb-4 lg:mx-40 ${language === 'ar' ? 'py-6.5 leading-relaxed' : 'leading-tight'}`}>
                {t.secondHeading}
              </h1>
              <p className='text-md md:text-lg font-medium px-4 sm:px-12 lg:px-24'>
                {t.secondParagraph}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
              className='flex justify-center items-center mt-6 sm:mt-10.5'
            >
              <motion.img
                src='/mt5/20251107-171356.webp'
                alt='Right Image'
                className='w-[280px] sm:w-[400px] md:w-[500px] lg:w-[540px] h-auto'
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner
