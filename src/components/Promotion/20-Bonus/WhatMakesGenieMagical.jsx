'use client'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Promotion/Promotion20/WhatMakesGenieMagicalTranslations'

const cards = [
  { id: 'Boost', titleKey: 'card1Title', descKey: 'card1Desc', background: '/promotion/20-bonus/20-Bonus-02.webp' },
  { id: 'Funds', titleKey: 'card2Title', descKey: 'card2Desc', background: '/promotion/20-bonus/20-Bonus-03.webp' },
  { id: 'Flexibility', titleKey: 'card3Title', descKey: 'card3Desc', background: '/promotion/20-bonus/20-Bonus-04.webp' },
  { id: 'Conditions', titleKey: 'card4Title', descKey: 'card4Desc', background: '/promotion/20-bonus/20-Bonus-05.webp' },
  { id: 'Professionals', titleKey: 'card5Title', descKey: 'card5Desc', background: '/promotion/20-bonus/20-Bonus-06.webp' },
]

export default function PortfolioSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const MotionLink = motion(Link)

  return (
    <section className='w-full py-12 md:py-16 lg:py-20' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 md:mb-16 text-center'>
          <h2 className={`mb-6 text-3xl font-extrabold text-center md:text-4xl heading-gradient max-w-lg mx-auto ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
            {t.mainTitle}
          </h2>
          <p className={`mx-auto max-w-3xl text-[#180248] text-md font-medium md:text-lg ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
            {t.mainDesc}
          </p>
        </div>
        <div
          className='rounded-[60px] p-8 md:p-12 bg-cover bg-center'
          style={{ backgroundImage: "url('/homepage/Homepage-02.webp')", backgroundPositionY: '100%' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mb-12 text-center md:mb-16'
          >
            <h2 className={`mb-4 text-2xl font-extrabold md:text-3xl banner-heading-gradient ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
              {t.sectionTitle}
            </h2>
            <p className='mx-auto max-w-2xl text-base text-white/90 font-medium md:text-lg'>
              {t.sectionDesc}
            </p>
          </motion.div>

          <div className='grid gap-6 md:grid-cols-2 lg:gap-8'>
            {cards.slice(0, 4).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className='group bg-cover bg-center relative min-h-[250px] cursor-pointer overflow-hidden rounded-tr-[50px] rounded-br-[50px] p-8 transition-all duration-300 shadow-lg hover:shadow-2xl'
                style={{ backgroundImage: `url('${card.background}')` }}
              >
                <div className='md:px-12 nd:ml-4 md:mt-16 justify-center items-center md:justify-start md:items-start flex flex-col h-full'>
                  <h3 className={`mb-1 text-lg font-bold md:text-xl text-white  ${language === 'ar' ? 'text-right md:pl-20' : 'text-left md:pr-20'}`}>
                    {t[card.titleKey]}
                  </h3>
                  <p className='text-sm text-white'>{t[card.descKey]}</p>
                </div>
                <motion.div className='absolute inset-0 bg-white' initial={{ opacity: 0 }} whileHover={{ opacity: 0.1 }} />
              </motion.div>
            ))}
          </div>

          <div className='mt-6 flex justify-center md:mt-8 lg:mt-10'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className='group bg-cover bg-center min-h-[200px] md:min-h-[200px] relative w-full cursor-pointer overflow-hidden rounded-tr-[50px] rounded-br-[50px] p-8 transition-all duration-300 shadow-lg hover:shadow-2xl'
              style={{ backgroundImage: `url('${cards[4].background}')`, backgroundPositionX: '0%' }}
            >
              <div className='px-0 md:px-12 md:ml-4 md:mt-12'>
                <h3 className='mb-3 text-lg md:justify-start md:items-start font-bold md:text-xl text-white'>
                  {t[cards[4].titleKey]}
                </h3>
                <p className='text-sm text-white'>{t[cards[4].descKey]}</p>
              </div>
              <motion.div className='absolute inset-0 bg-white' initial={{ opacity: 0 }} whileHover={{ opacity: 0.1 }} />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <MotionLink
            href='/pdf/20-Terms-and-Conditions-LR.pdf'
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-light text-white text-xs transition-all duration-300 hover:shadow-lg cta"
          >
            {t.cta}
          </MotionLink>
        </div>
      </div>
    </section>
  )
}