'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Accounts/Cent/FeaturesTranslations'

const AdvancedAccountFeatures = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const items = [
    { label: t.minDeposit, value: '$10' },
    { label: t.spread, value: '0.8' },
    { label: t.commission, value: '0%' },
    { label: t.leverage, value: '1:500' },
    { label: t.marginRequired, value: '1%' },
    { label: t.lotSize, value: '0.01' },
    { label: t.indicators, value: '80+ Technical Indicators' },
    { label: t.stopOut, value: '30%' },
    { label: t.noDesk }
  ]

  return (
        <section
          className='w-full max-w-6xl mx-auto px-6 py-16'
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-left mb-12  ${language === 'ar' ? 'text-right py-4' : 'text-left'}`}
          >
            <h2 className={`text-3xl font-extrabold heading-gradient ${language === 'ar' ? 'py-4' : ''} `}>{t.title}</h2>
            <p className='text-lg font-medium text-black mt-4'>{t.subtitle}</p>
          </motion.header>
    
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`bg-[#f5f5f5] rounded-[2rem] max-w-2xl mx-auto px-10 py-8 text-gray-700 ${language === 'ar' ? 'text-right' : 'text-left'}`}
          >
            <div className='flex items-center mb-4'>
              <img
                src='/Accounts/Standard-04.svg'
                alt='Star'
                className='w-6 h-6 mr-2'
              />
              <h3 className='text-2xl font-extrabold'>{t.accountName}</h3>
            </div>
            <p className='mb-4 text-lg text-black'>{t.accountDesc}</p>
            <div
              className='w-full h-0.25 bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8 mt-6'
              style={{
                background:
                  'linear-gradient(to right, transparent, #a0a0a0 50%, transparent)'
              }}
            />
            <div className='space-y-8 text-md text-[#460c63]'>
              {items.map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
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
        </section>
      )
    }
    
    export default AdvancedAccountFeatures
    
