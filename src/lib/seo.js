const BASE_URL = 'https://geniefx.com'

export const preferredSitelinks = [
  {
    name: '20% Bonus Promotion',
    path: '/promotion/20-bonus',
    description:
      'Claim Genie 20% bonus promotion and explore the campaign details, benefits, and eligibility.'
  },
  {
    name: 'Trade to Win',
    path: '/trade-to-win',
    description:
      'Join Genie Trade to Win and review the rewards program, tiers, and participation steps.'
  },
  {
    name: 'IB Broker',
    path: '/ib',
    description:
      'Partner with Genie as an introducing broker and discover commissions, perks, and onboarding.'
  },
  {
    name: 'MT5 Platform',
    path: '/mt5',
    description:
      'Trade on MetaTrader 5 with Genie and access platform features, downloads, and setup guidance.'
  },
  {
    name: 'Standard Account',
    path: '/accounts/standard',
    description:
      'Explore the Genie Standard Account, including features, trading conditions, and account benefits.'
  }
]

export function absoluteUrl(path = '/') {
  return new URL(path, BASE_URL).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}) {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Genie',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}
