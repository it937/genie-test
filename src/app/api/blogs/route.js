import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/models/Blog'

export const runtime = 'nodejs'

const BLOG_CARD_FIELDS =
  'slug image published author readingTime excerpt tags content.en.title content.ar.title createdAt updatedAt'

function cachedJson(data) {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}

export async function GET(request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const wantsAll = searchParams.get('all') === 'true'
    const limit = Number(searchParams.get('limit') || 0)
    const skip = Number(searchParams.get('skip') || 0)
    const filter =
      wantsAll && requireAdmin(request) ? {} : { published: { $ne: false } }

    if (limit > 0) {
      const [blogs, total] = await Promise.all([
        Blog.find(filter)
          .select(BLOG_CARD_FIELDS)
          .sort({ createdAt: -1 })
          .skip(Math.max(skip, 0))
          .limit(limit)
          .lean(),
        Blog.countDocuments(filter),
      ])

      return cachedJson({
        items: blogs,
        hasMore: skip + blogs.length < total,
        total,
      })
    }

    const query = Blog.find(filter).sort({ createdAt: -1 })
    const blogs = wantsAll
      ? await query.lean()
      : await query.select(BLOG_CARD_FIELDS).lean()

    return wantsAll ? NextResponse.json(blogs) : cachedJson(blogs)
  } catch {
    return NextResponse.json(
      { message: 'Unable to load blogs.' },
      { status: 500 }
    )
  }
}

export async function POST(request) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const data = await request.json()
    const existingBlog = data?.slug
      ? await Blog.findOne({ slug: data.slug }).select('_id').lean()
      : null

    if (existingBlog) {
      return NextResponse.json(
        {
          message:
            'A blog with this slug already exists. Open it from the blog list to edit it.',
        },
        { status: 409 }
      )
    }

    const blog = await Blog.create(data)

    return NextResponse.json(blog, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || 'Unable to create blog.' },
      { status: 400 }
    )
  }
}
