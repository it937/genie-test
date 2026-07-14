"use client"
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Liquidity/QuickStepsTranslations'

export default function QuickSteps() {
  const { language } = useLanguage()
  const t = translations[language]
  const [visibleSteps, setVisibleSteps] = useState(new Set())
  const observerRef = useRef(null)
  const handleScrollToForm = () => {
    const leadForm = document.getElementById('liquidity-lead-form')

    if (leadForm) {
      leadForm.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const steps = [
    { number: "1", title: t.step1, description: t.step1Desc, iconSrc: "/commodities/Commodities-11.svg", iconAlt: "Register icon", align: "left" },
    { number: "2", title: t.step2, description: t.step2Desc, iconSrc: "/commodities/Commodities-12.svg", iconAlt: "Fund icon", align: "right" },
    { number: "3", title: t.step3, description: t.step3Desc, iconSrc: "/Liquidity/Liquidity.svg", iconAlt: "Trade icon", align: "left" },
    { number: "4", title: t.step4, description: t.step4Desc, iconSrc: "/commodities/Commodities-14.svg", iconAlt: "Withdraw icon", align: "right" },
  ]

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleSteps((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 }
    )

    const stepElements = document.querySelectorAll('[data-step]')
    stepElements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-8" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <header className="text-center mb-8">
        <h2 className={`text-3xl font-extrabold heading-gradient animate-fade-in ${language === 'ar' ? 'py-4 leading-relaxed' : ''}`}>
          {t.title}
        </h2>
      </header>

      <div className="space-y-8 sm:space-y-12 lg:space-y-8">
        {steps.map((step, index) => (
          <div
            key={index}
            data-step
            data-index={index}
            className={`flex items-center ${step.align === 'right' ? 'justify-start sm:justify-end' : 'justify-start'} transition-all duration-700 ${visibleSteps.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className={`flex items-center gap-4 sm:gap-6 ${step.align === 'right' ? 'flex-row-reverse sm:flex-row' : 'flex-row'} w-full sm:w-auto`}>
              <div className="flex-shrink-0 relative">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold heading-gradient transition-all duration-500" style={{ transform: visibleSteps.has(index) ? 'scale(1)' : 'scale(0.8)' }}>
                  {step.number}
                </span>
                <span className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl heading-gradient font-bold transition-all duration-700" style={{ opacity: visibleSteps.has(index) ? 1 : 0, transform: visibleSteps.has(index) ? 'scale(1)' : 'scale(1.2)' }}>
                  {step.number}
                </span>
              </div>

              <div className="group relative bg-[#f5f5f5] rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-5 sm:py-4 shadow-lg hover:shadow-xl flex items-center gap-3 sm:gap-4 w-full sm:min-w-[400px] lg:min-w-[500px] transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ transform: 'translateX(-100%)', animation: visibleSteps.has(index) ? 'shine 3s infinite' : 'none' }} />

                <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <img src={step.iconSrc} alt={step.iconAlt} className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>

                <div className="relative flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-indigo-950 mb-0 transition-colors duration-300 group-hover:text-indigo-700">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.button
          type='button'
          onClick={handleScrollToForm}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12 px-12 py-3 rounded-full text-white cta shadow-xl hover:shadow-2xl transition-all"
        >
          {t.becomeIB}
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes shine { 0% { transform: translateX(-100%); } 50%, 100% { transform: translateX(100%); } }
        @keyframes fade-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </section>
  )
}
