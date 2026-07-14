import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import News from '@/models/News'

export const runtime = 'nodejs'

export async function GET(request, { params }) {
  try {
    await connectDB()

    const { slug } = await params
    const news = await News.findOne({ slug })

    if (!news) {
      return NextResponse.json({ message: 'News not found.' }, { status: 404 })
    }

    if (news.published === false && !requireAdmin(request)) {
      return NextResponse.json({ message: 'News not found.' }, { status: 404 })
    }

    return NextResponse.json(news)
  } catch {
    return NextResponse.json(
      { message: 'Unable to load news.' },
      { status: 500 }
    )
  }
}
