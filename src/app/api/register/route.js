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

    const upstreamUrl = 'https://rest-api.geniefx.com/api/v1/auth/email/register'
    const upstreamHeaders = buildGenieApiHeaders({
      deviceId: body.deviceId,
      timeZone: body.timeZone || 'UTC'
    })
    const upstreamBody = {
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      telephone: body.telephone,
      telephonePrefix: body.telephonePrefix,
      countryIso: body.countryIso,
      country: body.country,
      regulations: 'STLUCIA',
      languageIso: 'EN',
      demo: false,
      otpId: body.otpId,
      id2: '659e45fa20cd6630c960af34',
      p1: 'standard-bonus-account',
      verificationId: body.verificationId,
      userType: 2,
      isPhoneCountryChanged: true,
      sc: 'Website',
      // partner_uuid: "92C573C4-2BBE-4F55-AFFC-3EFB66B1F7B3",
      partnerTypeId: 55
    }

    const response = await fetch(upstreamUrl, {
      method: 'POST',
      headers: upstreamHeaders,
      body: JSON.stringify(upstreamBody),
      cache: 'no-store'
    })

    let data

    try {
      data = await response.json()
    } catch {
      data = { message: 'Invalid response from server' }
    }


    return NextResponse.json(data, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error('Register proxy error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
