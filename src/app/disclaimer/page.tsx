'use client';

import React from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { BRAND } from '@/data/content';

export default function DisclaimerPage() {
  return (
    <>
      <Header onOpenLeadModal={(_src: string) => {}} />

      <main className="pt-32 pb-24 bg-[#F5F3E6] text-[#1B1717] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 pb-6 border-b border-[#3A1C11]/15">
            <p className="text-xs font-bold text-[#CE793A] uppercase tracking-[0.25em] mb-2">
              STATUTORY & REGULATORY
            </p>
            <h1 className="font-gumani text-3xl sm:text-4xl lg:text-5xl text-[#3A1C11] leading-tight mb-4">
              Project Disclaimer
            </h1>
            <p className="text-xs text-[#1B1717]/60">
              Regulatory Reference: TG RERA Reg. {BRAND.rera} · HMDA Approval {BRAND.hmda}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Statutory Regulatory Credentials
              </h2>
              <p>
                <strong>CODENAME HI-FIVE</strong> is developed by <strong>Kura Homes</strong> and is fully approved by the Hyderabad Metropolitan Development Authority (HMDA Permit No: <strong>{BRAND.hmda}</strong>) and registered under the Telangana Real Estate Regulatory Authority (TG RERA Registration No: <strong>{BRAND.rera}</strong>). Independent verification of all project approvals and quarterly progress filings can be completed directly on the official TG RERA portal at <a href="https://rera.telangana.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#CE793A] underline font-semibold">rera.telangana.gov.in</a>.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Illustrative Financial Estimates & Calculators
              </h2>
              <p>
                All computed costs, monthly net outgo projections (e.g. ~₹9.8K/month*), loan EMIs, interest rates, and rental yield estimations displayed on this website are provided solely for conceptual and illustrative purposes. They do not constitute financial, investment, or taxation advice, nor do they represent a guarantee of capital return, rental income, or property appreciation. Actual home loan eligibility, EMIs, and interest rates vary depending on individual borrower profiles, credit ratings, and lending institution policies.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. Construction Milestones & Handover Schedules
              </h2>
              <p>
                References to construction milestones (e.g., 90% completed, possession soon) reflect real on-site progress and are cross-referenced with periodic quarterly filings submitted to TG RERA. Final completion and handover timelines remain subject to regulatory approvals, government clearances, and standard force majeure circumstances.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Non-Binding Marketing Presentation
              </h2>
              <p>
                This website is intended exclusively for informational and marketing presentation purposes and does not constitute a legal offer, solicitation, or binding contract of sale. The binding agreement between the home buyer and Kura Homes is exclusively governed by the terms set forth in the formally executed Agreement for Sale and registered Sale Deed.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                5. Registered Office & Contact
              </h2>
              <p>
                For official correspondence, title document verification, or project enquiries, please contact the Kura Homes corporate office or visit the on-site sales lounge located at <strong>{BRAND.address}</strong>, or call our sales line at <a href={`tel:${BRAND.phone}`} className="text-[#CE793A] font-semibold underline">{BRAND.phone}</a>.
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
