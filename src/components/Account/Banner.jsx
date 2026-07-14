'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Accounts/BannerTranslations'

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

const Banner = ({ type }) => {
  const { language } = useLanguage()
  const t = translations[language]
  const MotionLink = motion(Link)

  const heading = type === 'ecn' 
    ? <>{t.ecnHeading1}<br /><span className='text-3xl md:text-4xl'>{t.ecnHeading2}</span><br /><span className='text-3xl md:text-4xl'>{t.ecnHeading3}</span></>
    : type === 'cent'
    ? <>{t.centHeading1}<br />{t.centHeading2}<br /><span className='text-4xl md:text-[50px]'>{t.centHeading3}</span></>
    : <>{t.standardHeading1}<br />{t.standardHeading2}<br /><span className='text-4xl md:text-[50px]'>{t.standardHeading3}</span></>

  const desc = type === 'ecn' ? t.ecnDesc : type === 'cent' ? t.centDesc : t.standardDesc
  const button = type === 'ecn' ? t.ecnButton : type === 'cent' ? t.centButton : t.standardButton

  const data = {
    img: type === 'ecn' ? '/Accounts/Ultimate/Ultimate-02.webp' : type === 'cent' ? '/Accounts/Advanced/Advanced-03.webp' : '/Accounts/Standard-03.webp',
    bgImg: '/Accounts/Standard-02.webp'
  }

  return (
    <motion.section
      key={type}
      variants={container}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='relative min-h-[110vh] md:min-h-0 md:aspect-[16/9] 2xl:aspect-auto 2xl:h-[70vh] flex items-start justify-center text-center overflow-hidden'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: 'easeInOut' }}
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{
          backgroundImage: `url('${data.bgImg}')`,
          backgroundColor: '#0a0a3a'
        }}
      />

      <div className='relative z-10 w-full max-w-6xl px-6 md:px-10'>
        <div className='text-white flex flex-col-reverse md:flex-row mt-10 md:mt-20'>
          <motion.div
            variants={container}
            className={`w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center  mt-10 md:mt-30 ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`}
          >
            <motion.h1
              variants={fadeUp}
              className={`text-2xl md:text-3xl font-extrabold mb-4 banner-heading-gradient  text-center  ${language === 'ar' ? 'py-6 md:text-right leading-relaxed' : 'md:text-left leading-tight'}`}
            >
              {heading}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg md:text-xl font-medium text-gray-300 mb-8 md:mb-12  px-4 md:px-0  ${language === 'ar' ? 'md:text-right' : 'md:text-left md:mr-12'}`}
            >
              {desc}
            </motion.p>

            <MotionLink
              href='https://client.geniefx.com/register-live-trading-account-F1'
              target='_blank'
              rel='noopener noreferrer'
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden group rounded-full inline-block'
            >
              <span className='relative z-10'>{button}</span>
              <motion.div
                className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                animate={{ scale: [0.9, 1.4], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300' />
            </MotionLink>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className='w-full md:w-1/2 flex items-center justify-center mt-12 md:mt-32'
          >
            <motion.img
              src={data.img}
              alt={`${type} Account`}
              className='object-contain w-64 sm:w-80 md:w-[400px] h-auto drop-shadow-2xl'
              loading='eager'
              animate={{ y: [0, -15, 0], filter: ['drop-shadow(0 0 20px rgba(34,211,238,0.4))', 'drop-shadow(0 0 45px rgba(34,211,238,0.8))', 'drop-shadow(0 0 20px rgba(34,211,238,0.4))'] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, filter: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Banner