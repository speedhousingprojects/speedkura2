'use client';

import React, { useState } from 'react';
import Header from '@/components/nav/Header';
import Footer from '@/components/nav/Footer';
import { Briefcase, User, Phone, Layers, Award, CheckCircle2, Send, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: 'Sales Executive',
    experience: 'Fresher',
  });

  const [errors, setErrors] = useState<{ phone?: string; name?: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (phoneStr: string) => {
    const cleanPhone = phoneStr.replace(/\D/g, '');
    if (cleanPhone.length !== 10) return false;
    return /^[6-9]\d{9}$/.test(cleanPhone);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phone: val }));
    if (val.length === 10 && !validatePhone(val)) {
      setErrors((prev) => ({ ...prev, phone: 'Please enter a valid 10-digit mobile number starting with 6-9' }));
    } else {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { phone?: string; name?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          role: formData.role,
          experience: formData.experience,
          type: 'career',
          targetSheet: 'Sheet2',
          requirement: `Role: ${formData.role} | Exp: ${formData.experience}`,
          source: `Career Application - ${formData.role}`,
          date: new Date().toLocaleDateString('en-IN'),
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Application submission failed. Please try calling us at 800 800 8946.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header onOpenLeadModal={() => {}} />

      <main className="pt-28 sm:pt-32 pb-24 bg-alabaster text-obsidian min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bronze/10 text-bronze font-sans text-xs font-bold uppercase tracking-widest border border-bronze/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>We Are Hiring</span>
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-obsidian tracking-tight leading-[1.15]">
              Build Your Future with <span className="italic text-bronze font-normal">Kura Homes.</span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-charcoal-mute font-normal leading-relaxed">
              Join Hyderabad&apos;s premier real estate team backed by 55 years of structural trust and design legacy. Apply for our open positions today.
            </p>
          </motion.div>

          {/* 2 Openings Showcase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Opening 1: Sales Executive */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-border shadow-kura space-y-4 hover:shadow-kura-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-bronze/10 text-bronze flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-bronze uppercase tracking-wider">Full Time · Sales</span>
                <h3 className="font-display text-xl font-bold text-obsidian">Sales Executive</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-charcoal-mute leading-relaxed">
                Lead prospective buyers through site visits, present Codename Hi-Five project highlights, explain financial options, and manage client closing pipelines.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-sans text-obsidian">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                  <span>Competitive Base Salary + High Sales Incentives</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                  <span>On-site leadership training & career growth</span>
                </li>
              </ul>
            </div>

            {/* Opening 2: Channel Partner */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-zinc-border shadow-kura space-y-4 hover:shadow-kura-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-bronze/10 text-bronze flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-bronze uppercase tracking-wider">Partnership · Network</span>
                <h3 className="font-display text-xl font-bold text-obsidian">Channel Partner</h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-charcoal-mute leading-relaxed">
                Partner with Kura Homes as a registered real estate broker / channel partner. Expand your client network with high-ticket gated community inventories.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-sans text-obsidian">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                  <span>Industry-leading brokerage commission payouts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                  <span>Dedicated sales support & priority unit blocking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Application Form */}
          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-3xl border border-zinc-border shadow-kura space-y-6">
            <div className="text-center space-y-1.5">
              <h2 className="font-display text-2xl font-bold text-obsidian">Submit Your Application</h2>
              <p className="font-sans text-xs sm:text-sm text-charcoal-mute">
                Fill in your details below and our HR team will connect with you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 bg-emerald/10 border border-emerald/30 rounded-2xl text-center space-y-3"
              >
                <div className="w-14 h-14 bg-emerald text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-emerald">Application Submitted!</h3>
                <p className="font-sans text-xs sm:text-sm text-charcoal-mute">
                  Thank you for applying to Kura Homes. Our recruitment lead will contact you on your registered mobile number shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', role: 'Sales Executive', experience: 'Fresher' });
                  }}
                  className="mt-2 px-5 py-2 rounded-xl bg-obsidian text-alabaster font-sans font-bold text-xs uppercase tracking-wider hover:bg-bronze transition-colors"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-obsidian flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-bronze" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.name ? 'border-red-500' : 'border-zinc-border'
                    } text-sm focus:outline-none focus:border-bronze transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-medium pt-0.5">{errors.name}</p>}
                </div>

                {/* Contact Phone Number (Validated) */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-obsidian flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-bronze" />
                    <span>Mobile Number (10 Digits) *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${
                      errors.phone ? 'border-red-500' : 'border-zinc-border'
                    } text-sm focus:outline-none focus:border-bronze transition-colors`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 font-medium pt-0.5">{errors.phone}</p>}
                </div>

                {/* Role Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-obsidian flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-bronze" />
                    <span>Select Role *</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {['Sales Executive', 'Channel Partner'].map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => setFormData({ ...formData, role: r })}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                          formData.role === r
                            ? 'bg-bronze text-white border-bronze shadow-md'
                            : 'bg-slate-50 text-charcoal-mute border-zinc-border hover:bg-slate-100'
                        }`}
                      >
                        <span>{r}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience Level (Optional) */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-obsidian flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-bronze" />
                      <span>Experience Level</span>
                    </span>
                    <span className="text-[10px] font-normal text-charcoal-mute lowercase">(optional)</span>
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-zinc-border text-sm focus:outline-none focus:border-bronze transition-colors cursor-pointer"
                  >
                    <option value="Fresher">Fresher (0 Years)</option>
                    <option value="0-1 Years">0 - 1 Years</option>
                    <option value="1-2 Years">1 - 2 Years</option>
                    <option value="2-3 Years">2 - 3 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-bronze hover:bg-bronze-hover text-white font-sans font-bold text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
