"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const langPrefix = language === "hi" ? "/hi" : "";

  // Close sidebar when clicking on a link
  const closeSidebar = () => setIsSidebarOpen(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  return (
    <>
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

            {/* Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href={`${langPrefix}/#products`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
                {t.nav.products}
              </Link>
              <Link href={`${langPrefix}/#academy`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
                {t.nav.academy}
              </Link>
              <Link href={`${langPrefix}/saathi`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
                {t.nav.benefits}
              </Link>              <Link href={`${langPrefix}/about`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
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

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="flex md:hidden items-center justify-center rounded-full border border-stone-200 bg-stone-50/50 p-2 text-slate-700 hover:bg-stone-100 transition-colors active:scale-90"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar Content */}
      <div 
        className={`fixed inset-y-0 right-0 z-[70] w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.32,0,0.07,1)] md:hidden ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header section with brand feel */}
          <div className="bg-slate-50/80 px-6 py-8 border-b border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <div className="relative overflow-hidden h-8 w-[130px]">
                <img 
                  src="/paisamilegalogo.png" 
                  alt="Paisa Milega" 
                  className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
                />
              </div>
              <button 
                onClick={closeSidebar}
                className="p-2 rounded-full bg-white border border-slate-100 text-slate-400 shadow-sm active:scale-90 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Navigation</p>
          </div>

          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <Link 
                href={`${langPrefix}/#products`} 
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-green transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                {t.nav.products}
              </Link>

              <Link 
                href={`${langPrefix}/#academy`} 
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-green transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                  </svg>
                </div>
                {t.nav.academy}
              </Link>

            <Link 
                href={`${langPrefix}/saathi`} 
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-green transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                {t.nav.benefits}
              </Link>

              <Link 
                href={`${langPrefix}/about`} 
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-green transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                {t.nav.about}
              </Link>
            </div>
          </nav>

          <div className="p-6 bg-slate-50/50 border-t border-slate-100">
            <Link 
              href={`${langPrefix}/#register`} 
              onClick={closeSidebar}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-green px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-brand-green/20 active:scale-[0.98] transition-all"
            >
              <span>{t.nav.cta}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
