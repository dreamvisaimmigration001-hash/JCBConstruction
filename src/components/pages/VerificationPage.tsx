import React from 'react';
import { OfferLetterVerification } from '../verification/OfferLetterVerification';
import { ShieldCheck } from 'lucide-react';

export const VerificationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-[85vh] flex flex-col justify-center">
      {/* Hero Header */}
      <section className="bg-neutral-900 text-white py-12 lg:py-16 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono uppercase tracking-widest mb-4 rounded-full">
            <ShieldCheck className="w-4 h-4 text-red-500" />
            <span>OFFICIAL DOCUMENT INTEGRITY PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white uppercase leading-tight">
            Offer Letter Verification
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed font-light">
            Enter your official offer letter reference code to verify authenticity and download your document.
          </p>
        </div>
      </section>

      {/* Main Verification Component */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-20 w-full">
        <OfferLetterVerification />
      </section>
    </div>
  );
};
