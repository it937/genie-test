"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/MagicalTradingMT5Translations'

export default function AppDownloadSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.div
        className="max-w-6xl mx-auto md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="relative w-full rounded-3xl overflow-hidden flex items-center h-[400px] md:h-[360px] lg:h-[420px]"
          variants={containerVariants}
        >
          <div className="absolute inset-0">
            <Image
              src="/homepage/Homepage-New-Design-14.webp"
              alt="banner background"
              fill
              className={`object-cover ${language === 'ar' ? '-scale-x-100' : ''}`}
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0" />

          <div className="relative w-full px-6 md:px-12 py-8 md:py-12">
            <div className="mx-auto max-w-3xl md:max-w-none md:ml-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <motion.div className={`w-full md:w-1/2 text-center   ${language === 'ar' ? 'md:text-right' : 'md:text-left'}`} variants={containerVariants}>
                  <motion.h2
                    className={` text-2xl md:text-3xl font-extrabold banner-heading-gradient mb-4 md:mb-6 leading-tight text-white mr-0  ${language === 'ar' ? 'py-4' : 'md:mr-32'}`}
                    variants={containerVariants}
                  >
                    {t.title}
                  </motion.h2>

                  <motion.p
                    className="text-sm md:text-md text-white/90 mb-6 md:mb-8 leading-relaxed"
                    variants={containerVariants}
                  >
                    {t.description}
                  </motion.p>

                  <motion.div className="flex items-center justify-center md:justify-start gap-4" variants={containerVariants}>
                    <motion.a
                      href="https://download.terminal.free/cdn/mobile/mt5/android?server=Genie-FX"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover="hover"
                      className="inline-flex"
                    >
                      <Image src="/mt5/Platform-MT5-curved-14.svg" alt="Google Play" width={160} height={48} />
                    </motion.a>

                    <motion.a
                      href="https://download.terminal.free/cdn/mobile/mt5/ios?server=Genie-FX"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover="hover"
                      className="inline-flex"
                    >
                      <Image src="/mt5/Platform-MT5-curved-15.svg" alt="App Store" width={160} height={48} />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}