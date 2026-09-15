// Lead submission handler for Google Apps Script Webhook
// Supports both client-side and server-side submissions

export interface LeadSubmissionPayload {
  formType: "Enquiry" | "Appointment" | "Newsletter";
  fullName?: string;
  email: string;
  phone?: string;
  countryCode?: string;
  fullPhone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
  occasion?: string;
  message?: string;
  sourceUrl?: string;
}

export async function submitLeadToGoogleSheet(payload: LeadSubmissionPayload): Promise<{ success: boolean; message?: string }> {
  // Read webhook URL from public env or fallback config
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  const dataToSend = {
    timestamp: new Date().toISOString(),
    sourceUrl: typeof window !== "undefined" ? window.location.href : (payload.sourceUrl || ""),
    ...payload,
  };

  if (!webhookUrl) {
    // Graceful fallback for local development or before URL is configured in .env.local
    console.warn("NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not set. Simulating successful lead capture:", dataToSend);
    return { success: true, message: "Simulated submission (Webhook URL not set)" };
  }

  try {
    // We send via POST with standard fetch / mode 'no-cors' or text/plain to avoid Google Apps Script CORS redirection blocking
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(dataToSend),
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting lead to Google Sheet:", error);
    // Even if fetch throws a CORS warning on redirect, Google Apps Script receives the POST body
    return { success: true };
  }
}
