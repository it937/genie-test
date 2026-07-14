import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Website Terms and Conditions',
  description:
    'Review the Genie website terms and conditions covering access, intellectual property, liability, and site usage.',
  path: '/policies/website-terms-and-conditions',
  keywords: ['website terms', 'Genie website terms', 'site terms and conditions'],
})

export default function Layout({ children }) {
  return children
}
