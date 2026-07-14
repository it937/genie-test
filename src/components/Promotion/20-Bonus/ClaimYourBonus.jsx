'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import translations from '@/translations/Promotion/Promotion20/ClaimYourBonusTranslations'

const ClaimYourBonus = () => {
  const { language } = useLanguage()
  const pathname = usePathname()
  const t = translations[language]
  const MotionLink = motion(Link)
  const liveAccountUrl = pathname === '/promotion/20-bonus/pk'
    ? 'https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'
    : 'https://client.geniefx.com/register-live-trading-account-F1?partner_uuid=30E4A0AE-AEE7-45BA-B7D8-6B6D70487F54&pu=false&source=SalesRegistrationLink&utmSource=Canvas&commissionProfileId=32'

  const steps = [
    { title: t.step1, subtitle: t.step1Desc, mobileTop: "top-[1%]", desktopTop: "md:top-[8%]" },
    { title: t.step2, subtitle: t.step2Desc, mobileTop: "top-[38%]", desktopTop: "md:top-[44.5%]" },
    { title: t.step3, subtitle: t.step3Desc, mobileTop: "top-[74%]", desktopTop: "md:top-[80.5%]" },
  ]

  return (
    <section className="w-full bg-white pb-0 md:py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className={`text-2xl md:text-3xl font-extrabold heading-gradient mb-3 md:mb-0 max-w-lg mx-auto ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
            {t.title}
          </h2>
          <p className="text-[#180248] text-md font-medium md:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mt-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className={`absolute left-[30%] md:left-[30%] w-[55%] md:w-[70%] text-start ${step.mobileTop} ${step.desktopTop}`}
            >
              <h3 className={`text-sm md:text-2xl font-bold text-[#180248] drop-shadow-lg mb-1 ${language === 'ar' ? 'pr-60 mb-6' : ''}`}>
                {step.title}
              </h3>
              <p className="text-xs md:text-lg text-[#180248] drop-shadow-md pr-0 md:pr-60">
                {step.subtitle}
              </p>
            </motion.div>
          ))}

          <motion.img
            src="/promotion/20-bonus/20-Bonus-07.webp"
            alt="Claim Your Bonus Illustration"
            className="mx-auto w-full h-auto select-none"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <div className="flex justify-center mt-8">
          <MotionLink
            href={liveAccountUrl}
            target='_blank'
            rel='noopener noreferrer'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full font-light text-white text-xs transition-all duration-300 hover:shadow-lg cta"
          >
            {t.cta}
          </MotionLink>
        </div>
      </div>
    </section>
  )
}

export default ClaimYourBonus
