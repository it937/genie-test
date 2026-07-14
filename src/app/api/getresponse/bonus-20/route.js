import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    // Prepare minimal, valid payload for GetResponse
    const getResponsePayload = {
      email: data.email.trim(),
      name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || null,
      campaign: {
        campaignId: process.env.GETRESPONSE_CAMPAIGN_ID, // Must be the alphanumeric token (e.g., "p86zQ")
      },
      country: data.country_of_residence || null,
      phone: data.phone || null,
      city: data.city || null,
    };

    const response = await fetch('https://api.getresponse.com/v3/contacts', {
      method: 'POST',
      headers: {
        'X-Auth-Token': `api-key ${process.env.GETRESPONSE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getResponsePayload),
    });

    // Safely read response body as text first (handles empty body)
    const text = await response.text();
    let responseData = null;
    if (text) {
      try {
        responseData = JSON.parse(text);
      } catch (parseErr) {
        console.error('Failed to parse GetResponse response body:', parseErr);
        // Continue with null data if parsing fails
      }
    }

    if (!response.ok) {
      console.error('GetResponse API Error:', response.status, responseData || text);

      // Handle duplicate contact (409 Conflict)
      if (response.status === 409) {
        return NextResponse.json({
          success: true,
          message: 'Contact already exists in GetResponse',
          duplicate: true,
        });
      }

      // Other errors
      return NextResponse.json(
        {
          success: false,
          error: responseData || { message: 'Unknown error from GetResponse' },
        },
        { status: response.status }
      );
    }

    // Success: 201 Created (has body) or 202 Accepted (usually empty)
    console.log(`Contact successfully added to GetResponse (status: ${response.status})`);

    const contactId = responseData?.contactId || null;

    return NextResponse.json({
      success: true,
      message: 'Contact added to GetResponse',
      contactId,
      data: responseData, // May be null on 202
    });
  } catch (error) {
    console.error('GetResponse Integration Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}