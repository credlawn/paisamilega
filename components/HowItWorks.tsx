"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#fafaf9] py-16 sm:py-24 border-b border-stone-100 relative overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-green/5 blur-[120px]" />
        
        {/* Subtle curved line pattern matching logo energy */}
        <svg className="absolute bottom-0 left-0 h-1/2 w-full text-stone-200/40" fill="none" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M0,400 C200,350 400,450 600,300 C800,150 1000,250 1000,0" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans">
            {t.home.howItWorks.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[20%] right-[20%] h-0.5 bg-stone-200 border-dashed border-t-2 opacity-50"></div>
          
          {t.home.howItWorks.steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="h-14 w-14 rounded-full bg-brand-green text-white flex items-center justify-center text-[20px] font-black shadow-lg shadow-brand-green/20 mb-8 border-4 border-white group-hover:scale-110 transition-transform duration-500">
                {idx + 1}
              </div>
              <h3 className="text-[18px] font-bold text-slate-900 mb-3 font-sans">
                {step.title}
              </h3>
              <p className="text-[14px] font-medium leading-relaxed text-slate-600 font-sans max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
