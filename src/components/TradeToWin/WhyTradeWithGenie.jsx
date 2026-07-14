'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/WhyTradeWithGenieTranslations'

export default function WhyTradeWithGenie() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en

  return (
    <section className='relative overflow-hidden bg-white px-4 py-12 md:px-6 md:py-16' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='relative mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mx-auto mb-10 max-w-4xl text-center md:mb-14'
        >
          <h2 className={`mb-4 text-2xl font-extrabold heading-gradient md:text-3xl ${language === 'ar' ? 'py-2 leading-relaxed' : 'leading-tight'}`}>
            {t.title}
          </h2>
          <p className='mx-auto max-w-xl text-base font-medium text-[#180248] md:text-lg'>
            {t.subtitleLine1}
            {t.subtitleLine2}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6 lg:gap-8'>
          {t.items.map((item, index) => {
            const cardClass =
              index < 3 ? 'lg:col-span-2' : index === 3 ? 'lg:col-span-2 lg:col-start-2' : 'lg:col-span-2'

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={cardClass}
              >
                <div className='h-full rounded-[30px] bg-[#f5f5f5] p-8'>
                  <p className='mb-4 text-4xl font-extrabold heading-gradient md:text-5xl'>{item.number}</p>
                  <h3 className='mb-2 text-lg font-extrabold text-[#180248] md:text-xl'>
                    {item.title}
                  </h3>
                  <p className='text-base leading-snug text-[#180248]'>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
