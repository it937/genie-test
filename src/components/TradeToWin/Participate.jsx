"use client"
import Link from 'next/link'
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/ParticipateTranslations'

const cards = [
  { id: "activity", titleKey: "activity", descKey: "activityDesc", icon: "/Rewards/active.png" },
  { id: "conditions", titleKey: "conditions", descKey: "conditionsDesc", icon: "/Rewards/contract.png" },
  { id: "withdrawals", titleKey: "withdrawals", descKey: "withdrawalsDesc", icon: "/Rewards/money-withdraw.png" },
  { id: "participation", titleKey: "participation", descKey: "participationDesc", icon: "/Rewards/people.png" },
  { id: "instruments", titleKey: "instruments", descKey: "instrumentsDesc", icon: "/Rewards/economic.png" },
]

export default function PortfolioSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[60px] p-8 md:p-12" style={{ backgroundColor: "#e6e6e6" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center md:mb-16 max-w-xl mx-auto"
          >
            <h2 className="mb-4 text-2xl font-extrabold md:text-3xl text-[#180248]">
              {t.title}
            </h2>
            <p className="mx-auto max-w-3xl text-base text-[#180248] md:text-lg">
              {t.subtitle}
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {cards.slice(0, 4).map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative cursor-pointer overflow-hidden rounded-[30px] p-8 transition-all duration-300 shadow-lg hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg, #260058 35%, #6b02b4 70%, #260058 90%)" }}
              >
                <motion.img
                  src={card.icon}
                  alt={t[card.titleKey]}
                  className="absolute right-6 top-6 h-12 w-12 md:right-8 md:top-8 md:h-18 md:w-18 z-10 brightness-0 invert"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                />

                <div className="pr-16 md:pr-20 pt-16 justify-end items-start flex flex-col h-full">
                  <h3 className="mb-1 text-lg font-bold md:text-xl text-white">
                    {t[card.titleKey]}
                  </h3>
                  <p className="text-sm text-white">
                    {t[card.descKey]}
                  </p>
                </div>

                <motion.div className="absolute inset-0 bg-white" initial={{ opacity: 0 }} whileHover={{ opacity: 0.1 }} />
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex justify-center md:mt-8 lg:mt-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative w-full cursor-pointer overflow-hidden rounded-[30px] p-8 transition-all duration-300 shadow-lg hover:shadow-2xl"
              style={{ background: "linear-gradient(135deg, #260058 35%, #6b02b4 70%, #260058 90%)" }}
            >
              <motion.img
                src={cards[4].icon}
                alt={[cards[4].titleKey]}
                className="absolute right-6 top-6 h-12 w-12 md:right-8 md:top-8 md:h-16 md:w-16 z-10 brightness-0 invert"
                whileHover={{ scale: 1.15, rotate: 5 }}
              />

              <div className="pr-16 pt-16 md:pr-20">
                <h3 className="mb-3 text-lg font-bold md:text-xl text-white">
                  {t[cards[4].titleKey]}
                </h3>
                <p className="text-sm text-white">
                  {t[cards[4].descKey]}
                </p>
              </div>

              <motion.div className="absolute inset-0 bg-white" initial={{ opacity: 0 }} whileHover={{ opacity: 0.1 }} />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='mt-10 flex justify-center md:mt-12'
          >
            <Link
              href='/pdf/Trade-To-Win.pdf'
              rel='noopener noreferrer'
              target='_blank'
              className='cta inline-block rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 md:px-10 md:text-lg'
            >
              {t.cta}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
