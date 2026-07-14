'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/BannerTranslations'

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

const imageEntrance = {
  hidden: { opacity: 0, y: 34, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: 'easeOut', delay: 0.45 }
  }
}

const Banner = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const MotionLink = motion(Link)

  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='relative isolate z-0 min-h-[70vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden pb-0'
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

      <div className='relative z-10 w-full max-w-6xl px-6 md:px-6'>
        <div className='text-white mt-10 md:mt-20'>

          {/* TEXT COLUMN */}
          <motion.div
            variants={container}
            className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-30 lg:mt-80 md:pb-0'
          >
            <motion.h1
              variants={fadeUp}
              className={`text-2xl md:text-3xl lg:text-5xl font-extrabold mb-4 banner-heading-gradient text-center ${
                language === 'ar'
                  ? 'md:text-right py-4 leading-relaxed'
                  : 'md:text-left leading-tight'
              }`}
            >
              {t.heading1}
              <br />
              <span className='text-3xl md:text-3xl lg:text-5xl'>{t.heading2}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg md:text-md lg:text-2xl font-medium text-gray-300 mb-2 px-4 md:px-0 ${
                language === 'ar'
                  ? 'md:text-right md:ml-60 leading-relaxed'
                  : 'md:mr-12 md:pr-40'
              }`}
            >
              {t.description}
            </motion.p>

            {/* BUTTON */}
            <MotionLink
              href='https://client.geniefx.com/register-live-trading-account-F1'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='banner-cta w-fit text-base sm:text-lg px-6 py-3 mt-4 relative overflow-hidden group rounded-full inline-block'
            >
              <span className='relative z-10 px-6'>{t.cta}</span>
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
            </MotionLink>

            {/* MOBILE IMAGE */}
            {/* <motion.img
              variants={imageEntrance}
              src='/IB-Broker/20260520-194945.webp'
              alt=''
              className='mt-6 block w-64 max-w-[82vw] object-contain drop-shadow-2xl sm:w-72 md:hidden'
              loading='eager'
            /> */}
          </motion.div>
        </div>
      </div>

      {/* DESKTOP IMAGE */}
      <motion.div
        variants={imageEntrance}
        className={`pointer-events-none absolute bottom-0 z-[1] hidden origin-bottom md:block ${
          language === 'ar'
            ? 'left-[2%] lg:left-[4%] 2xl:left-[8%]'
            : 'right-[2%] lg:right-[4%] 2xl:right-[8%]'
        }`}
      >
        <img
          src='/IB-Broker/20260520-194945.webp'
          alt=''
          className='h-auto max-h-[62%] w-[480px] max-w-[48vw] object-contain drop-shadow-2xl lg:w-[560px] xl:w-[620px] 2xl:w-[700px]'
          loading='eager'
        />
      </motion.div>
    </motion.section>
  )
}

export default Banner
