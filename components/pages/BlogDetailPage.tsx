"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { getBlogBySlug, getFileURL } from "@/utils/pocketbase";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface BlogItem {
  id: string;
  collectionId: string;
  slug: string;
  title: string;
  title_en: string;
  title_hi: string;
  content: string;
  content_en: string;
  content_hi: string;
  excerpt: string;
  excerpt_en: string;
  excerpt_hi: string;
  image: string;
  category: string;
  created: string;
  seo_title: string;
  seo_keyword: string;
}

export default function BlogDetailPage() {
  const { language } = useLanguage();
  const params = useParams();
  const [blog, setBlog] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const langPrefix = language === "hi" ? "/hi" : "";

  useEffect(() => {
    async function loadData() {
      if (params.slug) {
        const data = await getBlogBySlug(params.slug as string);
        setBlog(data);
        setLoading(false);
        if (data) {
          const displayTitle = language === 'hi' ? (data.title_hi || data.title) : (data.title_en || data.title);
          document.title = (data.seo_title || displayTitle) + " | Paisa Milega";
        }
      }
    }
    loadData();
  }, [params.slug, language]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-[#fafaf9]">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="h-12 w-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col min-h-screen bg-[#fafaf9]">
        <Navbar />
        <main className="flex-grow py-20 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Article Not Found</h1>
          <Link href={`${langPrefix}/blogs`} className="mt-4 text-brand-green font-bold">Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const displayTitle = language === 'hi' ? (blog.title_hi || blog.title) : (blog.title_en || blog.title);
  const displayContent = language === 'hi' ? (blog.content_hi || blog.content) : (blog.content_en || blog.content);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 py-12 sm:py-20">
          <header className="mb-12">
            <Link 
              href={`${langPrefix}/blogs`}
              className="inline-flex items-center gap-2 text-slate-500 font-bold text-[13px] uppercase tracking-widest mb-8 hover:text-brand-green transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5 rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              {language === 'en' ? "Back to Articles" : "वापस ब्लॉग पर"}
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-brand-green/10 text-[11px] font-black uppercase tracking-widest text-brand-green border border-brand-green/20">
                {blog.category}
              </span>
              <span className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
                {new Date(blog.created).toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-8 font-sans">
              {displayTitle}
            </h1>
          </header>

          {/* Main Cover Image */}
          <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden bg-stone-100 mb-16 shadow-2xl border border-stone-100">
            {blog.image ? (
              <Image 
                src={getFileURL(blog.collectionId, blog.id, blog.image)}
                alt={displayTitle || ""}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-brand-green/5 text-brand-green font-black opacity-20 text-6xl">
                paisa
              </div>
            )}
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-slate prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-strong:text-slate-900 prose-img:rounded-3xl"
            dangerouslySetInnerHTML={{ __html: displayContent }}
          />

          {/* Footer Social/Next Steps */}
          <div className="mt-20 pt-10 border-t border-stone-100">
            <div className="bg-[#fafaf9] rounded-3xl p-10 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {language === 'en' ? "Found this helpful?" : "क्या यह जानकारी काम की लगी?"}
              </h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                {language === 'en' 
                  ? "Share this article with your network and help them make smarter financial decisions." 
                  : "इस जानकारी को अपने दोस्तों और परिवार के साथ शेयर करें और उन्हें सही फैसले लेने में मदद करें।"}
              </p>
              <div className="flex justify-center gap-4">
                <button 
                  onClick={() => {
                    const url = window.location.href;
                    window.open(`https://wa.me/?text=${encodeURIComponent(displayTitle + " - " + url)}`, '_blank');
                  }}
                  className="flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-green-200"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.13.57-.072 1.758-.702 2.006-1.381.248-.678.248-1.262.173-1.381-.075-.118-.272-.197-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.078l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.437 5.662 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Share on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
