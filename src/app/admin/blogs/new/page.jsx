import BlogEditor from '@/components/admin/BlogEditor'

export const metadata = {
  title: 'New Blog',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NewBlogPage() {
  return <BlogEditor />
}
