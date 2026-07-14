"use client"

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Market/WhyTradeWithGenieTranslations'

export default function LiquidityPool() {
  const { language } = useLanguage()
  const [visibleCards, setVisibleCards] = useState(new Set())
  const observerRef = useRef(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const t = translations[language]

  const items = [
    { 
      value: t.trustedTransparency, 
      label: t.trustedTransparencyDesc, 
      iconSrc: "/commodities/Commodities-04.svg", 
      iconAlt: "Trusted Transparency icon",
      gradient: "from-blue-500 to-indigo-600"
    },
    { 
      value: t.multilingualSupport, 
      label: t.multilingualSupportDesc, 
      iconSrc: "/commodities/Commodities-05.svg", 
      iconAlt: "Multilingual Support icon",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      value: t.eliteTrading, 
      label: t.eliteTradingDesc, 
      iconSrc: "/commodities/Commodities-06.svg", 
      iconAlt: "Elite Trading icon",
      gradient: "from-indigo-500 to-purple-600"
    },
    { 
      value: t.experience, 
      label: t.experienceDesc, 
      iconSrc: "/commodities/Commodities-07.svg", 
      iconAlt: "10 Years of Experience icon",
      gradient: "from-violet-500 to-indigo-600"
    },
    { 
      value: t.advancedProtection, 
      label: t.advancedProtectionDesc, 
      iconSrc: "/commodities/Commodities-08.svg", 
      iconAlt: "Advanced Protection icon",
      gradient: "from-fuchsia-500 to-purple-600"
    },
    { 
      value: t.personalizedTrading, 
      label: t.personalizedTradingDesc, 
      iconSrc: "/commodities/Commodities-09.svg", 
      iconAlt: "Personalized Trading icon",
      gradient: "from-pink-500 to-rose-600"
    },
  ]

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index)
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    const cardElements = document.querySelectorAll('[data-card]')
    cardElements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-8 transform">
      <header className="mb-12 md:mb-8 text-center">
        <h2
          className={`text-balance font-extrabold tracking-tight text-2xl md:text-3xl heading-gradient animate-fade-in  ${language === 'ar' ? 'py-4' : ''}`}
          style={{
            animationDelay: '0.1s',
            animationFillMode: 'both'
          }}
        >
          {t.heading}
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
        {items.map((card, idx) => (
          <StatCard
            key={idx}
            index={idx}
            value={card.value}
            label={card.label}
            iconSrc={card.iconSrc}
            iconAlt={card.iconAlt}
            gradient={card.gradient}
            isVisible={visibleCards.has(idx)}
            isHovered={hoveredCard === idx}
            onHover={() => setHoveredCard(idx)}
            onLeave={() => setHoveredCard(null)}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}

function StatCard({ value, label, iconSrc, iconAlt, gradient, isVisible, index, isHovered, onHover, onLeave }) {
  return (
    <div 
      data-card
      data-index={index}
      className={`group relative rounded-2xl md:rounded-3xl min-h-[160px] md:min-h-[180px] transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Background with gradient border effect */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-50 transition-all duration-300 group-hover:shadow-2xl">
        {/* Animated gradient border */}
        <div 
          className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#180248] to-[#7102ba] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />
      </div>

      {/* Shine effect overlay */}
      <div 
        className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden pointer-events-none"
      >
        <div 
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
          style={{
            transform: 'translateX(-100%) skewX(-15deg)',
            animation: isHovered ? 'shine 1.5s ease-in-out' : 'none',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full p-5 md:p-6 lg:p-7 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
        {/* Icon */}
        <div className="flex justify-end mb-3 md:mb-4">
          <div 
            className={`relative h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl bg-gradient-to-br from-[#180248] to-[#7102ba] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
            style={{
              animation: isHovered ? 'float 2s ease-in-out infinite' : 'none'
            }}
          >
            {/* Glow effect behind icon */}
            <div 
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#180248] to-[#7102ba] blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              style={{
                animation: isHovered ? 'pulse-glow 2s ease-in-out infinite' : 'none'
              }}
            />
            
            {iconSrc && (
              <img
                src={iconSrc}
                alt={iconAlt}
                className="relative h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 object-contain transition-transform duration-500 group-hover:scale-110 filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Cpath d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/%3E%3C/svg%3E';
                }}
              />
            )}
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="font-bold text-xl md:text-xl lg:text-xl text-indigo-950 mb-2 transition-colors duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600">
            {value}
          </h3>
          <p className="text-sm md:text-md text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
            {label}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
      `}</style>
    </div>
  )
}