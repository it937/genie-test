'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/FinalCTATranslations'

export default function FinalCTA() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const isAr = language === 'ar'

  return (
    <section className='px-4 py-12 md:px-6 md:py-16' dir={isAr ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[28px] border-3 border-[#7102ba]/100 bg-white shadow-[0_18px_45px_rgba(24,2,72,0.14),0_6px_18px_rgba(24,2,72,0.08)] md:flex-row md:items-stretch'
      >
        {/* Image — left in LTR, right in RTL (dir="rtl" reverses flex-row naturally) */}
        <div className='flex w-full items-center justify-center p-6 md:w-1/2 md:p-0'>
          <img
            src='/Rewards/trade-to-win-laptop-resized.webp'
            alt=''
            className='h-auto w-full max-w-[280px] rounded-3xl md:max-w-full md:h-full md:rounded-none md:object-cover'
            loading='eager'
          />
        </div>

        {/* Text + Button — right in LTR, left in RTL */}
        <div className='flex w-full flex-col items-center md:items-start justify-center px-6 py-8 text-center md:text-start md:w-1/2 md:px-10 md:py-6'>
          <h2
            className={`mb-8 text-2xl font-extrabold heading-gradient md:text-4xl ${
              isAr ? 'py-2 leading-relaxed' : 'leading-none'
            }`}
          >
            {t.titleLine1}
            <br />
            <span className='text-2xl md:text-[50px]'>{t.titleLine2}</span>
            <br />
            <span className='text-2xl md:text-3xl'>{t.titleLine3}</span>
          </h2>

          <Link
            href='https://client.geniefx.com/register-live-trading-account-F1'
            target='_blank'
            rel='noopener noreferrer'
            className='cta !px-8 !py-2 inline-flex items-center justify-center rounded-full text-center'
          >
            {t.cta}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
