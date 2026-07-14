import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Bonus Terms and Conditions',
  description:
    'Review the Genie bonus terms and conditions for eligibility, bonus limits, withdrawals, and promotion rules.',
  path: '/policies/bonus-terms-and-conditions',
  keywords: ['bonus terms', 'Genie promotion rules', '20 bonus terms'],
})

export default function Layout({ children }) {
  return children
}
