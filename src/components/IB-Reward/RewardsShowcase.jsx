'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IB-Reward/RewardsShowcaseTranslations'

const rewardItems = t => [
  {
    title: t.cashPrize1000Title,
    lots: t.cashPrize1000Lots,
    prizeImage: '/IB-Reward/Loyality-Program-06.webp'
  },
  {
    title: t.iphoneTitle,
    lots: t.iphoneLots,
    prizeImage: '/IB-Reward/Loyality-Program-07.webp'
  },
  {
    title: t.macbookTitle,
    lots: t.macbookLots,
    prizeImage: '/IB-Reward/Loyality-Program-08.webp'
  },
  {
    title: t.cashPrize5000Title,
    lots: t.cashPrize5000Lots,
    prizeImage: '/IB-Reward/Loyality-Program-11.webp'
  },
  {
    title: t.maldivesTitle,
    lots: t.maldivesLots,
    prizeImage: '/IB-Reward/Loyality-Program-09.webp'
  },
  {
    title: t.europeTitle,
    lots: t.europeLots,
    prizeImage: '/IB-Reward/Loyality-Program-10.webp'
  },
  {
    title: t.mercedesTitle,
    lots: t.mercedesLots,
    prizeImage: '/IB-Reward/Loyality-Program-13.webp'
  },
  {
    title: t.bentleyTitle,
    lots: t.bentleyLots,
    prizeImage: '/IB-Reward/Loyality-Program-14.webp'
  },
  {
    title: t.apartmentTitle,
    lots: t.apartmentLots,
    prizeImage: '/IB-Reward/Loyality-Program-12.webp'
  }
]

export default function RewardsShowcase() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const items = rewardItems(t)

  return (
    <section className='bg-white px-4 py-10 md:px-6 md:py-14' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className='mx-auto max-w-4xl'>
        <motion.div
          className='mx-auto mb-10 max-w-4xl text-center'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`mb-4 text-2xl font-extrabold heading-gradient md:text-3xl ${language === 'ar' ? 'py-2 leading-relaxed' : 'leading-tight'}`}>
            {t.headingLine1}
            <br />
            {t.headingLine2}
          </h2>

          <p className='mx-auto max-w-3xl text-md font-medium leading-relaxed text-[#180248] md:text-lg'>
            {t.paragraph}
          </p>
        </motion.div>

        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className='mx-auto w-full max-w-[300px]'
            >
              <div className='relative'>
                <img
                  src='/IB-Reward/Loyality-Program-05.webp'
                  alt=''
                  aria-hidden='true'
                  className='h-auto w-full'
                />

                <div className='absolute inset-x-0 top-0 pr-2 pt-5 text-center'>
                  <h3 className='text-md font-extrabold uppercase  text-white md:text-md'>
                    {item.title}
                  </h3>
                </div>

                <div className='absolute inset-x-0 top-[24%] flex justify-center px-6'>
                  <img
                    src={item.prizeImage}
                    alt={item.title}
                    className='max-h-[145px] w-auto object-contain md:max-h-[160px]'
                  />
                </div>

                <div className='absolute inset-x-0 bottom-[18%] px-4 text-center'>
                  <p className='text-md font-medium text-white md:text-md'>
                    {item.lots}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
