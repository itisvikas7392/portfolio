const testContactAPI = async () => {
  const response = await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Vikas Prajapati',
      email: 'itisvikasprajapati@gmail.com',
      subject: 'Portfolio Test',
      message: 'Testing the contact form! This message should arrive on Telegram.'
    })
  });
  
  const data = await response.json();
  console.log('Response:', data);
};

testContactAPI();