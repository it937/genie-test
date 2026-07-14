import { NextResponse } from 'next/server'
import { requireAdmin } from '@/lib/adminJwt'

export const runtime = 'nodejs'

export async function GET(request) {
  const admin = requireAdmin(request)

  if (!admin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({
    admin: {
      id: admin.id,
      email: admin.email,
    },
  })
}
