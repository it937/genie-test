'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Accounts/ChooseYourBaitTranslations'

const ChooseYourBait = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    { title: t.commodities, description: t.commoditiesDesc, image: "/commodities/Commodities-18.svg", alignment: "left" },
    { title: t.forex, description: t.forexDesc, image: "/commodities/Commodities-17.svg", alignment: "right" },
    { title: t.indices, description: t.indicesDesc, image: "/commodities/Commodities-19.svg", alignment: "left" },
    { title: t.metals, description: t.metalsDesc, image: "/commodities/Commodities-16.svg", alignment: "right" },
    { title: t.shares, description: t.sharesDesc, image: "/commodities/Commodities-15.svg", alignment: "left" },
  ]

  return (
    <section className="w-full py-16 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <h1 className={`text-3xl font-extrabold heading-gradient  ${language === 'ar' ? 'py-4' : ''}`}>
          {t.title}
        </h1>
        <p className="text-lg font-medium mt-4">
          {t.subtitle}
        </p>
      </motion.header>

      <div className="hidden md:block max-w-4xl mx-auto space-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex items-center h-36 bg-[#f5f5f5] border-1 border-[#180248] rounded-[30px] p-0`}
            style={{ flexDirection: feature.alignment === 'left' ? 'row' : 'row-reverse' }}
          >
            <div
              className="flex-shrink-0 w-36 h-32 rounded-[30px]"
              style={{
                background: feature.alignment === 'left' ? 'linear-gradient(to right, #7102ba, #180248)' : 'linear-gradient(to right, #180248, #7102ba)',
                height: '100%'
              }}
            >
              <img src={feature.image} alt={feature.title} className="w-6/10 h-auto object-contain mx-auto mt-6" />
            </div>
            <div className={`${feature.alignment === 'left' ? 'ml-6 text-left' : 'mr-6 ml-6 text-right'} flex-grow`}>
              <h3 className="text-2xl font-extrabold text-[#460c63]">{feature.title}</h3>
              <p className="text-black font-medium">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="block md:hidden max-w-md mx-auto space-y-6 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col items-start bg-[#f5f5f5] border border-[#180248] rounded-[20px] p-4"
          >
            <div
              className="w-full rounded-[14px] flex items-center justify-center mb-3"
              style={{
                background: feature.alignment === 'left' ? 'linear-gradient(to right, #7102ba, #180248)' : 'linear-gradient(to right, #180248, #7102ba)',
                height: 80
              }}
            >
              <img src={feature.image} alt={feature.title} className="h-12 object-contain" />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-extrabold text-[#460c63] mb-1">{feature.title}</h3>
              <p className="text-black font-medium text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ChooseYourBait