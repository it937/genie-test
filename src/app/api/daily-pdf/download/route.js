import { NextResponse } from 'next/server'
import { readStoredPdf } from '@/lib/privatePdfStore'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const { buffer, name } = await readStoredPdf()

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${name}"`,
        'Cache-Control': 'no-store',
      },
    })
  } catch {
    return new NextResponse('No PDF available right now.', { status: 404 })
  }
}
