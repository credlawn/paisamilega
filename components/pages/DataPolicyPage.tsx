"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function DataPolicyPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t.dataPolicy.title + " | Paisa Milega";
  }, [t.dataPolicy.title]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      <main className="flex-grow py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-sans">
              {t.dataPolicy.title}
            </h1>
            <p className="mt-2 text-[13px] font-semibold text-slate-500 font-sans">
              {t.dataPolicy.subtitle}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-[14px] leading-relaxed text-slate-700 font-sans font-medium">
            {t.dataPolicy.sections.map((section, idx) => (
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

          {/* Trust Seal */}
          <div className="mt-12 p-6 rounded-2xl bg-brand-green/5 border border-brand-green/10 flex items-center gap-4">
            <div className="h-10 w-10 shrink-0 rounded-full bg-brand-green flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <p className="text-[13px] font-bold text-slate-800">
              {language === "en" 
                ? "Your data is secured using AES-256 encryption and stored exclusively on Indian servers." 
                : "आपका डेटा AES-256 एन्क्रिप्शन का उपयोग करके सुरक्षित है और विशेष रूप से भारतीय सर्वर पर संग्रहीत है।"}
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
