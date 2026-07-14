'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/PAMM/WhatIsPAMMTranslations'
import { motion } from 'framer-motion'
import Link from 'next/link'

const WhatIsPAMM = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'
  const MotionLink = motion(Link)

  return (
    <section
      className='bg-white px-6 pb-16 pt-4 text-center md:pb-24'
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className='mx-auto max-w-5xl'>
        <div
          className='overflow-visible rounded-[28px] bg-cover bg-center px-6 pb-32 pt-12 text-white md:rounded-[36px] md:px-14 md:pb-48 md:pt-16'
          style={{ backgroundImage: "url('/homepage/Homepage-02.webp')" }}
        >
          <div className='mx-auto max-w-5xl'>
            <h2
              className={`banner-heading-gradient mx-auto mb-6 max-w-5xl text-2xl font-extrabold leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)] md:text-3xl ${
                isArabic ? 'py-3 leading-relaxed' : ''
              }`}
            >
              {t.heading}
            </h2>

            <h3
              className={`mb-8 text-lg font-extrabold text-white md:text-xl ${
                isArabic ? 'leading-relaxed' : 'leading-tight'
              }`}
            >
              {t.subheading}
            </h3>

            <div className='mx-auto flex max-w-4xl flex-col gap-8'>
              {t.descriptions.map(description => (
                <p
                  key={description}
                  className={`text-md font-medium text-white md:text-lg ${
                    isArabic ? 'leading-loose' : 'leading-relaxed'
                  }`}
                >
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>

        <img
          src='/pamm/PAMM-04.webp'
          alt={t.imageAlt}
          className='relative z-10 mx-auto -mt-24 w-full max-w-[620px] object-contain md:-mt-40 md:max-w-[400px]'
          loading='lazy'
        />
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

export default WhatIsPAMM
