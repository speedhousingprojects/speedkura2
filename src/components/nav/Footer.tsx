'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShieldCheck, FileCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-obsidian text-alabaster border-t border-white/10 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <Image
                src="/logos/kura homes logo.png"
                alt="Kura Homes (55 Years of Trust)"
                width={120}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert opacity-95"
              />
              <div className="h-8 w-[1.5px] bg-white/20"></div>
              <Image
                src="/logos/hi-five logo 2.png"
                alt="Codename Hi-Five"
                width={140}
                height={44}
                className="h-10 md:h-11 w-auto object-contain brightness-0 invert opacity-95"
              />
            </div>
            <p className="font-sans text-xs sm:text-sm text-alabaster/75 font-normal leading-relaxed max-w-sm">
              This project is a premium 5.3-acre gated residential township by Kura Homes, bringing 55 years of trust, structural excellence, and design legacy to Hyderabad&apos;s ORR Exit 5 growth corridor.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-alabaster/75">
              <li><a href="/#hero" className="hover:text-bronze transition-colors">Overview</a></li>
              <li><a href="/#pricing" className="hover:text-bronze transition-colors">Homes & Floor Plans</a></li>
              <li><a href="/#calculators" className="hover:text-bronze transition-colors">Financial Studio & EMI</a></li>
              <li><a href="/#amenities" className="hover:text-bronze transition-colors">25K Sq.Ft Clubhouse</a></li>
              <li><a href="/#location" className="hover:text-bronze transition-colors">Location & Transit</a></li>
              <li><a href="/#progress" className="hover:text-bronze transition-colors">Construction Progress</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Careers */}
          <div className="md:col-span-2 space-y-3 font-sans">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-alabaster/75">
              <li>
                <Link href="/careers" className="text-bronze font-semibold hover:text-bronze-light transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-bronze/20 text-bronze uppercase tracking-wider font-bold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-bronze transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-bronze transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-bronze transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Approvals & Address */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <h4 className="font-display text-base font-bold text-white tracking-wide">
              Compliance & Address
            </h4>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-alabaster/75 leading-relaxed">
              <MapPin className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
              <span>Adjacent to ORR Exit No. 5, Bowrampet Road, Dundigal, Hyderabad, Telangana 500043</span>
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-alabaster/80">
              <a
                href="https://tsrera.telangana.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-bronze hover:underline font-semibold"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>TG RERA Reg: P02200002810</span>
              </a>
              <div className="flex items-center gap-2 text-alabaster/60">
                <FileCheck className="w-3.5 h-3.5" />
                <span>HMDA Approval: G1/DM/2237/BP/2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-alabaster/60 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Kura Homes. All rights reserved. Codename Hi-Five is a registered project name.</p>
          <p className="text-[11px] text-alabaster/40">
            Marketed & Handled by Authorized Project Sales Partner
          </p>
        </div>
      </div>
    </footer>
  );
}