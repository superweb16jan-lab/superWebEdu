import nodemailer from "nodemailer";

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  course: string;
  university: string;
  city?: string;
  message?: string;
  source?: string;
}

/**
 * Saves enquiry details into Google Sheets using Google Apps Script Webhook
 */
export async function saveToGoogleSheet(payload: EnquiryPayload): Promise<{ success: boolean; error?: string }> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SCRIPT_URL;

  if (!webhookUrl) {
    console.warn("[Google Sheet Notification] GOOGLE_SHEET_WEBHOOK_URL not configured in environment variables.");
    return { success: false, error: "GOOGLE_SHEET_WEBHOOK_URL not configured" };
  }

  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  const formattedTime = now.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

  const sheetData = {
    date: formattedDate,
    time: formattedTime,
    timestamp: `${formattedDate} ${formattedTime}`,
    name: payload.name,
    phone: payload.phone,
    email: payload.email || "",
    course: payload.course,
    university: payload.university,
    city: payload.city || "",
    message: payload.message || "",
    source: payload.source || "Website Query Form",
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(sheetData),
      redirect: "follow",
    });

    if (!response.ok && response.status !== 302 && response.status !== 200) {
      console.error("[Google Sheet Error] HTTP status:", response.status);
      return { success: false, error: `Google Sheet responded with status ${response.status}` };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Network error while sending to Google Sheet";
    console.error("[Google Sheet Network Error]", err);
    return { success: false, error: errorMsg };
  }
}

/**
 * Sends a Telegram notification using Telegram Bot API
 */
export async function sendTelegramNotification(payload: EnquiryPayload): Promise<{ success: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.warn("[Telegram Notification] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured in environment variables.");
    return { success: false, error: "Credentials not configured" };
  }

  const cleanPhone = payload.phone.replace(/[^0-9+]/g, "");
  const waLink = `https://wa.me/${cleanPhone.startsWith("+") ? cleanPhone.slice(1) : cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone}`;

  const messageText = `
🎓 *NEW ADMISSION QUERY RECEIVED!*
━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${escapeMarkdown(payload.name)}
📱 *Phone:* [${escapeMarkdown(payload.phone)}](tel:${cleanPhone})
📧 *Email:* ${payload.email ? escapeMarkdown(payload.email) : "Not Provided"}
📚 *Course:* ${escapeMarkdown(payload.course)}
🏛️ *University:* ${escapeMarkdown(payload.university)}
📍 *City:* ${payload.city ? escapeMarkdown(payload.city) : "Not Specified"}
📝 *Message:* ${payload.message ? escapeMarkdown(payload.message) : "Direct enquiry via website"}
📍 *Source:* ${payload.source || "Website Query Form"}
🕒 *Date:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
━━━━━━━━━━━━━━━━━━━━━
💬 [Click to Chat on WhatsApp](${waLink})
  `.trim();

  try {
    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "Markdown",
        disable_web_page_preview: true,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) {
      console.error("[Telegram Notification Error]", data);
      return { success: false, error: data.description || "Failed to send Telegram message" };
    }

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Network error";
    console.error("[Telegram Notification Network Error]", err);
    return { success: false, error: errorMsg };
  }
}

/**
 * Sends an email notification using Nodemailer SMTP
 */
export async function sendEmailNotification(payload: EnquiryPayload): Promise<{ success: boolean; error?: string }> {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;

  if (!host || !user || !pass || !recipientEmail) {
    console.warn("[Email Notification] SMTP configuration (SMTP_HOST, SMTP_USER, SMTP_PASS, NOTIFICATION_EMAIL) not configured.");
    return { success: false, error: "SMTP credentials not configured" };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
      user,
      pass,
    },
  });

  const formattedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  const cleanPhone = payload.phone.replace(/[^0-9+]/g, "");
  const waLink = `https://wa.me/${cleanPhone.startsWith("+") ? cleanPhone.slice(1) : cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone}`;

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Admission Enquiry</title>
  </head>
  <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 24px 12px; margin: 0;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e2e8f0; border-collapse: collapse; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <tr>
        <td style="background-color: #102957; padding: 20px 24px; text-align: left;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">superWebEdu</h1>
          <p style="color: #bfdbfe; margin: 4px 0 0 0; font-size: 13px;">New Student Admission Query Desk</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 24px;">
          <p style="font-size: 15px; color: #334155; margin-top: 0;">You have received a new admission lead from <strong>${payload.source || "Website Query Form"}</strong>:</p>
          
          <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; font-size: 14px; margin: 16px 0;">
            <tr style="background-color: #f1f5f9;">
              <td style="width: 35%; font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">Student Name:</td>
              <td style="font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${payload.name}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">Phone Number:</td>
              <td style="font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                <a href="tel:${cleanPhone}" style="color: #102957; text-decoration: none;">${payload.phone}</a>
              </td>
            </tr>
            <tr style="background-color: #f1f5f9;">
              <td style="font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">Email Address:</td>
              <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                ${payload.email ? `<a href="mailto:${payload.email}" style="color: #102957; text-decoration: none;">${payload.email}</a>` : "Not Provided"}
              </td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">Selected Course:</td>
              <td style="font-weight: 700; color: #c52227; border-bottom: 1px solid #e2e8f0;">${payload.course}</td>
            </tr>
            <tr style="background-color: #f1f5f9;">
              <td style="font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">Preferred University:</td>
              <td style="font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0;">${payload.university}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">City / Location:</td>
              <td style="color: #0f172a; border-bottom: 1px solid #e2e8f0;">${payload.city || "Not Specified"}</td>
            </tr>
            <tr style="background-color: #f1f5f9;">
              <td style="font-weight: 700; color: #475569; border-bottom: 1px solid #e2e8f0;">Remarks / Query:</td>
              <td style="color: #334155; border-bottom: 1px solid #e2e8f0;">${payload.message || "Direct enquiry"}</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Received At:</td>
              <td style="color: #64748b;">${formattedDate} IST</td>
            </tr>
          </table>

          <div style="margin-top: 24px; text-align: center;">
            <a href="${waLink}" style="display: inline-block; background-color: #15803d; color: #ffffff; text-decoration: none; padding: 12px 24px; font-weight: 700; font-size: 14px;">Chat with Student on WhatsApp</a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f8fafc; padding: 14px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          superWebEdu Automated Lead Notification &copy; ${new Date().getFullYear()}
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"superWebEdu Leads" <${user}>`,
      to: recipientEmail,
      subject: `🎓 New Lead: ${payload.name} - ${payload.course} (${payload.university})`,
      text: `New Lead Received:\nName: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email || "N/A"}\nCourse: ${payload.course}\nUniversity: ${payload.university}\nCity: ${payload.city || "N/A"}\nQuery: ${payload.message || "N/A"}\nSource: ${payload.source || "Website"}`,
      html: htmlContent,
    });

    return { success: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Failed to send email";
    console.error("[Email Notification Error]", err);
    return { success: false, error: errorMsg };
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}
