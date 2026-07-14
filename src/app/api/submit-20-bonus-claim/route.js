import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Your Google Apps Script URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOXxEetgC7eevqHKVeD254dBF8DjNv5Nok0b_eVLUjuLPU5cVnFbqkIWasWR0RjA1O_w/exec";
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log('Google Apps Script response status:', response.status);

    return NextResponse.json({ 
      status: 'success',
      message: 'Data saved successfully' 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { status: 'error', message: 'Failed to save data' },
      { status: 500 }
    );
  }
}