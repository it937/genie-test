'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/PAMM/PAMMBenefitsTranslations'
import { motion } from 'framer-motion'
import Link from 'next/link'

const PAMMBenefits = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'
  const MotionLink = motion(Link)

  return (
    <section
      className='bg-white px-6 pb-16 pt-2 text-center md:pb-24'
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className='mx-auto max-w-5xl'>
        <h2
          className={`heading-gradient mx-auto mb-8 max-w-5xl text-2xl font-extrabold leading-tight md:text-3xl ${
            isArabic ? 'py-3 leading-relaxed' : ''
          }`}
        >
          {t.heading}
        </h2>

        <img
          src='/pamm/PAMM-pie-chart.webp'
          alt={t.chartAlt}
          className='mx-auto mb-10 w-full max-w-[760px] object-contain md:mb-14'
          loading='lazy'
        />

        <div className='mx-auto flex max-w-4xl flex-col gap-5 md:gap-7'>
          {t.benefits.map(benefit => (
            <article
              key={benefit.title}
              className={`rounded-[18px] bg-[#f5f5f5] px-6 py-6 text-[#180248] md:px-10 ${
                isArabic ? 'text-right' : 'text-left'
              }`}
            >
              <h3
                className={`mb-2 text-lg font-extrabold md:text-xl ${
                  isArabic ? 'leading-relaxed' : 'leading-tight'
                }`}
              >
                {benefit.title}
              </h3>
              <p
                className={`text-md font-medium text-[#7102ba] md:text-md ${
                  isArabic ? 'leading-loose' : 'leading-relaxed'
                }`}
              >
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
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

export default PAMMBenefits
