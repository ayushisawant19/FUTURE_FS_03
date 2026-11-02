import { EnquirySubmission } from '@/types';
import { siteConfig } from '@/config/site';

export interface NotificationResult {
  emailSent: boolean;
  whatsappSent: boolean;
  emailDetails?: string;
  whatsappDetails?: string;
}

/**
 * Sends notification emails and WhatsApp alerts on new enquiries.
 * Features graceful fallbacks if API keys (Resend/Twilio/WhatsApp) are not set.
 */
export async function sendEnquiryNotifications(enquiry: EnquirySubmission): Promise<NotificationResult> {
  let emailSent = false;
  let whatsappSent = false;
  let emailDetails = "";
  let whatsappDetails = "";

  // 1. EMAIL NOTIFICATION
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const ownerEmail = process.env.OWNER_EMAIL || siteConfig.contact.email;

    const emailSubject = `🎁 New Riwayat Hamper Enquiry [${enquiry.referenceNumber}]: ${enquiry.occasion}`;
    const emailHtml = generateLuxuryEmailHtml(enquiry);

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'Riwayat Atelier <orders@riwayat-gifting.com>',
          to: [ownerEmail, enquiry.customerEmail],
          subject: emailSubject,
          html: emailHtml,
        }),
      });

      if (res.ok) {
        emailSent = true;
        emailDetails = `Email delivered via Resend to ${ownerEmail} and ${enquiry.customerEmail}`;
      } else {
        const errorText = await res.text();
        emailDetails = `Resend API returned error: ${errorText}`;
      }
    } else {
      // Graceful fallback: simulated delivery in dev/demo
      console.log(`[Notification Fallback] Resend API key not configured. Simulating email send for enquiry ${enquiry.referenceNumber}:`);
      console.log(`[Email to Owner & Customer] Subject: ${emailSubject}`);
      emailSent = true;
      emailDetails = `Simulated email send for reference ${enquiry.referenceNumber} (set RESEND_API_KEY in .env.local for production)`;
    }
  } catch (err) {
    emailDetails = `Email notification failed: ${err instanceof Error ? err.message : String(err)}`;
  }

  // 2. WHATSAPP NOTIFICATION
  try {
    const isWhatsappEnabled = process.env.WHATSAPP_NOTIFICATIONS_ENABLED === 'true';
    const whatsappToken = process.env.WHATSAPP_ACCESS_TOKEN;
    const whatsappPhoneId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const ownerPhone = process.env.OWNER_WHATSAPP || siteConfig.contact.whatsappNumber;

    const whatsappMessage = 
      `✨ *NEW BESPOKE ENQUIRY - RIWAYAT PUNE*\n\n` +
      `*Ref:* ${enquiry.referenceNumber}\n` +
      `*Customer:* ${enquiry.customerName} (${enquiry.customerPhone})\n` +
      `*Recipient:* ${enquiry.recipientName}\n` +
      `*Occasion:* ${enquiry.occasion}\n` +
      `*Budget:* ${enquiry.budgetBracket}\n` +
      `*Delivery Date:* ${enquiry.deliveryDate}\n` +
      `*Address:* ${enquiry.deliveryAddress}\n` +
      `*Calligraphy Note:* "${enquiry.messageCardText || 'Standard'}"\n\n` +
      `_Reply to customer on WhatsApp or open Admin Portal to share itemized quote._`;

    if (isWhatsappEnabled && whatsappToken && whatsappPhoneId) {
      // WhatsApp Cloud API (Meta Graph API)
      const res = await fetch(`https://graph.facebook.com/v19.0/${whatsappPhoneId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${whatsappToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: ownerPhone.replace(/[^0-9]/g, ''),
          type: 'text',
          text: { body: whatsappMessage },
        }),
      });

      if (res.ok) {
        whatsappSent = true;
        whatsappDetails = `WhatsApp alert sent via Cloud API to ${ownerPhone}`;
      } else {
        const errorText = await res.text();
        whatsappDetails = `WhatsApp Cloud API error: ${errorText}`;
      }
    } else {
      // Graceful fallback
      console.log(`[Notification Fallback] WhatsApp credentials not configured. Simulating WhatsApp alert for ${enquiry.referenceNumber}:`);
      console.log(whatsappMessage);
      whatsappSent = true;
      whatsappDetails = `Simulated WhatsApp notification (enable WHATSAPP_NOTIFICATIONS_ENABLED=true in .env.local for live API)`;
    }
  } catch (err) {
    whatsappDetails = `WhatsApp notification failed: ${err instanceof Error ? err.message : String(err)}`;
  }

  return { emailSent, whatsappSent, emailDetails, whatsappDetails };
}

/**
 * Generates an haute-couture branded HTML email template
 */
function generateLuxuryEmailHtml(enquiry: EnquirySubmission): string {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Riwayat Hamper Enquiry ${enquiry.referenceNumber}</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #FAF7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #231D20;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF7F2; padding: 40px 10px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(109,26,43,0.1); border: 1px solid #ECE3D7;">
            
            <!-- Header Banner -->
            <tr>
              <td style="background: linear-gradient(135deg, #54111F 0%, #6D1A2B 50%, #3D0915 100%); padding: 36px 30px; text-align: center;">
                <h1 style="margin: 0; font-family: Georgia, serif; font-size: 32px; color: #FFFFFF; letter-spacing: 1px;">Riwayat</h1>
                <p style="margin: 6px 0 0 0; font-family: 'Brush Script MT', cursive, serif; font-size: 18px; color: #D4AF37;">Gifting, curated with love.</p>
                <div style="display: inline-block; margin-top: 16px; padding: 6px 16px; border-radius: 20px; background-color: rgba(212,175,55,0.2); border: 1px solid rgba(212,175,55,0.4); color: #F3ECC4; font-size: 12px; font-weight: bold; letter-spacing: 1px;">
                  BESPOKE ENQUIRY: ${enquiry.referenceNumber}
                </div>
              </td>
            </tr>

            <!-- Body Content -->
            <tr>
              <td style="padding: 36px 30px;">
                <p style="font-size: 15px; line-height: 1.6; color: #383034; margin-top: 0;">
                  Warm greetings from <strong>Riwayat</strong> in Pune. We have received your custom hamper enquiry and our styling team is already reviewing your preferences.
                </p>

                <!-- Order Details Card -->
                <table width="100%" cellpadding="12" cellspacing="0" style="background-color: #FAF7F2; border-radius: 16px; border: 1px solid #ECE3D7; margin: 24px 0; font-size: 13px;">
                  <tr>
                    <td width="35%" style="color: #73686E; border-bottom: 1px solid #ECE3D7;"><strong>Customer:</strong></td>
                    <td style="color: #231D20; border-bottom: 1px solid #ECE3D7;">${enquiry.customerName} (${enquiry.customerPhone})</td>
                  </tr>
                  <tr>
                    <td style="color: #73686E; border-bottom: 1px solid #ECE3D7;"><strong>Recipient:</strong></td>
                    <td style="color: #231D20; border-bottom: 1px solid #ECE3D7;">${enquiry.recipientName}</td>
                  </tr>
                  <tr>
                    <td style="color: #73686E; border-bottom: 1px solid #ECE3D7;"><strong>Occasion:</strong></td>
                    <td style="color: #231D20; border-bottom: 1px solid #ECE3D7;">${enquiry.occasion}</td>
                  </tr>
                  <tr>
                    <td style="color: #73686E; border-bottom: 1px solid #ECE3D7;"><strong>Budget Bracket:</strong></td>
                    <td style="color: #231D20; border-bottom: 1px solid #ECE3D7;">${enquiry.budgetBracket}</td>
                  </tr>
                  <tr>
                    <td style="color: #73686E; border-bottom: 1px solid #ECE3D7;"><strong>Delivery Date (Pune):</strong></td>
                    <td style="color: #6D1A2B; font-weight: bold; border-bottom: 1px solid #ECE3D7;">${enquiry.deliveryDate}</td>
                  </tr>
                  <tr>
                    <td style="color: #73686E; border-bottom: 1px solid #ECE3D7;"><strong>Delivery Address:</strong></td>
                    <td style="color: #231D20; border-bottom: 1px solid #ECE3D7;">${enquiry.deliveryAddress}</td>
                  </tr>
                  ${enquiry.messageCardText ? `
                  <tr>
                    <td style="color: #73686E;"><strong>Calligraphy Card:</strong></td>
                    <td style="color: #231D20; font-style: italic;">"${enquiry.messageCardText}"</td>
                  </tr>
                  ` : ''}
                </table>

                <div style="background-color: #FAF2F4; border-left: 4px solid #6D1A2B; padding: 14px 18px; border-radius: 8px; margin: 24px 0; font-size: 13px; color: #54111F;">
                  <strong>Next Step:</strong> Our founder will share your bespoke itemized quote along with packaging coordinates and a secure Razorpay payment link within 2–4 hours.
                </div>

                <p style="font-size: 13px; line-height: 1.6; color: #544A4F;">
                  Need to make immediate additions or talk to us directly? Connect with us on Instagram at <a href="${siteConfig.contact.instagramProfileUrl}" style="color: #6D1A2B; font-weight: bold; text-decoration: none;">${siteConfig.contact.instagramHandle}</a> or WhatsApp at <a href="${siteConfig.contact.whatsappUrl}" style="color: #6D1A2B; font-weight: bold; text-decoration: none;">${siteConfig.contact.whatsappDisplay}</a>.
                </p>

                <p style="font-size: 14px; margin-top: 32px; color: #383034;">
                  With royal love & care,<br>
                  <strong style="color: #6D1A2B; font-family: Georgia, serif; font-size: 16px;">The Riwayat Atelier Team</strong><br>
                  <span style="font-size: 12px; color: #73686E;">Pune, Maharashtra, India</span>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #F5EFE8; padding: 20px 30px; text-align: center; font-size: 11px; color: #73686E; border-top: 1px solid #ECE3D7;">
                © 2026 Riwayat Curated Gifting • Koregaon Park & Baner, Pune • All rights reserved.
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
