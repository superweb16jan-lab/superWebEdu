import { NextRequest, NextResponse } from "next/server";
import { 
  sendTelegramNotification, 
  sendEmailNotification, 
  saveToGoogleSheet, 
  EnquiryPayload 
} from "@/lib/notifications";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, course, university, city, message, source } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const payload: EnquiryPayload = {
      name: String(name).trim(),
      phone: String(phone).trim(),
      email: email ? String(email).trim() : undefined,
      course: String(course || "BCA").trim(),
      university: String(university || "Mangalayatan University").trim(),
      city: city ? String(city).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      source: source ? String(source).trim() : "Website Query Form",
    };

    console.log("[New Lead Received]:", payload);

    // Concurrently trigger Google Sheets storage, Telegram alert, and Email notification
    const [sheetResult, telegramResult, emailResult] = await Promise.allSettled([
      saveToGoogleSheet(payload),
      sendTelegramNotification(payload),
      sendEmailNotification(payload),
    ]);

    const sheetStatus = sheetResult.status === "fulfilled" ? sheetResult.value : { success: false, error: sheetResult.reason };
    const telegramStatus = telegramResult.status === "fulfilled" ? telegramResult.value : { success: false, error: telegramResult.reason };
    const emailStatus = emailResult.status === "fulfilled" ? emailResult.value : { success: false, error: emailResult.reason };

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully! Our counseling team will contact you shortly.",
      services: {
        googleSheet: sheetStatus,
        telegram: telegramStatus,
        email: emailStatus,
      },
    });
  } catch (error: any) {
    console.error("[Enquiry API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process enquiry. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
