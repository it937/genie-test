import PublicBlogList from '@/components/blog/PublicBlogList'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
  title: 'Blogs',
  description: 'Read Genie market insights, trading education, and platform updates.',
  path: '/blog',
})

export default function BlogPage() {
  return <PublicBlogList />
}
