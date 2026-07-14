'use client'
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/AccountSelectorTranslations'

export default function TradingAccountsPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const accounts = [
    {
      name: t.cent,
      features: [
        t.minDepositCent,
        t.centSpread,
        t.commission,
        t.centLeverage,
        t.centMarginRequired,
        t.centMinLotSize
      ]
    },
    {
      name: t.standard,
      features: [
        t.minDepositStandard,
        t.standardSpread,
        t.commission,
        t.standardLeverage,
        t.standardMarginRequired,
        t.standardMinLotSize,
      ]
    },
    {
      name: t.ecn,
      features: [
        t.minDepositECN,
        t.ecnSpread,
        t.commission,
        t.ecnLeverage,
        t.ecnMarginRequired,
        t.ecnMinLotSize,
      ]
    }
  ]

  return (
    <div className='p-4 md:p-8' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div
        className='rounded-[40px] md:rounded-[50px] w-full max-w-[65rem] mx-auto overflow-hidden'
        style={{ backgroundColor: '#f2f2f2' }}
      >
        <div className='px-6 md:px-12 pt-12 md:pt-16 pb-8'>
          <div className='text-center mb-10 md:mb-12'>
            <h1 className={`text-3xl md:text-3xl font-extrabold mb-3 md:mb-4 leading-tight heading-gradient max-w-md mx-auto  ${language === 'ar' ? 'py-6' : ''}`}>
              {t.title}
            </h1>
            <p className='text-base md:text-lg font-medium leading-relaxed max-w-2xl px-4 mx-auto text-[#180248]/80'>
              {t.description}
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto mb-16 md:mb-20'>
            {accounts.map((account, idx) => (
              <div
                key={idx}
                className='group relative rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between'
              >
                <div className='absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#3c0660]/60 to-transparent md:group-hover:via-purple-400/80 transition-all duration-300' />
                <div className='absolute right-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#3c0660]/60 to-transparent md:group-hover:via-purple-400/80 transition-all duration-300' />

                <div className='absolute inset-0 bg-gradient-to-b from-[#3c0660] via-black to-[#3c0660] border-2 border-[#3c0660] rounded-xl md:rounded-2xl md:group-hover:from-[#5a0d8f] md:group-hover:via-[#150030] md:group-hover:to-[#5a0d8f] md:group-hover:border-purple-400 transition-all duration-300' />

                <div className='absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-b from-[#3c0660]/20 to-transparent pointer-events-none md:group-hover:from-purple-500/30 transition-all duration-300' />

                <div className='absolute inset-0 rounded-xl md:rounded-2xl shadow-xl shadow-[#3c0660]/50 md:group-hover:shadow-purple-400/70 transition-all duration-300' />

                <div className='relative z-10 p-5 md:p-6 flex flex-col h-full'>
                  <h3 className='text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-white transition-colors duration-300'>
                    {account.name}
                    <div className='w-full md:w-0 h-0.5 md:h-1 bg-purple-400 mt-2 rounded-full mx-auto md:group-hover:w-full transition-all duration-300' />
                  </h3>

                  <ul className='space-y-2.5 md:space-y-3 mb-6 md:mb-8 flex-grow'>
                    {account.features.map((feature, fIdx) => (
                      <li key={fIdx} className='flex items-start text-xs md:text-sm'>
                        <span className='mr-2 mt-0.5 md:mt-1 flex-shrink-0'>
                          <svg className='w-3 h-3 md:w-4 md:h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                            <circle cx='10' cy='10' r='3' />
                          </svg>
                        </span>
                        <span className='text-purple-100 leading-relaxed'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href='https://client.geniefx.com/register-live-trading-account-F1'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 bg-purple-500 text-white shadow-lg shadow-purple-500/50 border border-transparent md:bg-transparent md:text-purple-400 md:shadow-none md:border-purple-800/50 md:group-hover:bg-purple-500 md:group-hover:text-white md:group-hover:shadow-lg md:group-hover:shadow-purple-500/50 md:group-hover:border-transparent text-center block'
                  >
                    {t.signUp}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
