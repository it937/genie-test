'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/IBEcoSystemTranslations'

const features = (t) => [
  { title: t.globalNetworkTitle, description: t.globalNetworkDesc, iconPlaceholder: 'Loyality-Program-16.webp' },
  { title: t.realTimeTrackingTitle, description: t.realTimeTrackingDesc, iconPlaceholder: 'Loyality-Program-17.webp' },
  { title: t.fastWithdrawalsTitle, description: t.fastWithdrawalsDesc, iconPlaceholder: 'Loyality-Program-18.webp' },
  { title: t.seamlessOnboardingTitle, description: t.seamlessOnboardingDesc, iconPlaceholder: 'Loyality-Program-19.webp' },
  { title: t.trustedPartnershipTitle, description: t.trustedPartnershipDesc, iconPlaceholder: 'Loyality-Program-20.webp' },
  // { title: t.fscaProtectionTitle, description: t.fscaProtectionDesc, iconPlaceholder: 'Loyality-Program-21.webp' },
]

const GenieIBFeatures = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const featureList = features(t)
  const [hoveredDesktop, setHoveredDesktop] = useState(null)
  const [hoveredMobile, setHoveredMobile] = useState(null)

  return (
    <div className='min-h-screen py-10 px-4 bg-white' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='text-center mb-10 max-w-xl mx-auto'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-2xl md:text-3xl font-extrabold mb-3 heading-gradient  ${language === 'ar' ? 'py-4' : ''} `}>{t.heading}</h1>
        </motion.div>

        {/* DESKTOP VIEW */}
        <div className='hidden lg:block relative w-full mx-auto max-w-4xl'>
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              className='relative'
              onMouseEnter={() => setHoveredDesktop(index)}
              onMouseLeave={() => setHoveredDesktop(null)}
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
                      <motion.stop
                        offset='0%'
                        animate={{ stopColor: hoveredDesktop === index ? '#7102bb' : '#e1e1e2' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      />
                      <motion.stop
                        offset='100%'
                        animate={{ stopColor: hoveredDesktop === index ? '#150044' : '#e1e1e2' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      />
                    </linearGradient>

                    {/* Depth Shadows */}
                    <filter id={`depth-${index}`} height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="" floodOpacity="0.15" />
                      <feDropShadow dx="0" dy="0" stdDeviation="0" floodOpacity="0.45" />
                    </filter>
                  </defs>

                  <path
                    d={
                      index < featureList.length - 1
                        ? 'M 38,0 L 712,0 Q 750,0 750,38 L 750,127 Q 750,165 712,165 L 412,165 L 375,200 L 338,165 L 38,165 Q 0,165 0,127 L 0,38 Q 0,0 38,0 Z'
                        : 'M 38,0 L 712,0 Q 750,0 750,38 L 750,147 Q 750,185 712,185 L 38,185 Q 0,185 0,147 L 0,38 Q 0,0 38,0 Z'
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
                    src={`/IB-Reward/${feature.iconPlaceholder}`}
                    alt={feature.title}
                    className='w-20 h-20 -mt-6'
                  />
                  <div className='flex-1 -mt-6'>
                    <h3 className={`text-xl font-extrabold transition-colors duration-300 ${hoveredDesktop === index ? 'text-white' : 'text-[#66666a]'}`}>{feature.title}</h3>
                    <p className={`text-base transition-colors duration-300 ${hoveredDesktop === index ? 'text-white/90' : 'text-[#808085]'}`}>{feature.description}</p>
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
              onMouseEnter={() => setHoveredMobile(index)}
              onMouseLeave={() => setHoveredMobile(null)}
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
                      <motion.stop
                        offset='0%'
                        animate={{ stopColor: hoveredMobile === index ? '#7102bb' : '#e1e1e2' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      />
                      <motion.stop
                        offset='100%'
                        animate={{ stopColor: hoveredMobile === index ? '#150044' : '#e1e1e2' }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      />
                    </linearGradient>

                    <filter id={`depth-mobile-${index}`} height="200%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodOpacity="0.15" />
                      <feDropShadow dx="0" dy="0" stdDeviation="0" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  <path
                    d={
                      index < featureList.length - 1
                        ? 'M 28,0 L 722,0 Q 750,0 750,28 L 750,92 Q 750,120 722,120 L 418,120 L 375,150 L 332,120 L 28,120 Q 0,120 0,92 L 0,28 Q 0,0 28,0 Z'
                        : 'M 28,0 L 722,0 Q 750,0 750,28 L 750,112 Q 750,140 722,140 L 28,140 Q 0,140 0,112 L 0,28 Q 0,0 28,0 Z'
                    }
                    fill={`url(#gradient-mobile-${index})`}
                    filter={`url(#depth-mobile-${index})`}
                  />
                </svg>

                {/* Stronger overlap shadow */}
                <div className='absolute bottom-[-10px] left-0 w-full h-8'></div>

                <div className='absolute inset-0 px-5 flex gap-4 items-center'>
                  <img
                    src={`/IB-Reward/${feature.iconPlaceholder}`}
                    alt={feature.title}
                    className='w-14 h-14 -mt-4'
                  />
                  <div className={`-mt-4 ${feature.title === 'Trusted Partnership' ? 'ml-0' : ''}`}>
                    <h3 className={`text-lg font-extrabold transition-colors duration-300 ${hoveredMobile === index ? 'text-white' : 'text-[#66666a]'}`}>{feature.title}</h3>
                    <p className={`text-xs transition-colors duration-300 ${hoveredMobile === index ? 'text-white/85' : 'text-[#808085]'}`}>{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default GenieIBFeatures
