'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Accounts/Standard/FeaturesTranslations'

const AdvancedAccountFeatures = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const accounts = [
    {
      name: t.accountName,
      description: t.accountDesc,
      items: [
        { label: t.minDeposit, value: "$100" },
        { label: t.leverage, value: "1:500" },
        { label: t.spreads, value: "0.8" },
        { label: t.commission, value: "0%" },
        { label: t.lotSize, value: "0.01" },
        { label: t.stopOut, value: "30%" },
        { label: t.bonus, value: t.no },
        { label: t.swap, value: t.yes },
      ],
    },
    {
      name: t.standardBonusName,
      description: t.standardBonusDesc,
      items: [
        { label: t.minDeposit, value: "$100" },
        { label: t.leverage, value: "1:500" },
        { label: t.spreads, value: "0.8" },
        { label: t.commission, value: "0%" },
        { label: t.lotSize, value: "0.01" },
        { label: t.stopOut, value: "30%" },
        { label: t.bonus, value: "20%" },
        { label: t.swap, value: t.yes },
      ],
    },
    {
      name: t.standardSwapFreeName,
      description: t.standardSwapFreeDesc,
      items: [
        { label: t.minDeposit, value: "$100" },
        { label: t.leverage, value: "1:500" },
        { label: t.spreads, value: "0.8" },
        { label: t.commission, value: "0%" },
        { label: t.lotSize, value: "0.01" },
        { label: t.stopOut, value: "30%" },
        { label: t.bonus, value: t.no },
        { label: t.swap, value: t.swapValue },
      ],
    },
  ]

  return (
      <section
        className='w-full max-w-7xl mx-auto px-6 py-16'
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-left mb-12 max-w-6xl mx-auto  ${language === 'ar' ? 'text-right py-4' : 'text-left'}`}
        >
          <h2 className={`text-3xl font-extrabold heading-gradient ${language === 'ar' ? 'py-4' : ''} `}>{t.title}</h2>
          <p className='text-lg font-medium text-black mt-4'>{t.subtitle}</p>
        </motion.header>
  
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {accounts.map((account, accountIndex) => (
            <motion.div
              key={account.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 * accountIndex }}
              className={`bg-[#f5f5f5] rounded-[2rem] h-full px-6 sm:px-8 lg:px-10 py-8 text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex items-center mb-4 ${language === 'ar' ? 'flex-row' : ''}`}>
                <img
                  src='/Accounts/Standard-04.svg'
                  alt='Star'
                  className={`w-6 h-6 ${language === 'ar' ? 'ml-2' : 'mr-2'}`}
                />
                <h3 className={`text-2xl font-extrabold ${language === 'ar' ? 'py-4' : ''} `}>
                  {account.name}
                </h3>
              </div>
              <p className='mb-4 text-lg text-black'>{account.description}</p>
              <div
                className='w-full h-0.25 bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8 mt-6'
                style={{
                  background:
                    'linear-gradient(to right, transparent, #a0a0a0 50%, transparent)'
                }}
              />
              <div className='space-y-8 text-md text-[#460c63]'>
                {account.items.map((item, index) => (
                  <motion.p
                    key={`${account.name}-${item.label}`}
                    initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + accountIndex * 0.1 + index * 0.08 }}
                  >
                    {item.label}{' '}
                    {item.value && (
                      <span className='font-semibold block text-[#1e1b4b]'>
                        {item.value}
                      </span>
                    )}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    )
  }
  
  export default AdvancedAccountFeatures
  
