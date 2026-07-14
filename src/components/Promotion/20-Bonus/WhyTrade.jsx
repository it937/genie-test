'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Promotion/Promotion20/WhyTradeTranslations'

const ChooseYourBait = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    // {
    //   title: t.feature1Title,
    //   description: t.feature1Desc,
    //   image: '/promotion/20-bonus/20-Bonus-09.webp',
    //   alignment: 'left'
    // },
    {
      title: t.feature2Title,
      description: t.feature2Desc,
      image: '/promotion/20-bonus/20-Bonus-10.webp',
      alignment: 'right'
    },
    {
      title: t.feature3Title,
      description: t.feature3Desc,
      image: '/promotion/20-bonus/20-Bonus-09.webp',
      alignment: 'left'
    },
    {
      title: t.feature4Title,
      description: t.feature4Desc,
      image: '/promotion/20-bonus/20-Bonus-10.webp',
      alignment: 'right'
    },
    {
      title: t.feature5Title,
      description: t.feature5Desc,
      image: '/promotion/20-bonus/20-Bonus-09.webp',
      alignment: 'left'
    }
  ]

  return (
    <section
      className='w-full py-8 bg-white'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className='max-w-5xl mx-auto px-6 py-12 md:p-10 bg-[#f4f4f4] rounded-[50px]'>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12 px-4'
        >
          <h1
            className={`text-3xl font-extrabold heading-gradient mb-4 ${
              language === 'ar' ? 'py-4 leading-relaxed' : ''
            } `}
          >
            {t.title}
          </h1>
          <p className='text-lg font-medium mt-4'>{t.subtitle}</p>
        </motion.header>

        <div className='hidden md:block max-w-4xl mx-auto w-full space-y-12'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className='flex items-center h-36 rounded-[30px] p-0 bg-no-repeat bg-contain w-full justify-center'
              style={{
                flexDirection:
                  feature.alignment === 'left' ? 'row' : 'row-reverse',
                backgroundImage: `url(${feature.image})`,
                backgroundPosition: 'center'
              }}
            >
              <div
                className={`${
                  feature.alignment === 'left'
                    ? 'pl-32 pr-0 text-left'
                    : 'pr-32 pl-0 text-end'
                } flex-grow`}
              >
                <h3
                  className={`text-2xl font-extrabold text-white ${
                    feature.alignment === 'left'
                      ? language === 'en'
                        ? 'pr-90'
                        : 'pl-0'
                      : 'pl-70'
                  } ${language === 'ar' ? 'py-4' : ''} `}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-white font-medium ${
                    feature.alignment === 'left' ? 'pr-70' : 'pl-90'
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='block md:hidden max-w-md mx-auto space-y-6 px-4'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className='flex flex-col items-start rounded-[20px] p-4'
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            >
              <div className='w-full'>
                <h3 className='text-md font-extrabold text-white mb-1'>
                  {feature.title}
                </h3>
                <p className='text-white font-medium text-xs'>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseYourBait
