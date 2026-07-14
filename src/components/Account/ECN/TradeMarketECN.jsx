'use client'
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Accounts/ECN/TradeMarketUltimateTranslations'

const TradeMarketStandard = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className='relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-transparent my-0 2xl:-my-20'>
      <div className='relative z-10 w-full max-w-6xl md:px-6'>
        <div
          className='relative 
             bg-no-repeat
             bg-contain md:bg-cover
             bg-center md:bg-center
             rounded-[30px] md:rounded-[50px]
             w-full md:w-[70rem]
             h-[40rem] md:h-[22rem]
             mx-auto flex flex-col md:flex-row
             bg-[url("/Accounts/accounts-09.webp")]
             md:bg-[url("/Accounts/Advanced-08.webp")]'
        >
          {/* Text Section */}
          <div className='order-1 md:order-1 w-full md:w-1/2 pl-0 md:pl-20 pt-28 md:pt-18 text-center md:text-start flex flex-col items-center md:items-start'>
            <h1
              className={`text-3xl md:text-3xl font-extrabold mb-4 heading-gradient px-24 md:px-0 leading-tight  ${
                language === 'ar' ? 'py-6' : ''
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

          {/* Image Section */}
          {/* <div
            className="
              order-2 sm:order-1 
              w-full md:w-1/2 
              flex justify-center 
              mt-4 md:mt-0
              
              absolute bottom-0 
              
              md:absolute md:bottom-0 md:right-0
            "
          >
            <Image
              src="/commodities/20251119-191716.webp"
              alt="Commodity Market"
              width={420}
              height={420}
              className="object-contain w-64 sm:w-80 md:w-[22rem] h-auto"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TradeMarketStandard