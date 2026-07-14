'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/PAMM/PAMMSolutionTranslations'
import { motion } from 'framer-motion'
import Link from 'next/link'

const PAMMSolution = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'
  const MotionLink = motion(Link)

  return (
    <section
      className='bg-white px-6 py-14 text-center md:py-20'
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className='mx-auto max-w-6xl'>
        <h2
          className={`heading-gradient mx-auto mb-6 max-w-5xl text-2xl font-extrabold leading-tight md:text-3xl ${
            isArabic ? 'py-3 leading-relaxed' : ''
          }`}
        >
          {t.headingLine1}
          <span className='block'>{t.headingLine2}</span>
        </h2>

        <h3
          className={`mb-4 text-lg font-extrabold text-[#10101c] md:text-xl ${
            isArabic ? 'leading-relaxed' : 'leading-tight'
          }`}
        >
          {t.subheading}
        </h3>

        <p
          className={`mx-auto max-w-4xl text-md font-medium text-[#10101c] md:text-lg ${
            isArabic ? 'leading-loose' : 'leading-relaxed'
          }`}
        >
          {t.description}
        </p>
      </div>
      <MotionLink
        href='https://pool.geniefx.com/'
        target='_blank'
        rel='noopener noreferrer'
        // variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden group rounded-full inline-block mt-8 md:mt-6'
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
    </section>
  )
}

export default PAMMSolution
