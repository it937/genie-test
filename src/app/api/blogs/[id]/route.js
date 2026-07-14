import mongoose from 'mongoose'
import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/models/Blog'

export const runtime = 'nodejs'

function isObjectId(value) {
  return value?.length === 24 && mongoose.Types.ObjectId.isValid(value)
}

export async function GET(request, { params }) {
  try {
    await connectDB()

    const { id } = await params
    const blog = isObjectId(id)
      ? await Blog.findById(id).lean()
      : await Blog.findOne({ slug: id }).lean()

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

export async function PUT(request, { params }) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    await connectDB()

    const { id } = await params
    const data = await request.json()

    if (!isObjectId(id)) {
      return NextResponse.json({ message: 'Invalid blog id.' }, { status: 400 })
    }

    const blog = await Blog.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    })

    if (!blog) {
      return NextResponse.json({ message: 'Blog not found.' }, { status: 404 })
    }

    return NextResponse.json(blog)
  } catch (error) {
    return NextResponse.json(
      { message: error?.message || 'Unable to update blog.' },
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
      return NextResponse.json({ message: 'Invalid blog id.' }, { status: 400 })
    }

    const blog = await Blog.findByIdAndDelete(id)

    if (!blog) {
      return NextResponse.json({ message: 'Blog not found.' }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { message: 'Unable to delete blog.' },
      { status: 500 }
    )
  }
}
