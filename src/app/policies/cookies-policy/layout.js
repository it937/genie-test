import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Cookies Policy',
  description:
    'Review the Genie Cookies Policy to understand how cookies and tracking technologies are used on the website.',
  path: '/policies/cookies-policy',
  keywords: ['cookies policy', 'Genie cookies', 'website tracking'],
})

export default function Layout({ children }) {
  return children
}
