import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Deposit and Withdrawal Terms',
  description:
    'Read the Genie deposit and withdrawal terms covering funding, payouts, and transaction handling requirements.',
  path: '/policies/deposit-withdrawal-terms',
  keywords: ['deposit terms', 'withdrawal terms', 'Genie payments'],
})

export default function Layout({ children }) {
  return children
}
