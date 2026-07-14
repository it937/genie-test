import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Order Execution Policy',
  description:
    'Read the Genie Order Execution Policy to understand pricing, execution factors, and best execution practices.',
  path: '/policies/order-execution-policy',
  keywords: ['order execution policy', 'Genie execution', 'best execution'],
})

export default function Layout({ children }) {
  return children
}
