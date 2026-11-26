import React, { useState, useEffect } from 'react';
import {
  Search,
  CheckCircle2,
  Loader2,
  Download,
  RefreshCw,
  FileWarning,
  Lock,
  ExternalLink,
} from 'lucide-react';

export interface OfferCompany {
  _id: string;
  name: string;
  email?: string;
  phone?: string;
}

export interface OfferFile {
  url: string;
  originalName: string;
  size?: number;
  format?: string;
}

export interface OfferData {
  _id: string;
  reference: string;
  status: 'Approved' | 'Sent' | 'Draft' | string;
  company: OfferCompany;
  file: OfferFile;
  notes?: string;
  createdAt: string;
}

export interface OfferApiResponse {
  success: boolean;
  message?: string;
  data?: OfferData;
  errors?: unknown[];
}

export interface OfferLetterVerificationProps {
  /**
   * Default company ID for verification lookup.
   * Defaults to '6b07cc89393e463a4be3288a'
   */
  defaultCompanyId?: string;
  /**
   * Optional initial reference to prefill
   */
  initialReference?: string;
  /**
   * Optional custom CSS class
   */
  className?: string;
}

export const OfferLetterVerification: React.FC<OfferLetterVerificationProps> = ({
  defaultCompanyId = '6b07cc89393e463a4be3288a',
  initialReference = '',
  className = '',
}) => {
  const [reference, setReference] = useState<string>(
    initialReference.toUpperCase().trim()
  );
  const [companyId] = useState<string>(defaultCompanyId);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [offer, setOffer] = useState<OfferData | null>(null);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect mobile device to apply Google Docs Viewer for mobile PDF rendering
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(
        mobileRegex.test(userAgent) ||
          (typeof window !== 'undefined' && window.innerWidth < 768)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine file type helper
  const isPdf = (file?: OfferFile): boolean => {
    if (!file) return false;
    const format = (file.format || '').toLowerCase();
    const url = (file.url || '').toLowerCase();
    const name = (file.originalName || '').toLowerCase();
    return (
      format === 'pdf' ||
      url.endsWith('.pdf') ||
      name.endsWith('.pdf') ||
      url.includes('/pdf/')
    );
  };

  const isImage = (file?: OfferFile): boolean => {
    if (!file) return false;
    const format = (file.format || '').toLowerCase();
    const url = (file.url || '').toLowerCase();
    const name = (file.originalName || '').toLowerCase();
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'];
    return (
      ['png', 'jpg', 'jpeg', 'webp', 'svg', 'gif'].includes(format) ||
      imageExtensions.some((ext) => url.endsWith(ext) || name.endsWith(ext)) ||
      url.includes('/image/')
    );
  };

  // Get cross-platform PDF preview URL (Google Docs Viewer ensures Android mobile compatibility)
  const getPdfPreviewUrl = (fileUrl: string): string => {
    if (isMobile) {
      return `https://docs.google.com/gview?url=${encodeURIComponent(fileUrl)}&embedded=true`;
    }
    return fileUrl;
  };

  // Handle Search API Call
  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const cleanRef = reference.trim().toUpperCase();
    if (!cleanRef) {
      setError('Please enter a valid Offer Letter Reference Number.');
      setOffer(null);
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const activeCompanyId = companyId.trim() || defaultCompanyId;
      const url = `https://offer-letter-app-one.vercel.app/api/v1/public/offers?companyId=${encodeURIComponent(
        activeCompanyId
      )}&reference=${encodeURIComponent(cleanRef)}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });

      const json: OfferApiResponse = await response.json();

      if (response.ok && json.success && json.data) {
        setOffer(json.data);
        setError(null);
      } else {
        setOffer(null);
        setError(
          json.message ||
            'Offer letter not found. Please verify the reference number and try again.'
        );
      }
    } catch (err: unknown) {
      setOffer(null);
      if (err instanceof Error) {
        setError(`Connection error: ${err.message}. Please check your network and try again.`);
      } else {
        setError('An unexpected error occurred while verifying the offer letter.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReference(e.target.value.toUpperCase());
    if (error) setError(null);
  };

  const handleReset = () => {
    setReference('');
    setOffer(null);
    setError(null);
    setHasSearched(false);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Search Card */}
      <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 overflow-hidden">
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-slate-900 via-indigo-700 to-red-600" />

        <div className="p-6 sm:p-8 md:p-10">
          {/* Header Title */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-slate-200">
              <Lock className="w-3.5 h-3.5 text-indigo-600" />
              <span>Official Verification Registry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
              Offer Letter Verification
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Enter your official reference number to verify and preview your offer letter.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleVerify} className="max-w-xl mx-auto space-y-4">
            <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={reference}
                  onChange={handleInputChange}
                  placeholder="e.g. OFF-2026-CZY9LD"
                  className="w-full pl-11 pr-4 py-3.5 text-slate-900 bg-slate-50 hover:bg-slate-50/80 focus:bg-white text-base font-mono font-medium rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all outline-none uppercase placeholder:text-slate-400 placeholder:normal-case shadow-sm"
                  aria-label="Offer Letter Reference Number"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading || !reference.trim()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg focus:ring-4 focus:ring-indigo-100 cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Verify & Download</span>
                  </>
                )}
              </button>
            </div>

            {hasSearched && (
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Clear Search</span>
                </button>
              </div>
            )}
          </form>

          {/* Error Banner */}
          {error && (
            <div className="max-w-xl mx-auto mt-6 animate-in fade-in duration-200">
              <div className="p-4 rounded-xl bg-red-50/90 border border-red-200 text-red-900 flex items-start gap-3.5 shadow-sm">
                <div className="p-1 rounded-lg bg-red-100 text-red-600 shrink-0 mt-0.5">
                  <FileWarning className="w-5 h-5" />
                </div>
                <div className="flex-1 text-sm">
                  <h4 className="font-semibold text-red-950">Verification Unsuccessful</h4>
                  <p className="mt-1 text-red-700 leading-relaxed">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className="max-w-xl mx-auto mt-8 p-6 rounded-2xl border border-slate-200 bg-slate-50/60 text-center animate-pulse">
              <div className="w-10 h-10 mx-auto rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
              <p className="text-sm font-semibold text-slate-800">
                Verifying reference number...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Verified Result - Download Button & Embedded PDF Preview */}
      {offer && !loading && (
        <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Download Action Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 p-6 sm:p-8 text-center max-w-xl mx-auto">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-display">
              Offer Letter Verified
            </h3>

            <p className="text-sm text-slate-500 mt-1 mb-6">
              Your official document is verified and ready for download.
            </p>

            {/* Direct Prominent Download Button */}
            {offer.file?.url ? (
              <a
                href={offer.file.url}
                download={offer.file.originalName || 'Offer_Letter.pdf'}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-white bg-[#D61B26] hover:bg-neutral-900 transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer active:scale-[0.98]"
              >
                <Download className="w-5 h-5" />
                <span>Download Offer Letter</span>
              </a>
            ) : (
              <p className="text-sm text-red-600">Document URL not available.</p>
            )}
          </div>

          {/* Embedded PDF / Document Viewer Preview */}
          {offer.file?.url && (
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-200/80 overflow-hidden">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Document Preview
                </span>
                <a
                  href={offer.file.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Open Fullscreen</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-2 sm:p-5 bg-slate-100/60">
                {isPdf(offer.file) ? (
                  <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                    <iframe
                      src={getPdfPreviewUrl(offer.file.url)}
                      title="Official Offer Letter Preview"
                      className="w-full h-[550px] sm:h-[750px] rounded-xl border-0"
                      allow="autoplay"
                    />
                  </div>
                ) : isImage(offer.file) ? (
                  <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
                    <img
                      src={offer.file.url}
                      alt="Official Offer Letter Preview"
                      className="max-h-[750px] w-auto object-contain mx-auto rounded-lg shadow"
                    />
                  </div>
                ) : (
                  <div className="w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                    <iframe
                      src={getPdfPreviewUrl(offer.file.url)}
                      title="Official Offer Letter Preview"
                      className="w-full h-[550px] sm:h-[750px] rounded-xl border-0"
                      allow="autoplay"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OfferLetterVerification;
