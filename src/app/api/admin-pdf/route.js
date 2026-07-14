import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { getStoredPdfInfo, replaceStoredPdf } from '@/lib/privatePdfStore'

export const runtime = 'nodejs'

function ensureRequestAuthorized(request) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  return null
}

export async function GET(request) {
  const unauthorizedResponse = ensureRequestAuthorized(request)

  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  const file = await getStoredPdfInfo()
  return NextResponse.json({ file })
}

export async function POST(request) {
  const unauthorizedResponse = ensureRequestAuthorized(request)

  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file')

    if (!file || typeof file === 'string') {
      return NextResponse.json(
        { message: 'Please choose a PDF file.' },
        { status: 400 }
      )
    }

    if (file.type !== 'application/pdf') {
      return NextResponse.json(
        { message: 'Only PDF files are allowed.' },
        { status: 400 }
      )
    }

    const arrayBuffer = await file.arrayBuffer()
    const savedFile = await replaceStoredPdf(Buffer.from(arrayBuffer))

    return NextResponse.json({
      success: true,
      file: savedFile,
      message: 'PDF uploaded successfully.',
    })
  } catch {
    return NextResponse.json(
      { message: 'Failed to upload the PDF.' },
      { status: 500 }
    )
  }
}
