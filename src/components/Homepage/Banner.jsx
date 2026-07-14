'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/BannerTranslations'

const Banner = () => {
  const LIVE_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1'
  const DEMO_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1?p2=Demo&demo=true'
  const { language } = useLanguage()
  const t = translations[language]
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { heading: t.slide1Heading, subheading: t.slide1Sub },
    { heading: t.slide2Heading, subheading: t.slide2Sub },
    { heading: t.slide3Heading, subheading: t.slide3Sub },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = index => setCurrentSlide(index)

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2, delay, ease: 'easeOut' }
  })

  return (
    <>
      {/* Desktop */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='hidden md:flex relative min-h-[70vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] items-center justify-center text-center overflow-hidden'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover z-0'>
          <source src='/homepage/0.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/70 z-[0]'></div>

        <div className='relative z-10 w-full max-w-6xl px-6 flex flex-col items-center justify-center min-h-screen py-20'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className='text-white text-center max-w-4xl'
          >
            <motion.h1 {...fadeUp(0.2)} className={`text-5xl md:text-6xl font-extrabold leading-tight mb-0 banner-heading-gradient mt-20 ${language === 'ar' ? 'py-10' : ''}`}>
              {slides[currentSlide].heading}
            </motion.h1>
            <motion.p {...fadeUp(0.4)} className='text-lg md:text-xl text-white mb-20'>
              {slides[currentSlide].subheading}
            </motion.p>
            <div className='flex flex-col items-center'>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className='px-8 py-3 rounded-full font-semibold text-white border-2 border-cyan-400 hover:border-purple-400 transition-colors duration-300 relative overflow-hidden group'
                style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)', background: 'rgba(0, 0, 0, 0.3)' }}
              >
                <Link href={LIVE_ACCOUNT_URL} target="_blank" rel="noopener noreferrer">
                  <span className='relative z-10'>{t.openLiveAccount}</span>
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' style={{
                    background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
                    zIndex: 0
                  }}></div>
                </Link>
              </motion.button>
              <Link
                href={DEMO_ACCOUNT_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 text-xs text-white/50 hover:text-white transition-colors duration-300'
              >
                {t.tryRiskFreeDemo}
              </Link>
            </div>
          </motion.div>

          <div className='flex gap-3 mt-16 justify-center'>
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-purple-400 w-8' : 'bg-white/40 hover:bg-white/60'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mobile */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className='block md:hidden relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover z-0'>
          <source src='/homepage/0.mp4' type='video/mp4' />
        </video>
        <div className='absolute inset-0 bg-black/70 z-[0]'></div>

        <div className='relative z-10 px-6 text-white text-center w-full flex flex-col items-center justify-center min-h-screen py-16'>
          <motion.div key={currentSlide} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }} className='max-w-md'>
            <motion.h1 {...fadeUp(0.2)} className={`text-3xl md:text-4xl font-extrabold leading-tight mb-4 banner-heading-gradient ${language === 'ar' ? 'py-6' : ''}`}>
              {slides[currentSlide].heading}
            </motion.h1>
            <motion.p {...fadeUp(0.4)} className='text-base text-white mb-6'>
              {slides[currentSlide].subheading}
            </motion.p>
            <div className='flex flex-col items-center'>
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
                className='px-6 py-2 rounded-full font-semibold text-white border-2 border-cyan-400 hover:border-purple-400 transition-colors duration-300 relative overflow-hidden group'
                style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)', background: 'rgba(0, 0, 0, 0.3)' }}
              >
                <Link href={LIVE_ACCOUNT_URL} target="_blank" rel="noopener noreferrer">
                  <span className='relative z-10 text-sm'>{t.openLiveAccount}</span>
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' style={{
                    background: 'linear-gradient(90deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
                    zIndex: 0
                  }}></div>
                </Link>
              </motion.button>
              <Link
                href={DEMO_ACCOUNT_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 text-[11px] text-white/90 hover:text-white transition-colors duration-300'
              >
                {t.tryRiskFreeDemo}
              </Link>
            </div>
          </motion.div>

          <div className='flex gap-2 mt-12 justify-center'>
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-purple-400 w-6' : 'bg-white/40 hover:bg-white/60'}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Banner
