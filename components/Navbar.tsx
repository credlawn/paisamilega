"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const langPrefix = language === "hi" ? "/hi" : "";

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism border-b border-slate-100 premium-shadow [transform:translateZ(0)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo Brand Lockup */}
          <Link href={langPrefix || "/"} className="relative z-10 flex items-center group shrink-0 w-[170px] h-10">
            <div className="relative overflow-hidden h-full w-full transition-transform duration-300 group-hover:scale-[1.02]">
              <img 
                src="/paisamilegalogo.png" 
                alt="Paisa Milega" 
                className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href={`${langPrefix}/#products`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              {t.nav.products}
            </Link>
            <Link href={`${langPrefix}/#academy`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              {t.nav.academy}
            </Link>
            <Link href={`${langPrefix}/#benefits`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              {t.nav.benefits}
            </Link>
            <Link href={`${langPrefix}/#about`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              {t.nav.about}
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="relative z-30 flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              onTouchEnd={(e) => {
                e.preventDefault();
                setLanguage(language === "en" ? "hi" : "en");
              }}
              className="relative z-30 flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50/50 px-3 py-1.5 text-[11px] font-bold text-slate-700 hover:bg-stone-100 hover:text-slate-900 transition-colors active:scale-95 duration-100 cursor-pointer touch-manipulation"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-stone-400">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{language === "en" ? "हिंदी" : "EN"}</span>
            </button>

            <Link 
              href={`${langPrefix}/#register`} 
              className="hidden md:inline-flex rounded-full bg-brand-green px-4 py-2 text-[12px] font-semibold text-white transition-all hover:bg-brand-green-dark hover:shadow-[0_4px_12px_rgba(0,130,72,0.15)] active:scale-95"
            >
              {t.nav.cta}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
