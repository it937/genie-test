'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/AboutUs/StandOutTranslations'

const StandOut = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      title: t.dedicationTitle,
      description: t.dedicationDescription,
      image: "/About-Us/About-Us-08.svg",
      alignment: "left",
    },
    {
      title: t.regulatedTitle,
      description: t.regulatedDescription,
      image: "/About-Us/About-Us-07.svg",
      alignment: "right",
    },
    {
      title: t.customerOrientedTitle,
      description: t.customerOrientedDescription,
      image: "/About-Us/About-Us-09.svg",
      alignment: "left",
    },
    {
      title: t.longTermTitle,
      description: t.longTermDescription,
      image: "/About-Us/About-Us-06.svg",
      alignment: "right",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section className="w-full py-8 bg-white" >
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-4"
      >
        <h1 className={`text-3xl mx-10 md:mx-0 font-extrabold heading-gradient mb-4 ${language === 'ar' ? 'py-4 leading-relaxed' : ''} `}>
          {t.heading}
        </h1>
        <p className="text-lg font-medium mt-4 max-w-md mx-auto">
          {t.paragraph}
        </p>
      </motion.header>

      {/* DESKTOP */}
      <div className="hidden md:block max-w-5xl mx-auto space-y-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex items-center h-46 bg-[#f6f6f6] shadow-lg rounded-[30px] p-0`}
            style={{
              flexDirection:
                feature.alignment === "left" ? "row" : "row-reverse",
            }}
          >
            <motion.div
              className={`flex-shrink-0 w-36 h-32 ${
                feature.alignment === "left"
                  ? "rounded-r-[100px]"
                  : "rounded-l-[100px]"
              }`}
              variants={imageVariants}
              whileHover="hover"
              style={{
                background:
                  feature.alignment === "left"
                    ? "linear-gradient(to right, #7102ba, #180248)"
                    : "linear-gradient(to right, #180248, #7102ba)",
                height: "70%",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className={`w-5/10 h-auto object-contain mx-auto ${
                  feature.alignment === "left"
                    ? "ml-7 mt-7"
                    : "mt-10 mr-7"
                }`}
              />
            </motion.div>

            <motion.div
              className={`${
                feature.alignment === "left"
                  ? "mx-8 text-left"
                  : "mx-8 text-right"
              } flex-grow`}
              variants={textVariants}
            >
              <h3 className={`text-2xl font-bold text-[#460c63] ${language === 'ar' ? 'py-4' : ''} `}>
                {feature.title}
              </h3>
              <p className={`text-black font-medium mt-2 ${language === 'ar' ? 'leading-loose' : ''} `}>{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="block md:hidden max-w-md mx-auto space-y-6 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col items-start bg-[#f5f5f5] border border-[#180248] rounded-[20px] p-4"
          >
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full rounded-[14px] flex items-center justify-center mb-3"
              style={{
                background:
                  feature.alignment === "left"
                    ? "linear-gradient(to right, #7102ba, #180248)"
                    : "linear-gradient(to right, #180248, #7102ba)",
                height: 80,
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="h-12 object-contain"
              />
            </motion.div>

            <motion.div variants={textVariants} className="w-full">
              <h3 className="text-lg font-extrabold text-[#460c63] mb-1">
                {feature.title}
              </h3>
              <p className="text-black font-medium text-sm">
                {feature.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StandOut;