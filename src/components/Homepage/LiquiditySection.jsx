"use client"
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/LiquiditySectionTranslations'

const stats = [
  { label: "products", value: "250+" },
  { label: "spread", value: "0" },
  { label: "leverage", value: "1:500" },
  { label: "hours", value: "24/7" },
]

export default function LiquidityStatsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <section className="w-full bg-white py-12 md:py-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-balance text-2xl font-extrabold heading-gradient md:text-3xl mx-4 md:mx-40 ${language === 'ar' ? 'py-4' : ''}`}>
            {t.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
              className="rounded-2xl bg-[#f5f5f5] px-8 py-10 text-center md:text-start cursor-pointer transition-transform"
            >
              <p className="text-sm md:text-lg font-medium text-[#180248] mb-2">
                {t[stat.label]}
              </p>
              <p className="text-4xl md:text-5xl font-extrabold text-[#180248]">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}