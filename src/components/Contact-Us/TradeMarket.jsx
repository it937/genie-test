'use client'
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/ContactUs/TradeMarketTranslations'

const TradeMarketUltimate = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='relative flex items-center justify-center text-center overflow-hidden bg-transparent mt-4 md:-mt-4 md:pt-24' >
      <div className='relative z-10 w-full max-w-6xl px-0'>
        <div
          className='bg-cover bg-center rounded-[30px] md:rounded-[50px] w-full h-[26rem] md:h-[18rem] mx-auto flex flex-col md:flex-row'
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Text Section */}
          <div
            className='
              order-1 md:order-2
              w-full sm:w-1/2
              pl-6 sm:pl-10 pt-8 sm:pt-12 
              text-center sm:text-start 
              flex flex-col items-center sm:items-start
              md:ml-auto
            '
          >
            <h1 className={`text-2xl sm:text-3xl max-w-xs mx-10 md:mx-0 font-extrabold mb-4 heading-gradient leading-tight ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
              {t.title}
            </h1>

            <div className='mt-6 sm:mt-8 flex justify-center sm:justify-start items-center w-full'>
              <a href="https://client.geniefx.com/register-live-trading-account-F1" target="_blank" className='px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-white text-sm sm:text-md transition-all duration-300 hover:shadow-lg cta'>
                {t.ctaButton}
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div
            className='
              order-2 md:order-1 
              w-full md:w-1/2 
              flex justify-center 
              mt-4 md:mt-0
              absolute bottom-0
              md:absolute md:bottom-0 md:left-15
            '
          >
            <Image
              src='/About-Us/About-Us-05.webp'
              alt='Commodity Market'
              width={420}
              height={420}
              className='object-contain w-64 sm:w-80 md:w-[32rem] h-auto'
            />
          </div>
        </div>
      </div>
      <div className="h-0 m-0 p-0"></div>
    </section>
  )
}

export default TradeMarketUltimate