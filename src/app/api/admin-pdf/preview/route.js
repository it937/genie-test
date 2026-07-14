import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'
import { readStoredPdf } from '@/lib/privatePdfStore'

export const runtime = 'nodejs'

export async function GET(request) {
  if (!requireAdmin(request)) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  try {
    const { buffer, name } = await readStoredPdf()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${name}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new NextResponse('No PDF found.', { status: 404 })
  }
}
