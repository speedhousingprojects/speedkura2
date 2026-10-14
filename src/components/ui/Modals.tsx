'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Send } from 'lucide-react';
import { trackConversion } from '@/lib/gtag';

interface ModalsProps {
  leadModalOpen: boolean;
  leadModalTitle: string;
  leadModalSubtitle: string;
  leadModalSource: string;
  onCloseLeadModal: () => void;

  videoModalOpen: boolean;
  videoModalSrc: string;
  onCloseVideoModal: () => void;

  imageModalOpen: boolean;
  imageModalSrc: string;
  onCloseImageModal: () => void;
}

export default function Modals({
  leadModalOpen,
  leadModalTitle,
  leadModalSubtitle,
  leadModalSource,
  onCloseLeadModal,
  videoModalOpen,
  videoModalSrc,
  onCloseVideoModal,
  imageModalOpen,
  imageModalSrc,
  onCloseImageModal,
}: ModalsProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [homeType, setHomeType] = useState('');
  const [timeline, setTimeline] = useState('');
  const [budget, setBudget] = useState('');
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isStep1Complete = Boolean(homeType && timeline && budget);

  const handleClose = () => {
    onCloseLeadModal();
    setTimeout(() => {
      setStep(1);
      setModalSubmitted(false);
      setHomeType('');
      setTimeline('');
      setBudget('');
      setModalName('');
      setModalPhone('');
    }, 300);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalName || !modalPhone || !homeType || !timeline || !budget) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalName,
          phone: modalPhone,
          homeType,
          timeline,
          budget,
          source: leadModalSource,
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {
      // Fallback
    }
    trackConversion();
    setIsSubmitting(false);
    setModalSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 3200);
  };

  return (
    <>
      {/* Lead Capture Modal (Pure White Luxury Card) */}
      {leadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 text-slate-900 animate-scaleUp my-auto max-h-[95vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors z-10"
              aria-label="Close Modal"
              onClick={handleClose}
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-display font-bold text-slate-900 text-2xl sm:text-3xl">
                  Enquiry Received!
                </h3>
                <p className="font-sans text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{modalName}</strong>. Our project coordinator will send tailored {homeType} plans and pricing options directly to your phone.
                </p>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 max-w-xs mx-auto">
                  {homeType} • {budget} • Buying {timeline}
                </div>
              </div>
            ) : (
              <div>
                {/* Header & Step Tracker */}
                <div className="space-y-1.5 pr-8 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-bronze">
                      Step {step} of 2: {step === 1 ? 'Select Preferences' : 'Contact Details'}
                    </span>
                    <div className="flex gap-1">
                      <span className={`w-6 h-1.5 rounded-full ${step >= 1 ? 'bg-bronze' : 'bg-slate-200'}`} />
                      <span className={`w-6 h-1.5 rounded-full ${step === 2 ? 'bg-bronze' : 'bg-slate-200'}`} />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-xl sm:text-2xl">
                    {leadModalTitle || 'Request Pricing & Project Details'}
                  </h3>
                  <p className="font-sans font-normal text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step === 1
                      ? 'Please answer 3 quick questions to help us send the right pricing and floor plans.'
                      : 'Where should we send the official brochure, blueprints, and pricing sheet?'}
                  </p>
                </div>

                {/* STEP 1: Qualification Questions (Interactive One-Tap Pills) */}
                {step === 1 && (
                  <div className="space-y-4 font-sans">
                    {/* Q1: Home Type */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        1. What type of home are you looking for? *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['2 BHK', 'Duplex', 'Not sure yet'].map((type) => {
                          const isSelected = homeType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setHomeType(type)}
                              className={`py-2.5 px-3 rounded-xl text-xs font-medium border transition-all text-center ${
                                isSelected
                                  ? 'bg-bronze text-white border-bronze shadow-sm font-semibold'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-bronze/50 hover:bg-white'
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Q2: Buying Timeline */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        2. When are you planning to buy? *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Immediately', '1–3 months', '3–6 months', 'Just exploring'].map((time) => {
                          const isSelected = timeline === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setTimeline(time)}
                              className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition-all text-center ${
                                isSelected
                                  ? 'bg-bronze text-white border-bronze shadow-sm font-semibold'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-bronze/50 hover:bg-white'
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Q3: Budget Range */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-slate-800">
                        3. What is your budget? *
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['₹50–60 Lakhs', '₹60–75 Lakhs', '₹75 Lakhs+'].map((b) => {
                          const isSelected = budget === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setBudget(b)}
                              className={`py-2.5 px-2 rounded-xl text-xs font-medium border transition-all text-center ${
                                isSelected
                                  ? 'bg-bronze text-white border-bronze shadow-sm font-semibold'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-bronze/50 hover:bg-white'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!isStep1Complete}
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 sm:py-4 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:shadow-bronze-glow transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed mt-2"
                    >
                      <span>Continue to Contact Details</span>
                      <Send className="w-4 h-4" />
                    </button>

                    {!isStep1Complete && (
                      <p className="text-[11px] text-amber-600 text-center font-medium">
                        Please select all 3 preferences above to proceed.
                      </p>
                    )}
                  </div>
                )}

                {/* STEP 2: Name & Mobile Number */}
                {step === 2 && (
                  <form className="space-y-4 font-sans" onSubmit={handleModalSubmit}>
                    {/* Selected Preferences Summary Banner */}
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
                      <div className="text-slate-700 truncate mr-2">
                        <span className="font-bold text-obsidian">{homeType}</span> • {timeline} •{' '}
                        <span className="text-bronze font-bold">{budget}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-bronze font-semibold hover:underline shrink-0 text-xs"
                      >
                        Edit
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze transition-all"
                        placeholder="e.g. Rajesh Sharma"
                        required
                        value={modalName}
                        onChange={(e) => setModalName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-bronze focus:ring-1 focus:ring-bronze transition-all"
                        placeholder="10-Digit Mobile Number"
                        required
                        pattern="[0-9]{10}"
                        value={modalPhone}
                        onChange={(e) => setModalPhone(e.target.value)}
                      />
                    </div>

                    <div className="flex gap-2.5 pt-1">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-semibold text-xs rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3.5 sm:py-4 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:shadow-bronze-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        <span>{isSubmitting ? 'Submitting Enquiry...' : 'Get Floor Plans & Pricing'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="font-sans font-normal text-slate-500 text-[11px] text-center pt-1 leading-relaxed">
                      Zero spam guarantee. Our sales advisor will share the blueprints and pricing directly via WhatsApp / Call.
                    </p>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video Lightbox Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close Video"
              onClick={onCloseVideoModal}
            >
              <X className="w-5 h-5" />
            </button>
            <video controls autoPlay playsInline className="w-full h-auto max-h-[80vh]" key={videoModalSrc}>
              <source src={videoModalSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Image Lightbox Modal */}
      {imageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-transparent rounded-2xl overflow-hidden shadow-2xl">
            <button
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
              onClick={onCloseImageModal}
            >
              <X className="w-5 h-5" />
            </button>
            <Image
              src={imageModalSrc}
              alt="Enlarged photo view"
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto mx-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
