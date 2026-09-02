'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, CheckCircle2, ShieldCheck, CalendarCheck } from 'lucide-react';
import { PROJECT_INFO } from '@/data/content';
import { trackConversion } from '@/lib/gtag';

export default function BookVisitFormSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [requirement, setRequirement] = useState('2bhk');
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
          date,
          requirement,
          source: 'bottom_book_visit_form',
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }

    trackConversion();
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-alabaster text-noir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Contact Info & Value Props */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel">
                Experience in Person
              </span>
              <h2 className="font-gumani text-3xl sm:text-4xl lg:text-5xl font-bold text-sienna leading-tight">
                Schedule a Private <span className="italic text-caramel font-normal">Site Tour.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-noir/70 font-light leading-relaxed">
              Walk through the actual 90% completed towers, sample apartments, and the double-height clubhouse. Our senior project architects are available for personalized walkthroughs.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-noir/80">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                <span>Complimentary pick-up & drop from ORR Exit 5 / Miyapur</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-noir/80">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                <span>Immediate access to detailed price breakdown & unit inventory</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-noir/80">
                <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                <span>Bank loan pre-sanction assistance on spot</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={`tel:${PROJECT_INFO.phone}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-sienna hover:bg-sienna-light text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-caramel" />
                <span>Call Sales: {PROJECT_INFO.phoneDisplay}</span>
              </a>
              <a
                href={PROJECT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald hover:bg-emerald/90 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-kura border border-chocolate-dark">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-emerald mx-auto mb-4" />
                <h3 className="font-gumani text-2xl font-bold text-sienna mb-2">
                  Site Visit Booked!
                </h3>
                <p className="text-sm text-noir/70 max-w-sm mx-auto mb-6">
                  Thank you, <strong>{name}</strong>. Our site coordinator will call you to confirm your visit timing and send driving directions.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="py-2.5 px-6 bg-chocolate text-sienna font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-chocolate-dark transition-colors"
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-caramel mb-2">
                  <CalendarCheck className="w-4 h-4" />
                  <span>Reserve Visit Slot</span>
                </div>
                <h3 className="font-gumani text-2xl font-bold text-sienna mb-2">
                  Book Your Tour
                </h3>
                <p className="text-xs sm:text-sm text-noir/60 mb-6">
                  Select your preferred date to reserve exclusive time with our senior consultant.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-sienna mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-sienna mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-sienna mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-sienna mb-1">
                        Unit Interest
                      </label>
                      <select
                        value={requirement}
                        onChange={(e) => setRequirement(e.target.value)}
                        className="w-full px-4 py-3 bg-white border border-chocolate-dark rounded-xl text-sm text-noir focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel"
                      >
                        <option value="2bhk">2 BHK Smart Suite</option>
                        <option value="duplex">Signature Duplex Penthouse</option>
                        <option value="both">Interested in Both</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-caramel hover:bg-caramel-light text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg hover:shadow-caramel-glow transition-all disabled:opacity-70 mt-2"
                  >
                    {loading ? 'Confirming Booking...' : 'Confirm Site Visit Reservation'}
                  </button>

                  <p className="text-[11px] text-center text-noir/50 pt-1">
                    Direct developer invitation. No broker charges. TG RERA: {PROJECT_INFO.reraNumber}
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
