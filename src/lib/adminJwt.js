import jwt from 'jsonwebtoken'

const TOKEN_MAX_AGE = '12h'

function getJwtSecret() {
  if (!process.env.JWT_SECRET) {
    throw new Error('Missing JWT_SECRET environment variable.')
  }

  return process.env.JWT_SECRET
}

export function signAdminToken(admin) {
  return jwt.sign(
    {
      id: admin._id.toString(),
      email: admin.email,
    },
    getJwtSecret(),
    { expiresIn: TOKEN_MAX_AGE }
  )
}

export function getBearerToken(request) {
  const authorization = request.headers.get('authorization') || ''

  if (!authorization.startsWith('Bearer ')) {
    return null
  }

  return authorization.slice('Bearer '.length)
}

export function verifyAdminToken(request) {
  const token = getBearerToken(request)

  if (!token) {
    return null
  }

  try {
    return jwt.verify(token, getJwtSecret())
  } catch {
    return null
  }
}

export function requireAdmin(request) {
  const admin = verifyAdminToken(request)

  if (!admin?.id) {
    return null
  }

  return admin
}
