"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";
import { getPartners, getFileURL } from "@/utils/pocketbase";
import Image from "next/image";

interface PartnerItem {
  id: string;
  collectionId: string;
  name: string;
  logo: string;
}

export default function PartnerLogos() {
  const { language } = useLanguage();
  const [partners, setPartners] = useState<PartnerItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await getPartners();
      // Shuffle array randomly
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      setPartners(shuffled);
      setLoading(false);
    }
    loadData();
  }, []);

  if (loading || partners.length === 0) return null;

  // Duplicate items to ensure smooth marquee scrolling even with few records
  const marqueeItems = [...partners, ...partners];
  const finalItems = marqueeItems.length < 12 ? [...marqueeItems, ...marqueeItems, ...marqueeItems] : marqueeItems;

  return (
    <section className="bg-gradient-to-b from-[#f2f2ee] via-[#fafaf9] to-[#f2f2ee] py-12 border-y border-stone-200/50 overflow-hidden relative">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Soft colorful glowing blobs in the background */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-brand-green/10 blur-[100px] pointer-events-none select-none animate-pulse-slow" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-brand-orange/8 blur-[100px] pointer-events-none select-none animate-pulse-slow" />

        {/* Dynamic flowing curved lines (matching logo energy, no square boxes) */}
        <svg className="absolute inset-0 h-full w-full opacity-65" fill="none" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#008248" stopOpacity="0" />
              <stop offset="25%" stopColor="#008248" stopOpacity="0.25" />
              <stop offset="75%" stopColor="#ff7a00" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7a00" stopOpacity="0" />
              <stop offset="30%" stopColor="#008248" stopOpacity="0.15" />
              <stop offset="70%" stopColor="#ff7a00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#008248" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="fill-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#008248" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* A soft flowing filled wave at the bottom */}
          <path 
            d="M 0,200 C 150,150 350,180 500,140 C 650,100 850,160 1000,120 L 1000,200 L 0,200 Z" 
            fill="url(#fill-grad-1)" 
          />
          
          {/* Elegant sweeping lines */}
          <path 
            d="M 0,100 C 150,60 300,150 500,110 C 700,70 850,130 1000,90" 
            stroke="url(#wave-grad-1)" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M 0,140 C 200,170 400,80 650,130 C 800,160 900,110 1000,150" 
            stroke="url(#wave-grad-2)" 
            strokeWidth="1.5" 
            strokeDasharray="6 6" 
            fill="none" 
          />
          
          {/* Glowing nodes on path intersections */}
          <circle cx="500" cy="110" r="4" fill="#008248" className="opacity-40 animate-pulse" />
          <circle cx="650" cy="130" r="3" fill="#ff7a00" className="opacity-50" />
          <circle cx="200" cy="155" r="3.5" fill="#008248" className="opacity-40" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 mb-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[12px] sm:text-[13px] font-bold text-slate-600 uppercase tracking-widest mb-3">
            {language === "en" 
              ? "Official Referral Partners with Leading Banks" 
              : "प्रमुख बैंकों के आधिकारिक रेफरल पार्टनर्स"}
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand-green to-brand-orange opacity-80" />
            <div className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
          </div>
        </div>
      </div>

      {/* Infinite scrolling marquee wrapper */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Soft fading overlays for a premium appearance (matching the new edge color) */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#f2f2ee] via-[#f2f2ee]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f2f2ee] via-[#f2f2ee]/90 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee whitespace-nowrap pr-6 [will-change:transform] transform-gpu">
          {/* First loop of items */}
          {finalItems.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}-first`}
              className="flex items-center justify-center bg-white rounded-2xl p-2 border border-stone-200/50 shadow-sm shrink-0 w-44 h-22 md:w-48 md:h-24 hover:scale-105 hover:border-brand-green/20 hover:shadow-md transition-all duration-300 select-none relative"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={getFileURL(partner.collectionId, partner.id, partner.logo)}
                  alt={partner.name || "Bank Logo"}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
          
          {/* Second duplicated loop of items for infinite loop effect */}
          {finalItems.map((partner, idx) => (
            <div 
              key={`${partner.id}-${idx}-second`}
              className="flex items-center justify-center bg-white rounded-2xl p-2 border border-stone-200/50 shadow-sm shrink-0 w-44 h-22 md:w-48 md:h-24 hover:scale-105 hover:border-brand-green/20 hover:shadow-md transition-all duration-300 select-none relative"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={getFileURL(partner.collectionId, partner.id, partner.logo)}
                  alt={partner.name || "Bank Logo"}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
