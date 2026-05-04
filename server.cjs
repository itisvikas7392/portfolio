const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

const TELEGRAM_TOKEN = '8317835651:AAGhy1SSYF0LrKSx_IoW5mW3zCYf7asrKVA';

const sendToTelegram = async (text) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: '1557112815', // Replace with your chat ID after starting bot
      text: text
    })
  });
};

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const text = `📬 New Contact Form Submission!\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📝 Subject: ${subject}\n` +
      `💬 Message: ${message}`;

    await sendToTelegram(text);

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});