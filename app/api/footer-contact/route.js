import { Resend } from 'resend';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: 'Email service is not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log("Attempting to send email to info@ranzomtech.com from:", name);

    // Send email to RanzomTech
    const adminResult = await resend.emails.send({
      from: 'info@ranzomtech.com',
      to: 'info@ranzomtech.com',
      subject: `Footer Contact Form Submission from ${name}`,
      html: `
        <h2>Footer Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Resend admin result:", adminResult);

    if (adminResult.error) {
      console.error("Failed to send admin email:", adminResult.error);
      throw new Error(adminResult.error.message);
    }

    // Send confirmation email to user
    const userResult = await resend.emails.send({
      from: 'info@ranzomtech.com',
      to: email,
      subject: 'We received your message - RanzomTech',
      html: `
        <h2>Thank you for contacting RanzomTech</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>RanzomTech Team</p>
      `,
    });

    console.log("Resend user result:", userResult);

    if (userResult.error) {
      console.error("Failed to send confirmation email:", userResult.error);
      throw new Error(userResult.error.message);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully!' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to send email. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
