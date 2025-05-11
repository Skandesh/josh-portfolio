const { appendToSheet } = require('../../src/lib/google-sheets');

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const data = JSON.parse(event.body);

    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return { statusCode: 400, body: 'Missing required fields' };
    }

    await appendToSheet([
      new Date().toISOString(),
      data.firstName,
      data.lastName,
      data.email,
      data.message,
      data.referrer || '',
      JSON.stringify(data.platformInfo || {})
    ]);

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
