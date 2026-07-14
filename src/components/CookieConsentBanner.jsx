'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {
  COOKIE_CONSENT_ACCEPTED,
  clearStoredCookieConsent,
  getStoredCookieConsent,
  persistCookieConsent
} from '@/lib/cookieConsent'

const translations = {
  en: {
    badge: 'Privacy & Cookies',
    title: 'We use cookies to improve your experience.',
    description:
      'By continuing to use Genie, you agree to our use of cookies for site performance, preferences, and analytics.',
    accept: 'Accept Cookies',
    reject: 'Reject',
    learnMore: 'Read Policy'
  },
  ar: {
    badge: 'الخصوصية والكوكيز',
    title: 'نستخدم الكوكيز لتحسين تجربتك.',
    description:
      'من خلال الاستمرار في استخدام Genie، فإنك توافق على استخدامنا للكوكيز لأداء الموقع والتفضيلات والتحليلات.',
    accept: 'قبول الكوكيز',
    reject: 'رفض',
    learnMore: 'قراءة السياسة'
  }
}

export default function CookieConsentBanner ({ consent, onConsentChange }) {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedConsent = consent ?? getStoredCookieConsent()
    setIsVisible(savedConsent === null)
  }, [consent])

  const saveConsent = value => {
    persistCookieConsent(value)
    setIsVisible(false)
    onConsentChange?.(value)
  }

  const rejectConsent = () => {
    clearStoredCookieConsent()
    setIsVisible(false)
    onConsentChange?.(null)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className='fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] sm:bottom-6 sm:left-12 sm:translate-x-0'
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          <div className='relative w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-[24px] border border-white/10 bg-[#0A1733]/94 text-white shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:w-full'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.16),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(113,2,186,0.24),_transparent_34%),linear-gradient(135deg,_rgba(10,23,51,0.96),_rgba(24,2,72,0.92))]' />

            <div className='relative flex flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5'>
              <div className='flex items-start gap-3'>
                <div className='mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10'>
                  <ShieldCheck className='h-4 w-4 text-[#D4AF37]' />
                </div>

                <div>
                  <div className='mb-1 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]'>
                    <span>{t.badge}</span>
                  </div>
                  <p className='text-sm font-semibold leading-5 text-white'>
                    {t.title}
                  </p>
                  <p className='mt-1 text-sm leading-5 text-white/75'>
                    {t.description}
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-2 border-t border-white/10 pt-3'>
                <button
                  type='button'
                  onClick={() => saveConsent(COOKIE_CONSENT_ACCEPTED)}
                  className='w-full rounded-full bg-gradient-to-r from-[#180248] to-[#7102ba] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_26px_rgba(113,2,186,0.3)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_14px_30px_rgba(113,2,186,0.42)]'
                >
                  {t.accept}
                </button>

                <button
                  type='button'
                  onClick={rejectConsent}
                  className='w-full rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white/90 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.1] hover:text-white'
                >
                  {t.reject}
                </button>
                <Link
                  href='/policies/cookies-policy'
                  className='flex w-full items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/8 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#F2D98B] transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/12 hover:text-white'
                >
                  {t.learnMore}
                </Link>

                
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
