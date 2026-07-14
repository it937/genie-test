'use client'

import Script from 'next/script'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/context/LanguageContext'
import {
  COOKIE_CONSENT_ACCEPTED,
  clearClientReadableCookies,
  getStoredCookieConsent
} from '@/lib/cookieConsent'

export default function ClientLayout ({ children }) {
  const pathname = usePathname()
  const [cookieConsent, setCookieConsent] = useState(null)
  const isStandaloneRoute =
    pathname?.startsWith('/admin') ||
    pathname?.startsWith('/ops-pdf-portal') ||
    pathname?.startsWith('/daily-pdf')

  useEffect(() => {
    setCookieConsent(getStoredCookieConsent())
  }, [])

  useEffect(() => {
    if (cookieConsent !== COOKIE_CONSENT_ACCEPTED) {
      clearClientReadableCookies()
    }
  }, [cookieConsent])

  return (
    <LanguageProvider>
      {!isStandaloneRoute && <Header />}

      <div>
        {children}
        {!isStandaloneRoute && <Footer />}
      </div>

      {!isStandaloneRoute && (
        <CookieConsentBanner
          consent={cookieConsent}
          onConsentChange={setCookieConsent}
        />
      )}

      {!isStandaloneRoute && <WhatsAppButton />}

      {cookieConsent === COOKIE_CONSENT_ACCEPTED && (
        <>
          {/* ✅ Google Tag Manager */}
          <Script
            id='gtm'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TLTBR7R5');
              `
            }}
          />

          {/* ✅ Google Analytics GA4 */}
          <Script
            id='ga4-src'
            strategy='afterInteractive'
            src='https://www.googletagmanager.com/gtag/js?id=G-KTCZG3BYT9'
          />
          <Script
            id='ga4-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KTCZG3BYT9');
              `
            }}
          />

          {/* ✅ Facebook Pixel */}
          <Script
            id='facebook-pixel'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1977032489854590');
              fbq('track', 'PageView');
            `
            }}
          />
        </>
      )}
    </LanguageProvider>
  )
}
