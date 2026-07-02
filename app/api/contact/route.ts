import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3'
  }
};

// Validation helpers
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidPhone(phone: string) {
  return /^[\d\s\+\-\(\)]{7,15}$/.test(phone);
}

// Simple rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // Basic rate limiting
    const clientIP = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    const userRequests = rateLimit.get(clientIP) || 0;

    if (userRequests >= MAX_REQUESTS) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    rateLimit.set(clientIP, userRequests + 1);
    setTimeout(() => rateLimit.delete(clientIP), RATE_LIMIT_WINDOW);

    // Validation
    const errors: Record<string, string> = {};
    if (!name || name.trim().length < 2) errors.name = "Name must be at least 2 characters";
    if (!phone || !isValidPhone(phone)) errors.phone = "Please enter a valid phone number";
    if (!email || !isValidEmail(email)) errors.email = "Please enter a valid email address";
    if (!message || message.trim().length < 10) errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
      },
    });

    console.log("Contact form submission:", contactMessage);

    // Send email notification
    try {
      const transporter = nodemailer.createTransport(emailConfig);

      // Verify connection
      await transporter.verify();
      console.log("Email server connection verified");

      const mailOptions = {
        from: `"Islamabad PestControl Contact Form" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: `New Contact Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1f2937; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
              New Contact Message
            </h2>

            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Customer Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> ${email}</p>
            </div>

            <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <h3 style="color: #92400e; margin-top: 0;">Message:</h3>
              <p style="color: #78350f; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
              <h3 style="color: #065f46; margin-top: 0;">Action Required:</h3>
              <p style="color: #047857;">Please respond to this contact message promptly.</p>
            </div>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            <p style="color: #6b7280; font-size: 12px; text-align: center;">
              This message was sent from the Islamabad PestControl website contact form.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");

    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      // Don't fail the request if email fails, but log it
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
      id: contactMessage.id
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

