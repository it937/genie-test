'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/StrongNetworkTranslations'

const benefits = t => [
  {
    title: t.competitiveProfitShareTitle,
    description: t.competitiveProfitShareDesc
  },
  {
    title: t.flexiblePaymentOptionsTitle,
    description: t.flexiblePaymentOptionsDesc
  },
  {
    title: t.dedicatedIBSupportTitle,
    description: t.dedicatedIBSupportDesc
  },
  {
    title: t.advancedTradingPlatformTitle,
    description: t.advancedTradingPlatformDesc
  },
  {
    title: t.clearPerformanceInsightsTitle,
    description: t.clearPerformanceInsightsDesc
  },
  {
    title: t.comprehensiveResourcesTitle,
    description: t.comprehensiveResourcesDesc
  }
]

export default function StrongNetwork() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const benefitList = benefits(t)

  return (
    <section className='bg-white px-4 py-8 md:px-6 md:py-6' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='mx-auto max-w-5xl rounded-[42px] bg-[#f4f4f4] px-6 py-10 shadow-sm md:px-12 md:py-14'>
        <motion.div
          className='mx-auto mb-10 max-w-4xl text-center md:mb-12'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`mb-4 text-3xl font-extrabold heading-gradient md:text-3xl ${language === 'ar' ? 'py-2 leading-relaxed' : 'leading-tight'}`}>
            {t.headingLine1}
            <br />
            {t.headingLine2}
          </h2>

          <p className='mx-auto max-w-3xl text-md font-medium leading-relaxed text-[#180248] md:text-lg'>
            {t.paragraph}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
          {benefitList.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className='rounded-[28px] bg-[#e9e9ec] p-6 md:min-h-[160px] md:p-10'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-extrabold text-[#180248] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#180248] text-sm md:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-10 flex justify-center md:-mt-6'
        >
          <Link
            href='/pdf/IB-T&Cs.pdf'
            target='_blank'
            className='banner-cta inline-block rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 md:px-10 md:text-lg'
          >
            {t.cta}
          </Link>
        </motion.div>
    </section>
  )
}
