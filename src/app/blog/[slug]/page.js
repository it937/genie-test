import { connectDB } from '@/lib/mongodb'
import Blog from '@/models/Blog'
import PublicBlogDetail from '@/components/blog/PublicBlogDetail'

export async function generateMetadata({ params }) {
  const { slug } = await params

  try {
    await connectDB()
    const blog = await Blog.findOne({ slug, published: true })
      .select('content.en.title seo excerpt image slug')
      .lean()

    if (!blog) {
      return { title: 'Blog' }
    }

    const title = blog.seo?.metaTitle || blog.content?.en?.title || slug
    const description = blog.seo?.metaDescription || blog.excerpt || ''
    const hasImage = !!(blog.seo?.ogImage || blog.image)
    const imageUrl = hasImage ? `/api/blog-image/${slug}` : null

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `/blog/${slug}`,
        siteName: 'Genie',
        type: 'article',
        ...(imageUrl
          ? { images: [{ url: imageUrl, width: 1200, height: 630, alt: title }] }
          : {}),
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        ...(imageUrl ? { images: [imageUrl] } : {}),
      },
    }
  } catch {
    return { title: 'Blog' }
  }
}

export default function BlogDetailPage() {
  return <PublicBlogDetail />
}
