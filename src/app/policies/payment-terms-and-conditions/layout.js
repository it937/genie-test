import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Payment Terms and Conditions',
  description:
    'Review the Genie payment terms and conditions for fees, processing, account funding, and transaction rules.',
  path: '/policies/payment-terms-and-conditions',
  keywords: ['payment terms', 'Genie payment policy', 'broker payments'],
})

export default function Layout({ children }) {
  return children
}
