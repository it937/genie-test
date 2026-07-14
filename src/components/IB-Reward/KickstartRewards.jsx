'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/KickstartRewardsTranslations'

const rewardImageSrc = '/IB-Reward/Loyality-Program-04.webp'

export default function KickstartRewards() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className='bg-white px-4 py-12 md:px-6 md:py-12' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] md:gap-14'>
        <motion.div
          initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.25 }}
          className='flex justify-center'
        >
          {rewardImageSrc ? (
            <img
              src={rewardImageSrc}
              alt={t.imageAlt}
              className='h-auto w-full max-w-[400px] object-contain'
            />
          ) : (
            <div className='flex aspect-[4/3] w-full max-w-[420px] items-center justify-center rounded-[32px] border-2 border-dashed border-[#180248]/20 bg-[#f7f7fb] px-6 text-center text-sm font-medium text-[#180248]/60'>
              {t.imagePlaceholder}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: language === 'ar' ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className={language === 'ar' ? 'text-right' : 'text-left'}
        >
          <h2 className={`heading-gradient mb-5 text-3xl font-extrabold leading-tight md:text-3xl ${language === 'ar' ? 'py-2 leading-relaxed' : ''}`}>
            {t.headingLine1}
            <br />
            {t.headingLine2}
          </h2>

          <p className='max-w-xl text-lg leading-relaxed text-[#180248] md:text-lg'>
            {t.description}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
