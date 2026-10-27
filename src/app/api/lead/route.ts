
import { NextResponse } from 'next/server';

const DEFAULT_GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbxvYY4X40FrHqe4bN4qU-1ryD82F_K_3tZECrlfVxtLyxa0oh8EVUyiH8ju-Q7eU1S3/exec';

const DEFAULT_PRIVYR_URL =
  'https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/5qFshIIw';

const NESTBOOKINGS_WEBHOOK_URL =
  process.env.NESTBOOKINGS_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      requirement,
      homeType,
      timeline,
      budget,
      date,
      source,
      role,
      experience,
      type,
    } = body;

    // Clean and normalize input values
    const nameClean = name ? String(name).trim() : '';
    const phoneClean = phone ? String(phone).trim() : '';
    const roleClean = role ? String(role).trim() : '';
    const homeTypeClean = homeType ? String(homeType).trim() : '';
    const timelineClean = timeline ? String(timeline).trim() : '';
    const budgetClean = budget ? String(budget).trim() : '';
    const experienceClean = experience
      ? String(experience).trim()
      : '';
    const sourceClean = source
      ? String(source).trim()
      : 'Website Enquiry';
    const dateClean = date ? String(date).trim() : '';

    const isCareer =
      type === 'career' ||
      sourceClean.toLowerCase().includes('career');

    // Build qualification summary
    const intentParts = [
      homeTypeClean ? `Type: ${homeTypeClean}` : '',
      timelineClean ? `Timeline: ${timelineClean}` : '',
      budgetClean ? `Budget: ${budgetClean}` : '',
    ].filter(Boolean);

    const intentSummary = intentParts.join(' | ');

    const requirementClean = requirement
      ? String(requirement).trim()
      : '';

    const finalRequirement = requirementClean
      ? `${requirementClean}${
          intentSummary ? ` (${intentSummary})` : ''
        }`
      : intentSummary;

    // Indian Standard Time timestamp
    const istTimestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
    });

    // Sheet1: Project Leads
    // Sheet2: Sales Executive Applications
    // Sheet3: Channel Partner Applications
    let targetSheet = 'Sheet1';

    if (isCareer) {
      const roleLower = roleClean.toLowerCase();

      if (
        roleLower.includes('partner') ||
        roleLower.includes('channel')
      ) {
        targetSheet = 'Sheet3';
      } else {
        targetSheet = 'Sheet2';
      }
    }

    // Shared lead payload
    const payload = {
      name: nameClean,
      phone: phoneClean,
      homeType: homeTypeClean,
      timeline: timelineClean,
      budget: budgetClean,
      requirement: finalRequirement,
      role: roleClean,
      experience: experienceClean,
      source: sourceClean,
      type: isCareer ? 'career' : 'project',
      targetSheet,
      date: dateClean,
      timestamp: istTimestamp,
    };

    console.log('[LEAD CAPTURED]:', {
      ...payload,
      phone: phoneClean ? '[REDACTED]' : '',
    });

    const dispatches: Promise<void>[] = [];

    // 1. Google Sheets
    const googleSheetWebhook =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      DEFAULT_GOOGLE_SHEET_URL;

    if (googleSheetWebhook) {
      dispatches.push(
        (async () => {
          const response = await fetch(googleSheetWebhook, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            redirect: 'follow',
            signal: AbortSignal.timeout(15000),
          });

          const responseText = await response.text();

          if (!response.ok) {
            throw new Error(
              `Google Sheets HTTP ${response.status}: ${responseText}`
            );
          }

          console.log(
            '[GOOGLE SHEETS SYNC SUCCESS]:',
            responseText
          );
        })().catch((error: unknown) => {
          console.error('[GOOGLE SHEETS SYNC ERROR]:', error);
        })
      );
    }

    // 2. Privyr CRM
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
        (async () => {
          const response = await fetch(privyrWebhook, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(privyrPayload),
            signal: AbortSignal.timeout(15000),
          });

          const responseText = await response.text();

          if (!response.ok) {
            throw new Error(
              `Privyr HTTP ${response.status}: ${responseText}`
            );
          }

          console.log(
            '[PRIVYR CRM SYNC SUCCESS]:',
            responseText
          );
        })().catch((error: unknown) => {
          console.error('[PRIVYR CRM SYNC ERROR]:', error);
        })
      );
    }

    // 3. NestBookings CRM

    
const webhookUrl = process.env.NESTBOOKINGS_WEBHOOK_URL;
const apiToken = process.env.NESTBOOKINGS_API_TOKEN;

let urlHasToken = false;
let webhookPath = 'invalid-url';

try {
  if (webhookUrl) {
    const parsedUrl = new URL(webhookUrl);
    urlHasToken = parsedUrl.searchParams.has('token');
    webhookPath = parsedUrl.pathname;
  }
} catch {
  console.error('[NESTBOOKINGS DEBUG] Webhook URL is invalid.');
}

console.log('[NESTBOOKINGS DEBUG]', {
  urlConfigured: Boolean(webhookUrl),
  webhookPath,
  urlHasToken,
  apiTokenConfigured: Boolean(apiToken),
  apiTokenHasWhitespace: apiToken
    ? apiToken !== apiToken.trim()
    : false,
});

    console.log('[NESTBOOKINGS AUTH CHECK]', {
  urlConfigured: Boolean(NESTBOOKINGS_WEBHOOK_URL),
  apiTokenConfigured: Boolean(process.env.NESTBOOKINGS_API_TOKEN),
  authorizationScheme: 'Bearer',
});
    
    if (NESTBOOKINGS_WEBHOOK_URL) {
      const nestBookingsPayload = {
        name: payload.name,
        phone: payload.phone,
        source: payload.source,
        requirement: payload.requirement,
        homeType: payload.homeType,
        timeline: payload.timeline,
        budget: payload.budget,
        role: payload.role,
        experience: payload.experience,
        type: payload.type,
        targetSheet: payload.targetSheet,
        date: payload.date,
        timestamp: payload.timestamp,
      };

      dispatches.push(
        (async () => {

          
          const response = await fetch(
            NESTBOOKINGS_WEBHOOK_URL,
            {
              method: 'POST',
             headers: {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: `Bearer ${process.env.NESTBOOKINGS_API_TOKEN}`,
},
              body: JSON.stringify(nestBookingsPayload),
              signal: AbortSignal.timeout(10000),
            }
          );

          const responseText = await response.text();

          if (!response.ok) {
            throw new Error(
              `NestBookings HTTP ${response.status}: ${responseText}`
            );
          }

          console.log(
            '[NESTBOOKINGS SYNC SUCCESS]:',
            response.status,
            responseText
          );
        })().catch((error: unknown) => {
          console.error('[NESTBOOKINGS SYNC ERROR]:', error);
        })
      );
    } else {
      console.warn(
        '[NESTBOOKINGS] NESTBOOKINGS_WEBHOOK_URL is not configured.'
      );
    }

    // Wait for all webhook requests before returning
    await Promise.all(dispatches);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Our team will connect with you shortly.',
    });
  } catch (error: unknown) {
    console.error('[LEAD SUBMISSION ERROR]:', error);

    return NextResponse.json(
      {
        success: false,
        error:
          'Failed to submit enquiry. Please call us directly at 800 800 8946.',
      },
      { status: 500 }
    );
  }
}
