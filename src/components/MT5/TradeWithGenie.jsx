'use client'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/MT5/TradeWithGenieTranslations'

const TradeWithGenie = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const downloadOptions = [
    {
      href: 'https://download.terminal.free/cdn/web/genie.ltd/mt5/genie5setup.exe',
      imageSrc: '/mt5/windows.svg',
      imageAlt: t.windowsAlt,
      accent: 'from-[#0078D4]/14 via-[#0078D4]/8 to-transparent',
      eyebrow: t.windowsEyebrow,
      label: t.windowsLabel
    },
    {
      href: 'https://download.terminal.free/cdn/mobile/mt5/ios?server=Genie-FX',
      imageSrc: '/mt5/app-store.svg',
      imageAlt: t.appStoreAlt,
      accent: 'from-[#180248]/10 via-[#180248]/5 to-transparent',
      eyebrow: t.appStoreEyebrow,
      label: t.appStoreLabel
    },
    {
      href: 'https://download.terminal.free/cdn/mobile/mt5/android?server=Genie-FX',
      imageSrc: '/mt5/play-store.svg',
      imageAlt: t.playStoreAlt,
      accent: 'from-[#00c389]/12 via-[#180248]/5 to-transparent',
      eyebrow: t.playStoreEyebrow,
      label: t.playStoreLabel
    }
  ]

  return (
    <section
      id='mt5-downloads'
      className='relative min-h-[60vh] 2xl:min-h-[45vh] flex items-center justify-center text-center overflow-hidden bg-transparent py-8 md:pt-0'
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className='relative z-10 w-full max-w-6xl px-6'>
        <div
          className='bg-cover bg-center rounded-[50px] md:rounded-[50px] rounded-3xl w-full md:w-[70rem] h-auto md:min-h-[20rem] mx-auto'
          style={{ backgroundColor: '#f5f5f5' }}
        >
          <div className='relative h-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-8 md:py-8'>
            <div className='flex flex-1 justify-center md:justify-start order-1 md:order-1 mb-6 md:mb-0 md:pr-6'>
              <img src="/mt5/20251107-171724.webp" alt="Laptop 1" className='h-48 md:h-56 lg:h-60 w-auto object-contain' />
            </div>
            <div className='text-center md:text-start flex-1 order-2 md:order-2'>
              <h2 className={`text-2xl md:text-3xl font-extrabold tracking-tight max-w-xs md:max-w-full heading-gradient mb-6 md:mb-4 mx-auto md:mx-2 ${language === 'ar' ? 'py-4 leading-relaxed' : 'leading-tight'}`}>
                {t.heading}
              </h2>
              <p className={`max-w-full mx-auto md:mx-2 mb-6 text-sm md:text-base font-medium text-[#180248]/70 ${language === 'ar' ? 'leading-8' : 'leading-7'}`}>
                {t.description}
              </p>
              <div className='flex flex-col md:flex-row gap-4 md:gap-3 justify-center md:justify-start items-center md:items-stretch'>
                {downloadOptions.map((option) => (
                  <a
                    key={option.imageAlt}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group transition-transform duration-300 hover:scale-[1.03]'
                  >
                    <div className='relative flex h-16 w-[200px] items-center gap-3 overflow-hidden rounded-[28px] border border-white/70 bg-white px-4 shadow-[0_18px_36px_rgba(15,23,42,0.14)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_22px_42px_rgba(15,23,42,0.18)]'>
                      <div className={`absolute inset-0 bg-gradient-to-r ${option.accent} opacity-80`} />
                      <div className='absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[#180248]/12 to-transparent' />
                      <div className='relative z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl'>
                        <img
                          src={option.imageSrc}
                          alt={option.imageAlt}
                          className='h-8 w-8 object-contain'
                        />
                      </div>
                      <div className='relative z-10 flex flex-col leading-tight text-left'>
                        <span className='text-[9px] font-medium uppercase tracking-[0.16em] text-slate-500'>
                          {option.eyebrow}
                        </span>
                        <span className='text-[13px] font-semibold text-slate-900'>
                          {option.label}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeWithGenie
