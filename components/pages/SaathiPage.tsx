"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";

export default function SaathiPage() {
  const { t, language } = useLanguage();
  const langPrefix = language === "hi" ? "/hi" : "";

  return (
    <div className="bg-[#fafaf9]">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden bg-[#fafaf9] border-b border-stone-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-green-50/40 px-4 py-1.5 text-[13px] font-bold mb-6 border border-brand-green/20">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-ping" />
              <span className="text-brand-green">paisa</span>
              <span className="text-brand-orange ml-0.5">milega</span>
              <span className="text-slate-600 ml-1">{language === "en" ? "Saathi Program" : "साथी प्रोग्राम"}</span>
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl mb-6 leading-[1.15]">
              {t.saathi.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-brand-orange mb-6">
              {t.saathi.hero.hook}
            </p>
            <p className="text-[15px] sm:text-[16px] text-slate-700 mb-8 leading-relaxed max-w-2xl mx-auto">
              {t.saathi.hero.subtext}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`${langPrefix}/#register`}
                className="w-full sm:w-auto rounded-full bg-brand-green px-8 py-3 text-[14px] font-bold text-white shadow-lg shadow-brand-green/10 hover:bg-brand-green-dark transition-all active:scale-95"
              >
                {t.saathi.hero.cta}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Accents (Matching Hero style) */}
        <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden">
          <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-brand-orange/5 to-brand-green/10 blur-3xl" />
          <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-stone-200/40 via-brand-orange/5 to-brand-green/5 blur-3xl" />
        </div>
      </section>

      {/* Win-Win Narrative Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-stone-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                {t.saathi.winWin.title}
              </h2>
              <div className="inline-block px-3 py-1 bg-orange-50/60 text-brand-orange rounded-full font-bold text-[13px] mb-5 border border-brand-orange/10">
                {t.saathi.winWin.concept}
              </div>
              <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed">
                {t.saathi.winWin.content}
              </p>
            </div>
            <div className="bg-[#fafaf9] rounded-2xl p-6 sm:p-8 border border-stone-100 relative overflow-hidden shadow-sm">
              <div className="relative z-10 flex flex-col gap-5">
                {[
                  { id: 1, text: t.saathi.winWin.points[0], color: "bg-brand-green" },
                  { id: 2, text: t.saathi.winWin.points[1], color: "bg-brand-orange" },
                  { id: 3, text: t.saathi.winWin.points[2], color: "bg-slate-900" }
                ].map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className={`h-9 w-9 shrink-0 rounded-xl ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>{item.id}</div>
                    <p className="text-[14px] sm:text-[15px] font-bold text-slate-800">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income Potential Section */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">{t.saathi.income.title}</h2>
              <p className="text-slate-400 text-[15px] sm:text-[16px] font-medium">{t.saathi.income.subtext}</p>
            </div>
            <div className="w-full max-w-xs">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center shadow-xl">
                <h3 className="text-4xl font-black text-brand-orange mb-2 tracking-tight">
                  {t.saathi.income.cardTitle}
                </h3>
                <p className="text-[11px] font-bold text-white/60 mb-4 uppercase tracking-widest">Potential</p>
                <div className="h-px bg-white/10 mb-4"></div>
                <p className="text-slate-300 text-[13px] leading-relaxed">
                  {t.saathi.income.cardDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none"></div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 sm:py-20 bg-[#fafaf9]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.saathi.benefits.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.saathi.benefits.list.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:border-brand-green/20 transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-[#fafaf9] flex items-center justify-center mb-5 border border-stone-100">
                  {index === 0 && <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zM17 16v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m10 0V9a2 2 0 00-2-2M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2m0 10V9" /></svg>}
                  {index === 1 && <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
                  {index === 2 && <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>}
                  {index === 3 && <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-stone-100 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.saathi.howItWorks.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.saathi.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="h-14 w-14 rounded-full bg-brand-green/10 flex items-center justify-center text-[20px] font-black text-brand-green mb-6 border-2 border-brand-green/10">
                  {index + 1}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-[14px] text-slate-600 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-16 sm:py-20 bg-[#fafaf9]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.saathi.whoIsItFor.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.saathi.whoIsItFor.list.map((item, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white border border-stone-100 hover:shadow-sm transition-all duration-300">
                <div className="shrink-0">
                  <div className="inline-flex px-2.5 py-0.5 rounded-lg bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-wider mb-3">
                    {item.tag}
                  </div>
                  <h3 className="text-[19px] font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 px-6">
        <div className="mx-auto max-w-4xl bg-brand-green rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden shadow-lg shadow-brand-green/10">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Ready to start your journey with <span className="text-white">paisa</span><span className="text-brand-orange">milega</span>?
            </h2>
            <Link
              href={`${langPrefix}/#register`}
              className="inline-flex rounded-full bg-white px-8 py-3.5 text-[15px] font-bold text-brand-green shadow-lg hover:bg-stone-50 transition-all active:scale-95"
            >
              {t.saathi.hero.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
