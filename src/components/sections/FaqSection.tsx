'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '@/data/content';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection({
  onOpenLeadModal,
}: {
  onOpenLeadModal?: (source: string, title?: string) => void;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is the starting price for 2 BHK & Duplex homes at Codename Hi-Five?',
      answer:
        'Prices at Codename Hi-Five start from ₹55 Lakhs for 2 BHK Smart Luxe apartments (1,100 sq.ft) and up to ₹98 Lakhs for spacious 3 BHK & Duplex suites (2,200 sq.ft). Prices exclude government statutory taxes and floor rise charges.',
    },
    {
      question: 'Is Codename Hi-Five HMDA and TG RERA approved?',
      answer:
        'Yes, Codename Hi-Five is 100% legally clear and approved by the Hyderabad Metropolitan Development Authority (HMDA Permit No: G1/DM/2237/BP/2021) and registered under TG RERA (Registration No: P02200002810). Title verification documents are available at our site office.',
    },
    {
      question: 'Where is Codename Hi-Five located and how far is ORR Exit 5?',
      answer:
        'Codename Hi-Five is located directly on Bowrampet Road, adjacent to ORR Exit No. 5 (Bowrampet/Dundigal Junction). It offers 1-minute access to the Outer Ring Road, connecting to Hitec City, Gachibowli, and Financial District within 20–25 minutes.',
    },
    {
      question: 'What is the current construction status and handover timeline?',
      answer:
        'The project is 90% constructed with all 5 residential towers structural frames completed. Finishing works, clubhouse interiors, and landscaping are in progress, with handover scheduled soon.',
    },
    {
      question: 'What amenities are included in the 25,000 sq.ft clubhouse?',
      answer:
        'The 25,000 sq.ft 5-level clubhouse features a temperature-controlled swimming pool, indoor badminton courts, state-of-the-art fitness gym, banquet hall, co-working lounge, indoor games arena, pharmacy, and rooftop sky lounge.',
    },
    {
      question: 'Are home loans available from nationalized banks?',
      answer:
        'Yes, Codename Hi-Five is pre-approved by leading national banks including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, and Canara Bank with flexible EMI options starting at ~₹9.8K/month*.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-alabaster text-obsidian font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2.5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bronze/10 text-bronze text-xs font-semibold uppercase tracking-wider border border-bronze/20 !font-sans">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="!font-sans text-2xl sm:text-3xl !font-bold text-obsidian tracking-tight">
            Got Questions? <span className="!font-medium text-bronze">We Have Answers.</span>
          </h2>
          <p className="!font-sans text-xs sm:text-sm text-charcoal-mute leading-relaxed !font-normal">
            Everything you need to know about pricing, location, TG RERA approvals, and home loan eligibility for Codename Hi-Five.
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-bronze/50 shadow-sm'
                    : 'bg-white/80 border-zinc-border/70 hover:border-bronze/30 hover:bg-white'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-5 px-5 sm:py-5.5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <h3 className="!font-sans text-sm sm:text-base !font-medium text-obsidian/90 leading-relaxed pr-2">
                    {faq.question}
                  </h3>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-bronze text-white rotate-180' : 'bg-slate-100 text-charcoal-mute'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-3.5 text-xs sm:text-sm text-charcoal-mute leading-relaxed font-normal border-t border-zinc-border/40">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Simple Clean CTA Strip */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-zinc-border/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-sans text-sm sm:text-base font-semibold text-obsidian">Have a specific query?</h4>
            <p className="font-sans text-xs text-charcoal-mute leading-relaxed">
              Speak directly with our senior sales advisor or schedule a private site visit.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
            <a
              href={`tel:${BRAND.phone}`}
              className="px-5 py-2.5 rounded-lg bg-slate-100 text-obsidian text-xs font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2 font-sans whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-bronze" />
              <span>{BRAND.phone}</span>
            </a>
            {onOpenLeadModal && (
              <button
                onClick={() => onOpenLeadModal('FAQ Section CTA', 'Schedule Site Visit')}
                className="px-5 sm:px-6 py-2.5 rounded-lg bg-bronze hover:bg-bronze-hover text-white text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm font-sans whitespace-nowrap shrink-0"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Book Site Visit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
