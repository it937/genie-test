'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/ProgramDurationTranslations'

export default function ProgramDuration() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section
      className='relative flex min-h-[25vh] items-center justify-center overflow-hidden bg-gradient-to-r from-[#4b0c88] via-[#7b11c9] to-[#b012ff] px-4 py-8 md:px-6 md:py-10'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div
        className='absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50'
        style={{
          backgroundImage: "url('/Rewards/candles.png')"
        }}
      />

      <div className='absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a3a] via-black/30 to-black/90' />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center text-center text-white'
      >
        <h2 className={`banner-heading-gradient mb-6 text-3xl font-extrabold md:mb-8 md:text-5xl ${language === 'ar' ? 'py-2 leading-relaxed' : 'leading-tight'}`}>
          {t.title}
        </h2>

        <div className='relative flex w-full max-w-5xl items-start justify-between text-white -mt-10'>
          <div className='absolute left-4 right-4 top-[5rem] border-t-[3px] border-dashed border-white/90 md:left-5 md:right-5 md:top-[5.35rem]' />

          <div className='relative mt-10 flex flex-col items-start text-center'>
            <p className='mb-2 text-base font-extrabold md:text-xl'>{t.startDateLabel}</p>
            <div className='h-4 w-4 shrink-0 rounded-full bg-white md:h-5 md:w-5' />
            <p className='mt-3 text-base font-medium md:text-xl'>{t.startDate}</p>
          </div>

          <div className='relative mt-10 flex flex-col items-end text-center'>
            <p className='mb-2 text-base font-extrabold md:text-xl'>{t.endDateLabel}</p>
            <div className='h-4 w-4 shrink-0 rounded-full bg-white md:h-5 md:w-5' />
            <p className='mt-3 text-base font-medium md:text-xl'>{t.endDate}</p>
          </div>
        </div>

        <p className='mt-6 max-w-3xl text-sm font-medium leading-relaxed text-white md:text-lg'>
          {t.description}
        </p>
      </motion.div>
    </section>
  )
}
