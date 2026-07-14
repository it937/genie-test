import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/models/Blog'

export const runtime = 'nodejs'

export async function GET(request, { params }) {
  try {
    await connectDB()

    const { slug } = await params
    const blog = await Blog.findOne({ slug, published: true })
      .select('image seo')
      .lean()

    const dataUrl = blog?.seo?.ogImage || blog?.image

    if (!dataUrl || !dataUrl.startsWith('data:')) {
      return new NextResponse(null, { status: 404 })
    }

    const [header, base64Data] = dataUrl.split(',')
    const mimeMatch = header.match(/data:([^;]+);base64/)
    if (!mimeMatch || !base64Data) {
      return new NextResponse(null, { status: 400 })
    }

    const mimeType = mimeMatch[1]
    const buffer = Buffer.from(base64Data, 'base64')

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    })
  } catch {
    return new NextResponse(null, { status: 500 })
  }
}
