import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Risk Statement',
  description:
    'Review the Genie Risk Statement covering trading risks, leveraged products, and client risk awareness.',
  path: '/policies/risk-statement',
  keywords: ['risk statement', 'Genie trading risk', 'CFD risk'],
})

export default function Layout({ children }) {
  return children
}
