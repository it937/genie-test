'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/GenieConnectsTranslations'

export default function IntroducingBroker() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='w-full flex justify-center px-4 my-10' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='max-w-5xl w-full bg-[#F5F5F7] rounded-3xl md:rounded-[40px] p-6 md:p-12 text-center shadow-sm max-w-4xl'
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-2xl md:text-3xl font-extrabold heading-gradient mb-6 max-w-xl mx-auto ${language === 'ar' ? 'py-4 leading-relaxed' : ''}`}
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-md md:text-lg text-[#180248] font-medium leading-tight max-w-3xl mx-auto ${language === 'ar' ? 'py-4 leading-relaxed' : ''}`}
        >
          {t.description}
        </motion.p>
      </motion.div>
    </section>
  )
}