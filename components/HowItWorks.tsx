"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#fafaf9] py-16 sm:py-24 border-b border-stone-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
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
