import BlogList from '@/components/admin/BlogList'

export const metadata = {
  title: 'Admin Blogs',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminBlogsPage() {
  return <BlogList />
}
