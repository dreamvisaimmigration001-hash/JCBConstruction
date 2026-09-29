import React, { useState } from 'react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  priority?: boolean;
  categoryLabel?: string;
  showOverlayScrim?: boolean;
}

export const ArchitecturalImage: React.FC<ArchitecturalImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'auto',
  categoryLabel,
  showOverlayScrim = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : '';

  return (
    <div
      className={`relative overflow-hidden bg-neutral-100 border border-neutral-200/90 ${aspectClass} ${className}`}
    >
      {/* Light Architectural Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
          }`}
        />
      ) : (
        /* Light Architectural Blueprint & Elevation Schema Fallback */
        <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 text-neutral-600">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <svg
              className="w-4/5 h-4/5 text-neutral-800 stroke-current"
              viewBox="0 0 100 100"
              fill="none"
              strokeWidth="0.5"
            >
              <rect x="10" y="10" width="80" height="80" />
              <line x1="10" y1="10" x2="90" y2="90" />
              <line x1="10" y1="90" x2="90" y2="10" />
              <circle cx="50" cy="50" r="30" />
              <line x1="50" y1="5" x2="50" y2="95" strokeDasharray="2,2" />
              <line x1="5" y1="50" x2="95" y2="50" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
              JCB ARCHITECTURAL RECORD
            </span>
            <div className="w-2 h-2 bg-red-600" />
          </div>

          <div className="relative z-10">
            {categoryLabel && (
              <p className="text-[11px] font-mono uppercase tracking-wider text-red-600 mb-1">
                {categoryLabel}
              </p>
            )}
            <h4 className="text-sm font-semibold text-neutral-900 line-clamp-2">
              {alt}
            </h4>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-neutral-300 text-[11px] font-mono text-neutral-500">
            <span>CANADIAN PORTFOLIO</span>
            <span>SPEC. 01-A</span>
          </div>
        </div>
      )}

      {/* Gentle gradient scrim for media overlay legibility */}
      {showOverlayScrim && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
