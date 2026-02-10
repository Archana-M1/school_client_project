require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify transporter connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // Email content
  const mailOptions = {
    from: `"IDPS Contact Form" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL || 'test@gmail.com',
    replyTo: email,
    subject: `New Contact: ${subject} - from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>

        <div style="padding: 30px; background: #f8fafc;">
          <div style="background: white; border-radius: 8px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">

            <h2 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">
              Contact Details
            </h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">
                  <a href="tel:${phone}" style="color: #3b82f6;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Subject:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${subject}</td>
              </tr>
            </table>

            <h2 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 25px;">
              Message
            </h2>

            <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; color: #334155; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>

          </div>
        </div>

        <div style="background: #1e293b; padding: 15px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">
            This email was sent from the International Delhi Public School website contact form.
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission
============================

CONTACT DETAILS
---------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

MESSAGE
-------
${message}

---
This email was sent from the International Delhi Public School website contact form.
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully from ${email}`);
    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
