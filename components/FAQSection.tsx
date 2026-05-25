"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { FAQItem } from "@/utils/pocketbase";

interface FAQSectionProps {
  faqs?: FAQItem[];
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const { t, language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Map PocketBase FAQs to standard { q, a } schema
  const displayQuestions = (faqs || []).map(item => ({
    q: language === "hi" ? (item.question_hi || item.question_en) : (item.question_en || item.question_hi),
    a: language === "hi" ? (item.answer_hi || item.answer_en) : (item.answer_en || item.answer_hi),
  }));

  if (displayQuestions.length === 0) return null;

  return (
    <section className="bg-[#fafaf9] py-16 sm:py-24 border-b border-stone-100 relative overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-green/5 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold text-brand-green tracking-wide uppercase mb-3 block">
            {language === "en" ? "Support Center" : "सहायता केंद्र"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans mb-4">
            {t.faq.title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-600 font-medium">
            {t.faq.subtitle}
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-green to-brand-orange opacity-80" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          </div>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {displayQuestions.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/60 overflow-hidden shadow-sm hover:border-brand-green/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none select-none group"
                >
                  <span className="text-[15px] sm:text-[16px] font-bold text-slate-900 group-hover:text-brand-green transition-colors leading-tight">
                    {item.q}
                  </span>
                  <span className={`h-6 w-6 shrink-0 rounded-full bg-[#fafaf9] flex items-center justify-center text-slate-400 group-hover:text-brand-green transition-all transform duration-300 ${isOpen ? "rotate-180 bg-brand-green/10 text-brand-green" : ""}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Animated content wrapper */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-stone-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div 
                    className="p-6 text-[14px] sm:text-[15px] leading-relaxed text-slate-600 font-medium bg-[#fafaf9]/30 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3 [&_a]:text-brand-green [&_a]:underline [&_strong]:font-bold"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
