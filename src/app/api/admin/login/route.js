import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { signAdminToken } from '@/lib/adminJwt'
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

export async function POST(request) {
  try {
    const body = await request.json()
    const identifier = (body?.identifier || body?.email || '')
      .trim()
      .toLowerCase()
    const password = body?.password

    if (!identifier || !password) {
      return NextResponse.json(
        { message: 'Username and password are required.' },
        { status: 400 }
      )
    }

    await connectDB()

    const admin = await Admin.findOne({
      $and: [
        {
          $or: [{ username: identifier }, { email: identifier }],
        },
        {
          $or: [{ docType: 'adminUser' }, { docType: { $exists: false } }],
        },
      ],
    })

    if (!admin || admin.isActive === false) {
      return NextResponse.json(
        { message: 'Invalid email or password.' },
        { status: 401 }
      )
    }

    const storedPasswordHash = getStoredPasswordHash(admin)

    if (!storedPasswordHash) {
      return NextResponse.json(
        { message: 'Admin password is not configured correctly.' },
        { status: 500 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, storedPasswordHash)

    if (!isValidPassword) {
      return NextResponse.json(
        { message: 'Invalid email or password.' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      token: signAdminToken(admin),
      admin: {
        username: admin.username,
        email: admin.email,
      },
    })
  } catch {
    return NextResponse.json(
      { message: 'Unable to sign in right now.' },
      { status: 500 }
    )
  }
}
