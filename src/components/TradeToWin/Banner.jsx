'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/BannerTranslations'

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
  const MotionLink = motion(Link)

  return (
    <motion.section
      variants={container}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='relative min-h-[70vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div
        className='absolute inset-0 z-0'
        style={{ transform: language === 'ar' ? 'scaleX(-1)' : 'none' }}
      >
        {/* Mobile background */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className='absolute inset-0 bg-cover bg-center block md:hidden'
          style={{
            backgroundImage: `url('/homepage/Homepage-02.webp')`,
            backgroundColor: '#0a0a3a',
          }}
        />
        {/* Desktop background */}
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className='absolute inset-0 bg-cover bg-center hidden md:block'
          style={{
            backgroundImage: `url('/Rewards/Trade-to-Win-04-resized.webp')`,
            backgroundColor: '#0a0a3a',
          }}
        />
      </div>

      <div className='relative z-10 flex w-full max-w-6xl 2xl:max-w-[1500px] 3xl:max-w-[1700px] min-h-[70vh] md:min-h-0 md:h-full px-6 md:px-6'>
        <div className='text-white flex w-full min-h-[70vh] md:min-h-0 md:h-full flex-col md:flex-row-reverse items-center md:items-end pt-10 md:pt-20 2xl:pt-12'>
          
          {/* TEXT COLUMN */}
          <motion.div
            variants={container}
            className='w-full flex min-h-full flex-col justify-between md:justify-end items-center md:items-center text-center md:text-center mt-10 md:mt-0 pb-0 md:pb-70 2xl:pb-32 3xl:pb-40'
          >
            <div className='flex w-full flex-col items-center md:items-start mt-20 2xl:mt-8'>
              <motion.h1
                variants={fadeUp}
                className={`text-3xl md:text-6xl 2xl:text-5xl font-extrabold mb-2 banner-heading-gradient text-center ${
                  language === 'ar'
                    ? 'md:text-start py-4 leading-relaxed'
                    : 'md:text-start leading-tight'
                }`}
              >
                {t.heading1}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className={`text-base sm:text-lg md:text-xl 2xl:text-lg font-medium text-gray-300 mb-2 px-4 md:px-0 max-w-md ${
                  language === 'ar'
                    ? 'md:text-start leading-relaxed'
                    : 'md:text-start'
                }`}
              >
                {t.description}
                <span className={`font-bold text-2xl ${language === 'ar' ? 'block py-2 md:py-3' : ''}`}>{t.description2}</span>
                {t.description3 && (
                  <span className='block font-bold text-2xl py-1 md:py-2'>{t.description3}</span>
                )}
              </motion.p>

              <motion.p
                variants={fadeUp}
                className={`text-sm md:text-md font-medium text-gray-400 mb-0 px-4 md:px-0 italic ${
                  language === 'ar'
                    ? 'md:text-right md:ml-60 leading-relaxed'
                    : 'md:mr-12 md:pr-40'
                }`}
              >
                <Link
                  href='/pdf/Trade-To-Win.pdf'
                  target='_blank'
                  className='hover:text-white transition-colors'
                >
                  {t.tandCsApply}
                </Link>
              </motion.p>

              {/* BUTTON */}
              <MotionLink
                href='https://client.geniefx.com/register-live-trading-account-F1'
                rel='noopener noreferrer'
                target='_blank'
                // variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='banner-cta w-fit text-base sm:text-lg px-6 !py-1.5 mt-4 md:mt-8 relative overflow-hidden group rounded-full inline-block'
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
            </div>

            {/* MOBILE IMAGE */}
            {/* <img
              src='/Rewards/20260324-175342.webp'
              className='mt-2 md:mt-6 block md:hidden w-100 sm:w-100 h-auto object-contain drop-shadow-2xl self-center'
              loading='eager'
              alt=''
            /> */}
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default Banner
