'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { trackConversion } from '@/lib/gtag';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  source?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title = 'Unlock Exclusive Pricing & Floor Plans',
  subtitle = 'Provide your details to receive instant access to official blueprints and complete cost breakdowns via WhatsApp.',
  source = 'modal_popup',
}: EnquiryModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [requirement, setRequirement] = useState('2bhk');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          requirement,
          source,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Graceful fallback
    }

    trackConversion();
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-alabaster rounded-2xl p-6 sm:p-8 shadow-2xl border border-chocolate-dark">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-noir/60 hover:text-noir hover:bg-chocolate transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle2 className="w-14 h-14 text-emerald mx-auto mb-3" />
            <h3 className="font-gumani text-2xl font-bold text-sienna mb-2">Thank You!</h3>
            <p className="text-sm text-noir/80 mb-4">
              Your request has been received. Our sales advisor will connect with you with the blueprints & pricing sheet.
            </p>
            <div className="p-3 bg-chocolate rounded-xl text-xs text-sienna font-medium">
              Auto-closing in 2 seconds...
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-caramel">
              <ShieldCheck className="w-4 h-4" />
              <span>RERA Registered Project</span>
            </div>
            <h3 className="font-gumani text-2xl sm:text-3xl font-bold text-sienna leading-tight mb-2">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-noir/70 leading-relaxed mb-6">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-sienna mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir placeholder:text-noir/40 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-sienna mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir placeholder:text-noir/40 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-sienna mb-1">Preferred Unit Type</label>
                <select
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel transition-colors"
                >
                  <option value="2bhk">2 BHK Smart Suite (₹55L+)</option>
                  <option value="duplex">Signature Duplex Penthouse (₹95L+)</option>
                  <option value="site_visit">Schedule Site Tour First</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3.5 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-md hover:shadow-caramel-glow transition-all disabled:opacity-75"
              >
                {loading ? 'Submitting Request...' : 'Get Instant Floor Plans & Cost Sheet'}
              </button>

              <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-noir/50">
                <PhoneCall className="w-3.5 h-3.5 text-caramel" />
                <span>Zero spam guarantee. Directly from Kura Homes team.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
