'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/TreasureBannerTranslations'

export default function TreasureBanner() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className='bg-white px-4 py-8 md:px-6 md:py-10' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        className='mx-auto max-w-5xl overflow-hidden rounded-[34px] border border-[#150044] shadow-lg'
        style={{
          backgroundImage: "url('/IB-Reward/Loyality-Program-26.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='min-h-[240px] px-8 py-10 md:min-h-[290px] md:px-14 md:py-14'>
          <div className='max-w-xl'>
            <h2 className={`mb-6 text-2xl font-extrabold leading-tight text-white md:text-3xl ${language === 'ar' ? 'py-2 leading-relaxed' : ''}`}>
              {t.headingLine1}
              <br />
              {t.headingLine2}
            </h2>

            <Link
              href='https://client.geniefx.com/register-live-trading-account-F1' target='_blank'
              className='inline-flex min-w-[220px] items-center justify-center rounded-full border-2 border-white/90 bg-white/10 px-8 py-3 text-base font-semibold text-white shadow-[0_0_18px_rgba(255,255,255,0.28)] backdrop-blur-[2px] transition-all duration-300 hover:bg-white/15'
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
