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

    const response = await fetch('https://rest-api.geniefx.com/api/v1/otp/send-mobile', {
      method: 'POST',
      headers: buildGenieApiHeaders({
        deviceId: body.deviceId,
        timeZone: body.timeZone || 'UTC'
      }),
      body: JSON.stringify({
        email: body.email,
        firstName: body.firstName,
        telephone: body.telephone,
        telephonePrefix: body.telephonePrefix,
        recaptchaToken: 'xcmmg8P9jJpKHzjFD9s0',
        regulations: 'STLUCIA',
        regulationId: 1
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
    console.error('Send OTP proxy error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
