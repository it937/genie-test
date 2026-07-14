import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import News from '@/models/News'

export const runtime = 'nodejs'

function isObjectId(value) {
  return value?.length === 24 && mongoose.Types.ObjectId.isValid(value)
}

export async function GET(request, { params }) {
  try {
    await connectDB()

    const { id } = await params
    const news = isObjectId(id)
      ? await News.findById(id)
      : await News.findOne({ slug: id })

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

export async function PUT(request, { params }) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const { id } = await params
    const data = await request.json()

    if (!isObjectId(id)) {
      return NextResponse.json({ message: 'Invalid news id.' }, { status: 400 })
    }

    const news = await News.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })

    if (!news) {
      return NextResponse.json({ message: 'News not found.' }, { status: 404 })
    }

    return NextResponse.json(news)
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || 'Unable to update news.' },
      { status: 400 }
    )
  }
}

export async function DELETE(request, { params }) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const { id } = await params

    if (!isObjectId(id)) {
      return NextResponse.json({ message: 'Invalid news id.' }, { status: 400 })
    }

    const news = await News.findByIdAndDelete(id)

    if (!news) {
      return NextResponse.json({ message: 'News not found.' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { message: 'Unable to delete news.' },
      { status: 500 }
    )
  }
}
