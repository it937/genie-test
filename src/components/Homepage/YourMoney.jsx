'use client'
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/YourMoneyTranslations'

const MotionLink = motion(Link)

const PHONE_IMAGE = "/homepage/Homepage-Option-2-12.webp"

const leftColumnIcons = [
  "/homepage/Homepage-Option-2-06.webp",
  "/homepage/Homepage-Option-2-08.webp",
  "/homepage/Homepage-Option-2-10.webp",
]

const rightColumnIcons = [
  "/homepage/Homepage-Option-2-07.webp",
  "/homepage/Homepage-Option-2-09.webp",
  "/homepage/Homepage-Option-2-11.webp",
]

const ROW_START_CLASSES = ["row-start-1", "row-start-2", "row-start-3"]

function FeatureBlock({ title, description, icon, align, index }) {
  const isEnd = align === "end"

  return (
    <motion.div
      className={`flex max-w-[280px] items-start gap-2.5 sm:max-w-full sm:gap-3 ${isEnd ? "ml-auto flex-row-reverse" : "mr-auto"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className="relative h-10 w-10 shrink-0 sm:h-14 sm:w-14"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={icon}
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-contain"
        />
      </motion.div>

      <div className={`flex flex-col ${isEnd ? "items-end text-end" : "items-start text-start"}`}>
        <h3 className="text-base font-bold leading-snug text-[#180248] md:text-lg">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-[#180248]/80 md:text-[15px]">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default function TradingPlatformFeatures() {
  const { language } = useLanguage()
  const t = translations[language]
  const isArabic = language === 'ar'

  const leftColumn = [
    { title: t.card4Title, description: t.card4Desc, icon: leftColumnIcons[0] },
    { title: t.card5Title, description: t.card5Desc, icon: leftColumnIcons[1] },
    { title: t.card6Title, description: t.card6Desc, icon: leftColumnIcons[2] },
  ]

  const rightColumn = [
    { title: t.card1Title, description: t.card1Desc, icon: rightColumnIcons[0] },
    { title: t.card2Title, description: t.card2Desc, icon: rightColumnIcons[1] },
    { title: t.card3Title, description: t.card3Desc, icon: rightColumnIcons[2] },
  ]

  const allFeatures = [...leftColumn, ...rightColumn]

  return (
    <section className="w-full bg-white py-10 md:py-6" dir={isArabic ? 'rtl' : 'ltr'}>
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center">
          <h2 className={`heading-gradient mb-2 text-2xl font-extrabold md:text-3xl ${isArabic ? 'py-4' : ''}`}>
            {t.title}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base text-[#180248] md:mb-14 md:text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Desktop: three-column layout */}
        <div className="relative hidden lg:block" dir="ltr">
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-6/17 z-0 flex h-full -translate-x-1/2"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src={PHONE_IMAGE}
              alt={t.title}
              width={520}
              height={900}
              className="h-full min-h-full w-auto max-w-none object-contain object-center"
              priority
            />
          </motion.div>

          <div className="relative z-10 grid grid-cols-[1fr_minmax(240px,25%)_1fr] grid-rows-3 gap-y-2 py-2 xl:gap-y-20">
            <div className="col-start-2 row-span-3" aria-hidden="true" />
            {leftColumn.map((leftFeature, index) => (
              <React.Fragment key={leftFeature.title}>
                <div
                  className={`col-start-1 ${ROW_START_CLASSES[index]} flex justify-end self-start pr-4 xl:pr-10`}
                >
                  <FeatureBlock
                    {...leftFeature}
                    align="end"
                    index={index}
                  />
                </div>
                <div
                  className={`col-start-3 ${ROW_START_CLASSES[index]} flex justify-start self-start pl-4 xl:pl-10`}
                >
                  <FeatureBlock
                    {...rightColumn[index]}
                    align="start"
                    index={index}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Desktop CTA — centered, after the three-column block */}
        <div className="hidden lg:flex justify-center mt-8">
          <MotionLink
            href="https://client.geniefx.com/register-live-trading-account-F1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full font-semibold text-white text-sm cta"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.15)",
              boxShadow: "0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(34,211,238,0.8), 0 0 30px rgba(113,2,186,0.7), inset 0 0 40px rgba(139,92,246,0.8)",
            }}
          >
            {t.openLiveAccount}
          </MotionLink>
        </div>

        {/* Mobile: stacked feature list */}
        <div className="lg:hidden">
          <div className="mx-auto flex max-w-md flex-col gap-8">
            {allFeatures.map((feature, index) => (
              <FeatureBlock
                key={feature.title}
                {...feature}
                align="start"
                index={index}
              />
            ))}
          </div>

          {/* Mobile CTA — at the end of the component */}
          <div className="mt-8 flex justify-center">
            <MotionLink
              href="https://client.geniefx.com/register-live-trading-account-F1"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full font-semibold text-white text-sm cta"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                filter: "brightness(1.15)",
                boxShadow: "0 0 40px rgba(255,255,255,0.9), 0 0 80px rgba(34,211,238,0.8), 0 0 30px rgba(113,2,186,0.7), inset 0 0 40px rgba(139,92,246,0.8)",
              }}
            >
              {t.openLiveAccount}
            </MotionLink>
          </div>

          {/* <motion.div
            className="relative mx-auto mb-10 w-[200px] sm:w-[280px] mr-34"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={PHONE_IMAGE}
              alt={t.title}
              width={440}
              height={760}
              className="h-auto w-full object-contain drop-shadow-xl"
            />
          </motion.div> */}
        </div>
      </motion.div>
    </section>
  )
}
