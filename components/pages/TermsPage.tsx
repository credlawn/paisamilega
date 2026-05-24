"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function TermsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.terms.title + " | Paisa Milega";
  }, [t.terms.title]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      <main className="flex-grow py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-sans">
              {t.terms.title}
            </h1>
            <p className="mt-2 text-[13px] font-semibold text-slate-500 font-sans">
              {t.terms.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-[14px] leading-relaxed text-slate-700 font-sans font-medium">
            {t.terms.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="mb-3">
                    {p}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1.5 mt-2">
                    {section.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
