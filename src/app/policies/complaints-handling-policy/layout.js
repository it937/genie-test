import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Complaints Handling Policy',
  description:
    'Read the Genie Complaints Handling Policy and learn how concerns, disputes, and formal complaints are managed.',
  path: '/policies/complaints-handling-policy',
  keywords: ['complaints policy', 'Genie complaints', 'broker disputes'],
})

export default function Layout({ children }) {
  return children
}
