import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    let body

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
    }

    const response = await fetch('https://rest-api.geniefx.com/api/v1/auth/email/exists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: body.email,
        userType: body.userType ?? 2
      }),
      cache: 'no-store'
    })

    let data

    try {
      data = await response.json()
    } catch {
      data = { message: 'Invalid response from server' }
    }

    return NextResponse.json(
      {
        ...data,
        exists: data.exists === true || data.exists === 'true'
      },
      { status: response.status }
    )
  } catch (error) {
    console.error('Email exists proxy error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
