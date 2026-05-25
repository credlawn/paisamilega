"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { getBlogs, getFileURL } from "@/utils/pocketbase";
import Image from "next/image";
import Link from "next/link";

interface BlogItem {
  id: string;
  collectionId: string;
  slug: string;
  title: string;
  title_en: string;
  title_hi: string;
  excerpt: string;
  excerpt_en: string;
  excerpt_hi: string;
  image: string;
  category: string;
  created: string;
}

export default function BlogSection() {
  const { t, language } = useLanguage();
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const langPrefix = language === "hi" ? "/hi" : "";

  useEffect(() => {
    async function loadData() {
      const data = await getBlogs();
      setBlogs(data);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading || blogs.length === 0) return null;

  return (
    <section className="bg-[#fafaf9] py-16 sm:py-24 border-b border-stone-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] font-semibold text-brand-green tracking-wide uppercase mb-3 block">
              {t.nav.academy}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans mb-4">
              {language === 'en' ? "Latest Financial Insights" : "लेटेस्ट फाइनेंशियल जानकारी"}
            </h2>
            <p className="text-[15px] sm:text-[16px] text-slate-600 font-medium">
              {language === 'en' 
                ? "Stay updated with the latest news, tips, and strategies to grow your digital advisory business." 
                : "अपने काम को बढ़ाने के लिए नई खबरों, टिप्स और तरीकों से अपडेट रहें।"}
            </p>
          </div>
          <Link 
            href={`${langPrefix}/blogs`}
            className="inline-flex items-center gap-2 text-brand-green font-bold text-[14px] hover:gap-3 transition-all group"
          >
            {language === 'en' ? "View All Articles" : "सभी आर्टिकल देखें"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Horizontal Scrollable Blog Grid */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-2 snap-x snap-mandatory">
          {blogs.map((blog) => {
            // Localized Content with fallback
            const displayTitle = language === 'hi' ? (blog.title_hi || blog.title) : (blog.title_en || blog.title);
            const displayExcerpt = language === 'hi' ? (blog.excerpt_hi || blog.excerpt) : (blog.excerpt_en || blog.excerpt);

            return (
              <Link 
                key={blog.id}
                href={`${langPrefix}/blogs/${blog.slug}`}
                className="flex-shrink-0 w-[280px] sm:w-[350px] snap-start group"
              >
                <div className="flex flex-col bg-white rounded-[32px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:border-brand-green/20 transition-all duration-500 h-full">
                  {/* Blog Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    {blog.image ? (
                      <Image 
                        src={getFileURL(blog.collectionId, blog.id, blog.image)}
                        alt={displayTitle || ""}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-brand-green/5 text-brand-green font-black opacity-20 text-4xl">
                        paisa
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-brand-green shadow-sm border border-stone-100">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow">
                    <h3 className="text-[17px] sm:text-[19px] font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-green transition-colors line-clamp-2">
                      {displayTitle}
                    </h3>
                    <p className="text-[14px] text-slate-600 leading-relaxed font-medium line-clamp-3 mb-6">
                      {displayExcerpt}
                    </p>
                    
                    <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                        {new Date(blog.created).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-[#fafaf9] flex items-center justify-center text-slate-400 group-hover:bg-brand-green group-hover:text-white transition-all">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-4 w-4">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Background Decorative Pattern */}
      <svg className="absolute bottom-0 right-0 h-1/2 w-1/2 text-stone-200/20 pointer-events-none select-none" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M100 100 L0 100 L100 0 Z" fill="currentColor" />
      </svg>
    </section>
  );
}
