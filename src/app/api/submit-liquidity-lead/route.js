import { NextResponse } from 'next/server'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+]?[\d\s().-]{7,20}$/

export async function POST(request) {
  try {
    const data = await request.json()
    const requiredFields = ['name', 'email', 'phoneNumber', 'country']
    const missingFields = requiredFields.filter(field => !String(data[field] || '').trim())

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          status: 'error',
          message: `Missing required fields: ${missingFields.join(', ')}`
        },
        { status: 400 }
      )
    }

    if (!emailPattern.test(String(data.email).trim())) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid email address.' },
        { status: 400 }
      )
    }

    if (!phonePattern.test(String(data.phoneNumber).trim())) {
      return NextResponse.json(
        { status: 'error', message: 'Invalid phone number.' },
        { status: 400 }
      )
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_LIQUIDITY_FORM_URL

    if (!googleScriptUrl) {
      return NextResponse.json(
        { status: 'error', message: 'Missing Google Script configuration.' },
        { status: 500 }
      )
    }

    const payload = {
      name: String(data.name).trim(),
      email: String(data.email).trim(),
      phoneNumber: String(data.phoneNumber).trim(),
      country: String(data.country).trim(),
      page: data.page || 'liquidity',
      source: data.source || 'liquidity_lead_form',
      submittedAt: new Date().toISOString()
    }

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const responseText = await response.text()

    if (!response.ok) {
      console.error('Liquidity Apps Script error response:', response.status, responseText)

      return NextResponse.json(
        {
          status: 'error',
          message: 'The form could not be delivered to Google Sheets. Please verify the Apps Script deployment and try again.'
        },
        { status: 502 }
      )
    }

    const looksLikeHtmlError = /<html|<style|errorMessage|google/i.test(responseText)

    if (looksLikeHtmlError) {
      console.error('Liquidity Apps Script returned HTML instead of JSON:', responseText)

      return NextResponse.json(
        {
          status: 'error',
          message: 'Google Apps Script returned an error page instead of a success response. Please check the script deployment and sheet permissions.'
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      status: 'success',
      message: 'Liquidity lead submitted successfully.'
    })
  } catch (error) {
    console.error('Liquidity lead submission error:', error)

    return NextResponse.json(
      {
        status: 'error',
        message: 'Unexpected server error while submitting the form.'
      },
      { status: 500 }
    )
  }
}
