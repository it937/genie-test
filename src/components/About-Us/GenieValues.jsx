'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/AboutUs/GenieValuesTranslations'

const features = (t) => [
  { title: t.workCultureTitle, text: t.workCultureText },
  { title: t.transparencyTitle, text: t.transparencyText },
  { title: t.growthTitle, text: t.growthText },
  { title: t.goodwillTitle, text: t.goodwillText },
]

export default function GenieValues () {
  const { language } = useLanguage()
  const t = translations[language]
  const featureList = features(t)

  return (
    <section className='w-full px-4 sm:px-6 lg:px-8 mb-12 mt-20' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='max-w-5xl mx-auto'>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-3xl heading-gradient font-extrabold text-center mb-2 md:mx-40 ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}
        >
          {t.heading}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-md md:text-lg font-medium text-center mb-12'
        >
          {t.paragraph}
        </motion.p>

        {/* Background box with text + image */}
        <div className='relative bg-[#f4f4f4] rounded-2xl p-6 md:p-10 overflow-visible flex flex-col md:flex-row gap-8'>

          {/* LEFT — Features */}
          <div className='flex-1 space-y-4'>
            {featureList.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className='flex items-start gap-3'
              >
                <div className='flex-shrink-0 mt-1.5'>
                  <Image
                    src='/promotion/20-Bonus/20-Bonus-08.webp'
                    alt='checkmark'
                    width={22}
                    height={22}
                    className='w-5 h-5'
                  />
                </div>

                <p className='text-lg font-medium text-black max-w-lg leading-relaxed'>
                  <span className='font-bold text-[#460c63]'>{feature.title} </span>
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — Image */}
          <div
            className={`
              relative w-full flex justify-center mt-4
              md:absolute md:bottom-[-7rem] md:right-0 md:w-4/10 md:mt-0 md:flex md:justify-end
              ${language === 'ar' ? '-translate-x-30/20' : ''}
            `}
          >
            <Image
              src='/About-Us/About-Us-04.webp'
              alt='Commodity Market'
              width={420}
              height={420}
              className='object-contain w-64 sm:w-80 md:w-[32rem] h-auto'
            />
          </div>

        </div>
      </div>
    </section>
  )
}