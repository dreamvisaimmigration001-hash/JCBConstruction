import React from 'react';
import { NewsArticle } from '../../types';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { JcbLogo } from '../common/JcbLogo';
import { X, Calendar, Clock, Tag } from 'lucide-react';

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-neutral-900/60 backdrop-blur-sm flex justify-center p-4 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-4xl bg-white border border-neutral-200 text-neutral-900 shadow-2xl my-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-neutral-50 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <JcbLogo height="26px" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#D61B26] font-semibold pl-3 border-l border-neutral-300">
              PRESS WIRE
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-xs font-mono text-neutral-500">
              OFFICIAL RELEASE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 w-full">
          <ArchitecturalImage
            src={article.heroImage}
            alt={article.title}
            categoryLabel={article.category}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-600" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                {article.readTime}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-red-600" />
                {article.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-neutral-950 tracking-tight leading-snug">
              {article.title}
            </h2>
          </div>

          {article.highlight && (
            <div className="p-4 bg-neutral-50 border-l-2 border-red-600 text-sm font-medium text-neutral-800 italic">
              “{article.highlight}”
            </div>
          )}

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed pt-2">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500 font-mono">
            <span>ISSUED BY JCB CORPORATE COMMUNICATIONS</span>
            <button
              onClick={onClose}
              className="text-red-600 hover:text-red-700 font-sans font-semibold uppercase tracking-wider"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
