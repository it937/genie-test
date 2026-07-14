'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/PAMM/PAMMSolutionStepsTranslations'

const PAMMSolutionSteps = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'

  return (
    <section
      className='bg-white px-6 py-6 md:py-8'
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className='mx-auto max-w-4xl'>
        <div
          className='relative overflow-hidden rounded-4xl px-8 py-12 text-center md:px-16 md:py-16'
          style={{
            backgroundImage: "url('/homepage/Homepage-02.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Title */}
          <h2
            className={`mb-12 text-2xl font-extrabold leading-tight text-white md:text-3xl banner-heading-gradient ${
              isArabic ? 'py-2 leading-relaxed' : ''
            }`}
          >
            {t.headingLine1}
            <br />
            {t.headingLine2}
          </h2>

          {/* Steps Row */}
          <div className='relative flex items-start justify-between gap-4'>
            {/* Connector line */}
            <div
              className={`absolute top-[22px] md:top-[28px] h-px bg-white/40 ${
                isArabic ? 'right-[calc(16.67%+12px)] left-[calc(16.67%+12px)]' : 'left-[calc(16.67%+12px)] right-[calc(16.67%+12px)]'
              }`}
            />

            {t.steps.map((step, index) => (
              <div
                key={index}
                className='relative flex flex-1 flex-col items-center gap-3'
              >
                {/* Number bubble */}
                <div className='flex h-11 w-11 md:h-15 md:w-15 flex-shrink-0 items-center justify-center rounded-full bg-[#bea3e8] text-xl md:text-3xl font-extrabold text-[#180248] backdrop-blur-sm ring-1 ring-white/30'>
                  {index + 1}
                </div>

                {/* Step label */}
                <p className='text-sm font-extrabold leading-snug text-white md:text-base'>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PAMMSolutionSteps