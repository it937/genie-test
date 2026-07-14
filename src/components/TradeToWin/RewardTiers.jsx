'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import translations from '@/translations/TradeToWin/RewardTiersTranslations'

function getVisibleCards(width) {
  if (width >= 1024) return 3
  if (width >= 768) return 2
  return 1
}

export default function RewardTiers() {
  const { language } = useLanguage()
  const isRTL = language === 'ar'
  const t = translations[language] || translations.en
  const [visibleCards, setVisibleCards] = useState(3)
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isAnimating, setIsAnimating] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [hasPreloadedRewards, setHasPreloadedRewards] = useState(false)

  const rewards = t.rewards
  const loopedRewards = [
    ...rewards.slice(-visibleCards),
    ...rewards,
    ...rewards.slice(0, visibleCards)
  ]

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = getVisibleCards(window.innerWidth)
      setVisibleCards(nextVisibleCards)
      setIsAnimating(false)
      setCurrentIndex(nextVisibleCards)
    }

    updateVisibleCards()
    window.addEventListener('resize', updateVisibleCards)

    return () => window.removeEventListener('resize', updateVisibleCards)
  }, [t.rewards.length])

  const handlePrev = () => {
    setIsAnimating(true)
    setCurrentIndex(prev => prev + (isRTL ? 1 : -1))
  }

  const handleNext = () => {
    setIsAnimating(true)
    setCurrentIndex(prev => prev + (isRTL ? -1 : 1))
  }

  const handleTransitionEnd = () => {
    if (currentIndex < visibleCards) {
      setIsAnimating(false)
      setCurrentIndex(currentIndex + rewards.length)
      return
    }

    if (currentIndex >= rewards.length + visibleCards) {
      setIsAnimating(false)
      setCurrentIndex(currentIndex - rewards.length)
    }
  }

  const preloadRewardImages = () => {
    if (hasPreloadedRewards || typeof window === 'undefined') return

    rewards.forEach(reward => {
      const image = new window.Image()
      image.src = reward.image
    })

    setHasPreloadedRewards(true)
  }

  const handleToggleRewards = () => {
    preloadRewardImages()

    setIsExpanded(prev => {
      const nextExpanded = !prev

      if (nextExpanded) {
        setHasOpened(true)
        setIsAnimating(false)
        setCurrentIndex(visibleCards)
      }

      return nextExpanded
    })
  }

  return (
    <section className='bg-white px-4 py-12 md:px-6 md:py-16' dir={isRTL ? 'rtl' : 'ltr'}>
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='mb-8 text-center md:mb-12'
        >
          <h2 className={`mb-4 text-3xl font-extrabold heading-gradient md:text-4xl ${isRTL ? 'py-2 leading-relaxed' : 'leading-tight'}`}>
            {t.title}
          </h2>
          <p className='mx-auto max-w-4xl text-base font-medium text-[#180248] md:text-lg'>
            {t.subtitle}
          </p>
        </motion.div>

        <div className='overflow-hidden rounded-[32px] border border-[#7c4ab0]/40 bg-[linear-gradient(135deg,#180248_0%,#4b0c88_45%,#7102ba_100%)] shadow-[0_18px_48px_rgba(24,2,72,0.22)]'>
          <div className='flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8'>
            <div className='max-w-3xl'>
              <p className='mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm'>
                {rewards.length} {t.rewardMilestones}
              </p>
              <p className='text-sm leading-7 text-white/80 md:text-base'>
                {t.subtitle}
              </p>
            </div>

            <button
              type='button'
              onClick={handleToggleRewards}
              onMouseEnter={preloadRewardImages}
              onFocus={preloadRewardImages}
              onTouchStart={preloadRewardImages}
              aria-expanded={isExpanded}
              aria-controls='reward-tiers-carousel'
              className='inline-flex items-center justify-center gap-3 self-start rounded-full bg-gradient-to-r from-[#180248] to-[#7102ba] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(113,2,186,0.25)] transition-transform duration-300 hover:scale-[1.02] md:self-center'
            >
              <span>{isExpanded ? t.hideRewards : t.seeRewards}</span>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                className={`h-5 w-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                aria-hidden='true'
              >
                <path d='M6 9L12 15L18 9' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
          </div>

          <div id='reward-tiers-carousel' className='grid'>
            <div className='overflow-hidden'>
              {(hasOpened || isExpanded) && (
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className='overflow-hidden'
                >
                  <div className='border-t border-[#e5e1ef] bg-[#f5f5f5] px-4 py-6 md:px-8 md:py-8'>
                  <div className='relative md:px-14'>
                    <div className='absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:block'>
                      <button
                        type='button'
                        onClick={handlePrev}
                        aria-label={t.previous}
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#180248] to-[#7102ba] text-white shadow-[0_8px_24px_rgba(113,2,186,0.28)] transition-transform duration-300 hover:scale-105'
                      >
                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
                          <path d='M15 6L9 12L15 18' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                      </button>
                    </div>

                    <div className='absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:block'>
                      <button
                        type='button'
                        onClick={handleNext}
                        aria-label={t.next}
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#180248] to-[#7102ba] text-white shadow-[0_8px_24px_rgba(113,2,186,0.28)] transition-transform duration-300 hover:scale-105'
                      >
                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
                          <path d='M9 6L15 12L9 18' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                      </button>
                    </div>

                    <div className='px-3' dir='ltr'>
                      <div className='overflow-x-hidden py-4'>
                        <div
                          className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}
                          onTransitionEnd={handleTransitionEnd}
                          style={{
                            transform: `translateX(${isRTL ? '' : '-'}${currentIndex * (100 / visibleCards)}%)`,
                            transition: isAnimating ? 'transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                          }}
                        >
                          {loopedRewards.map((reward, index) => (
                            <div
                              key={`${reward.title}-${reward.lots}-${index}`}
                              className='w-full shrink-0 px-3 md:w-1/2 lg:w-1/3'
                            >
                              <div className='flex h-full min-h-[24rem] flex-col rounded-[24px] border border-[#e9defa] bg-white p-5 ring-1 ring-[#7102ba]/10 shadow-[0_2px_8px_rgba(24,2,72,0.06),0_8px_24px_rgba(113,2,186,0.10)] transition-shadow duration-300 hover:shadow-[0_4px_12px_rgba(24,2,72,0.08),0_12px_32px_rgba(113,2,186,0.15)]'>
                                <div className='mb-5 flex h-56 items-center justify-center overflow-hidden rounded-[18px] bg-white/95'>
                                  <Image
                                    src={reward.image}
                                    alt={reward.title}
                                    width={560}
                                    height={560}
                                    className='h-full w-full object-contain'
                                  />
                                </div>

                                <div className='mt-auto text-[#180248]'>
                                  <h3 className={`mb-4 block truncate text-xl font-extrabold md:text-2xl ${isRTL ? 'py-2 text-right' : 'text-left'}`}>
                                    {reward.title}
                                  </h3>

                                  <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`leading-tight ${isRTL ? 'text-left' : 'text-right'}`}>
                                      <span className='inline-block text-xl font-extrabold md:text-2xl'>{reward.lots}</span>
                                      <br />
                                      <span className='inline-block text-base font-medium text-[#180248]/75 md:text-lg'>{t.tradeVolume}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='mt-6 flex items-center justify-center gap-4 md:hidden'>
                      <button
                        type='button'
                        onClick={handlePrev}
                        aria-label={t.previous}
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#180248] to-[#7102ba] text-white shadow-[0_8px_24px_rgba(113,2,186,0.28)]'
                      >
                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
                          <path d='M15 6L9 12L15 18' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                      </button>

                      <button
                        type='button'
                        onClick={handleNext}
                        aria-label={t.next}
                        className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#180248] to-[#7102ba] text-white shadow-[0_8px_24px_rgba(113,2,186,0.28)]'
                      >
                        <svg viewBox='0 0 24 24' fill='none' className='h-5 w-5' aria-hidden='true'>
                          <path d='M9 6L15 12L9 18' stroke='currentColor' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
                        </svg>
                      </button>
                    </div>
                  </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <div className='mt-10 flex justify-center md:mt-12'>
          <Link
            href='https://client.geniefx.com/register-live-trading-account-F1'
            target='_blank'
            className='cta inline-flex items-center justify-center rounded-full text-center'
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
