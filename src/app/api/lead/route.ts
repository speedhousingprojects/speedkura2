import { NextResponse } from 'next/server';

const DEFAULT_GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxvYY4X40FrHqe4bN4qU-1ryD82F_K_3tZECrlfVxtLyxa0oh8EVUyiH8ju-Q7eU1S3/exec';

const DEFAULT_PRIVYR_URL =
  'https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/5qFshIIw';

const DEFAULT_NESTBOOKINGS_URL =
  'https://nestbookings.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, requirement, homeType, timeline, budget, date, source, role, experience, type } = body;

    const roleClean = role ? String(role).trim() : '';
    const homeTypeClean = homeType ? String(homeType).trim() : '';
    const timelineClean = timeline ? String(timeline).trim() : '';
    const budgetClean = budget ? String(budget).trim() : '';
    const emailClean = email ? String(email).trim() : '';
    const isCareer = type === 'career' || String(source || '').toLowerCase().includes('career');

    // Build clear qualification intent summary (for backwards compatibility with existing sheet columns & CRM)
    const intentParts = [
      homeTypeClean ? `Type: ${homeTypeClean}` : '',
      timelineClean ? `Timeline: ${timelineClean}` : '',
      budgetClean ? `Budget: ${budgetClean}` : '',
    ].filter(Boolean);
    const intentSummary = intentParts.join(' | ');

    const finalRequirement = requirement
      ? `${String(requirement).trim()}${intentSummary ? ` (${intentSummary})` : ''}`
      : intentSummary;

    // Always generate clean Indian Standard Time (IST) timestamp: e.g. "26/8/2026, 6:15:55 pm"
    const istTimestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
    });

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
      email: emailClean,
      homeType: homeTypeClean,
      timeline: timelineClean,
      budget: budgetClean,
      requirement: finalRequirement,
      role: roleClean,
      experience: experience ? String(experience).trim() : '',
      source: source ? String(source).trim() : 'Website Enquiry',
      type: isCareer ? 'career' : 'project',
      targetSheet,
      date: date ? String(date).trim() : '',
      timestamp: istTimestamp,
    };

    console.log('[LEAD CAPTURED]:', payload);

    const dispatches: Promise<any>[] = [];

    // 1. Forward to Google Sheets Webhook
    const googleSheetWebhook =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      DEFAULT_GOOGLE_SHEET_URL;

    if (googleSheetWebhook) {
      dispatches.push(
        fetch(googleSheetWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        })
          .then((res) => res.text())
          .then((resText) => console.log('[GOOGLE SHEETS SYNC SUCCESS]:', resText))
          .catch((err) => console.error('[GOOGLE SHEETS SYNC ERROR]:', err))
      );
    }

    // 2. Forward to Privyr CRM Webhook
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

      dispatches.push(
        fetch(privyrWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(privyrPayload),
        })
          .then((res) => res.json())
          .then((resJson) => console.log('[PRIVYR CRM SYNC SUCCESS]:', resJson))
          .catch((err) => console.error('[PRIVYR CRM SYNC ERROR]:', err))
      );
    }

    // 3. Forward to NestBookings CRM Webhook (Google Webhook Structure)
    const nestbookingsWebhook =
      process.env.NESTBOOKINGS_WEBHOOK_URL ||
      DEFAULT_NESTBOOKINGS_URL;

    if (nestbookingsWebhook) {
      const nestbookingsPayload = {
        lead_id: `web_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        user_column_data: [
          { column_name: 'Full Name', string_value: payload.name },
          { column_name: 'User Email', string_value: payload.email },
          { column_name: 'User Phone', string_value: payload.phone },
          { column_name: 'Requirement', string_value: payload.requirement },
          { column_name: 'Source', string_value: payload.source }
        ],
        google_key: 'nestbookings-auth'
      };

      dispatches.push(
        fetch(nestbookingsWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nestbookingsPayload),
        })
          .then(async (res) => {
            const data = res.headers.get('content-type')?.includes('application/json')
              ? await res.json()
              : await res.text();
            console.log('[NESTBOOKINGS CRM SYNC SUCCESS]:', data);
          })
          .catch((err) => console.error('[NESTBOOKINGS CRM SYNC ERROR]:', err))
      );
    }

    // CRITICAL FOR VERCEL SERVERLESS: Wait for webhooks to finish BEFORE returning response!
    await Promise.allSettled(dispatches);

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
