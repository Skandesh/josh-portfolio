import { NextResponse } from 'next/server';
import { appendToSheet } from '@/lib/google-sheets';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Extract form data
    const { firstName, lastName, email, message, referrer, platformInfo } = formData;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const values = [
      timestamp,
      firstName,
      lastName,
      email,
      message,
      referrer || '',
      platformInfo ? JSON.stringify(platformInfo) : '',
    ];

    // Append to Google Sheet
    await appendToSheet(values);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
} 