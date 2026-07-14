'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/IntroducingBrokerTranslations'

export default function BrokerProgramSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section className='w-full bg-white py-16 px-4 md:py-12' dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        className='mx-auto max-w-5xl'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div
          className='relative rounded-3xl overflow-hidden bg-cover bg-center shadow-sm'
          // style={{ backgroundImage: `url('/homepage/Homepage-02.webp')` }}
        >
          <div className='absolute inset-0'></div>

          <div className='relative z-10 px-6 md:px-12 pt-12 md:pt-16 pb-8'>
            <motion.h1
              className={`text-2xl md:text-4xl font-extrabold heading-gradient text-center mb-6 leading-tight max-w-sm mx-auto ${language === 'ar' ? 'py-4' : ''}`}
              variants={childVariants}
            >
              {t.title}
            </motion.h1>

            <motion.div className='flex justify-center mb-8' variants={childVariants}>
              <div className='w-full max-w-md h-[3px] bg-gradient-to-r from-transparent via-[#180248] to-transparent rounded-full'></div>
            </motion.div>

            <motion.h2
              className='text-lg md:text-xl text-[#180248] text-center font-extrabold mb-2'
              variants={childVariants}
            >
              {t.subtitle}
            </motion.h2>

            <motion.h2
              className='text-lg md:text-lg text-[#180248] text-center font-bold italic mb-4'
              variants={childVariants}
            >
              {t.subtitle2}
            </motion.h2>

            <motion.p
              className='text-md md:text-md text-[#180248] text-center max-w-3xl mx-auto leading-relaxed'
              variants={childVariants}
            >
              {t.description}
            </motion.p>
          </div>

          <motion.div className='relative bottom-0 left-0 right-0 flex justify-center' variants={childVariants}>
            <div className='relative w-full h-64 md:h-120 overflow-hidden'>
              <Image
                src='/homepage/IB-resized.webp'
                alt='Business professionals team'
                fill
                className='object-cover object-top'
                sizes='(max-width: 768px) 100vw, 896px'
              />
            </div>
          </motion.div>
        </div>

        <motion.div className='flex justify-center -mt-8 relative z-20' variants={childVariants}>
          <Link
            href='/ib'
            className='px-8 md:px-10 py-3 md:py-4 banner-cta font-normal rounded-full text-center whitespace-nowrap transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/50 shadow-lg shadow-purple-500/40'
          >
            {t.cta}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}