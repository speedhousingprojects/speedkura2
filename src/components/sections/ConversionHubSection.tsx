'use client';

import React, { useState } from 'react';
import { Phone, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConversionHubSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [req, setReq] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
          requirement: req || '',
          source: 'footer_main_form',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 bg-obsidian text-alabaster relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Connect & Promises */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            <div className="space-y-1.5">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-bronze flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Direct Developer Invitation</span>
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-alabaster tracking-tight leading-[1.15]">
                Ready to Choose Your <span className="italic text-bronze font-normal">Next Address?</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm md:text-base text-alabaster/85 font-normal leading-relaxed">
              Connect with a senior Kura Homes project advisor today. Get complete transparent pricing breakdowns, structural blueprints, and schedule an exclusive site visit.
            </p>

            {/* Trust Promises */}
            <div className="space-y-2.5 pt-1 font-sans text-xs sm:text-sm text-alabaster/90">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Guaranteed advisor callback within 2 hours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complimentary private vehicle site visit & pickup</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Complete transparent legal title & RERA documentation</span>
              </div>
            </div>

            {/* Direct Call Box */}
            <div className="pt-2 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="font-sans text-[11px] text-alabaster/60 block">Speak to Sales Advisor Direct</span>
                <a
                  href="tel:8008008946"
                  className="font-display text-xl sm:text-2xl font-bold text-bronze hover:text-bronze-light transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-bronze" />
                  <span>800 800 8946</span>
                </a>
              </div>
              <span className="font-sans text-xs px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-semibold self-start sm:self-center">
                Available 9 AM - 8 PM
              </span>
            </div>
          </motion.div>

          {/* Right Column: Lead Form Card with High-Contrast Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-zinc-border text-obsidian"
          >
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
                <h3 className="font-display text-2xl font-bold text-obsidian">
                  Enquiry Received!
                </h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-mute max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Our project coordinator will send the brochure and floor plans to your WhatsApp and phone shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-6 bg-slate-100 text-obsidian font-sans font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4 space-y-1">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-bronze block">
                    Instant Access
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-obsidian">
                    Request Pricing & Project Details
                  </h3>
                  <p className="font-sans text-xs text-charcoal-mute">
                    Provide your details below to receive the brochure & floor plans via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 font-sans">
                  <div>
                    <label className="block text-xs font-semibold text-obsidian mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-obsidian placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-obsidian mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-obsidian placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-obsidian mb-1">
                      Configuration (Optional)
                    </label>
                    <select
                      value={req}
                      onChange={(e) => setReq(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-obsidian focus:bg-white focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze transition-all"
                    >
                      <option value="">Preferred Layout (Optional)</option>
                      <option value="2 BHK">Smart 2 BHK Apartment</option>
                      <option value="Duplex">Duplex Homes</option>
                      <option value="Both">Interested in Both</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-bronze-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                  >
                    <span>{loading ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[11px] text-center text-charcoal-mute pt-0.5 font-normal leading-relaxed">
                    By submitting, our team will share the project details and pricing with you via call / WhatsApp.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
