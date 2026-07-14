import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/models/Blog'

export const runtime = 'nodejs'

export async function GET(request, { params }) {
  try {
    await connectDB()

    const { slug } = await params
    const blog = await Blog.findOne({ slug }).lean()

    if (!blog) {
      return NextResponse.json({ message: 'Blog not found.' }, { status: 404 })
    }

    const isAdmin = requireAdmin(request)

    if (blog.published === false && !isAdmin) {
      return NextResponse.json({ message: 'Blog not found.' }, { status: 404 })
    }

    return NextResponse.json(
      blog,
      isAdmin
        ? undefined
        : {
            headers: {
              'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
            },
          }
    )
  } catch {
    return NextResponse.json(
      { message: 'Unable to load blog.' },
      { status: 500 }
    )
  }
}
