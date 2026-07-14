'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Promotion/Promotion20/BannerTranslations'

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
          
          {/* TEXT COLUMN */}
          <motion.div
            variants={container}
            className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left mt-10 md:mt-30'
          >
            <motion.h1
              variants={fadeUp}
              className={`text-2xl md:text-4xl font-extrabold mb-4 banner-heading-gradient text-center ${
                language === 'ar'
                  ? 'md:text-right py-4 leading-relaxed'
                  : 'md:text-left leading-tight'
              }`}
            >
              {t.heading1}
              <br />
              <span className='text-3xl md:text-4xl'>{t.heading2}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-2 px-4 md:px-0 ${
                language === 'ar'
                  ? 'md:text-right md:ml-60 leading-relaxed'
                  : 'md:mr-12 md:pr-40'
              }`}
            >
              {t.description}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className={`text-sm md:text-md font-medium text-gray-400 mb-6 px-4 md:px-0 italic ${
                language === 'ar'
                  ? 'md:text-right md:ml-60 leading-relaxed'
                  : 'md:mr-12 md:pr-40'
              }`}
            >
              <Link
                href='/pdf/20-Terms-and-Conditions-LR.pdf'
                target='_blank'
                className='hover:text-white transition-colors'
              >
                {t.tandCsApply}
              </Link>
            </motion.p>

            {/* MOBILE IMAGE (between text & button) */}
            <motion.img
              src='/promotion/20-bonus/20-Bonus-13-resized.webp'
              className='block md:hidden object-contain w-56 sm:w-60 h-auto my-6 drop-shadow-2xl'
              loading='eager'
              animate={{
                y: [0, -12, 0],
                filter: [
                  'drop-shadow(0 0 20px rgba(34,211,238,0.4))',
                  'drop-shadow(0 0 35px rgba(34,211,238,0.8))',
                  'drop-shadow(0 0 20px rgba(34,211,238,0.4))'
                ]
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                filter: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
            />

            {/* BUTTON */}
            <MotionLink
              href='https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'
              target='_blank'
              rel='noopener noreferrer'
              // variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden group rounded-full inline-block'
            >
              <span className='relative z-10'>{t.cta}</span>
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
          </motion.div>

          {/* DESKTOP IMAGE (unchanged, hidden on mobile) */}
          <motion.div
            variants={fadeUp}
            className='hidden md:flex w-full md:w-1/2 items-center justify-center mt-12 md:mt-32'
          >
            <motion.img
              src='/promotion/20-bonus/20-Bonus-13-resized.webp'
              className='object-contain w-64 sm:w-80 md:w-[400px] h-auto drop-shadow-2xl'
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
  )
}

export default Banner
