'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/Banner20Translations'

const Banner20 = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='block'>
      <div className='relative min-h-[50vh] md:min-h-[60vh] 2xl:min-h-[45vh] flex items-center justify-center overflow-hidden'>
        <div className='relative z-10 w-full max-w-6xl px-4 md:px-6'>
          <div
            className='relative overflow-hidden rounded-3xl
                       w-full md:w-[70rem]
                       min-h-[26rem] md:h-[26rem]
                       mx-auto'
            style={{ backgroundColor: '#f2f2f2' }}
          >
            <img
              src='/homepage/Homepage-Option-2-18.webp'
              alt=''
              className='absolute bottom-0 left-0 right-0 w-full md:inset-0 md:h-full md:object-cover object-bottom pointer-events-none'
            />
            <div
              className='relative z-10
                         flex flex-col justify-center
                         px-6 pt-10
                         md:pt-20 md:ml-20
                         text-center md:text-start'
            >
              <h1
                className={`text-2xl md:text-3xl font-extrabold mb-4 max-w-xs heading-gradient ${
                  language === 'ar' ? 'py-4 leading-relaxed' : 'leading-tight'
                }`}
              >
                {t.heading}
              </h1>

              <p className='mt-4 max-w-xs text-base md:text-lg text-[#180248]'>
                {t.subHeadingStart}{' '}
                <span className='font-bold'>{t.subHeadingHighlight}</span>{' '}
                {t.subHeadingEnd}
              </p>
              <Link
                href='/pdf/20-Terms-and-Conditions-LR.pdf'
                target='_blank'
                className='text-[#180248] italic text-sm hover:text-cyan-500 transition-colors'
              >
                {t.tandCsApply}
              </Link>

              <Link href='/promotion/20-bonus' target='_blank'>
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='banner-cta w-fit text-sm md:text-base px-5 md:px-6 py-3
                             relative overflow-hidden rounded-full text-white font-semibold mt-6 md:mt-8
                             mx-auto md:mx-0'
                >
                  <span className='relative z-10'>{t.startTrading}</span>
                  <motion.div
                    className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl pointer-events-none'
                    animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner20
