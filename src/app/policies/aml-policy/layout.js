import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'AML Compliance Policy',
  description:
    'Read the Genie AML Compliance Policy covering anti-money laundering procedures, verification, and monitoring standards.',
  path: '/policies/aml-policy',
  keywords: ['AML policy', 'Genie compliance', 'anti-money laundering'],
})

export default function Layout({ children }) {
  return children
}
