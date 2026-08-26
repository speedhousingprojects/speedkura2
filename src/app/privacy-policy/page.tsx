'use client';

import React from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BRAND } from '@/data/content';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header onOpenLeadModal={(_src: string) => {}} />

      <main className="pt-32 pb-24 bg-[#F5F3E6] text-[#1B1717] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#3A1C11]/15">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2">
              LEGAL & PRIVACY
            </p>
            <h1 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#1B1717]/60">
              Last Updated: May 2026 · CODENAME HI-FIVE by Kura Homes
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Overview & Commitment
              </h2>
              <p>
                Kura Homes (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information when you access our marketing website for <strong>CODENAME HI-FIVE</strong> (located adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Gandimaisamma, Hyderabad, Telangana 500043) or submit your contact details for project enquiries, brochure downloads, or site visit scheduling.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Information We Collect
              </h2>
              <p>When you interact with our website, request a cost sheet, or submit an enquiry form, we may collect the following personal information:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Contact Information:</strong> Full Name, Mobile Phone Number, and Email Address.</li>
                <li><strong>Property Preferences:</strong> Configuration interest (2 BHK Smart Luxe or Duplex Suite), budget preferences, and preferred site visit date/time.</li>
                <li><strong>Technical & Usage Data:</strong> IP address, browser type, operating system, device identifiers, and page interaction metrics collected via web analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. How We Use Your Information
              </h2>
              <p>The information we collect is used exclusively for legitimate business and customer service purposes, including to:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Provide accurate pricing, cost breakdowns, and floor plan blueprints for CODENAME HI-FIVE.</li>
                <li>Coordinate and confirm complimentary on-site private tours and model home walkthroughs.</li>
                <li>Communicate project milestones, construction updates, and official handover timelines via phone, SMS, WhatsApp, or email.</li>
                <li>Fulfill statutory compliance requirements under the Telangana Real Estate Regulatory Authority (TG RERA Reg: <strong>{BRAND.rera}</strong>).</li>
              </ul>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Data Protection & Confidentiality
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third-party marketing companies. Your data is stored securely and accessed strictly by authorized Kura Homes sales advisors, relationship managers, and technical personnel assisting with your property purchase.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                5. Third-Party Analytics & Pixels
              </h2>
              <p>
                We may use industry-standard web analytics tools (such as Google Analytics and Google Ads) to understand traffic patterns and optimize user experience. These tools may use cookies to gather non-personally identifiable technical usage metrics. You can control or disable cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                6. Opt-Out & Contact Information
              </h2>
              <p>
                If you wish to update your contact details or opt out of promotional communications, you may reach our customer relations desk directly at <a href={`tel:${BRAND.phone}`} className="text-[#CE793A] font-semibold underline">{BRAND.phone}</a> / <a href={`tel:${BRAND.phoneAlt}`} className="text-[#CE793A] font-semibold underline">{BRAND.phoneAlt}</a> or email us at <a href={`mailto:${BRAND.email}`} className="text-[#CE793A] font-semibold underline">{BRAND.email}</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
