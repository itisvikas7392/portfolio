const express = require('express');
const cors = require('cors');
const TelegramBot = require('telegram-bot-api');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

const TELEGRAM_TOKEN = '8317835651:AAGhy1SSYF0LrKSx_IoW5mW3zCYf7asrKVA';

const bot = new TelegramBot(TELEGRAM_TOKEN);

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

    await bot.sendMessage(text);

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});