import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Terms and Conditions',
  description:
    'Review the Genie general terms and conditions governing account usage, services, and client responsibilities.',
  path: '/policies/terms-and-conditions',
  keywords: ['terms and conditions', 'Genie terms', 'broker agreement'],
})

export default function Layout({ children }) {
  return children
}
