import { google } from 'googleapis';

// Define the column headers for our sheet
const HEADERS = [
  'Timestamp',
  'First Name',
  'Last Name',
  'Email',
  'Message',
  'Referrer',
  'Platform Info',
];

export async function getAuthClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        project_id: process.env.GOOGLE_PROJECT_ID,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    return auth;
  } catch (error) {
    console.error('Error authenticating with Google:', error);
    throw error;
  }
}

export async function appendToSheet() {
  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not configured');
    }

    // First, check if headers exist
    const range = 'Sheet1!A1:G1';
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values || [];
    
    // If no headers exist, add them
    if (rows.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [HEADERS],
        },
      });
    }

    // Append the new row
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [values],
      },
    });

    return appendResponse.data;
  } catch (error) {
    console.error('Error appending to sheet:', error);
    throw error;
  }
} 