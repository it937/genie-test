'use client';
import React from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IBBroker/FinancialSuccessBannerTranslations'

const TradeMarketUltimate = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='relative flex items-center justify-center text-center overflow-hidden bg-transparent mt-4 md:mt-16 md:pt-24' >
      <div className='relative z-10 w-full max-w-6xl px-0'>
        <div
          className='bg-cover bg-center rounded-[30px] md:rounded-[50px] w-full h-[26rem] md:h-[18rem] mx-auto flex flex-col md:flex-row'
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className='order-1 md:order-1 w-full md:w-1/2 px-4 md:pl-10 pt-0 md:pt-6 text-center md:text-start flex flex-col items-center sm:items-start'>
            <h1 className={`text-2xl md:text-3xl font-extrabold mb-1 heading-gradient leading-tight max-w-md ${language === 'ar' ? 'py-4' : ''}`}>
              {t.heading}
            </h1>

            <p className='text-md md:text-lg font-medium mb-0 md:mb-6 text-[#180248] max-w-sm'>
              {t.paragraph}
            </p>
            <div className='mt-6 md:mt-0 flex justify-center sm:justify-start items-center w-full'>
              <a
                href="https://client.geniefx.com/register-live-trading-account-F1?type=ib"
                target="_blank"
                className='inline-flex items-center justify-center px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-white text-sm sm:text-md transition-all duration-300 hover:shadow-lg cta'
              >
                {t.partnerWithUs}
              </a>
            </div>
          </div>

          <div
            className='
            order-2 md:order-1 
            w-full md:w-1/2 
            flex justify-center 
            mt-4 md:mt-0
            absolute bottom-0 
            md:absolute md:bottom-0 md:right-0
          '
          >
            <Image
              src='/IB-Broker/20251119-193836.webp'
              alt='Commodity Market'
              width={420}
              height={420}
              className='object-contain w-64 sm:w-80 md:w-[36rem] h-auto'
            />
          </div>
        </div>
      </div>
      <div className="h-0 m-0 p-0"></div>
    </section>
  )
}

export default TradeMarketUltimate
