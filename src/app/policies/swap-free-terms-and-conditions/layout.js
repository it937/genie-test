import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Swap-Free Terms and Conditions',
  description:
    'Read the Genie swap-free terms and conditions for eligibility, account rules, and applicable limitations.',
  path: '/policies/swap-free-terms-and-conditions',
  keywords: ['swap free terms', 'Genie swap free', 'Islamic account terms'],
})

export default function Layout({ children }) {
  return children
}
