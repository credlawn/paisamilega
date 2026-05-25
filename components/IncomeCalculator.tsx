"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import Link from "next/link";
import SaathiRegistrationModal from "@/components/SaathiRegistrationModal";

export default function IncomeCalculator() {
  const { t, language } = useLanguage();
  const [ccCount, setCcCount] = useState(6);
  const [loanCount, setLoanCount] = useState(3);
  const [accCount, setAccCount] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const langPrefix = language === "hi" ? "/hi" : "";

  // Average commissions
  const CC_PAYOUT = 3000;
  const LOAN_PAYOUT = 5000;
  const ACC_PAYOUT = 500;

  const totalEarnings = (ccCount * CC_PAYOUT) + (loanCount * LOAN_PAYOUT) + (accCount * ACC_PAYOUT);

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-stone-100 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-60 select-none">
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-brand-green/[0.03] blur-[120px]" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-brand-orange/[0.03] blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 h-full w-full text-stone-200/20" fill="none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="calc-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" stroke="currentColor" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#calc-grid)" />
        </svg>

        {/* Wavy financial growth sketch line */}
        <svg className="absolute right-0 bottom-0 h-1/2 w-1/3 text-stone-300/40" fill="none" viewBox="0 0 300 200" preserveAspectRatio="none">
          <path 
            d="M0,180 Q60,150 120,120 T240,60 T300,10" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray="6 6" 
          />
          <circle cx="120" cy="120" r="4" fill="currentColor" className="text-brand-green/30" />
          <circle cx="240" cy="60" r="4" fill="currentColor" className="text-brand-orange/30" />
          <circle cx="300" cy="10" r="5" fill="currentColor" className="text-brand-green" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold text-brand-green tracking-wide uppercase mb-3 block">
            {language === "en" ? "Earnings Calculator" : "कमाई कैलकुलेटर"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-sans mb-4">
            {t.calculator.title}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-slate-600 max-w-2xl mx-auto font-medium">
            {t.calculator.subtitle}
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-4">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-green to-brand-orange opacity-80" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Sliders Area */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Credit Cards Slider */}
            <div className="bg-[#fafaf9] rounded-2xl p-6 border border-stone-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] font-bold text-slate-800">{t.calculator.ccLabel}</span>
                <span className="text-[20px] font-black text-brand-green bg-green-50 px-3 py-1 rounded-xl border border-brand-green/10">
                  {ccCount}
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="20" 
                value={ccCount}
                onChange={(e) => setCcCount(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-2">
                <span>0</span>
                <span>20</span>
              </div>
            </div>

            {/* Loans Slider */}
            <div className="bg-[#fafaf9] rounded-2xl p-6 border border-stone-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] font-bold text-slate-800">{t.calculator.loanLabel}</span>
                <span className="text-[20px] font-black text-brand-orange bg-orange-50 px-3 py-1 rounded-xl border border-brand-orange/10">
                  {loanCount}
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={loanCount}
                onChange={(e) => setLoanCount(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-2">
                <span>0</span>
                <span>10</span>
              </div>
            </div>

            {/* Savings & Demat Slider */}
            <div className="bg-[#fafaf9] rounded-2xl p-6 border border-stone-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[15px] font-bold text-slate-800">{t.calculator.accLabel}</span>
                <span className="text-[20px] font-black text-slate-800 bg-slate-100 px-3 py-1 rounded-xl border border-stone-200">
                  {accCount}
                </span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="30" 
                value={accCount}
                onChange={(e) => setAccCount(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-bold mt-2">
                <span>0</span>
                <span>30</span>
              </div>
            </div>
          </div>

          {/* Result Card Area */}
          <div className="lg:col-span-2">
            <div className="bg-[#fafaf9] text-slate-900 rounded-[40px] p-8 sm:p-10 border border-stone-200/80 shadow-lg relative overflow-hidden text-center flex flex-col justify-between min-h-[350px]">
              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-green/5 rounded-full blur-3xl" />
              
              {/* Subtle Rupee (₹) symbol outline sketch in the card background */}
              <div className="absolute right-[-30px] bottom-[-30px] text-stone-200/25 pointer-events-none select-none">
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12M6 8h12M6 13h4M10 13c3.5 0 6-2.5 6-5s-2.5-5-6-5M6 13l9 9" />
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-[11px] font-black text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
                  {t.calculator.estimatedEarnings}
                </span>
                
                <div className="mt-8 mb-4">
                  <h3 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    ₹{totalEarnings.toLocaleString("en-IN")}
                    <span className="text-brand-orange ml-0.5">*</span>
                  </h3>
                  <p className="text-slate-500 font-bold text-[13px] tracking-wide mt-2 uppercase">
                    {t.calculator.perMonth}
                  </p>
                </div>
                
                <p className="text-slate-500 text-[13px] sm:text-[14px] leading-relaxed max-w-xs mx-auto mb-8 font-medium">
                  {language === "en" 
                    ? "*Estimates are based on average bank commissions. Real payouts vary by product choice." 
                    : "*अनुमानित कमाई औसत कमीशन पर आधारित है। वास्तविक कमीशन प्रोडक्ट्स के अनुसार बदल सकता है।"}
                </p>
              </div>

              <div className="relative z-10">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="block w-full text-center rounded-full bg-brand-green py-4 text-[14px] font-bold text-white shadow-lg shadow-brand-green/20 hover:bg-brand-green-dark hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  {t.calculator.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SaathiRegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
