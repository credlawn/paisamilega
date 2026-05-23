"use client";

import React from "react";

const PRODUCTS = [
  {
    title: "Credit Cards",
    payout: "Earn up to ₹3,500",
    desc: "Offer premium, co-branded, and lifetime-free credit cards from India's leading banks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand-green">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <rect x="5" y="14" width="3" height="2" rx="0.5" />
      </svg>
    ),
  },
  {
    title: "Personal & Business Loans",
    payout: "Earn up to 3.5% of Loan Value",
    desc: "Help customers access instant, low-interest personal loans, business credit, or home loans.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand-green">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Insurance Policies",
    payout: "Earn up to 25% recurring payout",
    desc: "Distribute Health, Motor, Life, and Term insurance plans from leading providers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand-green">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Savings & Demat Accounts",
    payout: "Earn up to ₹850 per account",
    desc: "Open digital savings accounts or demat trading accounts for zero setup fees.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand-green">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    title: "Credit Lines & Pay Later",
    payout: "Earn up to ₹450 per lead",
    desc: "Help young professionals access instant digital credit lines and buy-now-pay-later limits.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand-green">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Investment & Deposits",
    payout: "Earn up to 1.2% per investment",
    desc: "Facilitate stable wealth-building options like Mutual Funds, Fixed Deposits, and Gold Bonds.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-brand-green">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-16">
          <span className="text-[11px] font-semibold text-brand-green tracking-wide uppercase mb-3">
            Financial Products Suite
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl font-sans">
            High-commission financial products.
          </h2>
          <p className="mt-3.5 text-[14px] font-medium leading-relaxed text-slate-700 font-sans">
            Choose from over 100+ partner products. Share lead generation links via WhatsApp, track progress in real-time, and get direct payouts.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-stone-100 bg-stone-50/20 p-6 flex flex-col justify-between premium-shadow premium-shadow-hover"
            >
              <div>
                {/* Icon Wrap */}
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 border border-brand-green/10 mb-4">
                  {prod.icon}
                </div>
                
                {/* Product Title */}
                <h3 className="text-[15px] font-semibold text-slate-900 font-sans">
                  {prod.title}
                </h3>
                
                {/* Product Description */}
                <p className="mt-2 text-[13px] font-medium leading-relaxed text-slate-700 font-sans">
                  {prod.desc}
                </p>
              </div>

              {/* Commission Tag */}
              <div className="mt-6 border-t border-stone-100 pt-4 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-brand-green bg-green-50/70 border border-brand-green/10 rounded-full px-2.5 py-0.5">
                  {prod.payout}
                </span>
                
                {/* Minimal arrow */}
                <span className="text-stone-400 group-hover:text-stone-600 transition-colors">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
