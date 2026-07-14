'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/AboutUs/MissionVisionTranslations'

export default function TradingBenefits() {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = [
    {
      title: t.missionTitle,
      description: t.missionDescription,
      align:  language === 'ar' ? "right" : "left",
    },
    {
      title: t.visionTitle,
      description: t.visionDescription,
      align: language === 'ar' ? "right" : "left",
    }
  ];

  return (
    <section className="w-full px-4 sm:px-6 py-10 md:py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-10 md:py-8 bg-white rounded-[30px] sm:rounded-[40px]">

        {/* Cards */}
        <div className="space-y-4 md:space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: benefit.align === "left" ? -50 : 50,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="relative"
            >
              <div className="flex justify-center">
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: benefit.align === "left" ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`absolute top-5 ${
                    benefit.align === "right"
                      ? "right-0 md:right-0"
                      : "left-0 md:left-0"
                  } z-10`}
                >
                  <div
                    className={`${
                      benefit.align === "right"
                        ? "rounded-l-xl rounded-tr-2xl pl-10 pr-6 md:pl-16 md:pr-10 bg-gradient-to-r from-[#180248] to-[#7102ba]"
                        : "rounded-r-2xl rounded-tl-2xl pr-10 pl-6 md:pr-16 md:pl-10 bg-gradient-to-r from-[#7102ba] to-[#180248]"
                    } py-3 shadow-md whitespace-nowrap`}
                  >
                    <h3 className="banner-heading-gradient font-extrabold text-xl md:text-2xl">
                      {benefit.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Description Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: index * 0.25 }}
                  className="max-w-5xl w-full pt-10 sm:pt-12"
                >
                  <div className="bg-[#f4f4f4] min-h-[150px] rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-8 sm:py-10 shadow-lg">
                    <p
                      className={`text-black text-base md:text-lg leading-relaxed font-medium ${
                        benefit.align === "right" ? "text-right" : "text-left"
                      } ${language === 'ar' ? 'md:leading-loose mt-2' : ''}`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}