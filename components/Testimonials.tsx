"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { getTestimonials, getFileURL } from "@/utils/pocketbase";
import Image from "next/image";

interface TestimonialItem {
  id: string;
  collectionId: string;
  name: string;
  location: string;
  avatar: string;
  content: string;
  content_en: string;
  content_hi: string;
  designation: string;
  rating: number;
}

export default function Testimonials() {
  const { language } = useLanguage();
  const [items, setItems] = useState<TestimonialItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getTestimonials();
      setItems(data);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading || items.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden border-b border-stone-100 relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
            {language === 'en' ? "Trusted by Our Saathi Family" : "हमारे साथियों का भरोसा"}
          </h2>
        </div>

        <div className="relative group">
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 px-2 scroll-smooth snap-x snap-mandatory">
            {items.map((item, idx) => {
              // Localized Content with fallback
              const displayContent = language === 'hi' ? (item.content_hi || item.content) : (item.content_en || item.content);

              return (
                <div 
                  key={item.id}
                  className={`flex-shrink-0 w-[300px] sm:w-[380px] snap-center p-8 rounded-[32px] border shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col min-h-[280px] relative overflow-hidden group ${
                    idx % 2 === 0 
                      ? 'bg-green-50/30 border-green-100 hover:border-brand-green/30' 
                      : 'bg-orange-50/30 border-orange-100 hover:border-brand-orange/30'
                  }`}
                >
                  {/* Decorative Background Pattern */}
                  <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className={idx % 2 === 0 ? "text-brand-green" : "text-brand-orange"}>
                      <circle cx="10" cy="10" r="2" />
                      <circle cx="30" cy="10" r="2" />
                      <circle cx="50" cy="10" r="2" />
                      <circle cx="20" cy="30" r="2" />
                      <circle cx="40" cy="30" r="2" />
                      <circle cx="10" cy="50" r="2" />
                    </svg>
                  </div>

                  <div className="flex gap-1 mb-6 text-brand-orange relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill={i < item.rating ? "currentColor" : "none"} stroke="currentColor" className="h-4 w-4">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[15px] sm:text-[16px] text-slate-800 leading-relaxed font-semibold mb-8 flex-grow italic relative z-10">
                    &ldquo;{displayContent}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-stone-200/60 relative z-10">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-white relative border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
                      {item.avatar ? (
                        <Image 
                          src={getFileURL(item.collectionId, item.id, item.avatar)}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center font-black text-brand-green bg-green-50">
                          {item.name ? item.name[0] : "?"}
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="text-[15px] font-black text-slate-900 leading-tight truncate">{item.name}</h4>
                        <p className={`text-[11px] font-black capitalize whitespace-nowrap ${idx % 2 === 0 ? 'text-brand-green' : 'text-brand-orange'}`}>
                          {item.designation}
                        </p>
                      </div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}
