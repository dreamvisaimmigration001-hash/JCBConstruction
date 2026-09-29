import React, { useState } from 'react';
import { NEWS_DATA } from '../../data/jcbData';
import { NewsArticle } from '../../types';
import { ArchitecturalImage } from '../common/ArchitecturalImage';
import { ArrowRight } from 'lucide-react';
import { NewsDetailModal } from './NewsDetailModal';

export const NewsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const featuredArticle = NEWS_DATA[0];
  const regularArticles = NEWS_DATA.slice(1);

  return (
    <div className="space-y-0 text-neutral-900 bg-[#F8F9FA] pt-24">
      {/* ----------------------------------------------------------------------- */}
      {/* 1. HERO */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 font-semibold">
            <span>PRESS WIRE & CORPORATE DISPATCH</span>
            <span>·</span>
            <span>OFFICIAL RELEASES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-neutral-950 max-w-5xl leading-[1.02]">
            WHAT'S HAPPENING <br />
            <span className="text-neutral-500">AT JCB.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-600 font-light max-w-3xl leading-relaxed">
            Project breakthroughs, executive appointments, sustainable construction
            milestones, and community investments across Canada.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------------------- */}
      {/* 2. EDITORIAL ARTICLES LAYOUT */}
      {/* ----------------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 px-6 md:px-10 bg-[#F8F9FA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Featured Lead Story */}
          {featuredArticle && (
            <div
              onClick={() => setSelectedArticle(featuredArticle)}
              className="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 relative h-72 sm:h-96 w-full overflow-hidden border border-neutral-100">
                <ArchitecturalImage
                  src={featuredArticle.heroImage}
                  alt={featuredArticle.title}
                  categoryLabel={featuredArticle.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <span className="text-red-600 uppercase font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span>·</span>
                  <span>{featuredArticle.date}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-neutral-950 group-hover:text-red-600 transition-colors leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-neutral-600 leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600 group-hover:text-neutral-950 transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {/* Grid of Other Articles */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-200 pb-4 font-medium">
              ALL RECENT ARTICLES & ANNOUNCEMENTS
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer bg-white border border-neutral-200 hover:border-neutral-400 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden border-b border-neutral-100">
                      <ArchitecturalImage
                        src={article.heroImage}
                        alt={article.title}
                        aspectRatio="16/9"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                        <span className="text-red-600 uppercase font-semibold">
                          {article.category}
                        </span>
                        <span>·</span>
                        <span>{article.date}</span>
                      </div>

                      <h3 className="text-lg font-display font-bold text-neutral-950 group-hover:text-red-600 transition-colors leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-neutral-500 border-t border-neutral-100 mt-4">
                    <span>{article.readTime}</span>
                    <span className="text-neutral-900 group-hover:text-red-600 flex items-center gap-1 font-medium">
                      Read More <ArrowRight className="w-3.5 h-3.5 text-red-600" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <NewsDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
};
