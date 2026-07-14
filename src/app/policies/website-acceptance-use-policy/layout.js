import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Website Acceptable Use Policy',
  description:
    'Read the Genie Website Acceptable Use Policy covering permitted conduct, restrictions, and user responsibilities.',
  path: '/policies/website-acceptance-use-policy',
  keywords: ['acceptable use policy', 'Genie website policy', 'site usage rules'],
})

export default function Layout({ children }) {
  return children
}
