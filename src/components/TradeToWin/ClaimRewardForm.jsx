'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/ClaimRewardFormTranslations'

export default function ClaimRewardForm() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className='relative overflow-hidden bg-white px-4 py-12 md:px-6 md:py-16' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute left-1/4 top-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl' />
        <div className='absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl' />
      </div>

      <div className='relative z-10 mx-auto max-w-5xl'>
        <div className='relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#52058a] via-[#220470] to-[#0b0237] shadow-2xl'>
          <div className='relative flex flex-col items-center gap-6 p-8 text-center md:flex-row md:items-center md:justify-between md:p-10 md:text-left'>
            <div className='flex-1'>
              <h2 className={`mb-2 bg-gradient-to-r from-white via-white/80 to-white/20 bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-3xl ${language === 'ar' ? 'py-4 leading-relaxed' : ''}`}>
                {t.title}
              </h2>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='https://client.geniefx.com/register-live-trading-account-F1'
                target='_blank'
                rel='noopener noreferrer'
                className='banner-cta inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-bold text-white transition-all duration-300'
              >
                {t.cta}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
