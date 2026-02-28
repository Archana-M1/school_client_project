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

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // 1. Notification email → School
  const schoolMail = {
    from: `"IDPS Contact Form" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Contact: ${subject} - from ${firstName} ${lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <div style="background: white; border-radius: 8px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 120px;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Subject:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${subject}</td>
              </tr>
            </table>
            <h2 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 25px;">Message</h2>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; color: #334155; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        <div style="background: #1e293b; padding: 15px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">Sent from the IDPS website contact form.</p>
        </div>
      </div>
    `,
    text: `New Contact Form Submission\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`,
  };

  // 2. Confirmation email → User
  const userMail = {
    from: `"International Delhi Public School" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `We received your message – IDPS`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Thank You for Contacting Us!</h1>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <div style="background: white; border-radius: 8px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #1e293b; font-size: 16px;">Dear <strong>${firstName} ${lastName}</strong>,</p>
            <p style="color: #475569; line-height: 1.7;">
              Thank you for reaching out to International Delhi Public School, Gangavathi. We have received your message and our team will get back to you shortly.
            </p>
            <div style="background: #f1f5f9; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0 0 6px 0; color: #64748b; font-size: 13px;"><strong>Your message summary:</strong></p>
              <p style="margin: 0 0 4px 0; color: #475569;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 8px 0 0 0; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="color: #475569; line-height: 1.7;">
              For urgent queries, call us at <strong>8884461238</strong> or <strong>8197385199</strong>.
            </p>
            <p style="color: #475569; margin-bottom: 0;">Warm regards,<br/><strong>Admissions Team</strong><br/>International Delhi Public School, Gangavathi</p>
          </div>
        </div>
        <div style="background: #1e293b; padding: 15px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">This is an automated confirmation from IDPS. Please do not reply to this email.</p>
        </div>
      </div>
    `,
    text: `Dear ${firstName} ${lastName},\n\nThank you for contacting IDPS. We have received your message and will get back to you shortly.\n\nSubject: ${subject}\nMessage: ${message}\n\nWarm regards,\nAdmissions Team\nInternational Delhi Public School, Gangavathi`,
  };

  try {
    await Promise.all([
      transporter.sendMail(schoolMail),
      transporter.sendMail(userMail),
    ]);
    console.log(`Contact emails sent: school notified, confirmation sent to ${email}`);
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

// Admission enquiry endpoint
app.post('/api/admission-enquiry', async (req, res) => {
  const { studentName, dateOfBirth, parentName, board, grade, previousSchool, email, phone, address } = req.body;

  if (!studentName || !dateOfBirth || !parentName || !board || !grade || !email || !phone || !address) {
    return res.status(400).json({
      success: false,
      message: 'All required fields must be filled',
    });
  }

  // 1. Notification email → School
  const schoolMail = {
    from: `"IDPS Admission Enquiry" <${process.env.GMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Admission Enquiry - ${studentName} (${grade}, ${board})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">New Admission Enquiry</h1>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <div style="background: white; border-radius: 8px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 0;">Student Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 150px;"><strong>Student Name:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${studentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Date of Birth:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${dateOfBirth}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Board:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${board}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Grade:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${grade}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Previous School:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${previousSchool || 'N/A'}</td>
              </tr>
            </table>
            <h2 style="color: #1e40af; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-top: 25px;">Parent/Guardian Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #64748b; width: 150px;"><strong>Parent Name:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${parentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #3b82f6;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b;"><strong>Address:</strong></td>
                <td style="padding: 10px 0; color: #1e293b;">${address.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
        </div>
        <div style="background: #1e293b; padding: 15px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">Sent from the IDPS website admission enquiry form.</p>
        </div>
      </div>
    `,
    text: `New Admission Enquiry\n\nStudent Name: ${studentName}\nDate of Birth: ${dateOfBirth}\nBoard: ${board}\nGrade: ${grade}\nPrevious School: ${previousSchool || 'N/A'}\n\nParent Name: ${parentName}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
  };

  // 2. Confirmation email → User
  const userMail = {
    from: `"International Delhi Public School" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `We received your admission enquiry – IDPS`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 20px; text-align: center;">
          <h1 style="color: white; margin: 0;">Enquiry Received!</h1>
        </div>
        <div style="padding: 30px; background: #f8fafc;">
          <div style="background: white; border-radius: 8px; padding: 25px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #1e293b; font-size: 16px;">Dear <strong>${parentName}</strong>,</p>
            <p style="color: #475569; line-height: 1.7;">
              Thank you for your interest in admitting your child to International Delhi Public School, Gangavathi. We have received your enquiry and our admissions team will get in touch with you shortly.
            </p>
            <div style="background: #f1f5f9; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 4px; margin: 20px 0;">
              <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px;"><strong>Enquiry Summary:</strong></p>
              <p style="margin: 0 0 4px 0; color: #475569;"><strong>Student Name:</strong> ${studentName}</p>
              <p style="margin: 0 0 4px 0; color: #475569;"><strong>Grade Applied For:</strong> ${grade}</p>
              <p style="margin: 0; color: #475569;"><strong>Board:</strong> ${board}</p>
            </div>
            <p style="color: #475569; line-height: 1.7;">
              For urgent queries, call us at <strong>8884461238</strong> or <strong>8197385199</strong>.
            </p>
            <p style="color: #475569; margin-bottom: 0;">Warm regards,<br/><strong>Admissions Team</strong><br/>International Delhi Public School, Gangavathi</p>
          </div>
        </div>
        <div style="background: #1e293b; padding: 15px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 12px;">This is an automated confirmation from IDPS. Please do not reply to this email.</p>
        </div>
      </div>
    `,
    text: `Dear ${parentName},\n\nThank you for your interest in IDPS. We have received your admission enquiry for ${studentName} (${grade}, ${board}) and will contact you shortly.\n\nFor urgent queries, call 8884461238 or 8197385199.\n\nWarm regards,\nAdmissions Team\nInternational Delhi Public School, Gangavathi`,
  };

  try {
    await Promise.all([
      transporter.sendMail(schoolMail),
      transporter.sendMail(userMail),
    ]);
    console.log(`Admission enquiry emails sent: school notified, confirmation sent to ${email}`);
    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully',
    });
  } catch (error) {
    console.error('Error sending admission enquiry email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit enquiry. Please try again later.',
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
