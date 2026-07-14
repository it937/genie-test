'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from "next/link"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Promotion/Promotion20/StrongerWishBannerTranslations'

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } }
}

const TradeMarketStandard = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const MotionLink = motion(Link)

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-transparent my-0 2xl:-my-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="relative z-10 w-full max-w-5xl p-6 md:px-6">
        <div className="relative bg-cover bg-center rounded-[30px] md:rounded-[50px] w-full md:w-full h-[26rem] md:h-[18rem] mx-auto flex flex-col md:flex-row" style={{ backgroundColor: '#f5f5f5' }}>
          <div className="order-1 md:order-1 w-full md:w-1/2 px-4 md:pl-10 pt-8 md:pt-12 text-center md:text-start flex flex-col items-center md:items-start">
            <h1 className={`text-2xl md:text-3xl font-extrabold mb-4 heading-gradient  ${language === 'ar' ? 'py-2 leading-relaxed' : 'leading-tight'} `}>
              {t.title}
            </h1>

            <div className="mt-6 md:mt-8 flex justify-center md:justify-start items-center w-full">
              <MotionLink
                href='https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'
                target='_blank'
                rel='noopener noreferrer'
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='banner-cta w-fit text-base sm:text-lg px-6 py-3 relative overflow-hidden group rounded-full inline-block'
              >
                <span className='relative z-10'>{t.cta}</span>
                <motion.div
                  className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
                  animate={{ scale: [0.9, 1.4], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl group-hover:blur-2xl transition-all duration-300' />
              </MotionLink>
            </div>
          </div>

          <div className="order-2 md:order-1 w-1/2 md:w-1/2 flex justify-center mt-4 md:mt-0 py-6 mx-auto">
            <Image
              src="/promotion/20-bonus/20-Bonus-11.webp"
              alt="Commodity Market"
              width={420}
              height={420}
              className="object-contain w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeMarketStandard