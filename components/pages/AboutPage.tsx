"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = (language === "en" ? "About Us" : "हमारे बारे में") + " | Paisa Milega";
  }, [language]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden border-b border-stone-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6 leading-tight font-sans">
              {t.aboutPage.hero.punchline}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-brand-orange mb-6">
              {t.aboutPage.hero.hook}
            </p>
            <p className="text-[15px] sm:text-[17px] text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              {t.aboutPage.hero.subtext}
            </p>
          </div>
          
          {/* Background Accents & Bharat Network Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-100 select-none overflow-hidden">
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-brand-green/[0.03] blur-[100px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-orange/[0.03] blur-[100px]" />
            
            {/* Visible Connectivity Pattern */}
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] text-stone-200/60" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 50 C250 150 150 100 50 300 C-50 500 150 550 50 580" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
              <path d="M400 50 C550 150 650 100 750 300 C850 500 650 550 750 580" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
              <path d="M150 200 H650" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M100 400 L700 150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Nodes representing Saathis/Network - More opaque */}
              <circle cx="400" cy="50" r="5" fill="currentColor" className="text-brand-green/40" />
              <circle cx="50" cy="300" r="4" fill="currentColor" className="text-brand-orange/40" />
              <circle cx="750" cy="300" r="4" fill="currentColor" className="text-brand-orange/40" />
              <circle cx="200" cy="250" r="3.5" fill="currentColor" className="text-brand-green/40" />
              <circle cx="600" cy="250" r="3.5" fill="currentColor" className="text-brand-green/40" />
              <circle cx="400" cy="450" r="4.5" fill="currentColor" className="text-brand-orange/40" />
            </svg>
          </div>
        </section>

        {/* Legacy & Stats Section */}
        <section className="py-16 sm:py-24 bg-white border-b border-stone-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-sans">
                  {t.aboutPage.legacy.title}
                </h2>
                <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium">
                  {t.aboutPage.legacy.content}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {t.aboutPage.stats.map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-[#fafaf9] border border-stone-100 text-center shadow-sm">
                    <div className="text-2xl sm:text-3xl font-black text-brand-green mb-1">{stat.value}</div>
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team & Photo Section */}
        <section className="py-16 sm:py-24 bg-[#fafaf9] border-b border-stone-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Photo Placeholders */}
                <div className="aspect-[4/5] rounded-3xl bg-stone-200 animate-pulse overflow-hidden relative border border-stone-300/50 shadow-inner">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold uppercase tracking-tighter text-[10px]">
                    Team Photo Placeholder
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-3xl bg-stone-200 animate-pulse overflow-hidden relative border border-stone-300/50 shadow-inner sm:mt-8">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-bold uppercase tracking-tighter text-[10px]">
                    Office Photo Placeholder
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 font-sans">
                  {t.aboutPage.team.title}
                </h2>
                <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed font-medium mb-8">
                  {t.aboutPage.team.content}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-[13px] font-bold">
                  <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                  Bhopal HQ, India
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 rounded-[40px] bg-brand-orange text-white relative overflow-hidden shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 relative z-10">{t.aboutPage.mission.title}</h3>
                <p className="text-orange-50 text-[15px] leading-relaxed relative z-10 font-medium">{t.aboutPage.mission.content}</p>
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="p-10 rounded-[40px] bg-brand-green text-white relative overflow-hidden shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 relative z-10">{t.aboutPage.vision.title}</h3>
                <p className="text-green-100 text-[15px] leading-relaxed relative z-10">{t.aboutPage.vision.content}</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
