import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Read the Genie Privacy Policy to learn how personal data is collected, used, stored, and protected.',
  path: '/policies/privacy-policy',
  keywords: ['privacy policy', 'Genie privacy', 'data protection'],
})

export default function Layout({ children }) {
  return children
}
