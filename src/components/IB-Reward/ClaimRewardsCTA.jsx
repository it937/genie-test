'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/ClaimRewardsCTATranslations'

export default function ClaimRewardsCTA() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className='bg-white px-4 pb-8 pt-4 md:px-6 md:pb-12' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='mx-auto max-w-5xl text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
          className={`mx-auto mb-8 max-w-3xl text-2xl font-extrabold heading-gradient md:text-3xl ${language === 'ar' ? 'py-2 leading-relaxed' : 'leading-tight'}`}
        >
          {t.headingLine1}
          <br />
          {t.headingLine2}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <Link
            href='https://client.geniefx.com/register-live-trading-account-F1'
            target='_blank'
            className='banner-cta inline-block rounded-full !px-12 py-4 text-base font-semibold text-white transition-all duration-300 md:px-12 md:text-lg'
          >
            {t.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
