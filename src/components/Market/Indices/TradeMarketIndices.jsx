'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Market/Indices/TradeMarketIndicesTranslations'

const TradeMarketUltimate = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section
      className='relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-transparent mb-32 md:mb-16 2xl:-my-20'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className='relative z-10 w-full max-w-6xl px-0'>
        <div
          className='bg-cover bg-center rounded-[30px] sm:rounded-[50px] w-full sm:w-[70rem] h-[26rem] md:h-[18rem] mx-auto flex flex-col sm:flex-row'
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <div
            className={`order-1 sm:order-1 w-full sm:w-1/2 pl-6 sm:pl-10 pt-8 sm:pt-12 text-center sm:text-start flex flex-col items-center sm:items-start ${
              language === 'ar' ? 'sm:pr-10' : ''
            }`}
          >
            <h1
              className={`text-2xl sm:text-3xl font-extrabold mb-4 heading-gradient leading-tight text-center sm:text-left ${
                language === 'ar' ? 'py-4' : ''
              }`}
            >
              {t.title}
            </h1>

            <div className='mt-6 sm:mt-8 flex justify-center sm:justify-start items-center w-full'>
              <Link
                href='https://client.geniefx.com/register-live-trading-account-F1'
                target='_blank'
                className='px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-white text-sm sm:text-md transition-all duration-300 hover:shadow-lg cta'
              >
                {t.cta}
              </Link>
            </div>
          </div>

          <div className='order-2 sm:order-1 w-full md:w-1/2 flex justify-center mt-4 md:mt-0 absolute bottom-0 md:absolute md:bottom-0 md:right-0'>
            <Image
              src='/commodities/20260112-170556.webp'
              alt='Commodity Market'
              width={420}
              height={420}
              className={`object-contain w-64 sm:w-80 md:w-[30rem] h-auto  ${
                language === 'ar' ? '-translate-x-150' : ''
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeMarketUltimate
