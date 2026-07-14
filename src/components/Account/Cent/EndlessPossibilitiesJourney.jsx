'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Accounts/Cent/EndlessPossibilitiesJourneyTranslations'

const TradingFeatures = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    { title: t.feature1Title, description: t.feature1Desc, image: '/Accounts/Advanced/Advanced-04.webp' },
    { title: t.feature2Title, description: t.feature2Desc, image: '/Accounts/Advanced/Advanced-05.webp' },
    { title: t.feature3Title, description: t.feature3Desc, image: '/Accounts/Advanced/Advanced-06.webp' },
    { title: t.feature4Title, description: t.feature4Desc, image: '/Accounts/Advanced/Advanced-07.webp' },
  ]

  return (
      <section className='w-full max-w-5xl mx-auto px-6 py-16' dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className={`text-3xl font-extrabold heading-gradient  ${language === 'ar' ? 'py-4' : ''}`}>
            {t.title}
          </h2>
          <p className='text-lg font-medium mt-4 max-w-xl mx-auto px-4'>
            {t.subtitle}
          </p>
        </motion.header>
  
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8'>
          {features.map((card, index) => (
            <motion.div
              key={index}
              className='flex flex-col items-start text-start cursor-pointer'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
            >
              <motion.div
                className='relative w-full overflow-hidden rounded-3xl shadow-lg'
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={250}
                  className='rounded-lg w-full h-full object-cover'
                />
              </motion.div>
  
              <h3 className={`text-lg md:text-2xl ml-4 max-w-md  font-bold text-[#180248] mt-6 leading-tight transition-colors duration-300 group-hover:text-purple-700  ${language === 'ar' ? 'text-right py-2' : 'text-left mr-20'}`}>
                {card.title}
              </h3>
              <p className='text-[#180248] mt-2 ml-4 text-sm md:text-lg max-w-md'>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }
  
  export default TradingFeatures