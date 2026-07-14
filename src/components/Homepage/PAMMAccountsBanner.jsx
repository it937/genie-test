'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/PAMM/PAMMAccountsBannerTranslations'

const PAMMAccountsBanner = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isAr = language === 'ar'

  return (
    <section>
      {/* MOBILE */}
      <div
        className='md:hidden bg-cover bg-center rounded-[30px] mx-4 py-10 overflow-hidden flex flex-col items-center text-center gap-6'
        style={{ backgroundImage: "url('/homepage/Homepage-02.webp')" }}
      >
        <h1 className='text-2xl font-extrabold banner-heading-gradient text-white leading-tight px-6'>
          {t.heading}
        </h1>

        <Image
          src='/homepage/20260611-132226.png'
          alt='PAMM Accounts Chart'
          width={220}
          height={220}
          className='object-contain drop-shadow-2xl'
          priority
        />

        <p className='text-white text-sm font-normal leading-relaxed px-6'>
          {t.description}
        </p>

        <div className='flex flex-col items-center gap-3 w-full px-8'>
          <Link href='https://pool.geniefx.com' target='_blank' className='w-full'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='banner-cta w-full text-sm py-3 relative overflow-hidden rounded-full text-white font-semibold'
              style={{ background: 'transparent' }}
            >
              <span className='relative z-10'>{t.startWithPAMM}</span>
            </motion.button>
          </Link>

          <Link href='/pamm' className='w-full'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='banner-cta w-full text-sm py-3 relative overflow-hidden rounded-full font-semibold'
              style={{ background: '#bea2e8', color: '#180248' }}
            >
              <span className='relative z-10'>{t.explorePAMM}</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* DESKTOP — unchanged */}
      <div className='hidden md:block'>
        <div className='relative min-h-[60vh] 2xl:min-h-[45vh] flex items-center justify-center text-center overflow-hidden bg-transparent'>
          <div className='relative z-10 w-full max-w-6xl px-6'>
            <div
              className='bg-cover bg-center rounded-[50px] w-[70rem] h-[26rem] mx-auto overflow-hidden'
              style={{ backgroundImage: "url('/homepage/Homepage-02.webp')" }}
            >
              <div className={`flex h-full w-full ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                <div
                  className={`w-6/10 flex flex-col justify-center h-full px-12 ${
                    isAr ? 'items-end text-right' : 'items-start text-left'
                  }`}
                >
                  <h1
                    className={`text-3xl font-extrabold mb-4 banner-heading-gradient text-white ${
                      isAr ? 'py-4 leading-relaxed' : 'leading-tight'
                    }`}
                  >
                    {t.heading}
                  </h1>
                  <p className='text-white text-md font-normal mb-8 leading-relaxed'>
                    {t.description}
                  </p>
                  <div className={`flex gap-4 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
                    <Link href='https://pool.geniefx.com' target='_blank'>
                      <motion.button
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='banner-cta w-fit text-sm px-6 py-3 relative overflow-hidden rounded-full text-white font-semibold'
                        style={{ background: 'transparent' }}
                      >
                        <span className='relative z-10'>{t.startWithPAMM}</span>
                        <motion.div
                          className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl pointer-events-none'
                          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </motion.button>
                    </Link>
                    <Link href='/pamm'>
                      <motion.button
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='banner-cta w-fit text-sm !px-10 py-3 relative overflow-hidden rounded-full font-semibold'
                        style={{ background: '#bea2e8', color: '#180248' }}
                      >
                        <span className='relative z-10'>{t.explorePAMM}</span>
                        <motion.div
                          className='absolute inset-0 bg-gradient-to-r from-purple-300/20 to-violet-300/20 blur-xl pointer-events-none'
                          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        />
                      </motion.button>
                    </Link>
                  </div>
                </div>
                <div className='w-4/10 flex items-center justify-center h-full'>
                  <div className='relative w-full h-full flex items-center justify-center mr-4'>
                    <Image
                      src='/homepage/20260611-132226.png'
                      alt='PAMM Accounts Chart'
                      width={400}
                      height={400}
                      className='object-contain drop-shadow-2xl'
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PAMMAccountsBanner