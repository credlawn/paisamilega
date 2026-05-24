"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Features() {
  const { t, language } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-20 border-b border-stone-100 relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-64 w-64 rounded-full bg-brand-green/5 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-orange/5 blur-[120px]" />
        
        {/* Subtle geometric pattern */}
        <svg className="absolute top-0 left-0 h-full w-full text-stone-100/50" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
            {language === "en" ? (
              <>
                Why choose <span className="text-brand-green">paisa</span><span className="text-brand-orange">milega</span>?
              </>
            ) : (
              <>
                <span className="text-brand-green">paisa</span><span className="text-brand-orange">milega</span> ही क्यों चुनें?
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.home.features.list.map((feature, idx) => (
            <div 
              key={idx}
              className="group flex flex-col items-center text-center p-8 rounded-3xl bg-[#fafaf9] border border-stone-100 hover:bg-white hover:shadow-xl hover:border-brand-green/20 transition-all duration-500"
            >
              <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-green mb-6 border border-stone-100 group-hover:scale-110 transition-transform duration-500">
                {idx === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>}
                {idx === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                {idx === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7"><path d="M6 3h12M6 8h12M6 13h3M9 13c6.667 0 6.667-10 0-10M6 13l8.5 8" /></svg>}
                {idx === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>}
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-[14px] font-medium leading-relaxed text-slate-600 font-sans">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
