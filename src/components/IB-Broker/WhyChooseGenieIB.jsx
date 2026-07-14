'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IBBroker/WhyChooseGenieIBTranslations'

const features = (t) => [
  { title: t.unlimitedEarningsTitle, description: t.unlimitedEarningsDesc, iconPlaceholder: 'IB-Program-04.webp' },
  { title: t.trustedPartnershipTitle, description: t.trustedPartnershipDesc, iconPlaceholder: 'IB-Program-05.svg' },
  { title: t.fastWithdrawalsTitle, description: t.fastWithdrawalsDesc, iconPlaceholder: 'IB-Program-06.svg' },
  { title: t.globalReachTitle, description: t.globalReachDesc, iconPlaceholder: 'IB-Program-07.webp' },
  { title: t.seamlessIntegrationTitle, description: t.seamlessIntegrationDesc, iconPlaceholder: 'IB-Program-08.svg' },
  { title: t.realTimeTrackingTitle, description: t.realTimeTrackingDesc, iconPlaceholder: 'IB-Program-09.svg' },
]

const GenieIBFeatures = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const featureList = features(t)

  return (
    <div className='min-h-screen py-10 px-4 bg-white' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='text-center mb-10'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-2xl md:text-4xl font-extrabold mb-3 heading-gradient  ${language === 'ar' ? 'py-4' : ''} `}>{t.heading}</h1>
          <p className='text-base md:text-lg font-medium text-[#180248]'>
            {t.paragraph}
          </p>
        </motion.div>

        {/* DESKTOP VIEW */}
        <div className='hidden lg:block relative w-full mx-auto max-w-4xl'>
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              className='relative'
              style={{
                marginTop: index === 0 ? '0' : '-25px',
                zIndex: featureList.length - index
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className='relative'>

                {/* SVG (reduced height + depth) */}
                <svg
                  width='100%'
                  height='200'
                  viewBox='0 0 750 200'
                  preserveAspectRatio='none'
                  className='w-full'
                >
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#7102bb' />
                      <stop offset='100%' stopColor='#150044' />
                    </linearGradient>

                    {/* Depth Shadows */}
                    <filter id={`depth-${index}`} height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="" floodOpacity="0.55" />
                      <feDropShadow dx="0" dy="0" stdDeviation="0" floodOpacity="0.45" />
                    </filter>
                  </defs>

                  <path
                    d={
                      index < featureList.length - 1
                        ? 'M 30,0 L 720,0 Q 750,0 750,30 L 750,145 Q 750,165 720,165 L 405,165 L 375,200 L 345,165 L 30,165 Q 0,165 0,145 L 0,30 Q 0,0 30,0 Z'
                        : 'M 30,0 L 720,0 Q 750,0 750,30 L 750,165 Q 750,185 720,185 L 30,185 Q 0,185 0,165 L 0,30 Q 0,0 30,0 Z'
                    }
                    fill={`url(#gradient-${index})`}
                    filter={`url(#depth-${index})`}
                  />
                </svg>

                {/* Extra bottom shadow to show overlap */}
                <div className='absolute bottom-[-12px] left-0 w-full h-10'></div>

                {/* Content */}
                <div className='absolute inset-0 px-10 flex items-center gap-10 mx-8'>
                  <img
                    src={`/IB-Broker/${feature.iconPlaceholder}`}
                    alt={feature.title}
                    className='w-20 h-20 -mt-6'
                  />
                  <div className='flex-1 -mt-6'>
                    <h3 className='text-xl font-extrabold text-white'>{feature.title}</h3>
                    <p className='text-white/90 text-base'>{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className='lg:hidden w-full mx-auto'>
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              className='relative'
              style={{
                marginTop: index === 0 ? '0' : '-15px',
                zIndex: featureList.length - index
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className='relative'>
                <svg
                  width='100%'
                  height='140'
                  viewBox='0 0 750 150'
                  preserveAspectRatio='none'
                  className='w-full'
                >
                  <defs>
                    <linearGradient id={`gradient-mobile-${index}`} x1='0%' y1='0%' x2='100%' y2='0%'>
                      <stop offset='0%' stopColor='#7102bb' />
                      <stop offset='100%' stopColor='#150044' />
                    </linearGradient>

                    <filter id={`depth-mobile-${index}`} height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodOpacity="0.5" />
                      <feDropShadow dx="0" dy="0" stdDeviation="0" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  <path
                    d={
                      index < featureList.length - 1
                        ? 'M 20,0 L 730,0 Q 750,0 750,20 L 750,100 Q 750,120 730,120 L 420,120 L 375,150 L 330,120 L 20,120 Q 0,120 0,100 L 0,20 Q 0,0 20,0 Z'
                        : 'M 20,0 L 730,0 Q 750,0 750,20 L 750,120 Q 750,140 730,140 L 20,140 Q 0,140 0,120 L 0,20 Q 0,0 20,0 Z'
                    }
                    fill={`url(#gradient-mobile-${index})`}
                    filter={`url(#depth-mobile-${index})`}
                  />
                </svg>

                {/* Stronger overlap shadow */}
                <div className='absolute bottom-[-10px] left-0 w-full h-8'></div>

                <div className='absolute inset-0 px-5 flex gap-4 items-center'>
                  <img
                    src={`/IB-Broker/${feature.iconPlaceholder}`}
                    alt={feature.title}
                    className='w-14 h-14 -mt-4'
                  />
                  <div className={`-mt-4 ${feature.title === "Trusted Partnership" ? 'ml-5' : ''}`}>
                    <h3 className='text-lg font-extrabold text-white'>{feature.title}</h3>
                    <p className='text-white/85 text-xs'>{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='mt-10 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href='/pdf/IB-T&Cs.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center text-sm md:text-base font-semibold text-[#180248] underline underline-offset-4 transition-opacity hover:opacity-80'
          >
            {t.cta}
          </a>
        </motion.div>

      </div>
    </div>
  )
}

export default GenieIBFeatures
