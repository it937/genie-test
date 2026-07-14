'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/IBBroker/PerksTranslations'

const perks = (t) => [
  { title: t.fundProtectionTitle, description: t.fundProtectionDesc },
  { title: t.extraBonusesTitle, description: t.extraBonusesDesc },
  { title: t.loyaltyRewardsTitle, description: t.loyaltyRewardsDesc },
  { title: t.advancedPlatformsTitle, description: t.advancedPlatformsDesc },
  { title: t.expertManagersTitle, description: t.expertManagersDesc },
  { title: t.ultraTightSpreadsTitle, description: t.ultraTightSpreadsDesc },
]

export default function IBProgramPerks() {
  const { language } = useLanguage()
  const t = translations[language]
  const perkList = perks(t)

  return (
    <main className="bg-white py-8 px-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto bg-[#f4f4f4] rounded-[50px] px-12 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className={`text-2xl md:text-3xl font-extrabold heading-gradient mb-2 ${language === 'ar' ? 'py-4' : ''}`}>
            {t.heading}
          </h1>
          <p className="text-[#180248] font-medium text-sm md:text-lg max-w-2xl mx-auto">
            {t.paragraph}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          {perkList.map((perk, index) => (
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
              <p className="text-[#180248] text-sm md:text-base">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}