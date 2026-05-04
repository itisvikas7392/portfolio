const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    if (!name || !email || !subject || !message) {
      return { statusCode: 400, body: JSON.stringify({ error: 'All fields are required' }) };
    }

    const text = `📬 New Contact Form Submission!\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📝 Subject: ${subject}\n` +
      `💬 Message: ${message}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Message sent!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' })
    };
  }
};