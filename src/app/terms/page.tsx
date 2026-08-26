'use client';

import React, { useState } from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import StickyMobileDock from '@/components/ui/StickyMobileDock';
import Modals from '@/components/ui/Modals';
import { BRAND } from '@/data/content';

export default function TermsPage() {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalTitle, setLeadModalTitle] = useState('Book Private Site Visit');
  const [leadModalSubtitle, setLeadModalSubtitle] = useState(
    'Experience 5.3 acres of luxury, 40+ amenities & 90% built structures at ORR Exit-5.'
  );
  const [leadModalSource, setLeadModalSource] = useState('Terms Page');

  const handleOpenLeadModal = (source: string, title?: string) => {
    setLeadModalSource(source || 'Terms Page');
    if (title) setLeadModalTitle(title);
    setLeadModalOpen(true);
  };

  return (
    <>
      <Header onOpenLeadModal={handleOpenLeadModal} />

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
              Effective Date: May 2026 · CODENAME HI-FIVE by Kura Homes
            </p>
          </div>

          {/* Content Body */}
          <div className="prose prose-stone max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#1B1717]/85 font-light">
            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using this website.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                2. Intellectual Property Rights
              </h2>
              <p>
                All content displayed on this website—including architectural renders, floor plan blueprints, elevation designs, copy, branding lockups, and videos—is the exclusive intellectual property of Kura Homes or its licensed partners. Unauthorized reproduction, distribution, or modification of any material without express written consent is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                3. Accuracy of Marketing Renders & Specifications
              </h2>
              <p>
                Visual representations, 3D architectural walkthroughs, render perspectives, and interior design concepts displayed on this website are artistic impressions meant to illustrate the design intent of CODENAME HI-FIVE. Final structural finishes, fixtures, landscaping details, and amenity specifications are governed exclusively by the TG RERA registered specifications and the executed Sale Agreement.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                4. Pricing & Unit Availability
              </h2>
              <p>
                All prices mentioned (such as 2 BHK starting from ₹59 Lakhs*) are subject to change without prior notice depending on unit orientation, floor rise, premium location charges (PLC), and availability at the time of booking. Official unit allocation is confirmed only upon payment of the booking advance and execution of formal documentation.
              </p>
            </section>

            <section>
              <h2 className="font-gumani text-xl sm:text-2xl font-bold text-[#3A1C11] mb-3">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of or in connection with the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <StickyMobileDock onOpenLeadModal={handleOpenLeadModal} />
      <FloatingWhatsApp />

      <Modals
        leadModalOpen={leadModalOpen}
        leadModalTitle={leadModalTitle}
        leadModalSubtitle={leadModalSubtitle}
        leadModalSource={leadModalSource}
        onCloseLeadModal={() => setLeadModalOpen(false)}
        videoModalOpen={false}
        videoModalSrc=""
        onCloseVideoModal={() => {}}
        imageModalOpen={false}
        imageModalSrc=""
        onCloseImageModal={() => {}}
      />
    </>
  );
}
