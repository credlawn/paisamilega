"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function TechSupport() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden relative border-b border-stone-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-green/10 px-4 py-1.5 text-[12px] font-bold text-brand-green border border-brand-green/20 mb-6 uppercase tracking-widest">
              {t.home.tech.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight font-sans">
              {t.home.tech.title}
            </h2>
            <p className="text-slate-600 text-[16px] sm:text-[17px] font-medium leading-relaxed mb-10 font-sans">
              {t.home.tech.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {t.home.tech.items.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#fafaf9] border border-stone-100 hover:border-brand-green/30 transition-all duration-300 shadow-sm">
                  <h3 className="text-[16px] font-bold text-slate-900 mb-2 font-sans flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed font-sans font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Visual element representing tech/AI - Light version */}
            <div className="relative mx-auto w-full max-w-[400px] aspect-square">
              <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-[100px]"></div>
              <div className="absolute inset-10 border border-slate-100 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-20 border border-brand-orange/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-10 rounded-[40px] shadow-xl border border-stone-100 relative z-20">
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-green/10 text-brand-green">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                      <path d="M12 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
                      <path d="M12 14v4" />
                      <path d="M12 14l-4 4" />
                      <path d="M12 14l4 4" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floaties */}
              <div className="absolute top-10 right-10 h-12 w-12 rounded-2xl bg-white shadow-lg border border-stone-100 flex items-center justify-center animate-bounce duration-1000">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-brand-orange">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="absolute bottom-10 left-10 h-12 w-12 rounded-2xl bg-white shadow-lg border border-stone-100 flex items-center justify-center animate-bounce delay-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-brand-green">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
}
