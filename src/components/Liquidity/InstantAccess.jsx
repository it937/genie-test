'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/InstantAccessTranslations'

export default function IBProgramPerks() {
  const { language } = useLanguage()
  const t = translations[language]
  const handleScrollToForm = () => {
    const leadForm = document.getElementById('liquidity-lead-form')

    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const perks = [
    {
      title: t.forex,
      spread: `${t.spreadFrom} 0`,
      liquidity: `${t.liquidityPlatforms} 7`,
      support: t.technicalSupport,
    },
    {
      title: t.spotMetals,
      spread: `${t.spreadFrom} 6`,
      liquidity: `${t.liquidityPlatforms} 5`,
      support: t.technicalSupport,
    },
    {
      title: t.spotEnergy,
      spread: `${t.spreadFrom} 0.03`,
      liquidity: `${t.liquidityPlatforms} 8`,
      support: t.technicalSupport,
    },
    {
      title: t.cashIndices,
      spread: `${t.spreadFrom} 1`,
      liquidity: `${t.liquidityPlatforms} 8`,
      support: t.technicalSupport,
    },
  ]
  

  return (
    <main className="bg-white py-8 px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto bg-[#f4f4f4] rounded-[50px] px-12 py-12">
        <motion.div
          className="text-start mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className={`text-2xl md:text-3xl font-extrabold text-start max-w-lg heading-gradient mb-2 ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
            {t.title}
          </h1>
          <p className={`text-[#180248] font-medium text-md md:text-lg max-w-full ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              className="bg-[#e6e6e6] rounded-2xl p-6 transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
            >
              <h3 className="text-lg md:text-xl font-extrabold text-[#180248] mb-2">
                {perk.title}
              </h3>
              <p className="text-[#180248] text-sm md:text-base">{perk.spread}</p>
              <p className="text-[#180248] text-sm md:text-base">{perk.liquidity}</p>
              <p className="text-[#180248] text-sm md:text-base">{perk.support}</p>
            </motion.div>
          ))}
        </div>
        <div className='flex justify-center'>
          <motion.button
            type='button'
            onClick={handleScrollToForm}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-12 px-12 py-3 rounded-full text-white cta shadow-lg hover:scale-105 transition-transform"
          >
            {t.connectNow}
          </motion.button>
        </div>
      </div>
    </main>
  )
}
