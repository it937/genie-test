import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'IB Terms and Conditions',
  description:
    'Review the Genie IB terms and conditions for introducing brokers, partner obligations, and program rules.',
  path: '/policies/ib-terms-and-conditions',
  keywords: ['IB terms', 'Genie IB program', 'introducing broker terms'],
})

export default function Layout({ children }) {
  return children
}
