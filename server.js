const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files and parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Contact route
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Send email route
app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'edwinakidah1@gmail.com', // Jabali business email
      pass: '@Carefour4' // Jabali business email password
    }
  });

  const mailOptions = {
    from: email,
    to: 'edwinakidah1@gmail.com', // Jabali business email
    subject: `New message from ${name}: ${subject}`,
    text: `You have received a new message from ${name} (${email}): \n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Error occurred while sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
