'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/SignUpTradingTranslations'

export default function SignupTradingSteps() {
  const LIVE_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1'
  const DEMO_ACCOUNT_URL =
    'https://client.geniefx.com/register-live-trading-account-F1?p2=Demo&demo=true'
  const { language } = useLanguage()
  const t = translations[language]
  const gridRef = useRef(null)
  const [gapPositions, setGapPositions] = useState([])

  useEffect(() => {
    const updatePositions = () => {
      if (!gridRef.current) return
      const cards = Array.from(gridRef.current.children)
      if (cards.length < 3) return

      const gaps = []
      for (let i = 0; i < cards.length - 1; i++) {
        const rect1 = cards[i].getBoundingClientRect()
        const rect2 = cards[i + 1].getBoundingClientRect()
        gaps.push({ left: rect1.right + (rect2.left - rect1.right) / 2 })
      }
      setGapPositions(gaps)
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  return (
    <div className='relative w-full flex flex-col items-center py-8 md:-mt-12 px-4' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-extrabold text-center mb-3 heading-gradient ${language === 'ar' ? 'py-4' : ''}`}
      >
        {t.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className='text-center text-[#180248] mb-12 max-w-xl'
      >
        {t.subtitle}
      </motion.p>

      {gapPositions.length > 0 && gapPositions.map((gap, idx) => (
        <Image
          key={idx}
          src='/homepage/Homepage-New-Design-16.webp'
          alt='connector'
          width={180}
          height={60}
          className='hidden md:block absolute top-[235px] z-20'
          style={{ left: gap.left - 90 }}
        />
      ))}

      <div ref={gridRef} className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 w-full max-w-5xl relative z-10'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          whileHover={{ scale: 1.05 }}
          className='bg-[#f5f5f5] rounded-2xl py-10 px-8 text-center shadow-sm transition-all cursor-pointer'
        >
          <p className='text-5xl font-extrabold text-[#180248] mb-2'>1</p>
          <p className='text-2xl font-bold text-[#180248] mb-2'>{t.step1}</p>
          <p className='text-sm text-[#180248]'>{t.step1Desc}</p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          whileHover={{ scale: 1.05 }}
          className='bg-[#f5f5f5] rounded-2xl py-10 px-8 text-center shadow-sm transition-all cursor-pointer'
        >
          <p className='text-5xl font-extrabold text-[#180248] mb-2'>2</p>
          <p className='text-2xl font-bold text-[#180248] mb-2'>{t.step2}</p>
          <p className='text-sm text-[#180248]'>{t.step2Desc}</p>
        </motion.div>

        <motion.div
          initial='hidden'
          whileInView='visible'
          whileHover={{ scale: 1.05 }}
          className='bg-[#f5f5f5] rounded-2xl py-10 px-8 text-center shadow-sm transition-all cursor-pointer'
        >
          <p className='text-5xl font-extrabold text-[#180248] mb-2'>3</p>
          <p className='text-2xl font-bold text-[#180248] mb-2'>{t.step3}</p>
          <p className='text-sm text-[#180248]'>{t.step3Desc}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='mt-12 flex flex-col items-center'
      >
        <Link
          href={LIVE_ACCOUNT_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='px-12 py-3 rounded-full text-white cta shadow-lg hover:scale-105 transition-transform block text-center'
        >
          {t.openLiveAccount}
        </Link>
        <Link
          href={DEMO_ACCOUNT_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-3 text-xs text-[#180248] hover:text-[#7102ba] transition-colors duration-300'
        >
          {t.tryRiskFreeDemo}
        </Link>
      </motion.div>
    </div>
  )
}
