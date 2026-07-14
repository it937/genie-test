import { cookies } from 'next/headers'
import './globals.css'
import ClientLayout from './ClientLayout'
import {
  COOKIE_CONSENT_ACCEPTED,
  COOKIE_CONSENT_COOKIE_NAME
} from '@/lib/cookieConsent'
import { absoluteUrl, preferredSitelinks } from '@/lib/seo'

export const metadata = {
  title: {
    default: 'Genie Ltd.',
    template: '%s | Genie',
  },
  description:
    'Kickstart your financial freedom with a globally reputed FX broker offering a wide range of financial instruments, including currencies, stocks, commodities, metals, indices & more',
  applicationName: 'Genie Ltd.',
  metadataBase: new URL('https://geniefx.com'),
  icons: {
    icon: '/faviconGenie.png',
    shortcut: '/faviconGenie.png',
    apple: '/faviconGenie.png',
  },
  openGraph: {
    title: 'Genie Ltd.',
    description:
      'Kickstart your financial freedom with a globally reputed FX broker offering a wide range of financial instruments, including currencies, stocks, commodities, metals, indices & more',
    siteName: 'Genie',
    type: 'website',
    url: 'https://geniefx.com',
  },
  twitter: {
    card: 'summary',
    title: 'Genie Ltd.',
    description:
      'Kickstart your financial freedom with a globally reputed FX broker offering a wide range of financial instruments, including currencies, stocks, commodities, metals, indices & more',
  },
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()
  const hasAcceptedCookieConsent =
    cookieStore.get(COOKIE_CONSENT_COOKIE_NAME)?.value ===
    COOKIE_CONSENT_ACCEPTED

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://geniefx.com/#organization',
        name: 'Genie Ltd.',
        alternateName: 'Genie Limited',
        url: 'https://geniefx.com',
        logo: absoluteUrl('/faviconGenie.png'),
      },
      {
        '@type': 'WebSite',
        '@id': 'https://geniefx.com/#website',
        name: 'Genie Ltd.',
        alternateName: 'Genie Limited',
        url: 'https://geniefx.com',
        publisher: {
          '@id': 'https://geniefx.com/#organization',
        },
      },
      {
        '@type': 'ItemList',
        name: 'Primary Genie Ltd. pages',
        itemListElement: preferredSitelinks.map((link, index) => ({
          '@type': 'SiteNavigationElement',
          position: index + 1,
          name: link.name,
          url: absoluteUrl(link.path),
        })),
      },
    ],
  }

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        {hasAcceptedCookieConsent && (
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TLTBR7R5"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <ClientLayout>{children}</ClientLayout>

        {hasAcceptedCookieConsent && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1977032489854590&ev=PageView&noscript=1"
            />
          </noscript>
        )}
      </body>
    </html>
  )
}
