import { NextResponse } from 'next/server';

const DEFAULT_GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxvYY4X40FrHqe4bN4qU-1ryD82F_K_3tZECrlfVxtLyxa0oh8EVUyiH8ju-Q7eU1S3/exec';

const DEFAULT_PRIVYR_URL =
  'https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/5qFshIIw';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, requirement, date, source, role, experience, type, timestamp } = body;

    const roleClean = role ? String(role).trim() : '';
    const isCareer = type === 'career' || String(source || '').toLowerCase().includes('career');

    // 3 Sheets Routing Classification:
    // Sheet1 -> Project Leads
    // Sheet2 -> Sales Executive Applications
    // Sheet3 -> Channel Partner Applications
    let targetSheet = 'Sheet1';
    if (isCareer) {
      if (roleClean.toLowerCase().includes('partner') || roleClean.toLowerCase().includes('channel')) {
        targetSheet = 'Sheet3';
      } else {
        targetSheet = 'Sheet2';
      }
    }

    const payload = {
      name: name ? String(name).trim() : '',
      phone: phone ? String(phone).trim() : '',
      requirement: requirement ? String(requirement).trim() : '',
      role: roleClean,
      experience: experience ? String(experience).trim() : '',
      source: source ? String(source).trim() : 'Website Enquiry',
      type: isCareer ? 'career' : 'project',
      targetSheet,
      date: date ? String(date).trim() : '',
      timestamp: timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    console.log('[LEAD CAPTURED]:', payload);

    // 1. Forward to Google Sheets Webhook (Environment Variable OR Fallback)
    const googleSheetWebhook =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      DEFAULT_GOOGLE_SHEET_URL;

    if (googleSheetWebhook) {
      fetch(googleSheetWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      })
        .then((res) => res.text())
        .then((resText) => console.log('[GOOGLE SHEETS SYNC SUCCESS]:', resText))
        .catch((err) => console.error('[GOOGLE SHEETS SYNC ERROR]:', err));
    }

    // 2. Forward to Privyr CRM Webhook (Environment Variable OR Fallback)
    const privyrWebhook =
      process.env.PRIVYR_WEBHOOK_URL ||
      DEFAULT_PRIVYR_URL;

    if (privyrWebhook) {
      const privyrPayload = {
        name: payload.name,
        phone: payload.phone,
        notes: payload.role
          ? `Role: ${payload.role} | Exp: ${payload.experience}`
          : payload.requirement,
        source: payload.source,
      };

      fetch(privyrWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(privyrPayload),
      })
        .then((res) => res.json())
        .then((resJson) => console.log('[PRIVYR CRM SYNC SUCCESS]:', resJson))
        .catch((err) => console.error('[PRIVYR CRM SYNC ERROR]:', err));
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our team will connect with you shortly.',
    });
  } catch (error) {
    console.error('[LEAD SUBMISSION ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit enquiry. Please call us directly at 800 800 8946.' },
      { status: 500 }
    );
  }
}
