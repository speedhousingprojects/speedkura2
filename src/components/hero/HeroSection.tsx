'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck2, ArrowRight, Layers, Home, IndianRupee, Move, MapPin, Building2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

const HEADLINES = [
  "Smart 2 BHK & Duplex Homes, 90% Built.",
  "Your Home at Hyderabad's ORR Exit 5.",
  "500+ Families Have Already Chosen Hi-Five.",
];

const SNAPSHOT_FACTS = [
  { icon: Layers, val: "5.3 Acres", lbl: "Gated Township" },
  { icon: Home, val: "2 BHK & Duplex", lbl: "Smart Layouts" },
  { icon: IndianRupee, val: "₹55 Lakhs*", lbl: "Starting Price" },
  { icon: Move, val: "1,100 - 2,200", lbl: "Sq.Ft Carpet Area" },
  { icon: MapPin, val: "1 Min", lbl: "To ORR Exit 5" },
  { icon: Building2, val: "90% Built", lbl: "Possession Soon", isReady: true },
];

export default function HeroSection({ onOpenLeadModal }: HeroSectionProps) {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 overflow-hidden bg-obsidian">
      {/* Background Front View Image & Smooth Scrim Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/Front view.webp"
            alt="Codename Hi-Five Front Elevation View"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/75 to-obsidian/45" />
      </div>

      {/* Main Hero Content (Vertically Centered in 1 Desktop Viewport) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl text-left items-start space-y-4 sm:space-y-5">
          {/* Regulatory Badges with Pulse Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-alabaster text-xs font-sans font-medium hover:border-bronze/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <FileCheck2 className="w-3.5 h-3.5 text-bronze" />
              <span>HMDA Approved</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-alabaster text-xs font-sans font-medium hover:border-emerald-400/50 transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>TG RERA: P02200002810</span>
            </span>
          </motion.div>

          {/* Rotating Playfair Headline with Smooth Spring Reveal */}
          <div className="h-24 sm:h-28 md:h-32 flex items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={headlineIndex}
                initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-alabaster leading-[1.12]"
              >
                {HEADLINES[headlineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Left-Aligned Subhead with Highlight */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-alabaster/85 font-normal leading-relaxed max-w-2xl text-left"
          >
            Luxurious 2 BHK & Duplex gated residences starting from <strong className="text-white font-semibold underline decoration-bronze underline-offset-4">₹55 Lakhs*</strong> with 70% open spaces adjacent to Bowrampet reserve forests.
          </motion.p>

          {/* Left-Aligned CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => onOpenLeadModal('hero_main_cta', 'Book a Visit')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full shadow-lg hover:shadow-bronze-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Book a Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onOpenLeadModal('hero_pricing_cta', 'Request Pricing & Project Details')}
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/10 hover:bg-white/20 text-alabaster border border-white/30 font-sans font-medium text-xs sm:text-sm uppercase tracking-widest rounded-full backdrop-blur-sm transition-all hover:border-bronze"
            >
              Get Pricing & Floor Plans
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating 6-Fact Snapshot Bar */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6"
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-black/45 backdrop-blur-lg border border-white/15 shadow-2xl">
          {SNAPSHOT_FACTS.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.lbl}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.08 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-xl bg-white/5 text-center transition-all hover:bg-white/10 border border-white/5 hover:border-white/15"
              >
                <Icon className={`w-4 h-4 mb-1 ${fact.isReady ? 'text-emerald-400' : 'text-bronze'}`} />
                <span className={`font-display font-bold text-base sm:text-lg md:text-xl ${fact.isReady ? 'text-emerald-400' : 'text-alabaster'}`}>
                  {fact.val}
                </span>
                <span className="font-sans text-[10px] text-bronze font-semibold tracking-wider uppercase mt-0.5">
                  {fact.lbl}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
