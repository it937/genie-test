import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import News from '@/models/News'

export const runtime = 'nodejs'

export async function GET(request) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
    const wantsAll = searchParams.get('all') === 'true'
    const filter = wantsAll && requireAdmin(request) ? {} : { published: true }
    const news = await News.find(filter).sort({ createdAt: -1 })

    return NextResponse.json(news)
  } catch {
    return NextResponse.json(
      { message: 'Unable to load news.' },
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
    const news = await News.create(data)

    return NextResponse.json(news, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || 'Unable to create news.' },
      { status: 400 }
    )
  }
}
