/*
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// You need to add your Google Service Account credentials here
const GOOGLE_SHEETS_CREDENTIALS = process.env.GOOGLE_SHEETS_CREDENTIALS;
const SHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    if (!GOOGLE_SHEETS_CREDENTIALS || !SHEET_ID) {
      return NextResponse.json({ error: 'Google Sheets credentials or Sheet ID not set.' }, { status: 500 });
    }

    const credentials = JSON.parse(GOOGLE_SHEETS_CREDENTIALS);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[firstName, lastName, email, message, new Date().toISOString()]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error?.toString() }, { status: 500 });
  }
} 
*/