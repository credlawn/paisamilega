"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export default function BlogListPage() {
  const { language } = useLanguage();
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
    document.title = (language === "en" ? "Latest Financial Insights" : "लेटेस्ट फाइनेंशियल जानकारी") + " | Paisa Milega";
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      <main className="flex-grow py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6 font-sans">
              {language === 'en' ? "Latest Financial Insights" : "लेटेस्ट फाइनेंशियल जानकारी"}
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              {language === 'en' 
                ? "Your go-to source for credit card tips, loan guides, and financial wisdom." 
                : "क्रेडिट कार्ड, लोन और फाइनेंस की सही जानकारी के लिए आपका अपना ब्लॉग।"}
            </p>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-[32px] h-[450px] border border-stone-100" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => {
                const displayTitle = language === 'hi' ? (blog.title_hi || blog.title) : (blog.title_en || blog.title);
                const displayExcerpt = language === 'hi' ? (blog.excerpt_hi || blog.excerpt) : (blog.excerpt_en || blog.excerpt);

                return (
                  <Link 
                    key={blog.id}
                    href={`${langPrefix}/blogs/${blog.slug}`}
                    className="group"
                  >
                    <div className="flex flex-col bg-white rounded-[32px] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:border-brand-green/20 transition-all duration-500 h-full">
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        {blog.image ? (
                          <Image 
                            src={getFileURL(blog.collectionId, blog.id, blog.image)}
                            alt={displayTitle}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-brand-green/5 text-brand-green font-black opacity-20 text-4xl">
                            paisa
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-brand-green shadow-sm border border-stone-100">
                            {blog.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-[20px] font-bold text-slate-900 mb-4 leading-tight group-hover:text-brand-green transition-colors">
                          {displayTitle}
                        </h3>
                        <p className="text-[15px] text-slate-600 leading-relaxed font-medium line-clamp-3 mb-8">
                          {displayExcerpt}
                        </p>
                        
                        <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                          <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                            {new Date(blog.created).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                          </span>
                          <span className="inline-flex items-center gap-2 text-brand-green font-bold text-[13px]">
                            {language === 'en' ? "Read Article" : "आर्टिकल पढ़ें"}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-4 w-4">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
