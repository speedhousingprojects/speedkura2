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
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: modalName,
          phone: modalPhone,
          requirement: '',
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
      onCloseLeadModal();
      setModalSubmitted(false);
      setModalName('');
      setModalPhone('');
    }, 3000);
  };

  return (
    <>
      {/* Lead Capture Modal (Pure White Luxury Card) */}
      {leadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 animate-scaleUp">
            <button
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close Modal"
              onClick={onCloseLeadModal}
            >
              <X className="w-5 h-5" />
            </button>

            {modalSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-display font-bold text-slate-900 text-2xl sm:text-3xl">
                  Enquiry Received!
                </h3>
                <p className="font-sans text-slate-600 text-sm max-w-xs mx-auto leading-relaxed">
                  Thank you, <strong>{modalName}</strong>. Our team will connect with you shortly with the complete pricing breakdown and project brochure.
                </p>
              </div>
            ) : (
              <div>
                <div className="space-y-1.5 pr-8">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-bronze block">
                    Instant Access
                  </span>
                  <h3 className="font-display font-bold text-slate-900 text-2xl sm:text-3xl">
                    {leadModalTitle || 'Request Pricing & Project Details'}
                  </h3>
                  <p className="font-sans font-normal text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {leadModalSubtitle || 'Enter your contact details below to receive the complete pricing breakdown, floor plans, and project brochure.'}
                  </p>
                </div>

                <form className="mt-6 space-y-4 font-sans" onSubmit={handleModalSubmit}>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-bronze hover:bg-bronze-hover text-white font-sans font-bold uppercase tracking-widest text-xs rounded-xl shadow-lg hover:shadow-bronze-glow transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-2"
                  >
                    <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="font-sans font-normal text-slate-500 text-[11px] text-center pt-1 leading-relaxed">
                    By submitting, our team will share the project details and pricing with you via call / WhatsApp.
                  </p>
                </form>
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
