'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function PricingSection({ onOpenLeadModal }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-alabaster text-obsidian relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze">
            Configurations & Pricing
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.15]">
            Explore Available <span className="italic text-bronze font-normal">Layouts & Sizes.</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-charcoal-mute font-normal">
            Select from space-optimized 2 BHK configurations or expansive double-height Duplex penthouses.
          </p>
        </motion.div>

        {/* Side-by-Side Dual Cards with Embedded Blueprints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: 2 BHK Smart Luxe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-3xl p-6 sm:p-7 shadow-kura border border-zinc-border flex flex-col justify-between transition-all duration-300 hover:shadow-kura-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-bronze/10 text-bronze font-sans font-bold text-xs uppercase tracking-wider">
                  Smart Luxe
                </span>
                <span className="font-sans text-xs text-charcoal-mute">Possession Soon</span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-obsidian">
                  Premium 2 BHK Homes
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-bronze">
                    ₹59 Lakhs*
                  </span>
                  <span className="font-sans text-xs text-charcoal-mute">onwards</span>
                </div>
                <span className="font-sans text-xs text-charcoal-mute block mt-0.5">
                  Starting at ₹4,999/sq.ft onwards
                </span>
              </div>

              <ul className="space-y-2 pt-2 border-t border-zinc-border/60 font-sans text-xs sm:text-sm text-obsidian/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>1,100 to 1,285 Sq.Ft configurations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>100% Vaastu Compliant Layouts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>East & West facing entrance choices</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cross-ventilated living space with grand balconies</span>
                </li>
              </ul>
            </div>

            {/* Embedded Blueprint Interactive Trigger */}
            <div className="pt-4 mt-4 border-t border-zinc-border/60">
              <div
                onClick={() => onOpenLeadModal('floorplan_2bhk', 'Unlock 2 BHK Blueprints (PDF)')}
                className="relative h-32 sm:h-36 w-full rounded-2xl overflow-hidden cursor-pointer group border border-zinc-border shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Image
                  src="/images/bedroom 1.webp"
                  alt="2 BHK Floor Plan Blueprint Preview"
                  fill
                  className="object-cover blur-[2.5px] group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/75 group-hover:bg-slate-950/65 transition-colors flex flex-col items-center justify-center text-white gap-2 p-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-bronze flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-bronze-hover transition-all">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-white group-hover:text-bronze-light transition-colors">
                    Unlock 2 BHK Blueprints (PDF)
                  </span>
                  <span className="text-[11px] text-slate-300 font-normal">
                    Click to view detailed floor plans & cost breakdown
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Duplex Homess */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-white rounded-3xl p-6 sm:p-7 shadow-kura border border-zinc-border flex flex-col justify-between transition-all duration-300 hover:shadow-kura-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full bg-bronze/10 text-bronze font-sans font-bold text-xs uppercase tracking-wider">
                  Luxury Penthouse
                </span>
                <span className="font-sans text-xs text-charcoal-mute">Exclusive Limited Units</span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-obsidian">
                  Duplex Homess
                </h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-bronze">
                    ₹95 Lakhs*
                  </span>
                  <span className="font-sans text-xs text-charcoal-mute">onwards</span>
                </div>
                <span className="font-sans text-xs text-charcoal-mute block mt-0.5">
                  Starting at ₹4,999/sq.ft onwards
                </span>
              </div>

              <ul className="space-y-2 pt-2 border-t border-zinc-border/60 font-sans text-xs sm:text-sm text-obsidian/80">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>2,200 Sq.Ft Duplex Homes layouts</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Double-height ceiling architectural living</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Private terrace deck with green forest views</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Master bedroom penthouse suites on upper level</span>
                </li>
              </ul>
            </div>

            {/* Embedded Blueprint Interactive Trigger */}
            <div className="pt-4 mt-4 border-t border-zinc-border/60">
              <div
                onClick={() => onOpenLeadModal('floorplan_duplex', 'Unlock Duplex Blueprints (PDF)')}
                className="relative h-32 sm:h-36 w-full rounded-2xl overflow-hidden cursor-pointer group border border-zinc-border shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Image
                  src="/images/Master bedroom.webp"
                  alt="Duplex Floor Plan Blueprint Preview"
                  fill
                  className="object-cover blur-[2.5px] group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/75 group-hover:bg-slate-950/65 transition-colors flex flex-col items-center justify-center text-white gap-2 p-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-bronze flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-bronze-hover transition-all">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-white group-hover:text-bronze-light transition-colors">
                    Unlock Duplex Blueprints (PDF)
                  </span>
                  <span className="text-[11px] text-slate-300 font-normal">
                    Click to view double-height layouts & cost breakdown
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
