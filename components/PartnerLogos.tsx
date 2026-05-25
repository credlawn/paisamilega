"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function PartnerLogos() {
  const { language } = useLanguage();

  return (
    <section className="bg-stone-50/50 py-10 border-y border-stone-100/80 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-8 text-center">
            {language === "en" 
              ? "Official Referral Partners with Leading Banks" 
              : "प्रमुख बैंकों के आधिकारिक रेफरल पार्टनर्स"}
          </p>
          
          {/* Logo container with grayscale, subtle hover animation */}
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16 opacity-60">
            {/* HDFC Bank text logo representation */}
            <div className="flex flex-col items-center select-none cursor-default group hover:opacity-100 transition-opacity">
              <span className="text-[18px] font-black text-slate-700 tracking-tight leading-none group-hover:text-blue-900 transition-colors">
                HDFC <span className="font-medium text-slate-500">BANK</span>
              </span>
            </div>

            {/* SBI logo representation */}
            <div className="flex items-center gap-1.5 select-none cursor-default group hover:opacity-100 transition-opacity">
              <div className="h-4.5 w-4.5 rounded-full border-[3px] border-slate-700 group-hover:border-sky-500 transition-colors flex items-center justify-center relative">
                <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-1.5 h-1 bg-stone-50 group-hover:bg-stone-50"></div>
              </div>
              <span className="text-[15px] font-black text-slate-700 tracking-wide group-hover:text-sky-600 transition-colors">
                SBI
              </span>
            </div>

            {/* ICICI Bank logo representation */}
            <div className="flex flex-col items-center select-none cursor-default group hover:opacity-100 transition-opacity">
              <span className="text-[16px] font-extrabold italic text-slate-700 tracking-tighter leading-none group-hover:text-amber-800 transition-colors">
                ICICI <span className="font-light not-italic text-[13px] text-slate-500">Bank</span>
              </span>
            </div>

            {/* AXIS Bank logo representation */}
            <div className="flex flex-col items-center select-none cursor-default group hover:opacity-100 transition-opacity">
              <span className="text-[17px] font-black text-slate-700 tracking-widest leading-none group-hover:text-rose-950 transition-colors">
                AXIS <span className="font-semibold text-[13px] tracking-normal text-slate-500">BANK</span>
              </span>
            </div>

            {/* KOTAK logo representation */}
            <div className="flex flex-col items-center select-none cursor-default group hover:opacity-100 transition-opacity">
              <span className="text-[16px] font-black text-slate-700 tracking-tight leading-none group-hover:text-red-700 transition-colors">
                kotak <span className="font-normal text-[12px] text-slate-500">Bank</span>
              </span>
            </div>
            
            {/* IDFC FIRST logo representation */}
            <div className="flex flex-col items-center select-none cursor-default group hover:opacity-100 transition-opacity">
              <span className="text-[15px] font-black text-slate-700 tracking-tighter leading-none group-hover:text-red-900 transition-colors">
                IDFC <span className="font-bold text-[12px] text-slate-500 tracking-normal">FIRST Bank</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
