"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

export default function AboutPage() {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                {/* Optimized Actual Photos - Now Clickable */}
                <div 
                  className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-stone-300/50 shadow-lg group cursor-pointer"
                  onClick={() => setSelectedImage("/gallery/office-image2.jpeg")}
                >
                  <Image 
                    src="/gallery/office-image2.jpeg" 
                    alt="Paisa Milega Team" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div 
                  className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-stone-300/50 shadow-lg group sm:mt-8 cursor-pointer"
                  onClick={() => setSelectedImage("/gallery/office-image7.jpeg")}
                >
                  <Image 
                    src="/gallery/office-image7.jpeg" 
                    alt="Paisa Milega Office" 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <section className="py-16 sm:py-24 bg-white border-b border-stone-100">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="p-10 rounded-[40px] bg-brand-orange text-white relative overflow-hidden shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 relative z-10">{t.aboutPage.mission.title}</h3>
                <p className="text-orange-50 text-[15px] leading-relaxed relative z-10 font-medium">{t.aboutPage.mission.content}</p>
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="p-10 rounded-[40px] bg-brand-green text-white relative overflow-hidden shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 relative z-10">{t.aboutPage.vision.title}</h3>
                <p className="text-green-100 text-[15px] leading-relaxed relative z-10 font-medium">{t.aboutPage.vision.content}</p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Life at Paisa Milega Gallery Section */}
        <section className="py-16 sm:py-24 bg-[#fafaf9]">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-sans tracking-tight">
                {t.aboutPage.lifeAt.title}
              </h2>
              <p className="text-[15px] sm:text-[17px] text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                {t.aboutPage.lifeAt.desc}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
              {[
                { type: 'image', span: 'sm:col-span-2 sm:row-span-2', label: 'Main Team Celebration', src: '/gallery/office-image1.jpeg' },
                { type: 'video', span: 'col-span-1 row-span-1', label: 'Office Tour', src: '/gallery/office-image10.jpeg', link: 'https://www.instagram.com/reel/C2o003ySeEg/?igsh=MTliaGV5eWtmbTBzdA==' },
                { type: 'image', span: 'col-span-1 row-span-1', label: 'Saathi Workshop', src: '/gallery/office-image14.jpeg' },
                { type: 'image', span: 'col-span-1 row-span-1', label: 'Tech Team at Work', src: '/gallery/office-image13.jpeg' },
                { type: 'video', span: 'col-span-1 row-span-2', label: 'Founder\'s Message', src: '/gallery/office-image8.jpeg', link: 'https://www.instagram.com/reel/C2r-DspycRu/?igsh=MTZtbG45a2hxdzZjNQ==' },
                { type: 'image', span: 'col-span-1 row-span-1', label: 'Customer Success Story', src: '/gallery/office-image9.jpeg' },
                { type: 'image', span: 'sm:col-span-2 sm:row-span-1', label: 'Bhopal HQ Annual Event', src: '/gallery/office-image11.jpeg' },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    if (item.type === 'video' && item.link) {
                      window.open(item.link, '_blank');
                    } else if (item.src) {
                      setSelectedImage(item.src);
                    }
                  }}
                  className={`group relative rounded-3xl overflow-hidden bg-stone-200 border border-stone-300/30 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${item.span}`}
                >
                  {/* Actual Image */}
                  <Image 
                    src={item.src} 
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-sm border ${
                      item.type === 'video' 
                        ? 'bg-brand-orange text-white border-brand-orange/20' 
                        : 'bg-white text-slate-900 border-stone-100'
                    }`}>
                      {item.type}
                    </span>
                  </div>

                  {/* Icon Overlay for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="h-12 w-12 rounded-full bg-white/90 text-brand-orange flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 ml-1">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-stone-100 text-[14px] font-bold text-slate-600 shadow-sm">
                <span>Working together to empower Bharat</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-orange transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-8 w-8">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            
            <div className="relative max-w-[95vw] max-h-[90vh] animate-zoom-in" onClick={(e) => e.stopPropagation()}>
              <img 
                src={selectedImage} 
                alt="Full Preview" 
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
