'use client';

import React from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BRAND } from '@/data/content';

export default function TermsPage() {
  return (
    <>
      <Header onOpenLeadModal={(_src: string) => {}} />

      <main className="pt-32 pb-24 bg-[#F5F3E6] text-[#1B1717] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#3A1C11]/15">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2">
              TERMS OF SERVICE
            </p>
            <h1 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xs text-[#1B1717]/60">
              Last Updated: May 2026 · CODENAME HI-FIVE by Kura Homes
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using this website for <strong>CODENAME HI-FIVE</strong>, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should refrain from using this website.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Visual Media & Architectural Renders
              </h2>
              <p>
                The imagery, 3D architectural renders, floor plan layouts, video walkthroughs, and elevation designs presented on this website are conceptual impressions designed to provide an illustrative representation of CODENAME HI-FIVE. The final layout, materials, landscape features, specifications, and fixtures are governed strictly by the approved HMDA sanction (Permit: <strong>{BRAND.hmda}</strong>), TG RERA filings (Reg: <strong>{BRAND.rera}</strong>), and the formal Agreement of Sale executed between the buyer and Kura Homes.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. Pricing, Availability & Unit Allocation
              </h2>
              <p>
                All unit prices, floor premiums, square-footage measurements (1,100–1,285 sq.ft for 2 BHK; 1,850–2,200 sq.ft for Duplex), promotional payment terms, and inventory availability are subject to change without prior notice at the sole discretion of Kura Homes. An official unit reservation is confirmed only upon completion of the booking application, receipt of the booking advance, and execution of the Agreement for Sale.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Intellectual Property Rights
              </h2>
              <p>
                All brand marks, logos, typography, visual layouts, website copy, architectural renders, project videos, and digital assets associated with CODENAME HI-FIVE and Kura Homes are the exclusive intellectual property of Kura Homes. Any unauthorized reproduction, framing, republication, or distribution without prior written consent is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                Kura Homes and its affiliates make reasonable efforts to maintain accurate and up-to-date information on this website. However, we do not warrant that the website will be uninterrupted or error-free. In no event shall Kura Homes be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms & Conditions and any disputes or claims arising out of or related to this website or real estate transactions for CODENAME HI-FIVE shall be governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.
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
