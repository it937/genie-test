import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { requireAdmin, signAdminToken } from '@/lib/adminJwt'
import { connectDB } from '@/lib/mongodb'
import Admin from '@/models/Admin'

export const runtime = 'nodejs'

function getStoredPasswordHash(admin) {
  const passwordHash = admin?.passwordHash

  if (typeof admin?.password === 'string') {
    return admin.password
  }

  if (typeof passwordHash === 'string') {
    return passwordHash
  }

  if (Buffer.isBuffer(passwordHash)) {
    return passwordHash.toString('utf8')
  }

  if (passwordHash && typeof passwordHash === 'object') {
    const candidateKeys = ['hash', 'value', 'password', 'passwordHash', 'bcrypt']

    for (const key of candidateKeys) {
      if (typeof passwordHash[key] === 'string') {
        return passwordHash[key]
      }
    }
  }

  return null
}

export async function PUT(request) {
  const tokenAdmin = requireAdmin(request)

  if (!tokenAdmin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const currentPassword = body?.currentPassword
    const newPassword = body?.newPassword

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { message: 'Current and new password are required.' },
        { status: 400 }
      )
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { message: 'New password must be at least 8 characters.' },
        { status: 400 }
      )
    }

    await connectDB()

    const admin = await Admin.findById(tokenAdmin.id)

    if (!admin) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const storedPasswordHash = getStoredPasswordHash(admin)

    if (!storedPasswordHash) {
      return NextResponse.json(
        { message: 'Admin password is not configured correctly.' },
        { status: 500 }
      )
    }

    const isValidPassword = await bcrypt.compare(
      currentPassword,
      storedPasswordHash
    )

    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Current password is incorrect.' },
        { status: 401 }
      )
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12)

    if (admin.passwordHash !== undefined) {
      admin.passwordHash = hashedPassword
    } else {
      admin.password = hashedPassword
    }

    await admin.save()

    return NextResponse.json({
      message: 'Password updated successfully.',
      token: signAdminToken(admin),
    })
  } catch {
    return NextResponse.json(
      { message: 'Unable to update password right now.' },
      { status: 500 }
    )
  }
}
