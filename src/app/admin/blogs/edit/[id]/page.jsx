import BlogEditor from '@/components/admin/BlogEditor'

export const metadata = {
  title: 'Edit Blog',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function EditBlogPage({ params }) {
  const { id } = await params

  return <BlogEditor blogId={id} />
}
