"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const MotionLink = motion(Link)
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/PortfolioSectionTranslations'

const TABS = [
  {
    id: "forex",
    labelKey: "forexTab",
    descKey: "forexDesc",
    image: "/homepage/Homepage-Option-2-13.webp",
  },
  {
    id: "metals",
    labelKey: "metalsTab",
    descKey: "metalsDesc",
    image: "/homepage/Homepage-Option-2-14.webp",
  },
  {
    id: "indices",
    labelKey: "indicesTab",
    descKey: "indicesDesc",
    image: "/homepage/Homepage-Option-2-15.webp",
  },
  {
    id: "shares",
    labelKey: "sharesTab",
    descKey: "sharesDesc",
    image: "/homepage/Homepage-Option-2-16.webp",
  },
  {
    id: "commodities",
    labelKey: "commoditiesTab",
    descKey: "commoditiesDesc",
    image: "/homepage/Homepage-Option-2-17.webp",
  },
]

export default function PortfolioSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const [activeTab, setActiveTab] = useState("forex")
  const isArabic = language === 'ar'

  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0]

  const tabButtonClass = (isActive) =>
    `rounded-xl font-bold transition-all duration-300 ${
      isActive
        ? "bg-[#d4d1fc] text-[#180248] shadow-sm"
        : "bg-[#f0f0f0] text-[#180248]/45 hover:bg-[#e8e8e8] hover:text-[#180248]/65"
    }`

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className={`heading-gradient mb-4 text-2xl font-extrabold md:text-3xl  ${isArabic ? 'py-4' : ''}`}>
            {t.title}
          </h2>
          <p className="mx-auto max-w-3xl text-base text-[#180248]/80 md:text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="-mx-4 mb-10 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label={t.title}
        >
          <div className="flex w-max gap-2">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 whitespace-nowrap px-5 py-2.5 text-sm ${tabButtonClass(isActive)}`}
                >
                  {t[tab.labelKey]}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Desktop: equal-width grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 hidden w-full max-w-4xl grid-cols-5 gap-3 md:mb-14 md:grid"
          role="tablist"
          aria-label={t.title}
        >
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-2 py-3 text-center text-base ${tabButtonClass(isActive)}`}
              >
                {t[tab.labelKey]}
              </button>
            )
          })}
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isArabic ? -20 : 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className={`${isArabic ? "text-right" : "text-left"}`}
            >
              <h3 className="mb-4 text-2xl font-normal text-[#180248]/80 md:text-3xl">
                {t.investIn}{" "}
                <span className={`font-extrabold heading-gradient ${isArabic ? "py-8" : ""} `}>{t[active.labelKey]}</span>
              </h3>
              <p className="max-w-lg text-base leading-relaxed text-[#180248]/75 md:text-lg">
                {t[active.descKey]}
              </p>
              <div className={`mt-8 ${isArabic ? "flex justify-start" : ""}`}>
                <MotionLink
                  href="https://client.geniefx.com/register-live-trading-account-F1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full !px-12 font-semibold text-white text-sm cta"
                  whileHover={{
                    scale: 1.05,
                    filter: "brightness(1.15)",
                    boxShadow: "0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(34,211,238,0.8), 0 0 30px rgba(113,2,186,0.7), inset 0 0 40px rgba(139,92,246,0.8)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {t.startNow}
                </MotionLink>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative flex h-[260px] w-full items-center justify-center sm:h-[300px] md:h-[340px] lg:h-[380px] lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={active.image}
                  alt={`${t.investIn} ${t[active.labelKey]}`}
                  width={640}
                  height={480}
                  className="max-h-full max-w-full object-contain drop-shadow-lg"
                  priority={activeTab === "forex"}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
