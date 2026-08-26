'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenLeadModal: (source: string, title?: string) => void;
}

export default function Header({ onOpenLeadModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '/#overview' },
    { label: 'Homes & Pricing', href: '/#pricing' },
    { label: 'Calculators', href: '/#calculators' },
    { label: 'Lifestyle', href: '/#amenities' },
    { label: 'Location', href: '/#location' },
    { label: 'Progress', href: '/#progress' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-alabaster/95 backdrop-blur-md shadow-kura py-3 border-b border-zinc-border/60'
            : 'bg-gradient-to-b from-obsidian/90 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand Lockup */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <Image
              src="/logos/kura homes logo.png"
              alt="Kura Homes (55 Years of Trust)"
              width={200}
              height={60}
              className={`h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
            <div className={`h-10 sm:h-12 w-[1.5px] ${isScrolled ? 'bg-zinc-border' : 'bg-white/30'}`}></div>
            <Image
              src="/logos/hi-five logo 2.png"
              alt="Codename Hi-Five"
              width={210}
              height={62}
              className={`h-12 sm:h-14 md:h-16 lg:h-16 w-auto object-contain transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
              priority
            />
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-sans text-sm font-semibold transition-colors hover:text-bronze ${
                  isScrolled ? 'text-obsidian' : 'text-alabaster'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Hub */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:8008008946"
              className={`flex items-center gap-2 font-sans text-sm font-bold transition-colors ${
                isScrolled ? 'text-obsidian hover:text-bronze' : 'text-alabaster hover:text-bronze-light'
              }`}
            >
              <Phone className="w-4 h-4 text-bronze" />
              <span>800 800 8946</span>
            </a>
            <button
              onClick={() => onOpenLeadModal('header_cta', 'Book a Visit')}
              className="bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95"
            >
              Book Visit
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${
              isScrolled ? 'text-obsidian bg-slate-100' : 'text-alabaster bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Navigation Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[76px] left-0 right-0 z-40 bg-obsidian text-alabaster border-b border-white/15 shadow-2xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 font-sans text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-alabaster/90 hover:text-bronze py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/15 space-y-3">
                <a
                  href="tel:8008008946"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-bronze"
                >
                  <Phone className="w-4 h-4" />
                  <span>800 800 8946</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLeadModal('mobile_header_cta', 'Book a Visit');
                  }}
                  className="w-full py-3 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg"
                >
                  Book Site Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}