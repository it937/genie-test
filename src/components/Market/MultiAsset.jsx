"use client";

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/Market/MultiAssetTranslations'

export default function MultiAssetPortfolio() {
  const { language } = useLanguage()
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const t = translations[language]

  const assets = [
    { title: t.shares, imageSrc: "/commodities/Commodities-15.svg", imageAlt: "Shares icon" },
    { title: t.metals, imageSrc: "/commodities/Commodities-16.svg", imageAlt: "Metals icon" },
    { title: t.indices, imageSrc: "/commodities/Commodities-19.svg", imageAlt: "Indices icon" },
    { title: t.forex, imageSrc: "/commodities/Commodities-17.svg", imageAlt: "Forex icon" },
    { title: t.commodities, imageSrc: "/commodities/Commodities-18.svg", imageAlt: "Commodities icon" },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cardElements = document.querySelectorAll('[data-asset-card]');
    cardElements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="w-full flex justify-center" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-6xl transform  transition-transform duration-500 origin-top">
        <div className="w-full mx-auto px-4 sm:px-6 py-6  text-center">
          <header className="mb-12 md:mb-10">
            <h2
              className={`text-2xl md:text-3xl font-extrabold tracking-tight animate-fade-in heading-gradient ${language === 'ar' ? 'py-4' : ''}`}
              style={{
                animationDelay: '0.1s',
                animationFillMode: 'both',
              }}
            >
              {t.heading}
            </h2>
          </header>

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {/* First row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {assets.slice(0, 3).map((asset, index) => (
                <AssetCard
                  key={index}
                  asset={asset}
                  index={index}
                  isVisible={visibleCards.has(index)}
                  isHovered={hoveredCard === index}
                  onHover={() => setHoveredCard(index)}
                  onLeave={() => setHoveredCard(null)}
                />
              ))}
            </div>

            {/* Second row */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full max-w-3xl">
                {assets.slice(3).map((asset, index) => (
                  <AssetCard
                    key={index + 3}
                    asset={asset}
                    index={index + 3}
                    isVisible={visibleCards.has(index + 3)}
                    isHovered={hoveredCard === index + 3}
                    onHover={() => setHoveredCard(index + 3)}
                    onLeave={() => setHoveredCard(null)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
      `}</style>
    </section>
  );
}



function AssetCard({ asset, index, isVisible, isHovered, onHover, onLeave }) {
  return (
    <div
      data-asset-card
      data-index={index}
      className={`group relative transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Card container with overflow for effects */}
      <div className="relative rounded-2xl sm:rounded-3xl min-h-[180px] md:min-h-[180px] overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#7102ba] to-[#180248] transition-opacity duration-500" />
        
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9333ea] via-[#7102ba] to-[#4c1d95] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated gradient border */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(168, 85, 247, 0.4) 100%)',
            backgroundSize: '200% 200%',
            animation: isHovered ? 'gradient-shift 3s ease infinite' : 'none',
          }}
        />

        {/* Shine effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-700"
          style={{
            transform: 'translateX(-100%) skewX(-15deg)',
            animation: isHovered ? 'shine 2s ease-in-out infinite' : 'none',
          }}
        />

        {/* Glow effect */}
        <div 
          className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
          style={{
            animation: isHovered ? 'pulse-glow 2s ease-in-out infinite' : 'none'
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center p-6 sm:p-8 h-full min-h-[200px] sm:min-h-[220px] transition-transform duration-500 group-hover:-translate-y-2">
          {/* Icon container with floating animation */}
          <div 
            className="relative mb-4 sm:mb-6 transition-transform duration-500"
            style={{
              animation: isHovered ? 'float-icon 3s ease-in-out infinite' : 'none'
            }}
          >
            {/* Icon glow */}
            <div 
              className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%)',
                animation: isHovered ? 'pulse-glow 2s ease-in-out infinite' : 'none'
              }}
            />
            
            <img
              src={asset.imageSrc}
              alt={asset.imageAlt}
              className="relative w-20 h-20 md:w-20 md:h-20 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 filter drop-shadow-2xl "
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3Cpath d="M12 6v6l4 2"/%3E%3C/svg%3E';
              }}
            />
          </div>

          {/* Title */}
          <h3
            className="relative text-white text-2xl font-bold tracking-wide transition-all duration-500 group-hover:scale-110"
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            {asset.title}
          </h3>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          50%, 100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes float-icon {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}