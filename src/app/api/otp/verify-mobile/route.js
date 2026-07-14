import { NextResponse } from 'next/server'
import { buildGenieApiHeaders } from '@/lib/genie-api'

export async function POST(request) {
  try {
    let body

    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ message: 'Invalid JSON' }, { status: 400 })
    }

    const response = await fetch('https://rest-api.geniefx.com/api/v1/otp/verify-mobile', {
      method: 'POST',
      headers: buildGenieApiHeaders({
        deviceId: body.deviceId,
        timeZone: body.timeZone || 'UTC'
      }),
      body: JSON.stringify({
        id: body.id,
        code: body.code,
        email: body.email,
        telephone: body.telephone,
        telephonePrefix: body.telephonePrefix
      }),
      cache: 'no-store'
    })

    let data

    try {
      data = await response.json()
    } catch {
      data = { message: 'Invalid response from server' }
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error('Verify OTP proxy error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
