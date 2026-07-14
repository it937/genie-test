'use client'
import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Homepage/TrustedByTranslations'

const TrustedBy = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const partners = [
    { src: "/homepage/Homepage-11.svg", alt: "Mastercard" },
    { src: "/homepage/Homepage-12.svg", alt: "Partner 2" },
    { src: "/homepage/Homepage-13.svg", alt: "Visa" },
    { src: "/homepage/Homepage-14.svg", alt: "Partner 3" },
    { src: "/homepage/Homepage-15.svg", alt: "Partner 4" }
  ]

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white -mt-0 mb-16 w-full overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl font-bold heading-gradient py-1 text-center">{t.title}</h2>
        <p className="mt-0 text-lg text-center font-medium max-w-2xl mb-8 px-4">
          {t.description}
        </p>

        <div className="hidden md:flex justify-center space-x-40 mt-6">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              className="w-16 h-16 object-contain animate-float opacity-0"
              style={{ animationDelay: `${index * 0.2}s`, animationDuration: `${3 + (index * 0.2)}s` }}
            />
          ))}
        </div>

        <div className="flex md:hidden flex-col items-center space-y-6 mt-6">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              loading="lazy"
              className="w-16 h-16 object-contain animate-slide-in-mobile opacity-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); opacity: 1; } 50% { transform: translateY(-15px); } }
        @keyframes slideInMobile { 0% { opacity: 0; transform: translateX(-50px); } 100% { opacity: 1; transform: translateX(0); } }
        .animate-float { animation: float ease-in-out infinite; animation-fill-mode: forwards; }
        .animate-slide-in-mobile { animation: slideInMobile 0.6s ease-out forwards; }
        .animate-float:hover { animation-play-state: paused; transform: scale(1.15); transition: transform 0.3s ease; }
      `}</style>
    </div>
  )
}

export default TrustedBy