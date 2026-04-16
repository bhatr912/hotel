import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, mobile, email, travelers, message } = body;

    // Validate required fields
    if (!fullName || !mobile || !email || !travelers) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Email config:', {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      user: process.env.EMAIL_USER?.substring(0, 5) + '***',
    });

    // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.zoho.in',
  port: parseInt(process.env.EMAIL_PORT || '465'),
  secure: true, // must be true for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

    // Verify transporter
    await transporter.verify();
    console.log('Email transporter verified');

    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: 'bookings@holidayheedkashmir.in',
      replyTo: email,
      subject: `New Tour Enquiry from ${fullName}`,
      html: `
  <div style="font-family: ui-sans-serif, system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #dde6ef; border-radius: 12px; overflow: hidden;">

    <!-- Header -->
    <div style="background: #0061a4; padding: 24px 32px;">
      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #ffffff;">Holiday Heed Kashmir</p>
      <p style="margin: 0; font-size: 12px; color: #ffffff; margin-top: 2px;">Booking Helpdesk</p>
    </div>

    <!-- Title bar -->
    <div style="background: #f0f6fc; border-bottom: 1px solid #dde6ef; padding: 16px 32px; display: flex; align-items: center; gap: 10px;">
      <div style="width: 8px; height: 8px; border-radius: 50%; background: #2196f3; flex-shrink: 0;"></div>
      <div>
        <p style="margin: 0; font-size: 15px; font-weight: 600; color: #0061a4;">New Tour Enquiry</p>
        <p style="margin: 0; font-size: 12px; color: #5a7a99;">A customer has requested a Tour P    ackage</p>
      </div>
    </div>

    <!-- Intro text -->
    <div style="padding: 24px 32px 0 32px;">
      <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #0d1b2a;">
        You have received a Booking Enquiry from Mr./Ms./Mrs <strong>${fullName}</strong>. The details of the Booking Enquiry are given below:
      </p>
    </div>

    <!-- Fields -->
    <div style="padding: 20px 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #eef3f8;">
          <td style="padding: 11px 0; font-size: 11px; color: #5a7a99; width: 130px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Name</td>
          <td style="padding: 11px 0; font-size: 14px; color: #0d1b2a; font-weight: 600;">${fullName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eef3f8;">
          <td style="padding: 11px 0; font-size: 11px; color: #5a7a99; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Email Id</td>
          <td style="padding: 11px 0; font-size: 14px; color: #0061a4;">${email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eef3f8;">
          <td style="padding: 11px 0; font-size: 11px; color: #5a7a99; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Mobile Number</td>
          <td style="padding: 11px 0; font-size: 14px; color: #0d1b2a;">${mobile}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eef3f8;">
          <td style="padding: 11px 0; font-size: 11px; color: #5a7a99; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Travelers</td>
          <td style="padding: 11px 0; font-size: 14px; color: #0d1b2a;">${travelers}</td>
        </tr>
      </table>

      <!-- Message -->
      <div style="margin-top: 20px;">
        <p style="margin: 0 0 8px; font-size: 11px; color: #5a7a99; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Message</p>
        <div style="background: #f0f6fc; border-left: 3px solid #0061a4; border-radius: 0 6px 6px 0; padding: 14px 16px;">
          <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #0d1b2a;">${message || 'No message provided'}</p>
        </div>
      </div>
    </div>

    <!-- Email Delivered By -->
    <div style="margin: 0 32px 24px 32px; background: #f8fafc; border: 1px solid #dde6ef; border-radius: 8px; padding: 14px 16px;">
      <p style="margin: 0 0 6px; font-size: 12px; font-weight: 600; color: #0d1b2a;">Email Delivered by:</p>
      <p style="margin: 0; font-size: 12px; color: #5a7a99; line-height: 1.6;">
        Holiday Heed Kashmir CMS<br/>
        On: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' })} ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #f0f6fc; border-top: 1px solid #dde6ef; padding: 16px 32px;">
      <p style="margin: 0 0 8px; font-size: 11px; color: #5a7a99; line-height: 1.6;">
        <strong style="color: #0d1b2a;">Disclaimer:</strong> This is an automatically generated email — please do not reply to it. The information transmitted by this email is intended only for the person or entity to which it is addressed. If you are not the intended recipient of this message, please contact the Website Admin immediately.
      </p>
      <p style="margin: 0; font-size: 11px; color: #5a7a99;">Automated &middot; Holiday Heed Kashmir</p>
    </div>

  </div>
`,
    };


    

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Email error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: error.message || 'Failed to send email',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
