import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Conflict of Interest Policy',
  description:
    'Understand the Genie Conflict of Interest Policy and how potential conflicts are identified and managed.',
  path: '/policies/conflict-of-interest-policy',
  keywords: ['conflict of interest', 'Genie policy', 'broker governance'],
})

export default function Layout({ children }) {
  return children
}
