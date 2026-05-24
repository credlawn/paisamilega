"use client";

import React, { useState } from "react";

export default function Hero() {
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
      setPhone("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fafaf9] py-16 sm:py-24 border-b border-stone-100">
      
      {/* Background Decorative Vector Blobs & Network Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none">
        
        {/* Soft 3D-like blob behind text */}
        <div className="absolute -top-24 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-brand-orange/5 to-brand-green/10 blur-3xl" />
        
        {/* Soft 3D-like blob behind dashboard mockup */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-stone-200/40 via-brand-orange/5 to-brand-green/5 blur-3xl animate-pulse-slow" />
        
        {/* Subtle curved background lines */}
        <svg className="absolute top-0 right-0 h-full w-1/2 text-stone-200/50" fill="none" stroke="currentColor" strokeWidth="0.75" viewBox="0 0 400 800" xmlns="http://www.w3.org/2000/svg">
          <path d="M400,100 C300,150 200,50 100,200 C0,350 150,550 50,750" />
          <path d="M400,250 C320,300 220,180 150,320 C80,460 200,620 120,780" />
          {/* Network dots */}
          <circle cx="100" cy="200" r="3" fill="currentColor" />
          <circle cx="150" cy="320" r="2.5" fill="currentColor" />
          <circle cx="50" cy="750" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          
          {/* Left Column: Premium Minimal Text Content */}
          <div className="flex flex-col items-start lg:col-span-6 animate-slide-up">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-brand-green/20 bg-green-50/40 px-3.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-[13px] font-bold mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-ping" />
              <span className="text-brand-green font-medium font-sans">paisa</span>
              <span className="text-brand-orange font-extrabold font-sans">milega</span>
              <span className="text-slate-500 font-semibold font-sans"> @ Zero Investment</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15] font-sans">
              Refer <span className="text-brand-green">Credit Cards &amp; Loans</span>, and earn <span className="text-brand-orange">extra side income</span>.
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-slate-700 max-w-lg font-sans">
              Start your side income with <span className="text-brand-green font-medium">paisa</span> <span className="text-brand-orange font-extrabold">milega</span> @ zero investment. Share premium Credit Card and Loan offers with your network. They get the best bank deals, and you earn high payouts sent directly to your bank account.
            </p>

            {/* Lead Acquisition Form */}
            <div id="register" className="mt-8 w-full max-w-md">
              <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row gap-2.5 sm:gap-0 rounded-2xl sm:rounded-full bg-transparent sm:bg-white p-0 sm:p-1.5 border-0 sm:border border-stone-200/80 sm:shadow-[0_2px_12px_rgba(15,23,42,0.02)] focus-within:border-brand-green/45 transition-colors duration-200">
                <div className="flex items-center w-full bg-white rounded-full border border-stone-200/80 sm:border-0 p-1.5 sm:p-0">
                  <div className="flex items-center pl-3 text-stone-400 text-sm font-medium border-r border-stone-100 pr-2">
                    +91
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full bg-transparent px-3 py-2 text-sm font-semibold text-slate-900 outline-none placeholder-slate-500 min-w-0"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 rounded-full bg-brand-green px-5 py-3 sm:py-2.5 text-[13px] sm:text-[12px] font-bold text-white hover:bg-brand-green-dark transition-colors hover:shadow-[0_4px_12px_rgba(0,130,72,0.15)] active:scale-95 duration-100"
                >
                  Start Earning
                </button>
              </form>

              {/* Feedback Message */}
              {success && (
                <div className="mt-3 text-[12px] font-medium text-brand-green animate-fade-in">
                  ✓ App link sent to your mobile. Start your onboarding today!
                </div>
              )}

              {/* Trust Badge */}
              <p className="mt-3.5 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 text-brand-green">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Trusted by 10,000+ registered Customers across India.
              </p>
            </div>

          </div>

          {/* Right Column: Mobile App Screen Mockup */}
          <div className="lg:col-span-6 flex items-center justify-center animate-fade-in">
            <div className="relative">
              
              {/* Soft background glow */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-brand-orange/15 to-brand-green/10 blur-3xl pointer-events-none" />
              
              {/* Network decorative elements behind phone */}
              <div className="absolute -left-12 top-1/4 h-24 w-24 opacity-20 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-stone-400">
                  <circle cx="20" cy="20" r="4" fill="currentColor" />
                  <circle cx="80" cy="50" r="4" fill="currentColor" />
                  <circle cx="40" cy="80" r="4" fill="currentColor" />
                  <path d="M20,20 L80,50 L40,80 Z" />
                </svg>
              </div>

              {/* Phone Device Frame */}
              <div className="relative mx-auto h-[480px] w-[245px] sm:h-[510px] sm:w-[260px] rounded-[38px] border-[6px] border-slate-900 bg-slate-950 p-2 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.2)] ring-1 ring-slate-900/10 animate-float">
                
                {/* top notch/speaker capsule */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3.5 w-16 rounded-full bg-slate-950 z-20 flex items-center justify-center">
                  <div className="h-1 w-8 rounded-full bg-slate-800" />
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-800 ml-1.5" />
                </div>

                {/* Inner Screen */}
                <div className="h-full w-full rounded-[28px] overflow-hidden bg-[#fafaf9] flex flex-col justify-between p-3.5 relative border border-stone-200/40">
                  
                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-stone-500 font-medium px-2 pt-1.5 pb-2">
                    <span>09:41</span>
                    <div className="flex items-center gap-1">
                      {/* Signal */}
                      <svg className="h-2 w-2.5" fill="currentColor" viewBox="0 0 10 10"><path d="M1 8h1v1H1zm2-2h1v3H3zm2-2h1v5H5zm2-2h1v7H7z" /></svg>
                      {/* Battery */}
                      <div className="h-2 w-3.5 rounded-sm border border-stone-400 p-[0.5px] flex items-center"><div className="h-full w-3/4 bg-stone-500 rounded-2xs" /></div>
                    </div>
                  </div>

                  {/* App Inner Content wrapper */}
                  <div className="flex-1 flex flex-col gap-3.5 overflow-hidden">
                    
                    {/* App Bar */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-1.5">
                        <div className="relative overflow-hidden h-4 w-[68px]">
                          <img 
                            src="/paisamilegalogo.png" 
                            alt="Paisa Milega" 
                            className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-white border border-stone-100 flex items-center justify-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      </div>
                    </div>

                    {/* CONGRATS PAYOUT CARD */}
                    <div className="rounded-xl border border-green-100 bg-green-50/70 p-3 shadow-sm animate-pulse-slow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">Payout Released</span>
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      <h4 className="text-[11px] font-medium text-green-800">Congrats! You earned</h4>
                      <div className="text-[20px] font-extrabold text-slate-900 mt-0.5 tracking-tight">₹30,000</div>
                      
                      <p className="text-[9px] text-slate-500 mt-1 leading-relaxed">
                        Transferred to bank account ending in <span className="font-semibold text-slate-700">...9876</span>.
                      </p>
                      
                      <div className="mt-2 border-t border-green-200/50 pt-2 flex justify-between items-center text-[8px] text-green-700 font-mono">
                        <span>TXN_987654321</span>
                        <span className="font-bold uppercase">Success</span>
                      </div>
                    </div>

                    {/* Partner Performance Summary */}
                    <div className="rounded-xl border border-stone-100 bg-white p-3 shadow-2xs">
                      <div className="text-[9px] font-bold text-stone-400 uppercase mb-2">Your Sales Summary</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-stone-50/50 rounded-lg p-2 border border-stone-100">
                          <div className="text-[8px] text-stone-400 font-medium">Monthly Leads</div>
                          <div className="text-[14px] font-bold text-slate-800 mt-0.5">14</div>
                        </div>
                        <div className="bg-stone-50/50 rounded-lg p-2 border border-stone-100">
                          <div className="text-[8px] text-stone-400 font-medium">Conversion</div>
                          <div className="text-[14px] font-bold text-slate-800 mt-0.5">85%</div>
                        </div>
                      </div>
                    </div>

                    {/* Products list mockup inside app */}
                    <div className="flex-1 flex flex-col gap-1.5">
                      <div className="text-[9px] font-bold text-stone-400 uppercase px-1">Share & Earn Products</div>
                      
                      {/* Product Item 1 */}
                      <div className="flex items-center justify-between rounded-lg border border-stone-100 bg-white p-2.5">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded bg-orange-50 flex items-center justify-center text-brand-orange">
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-semibold text-slate-800">Credit Cards</div>
                            <div className="text-[7.5px] text-stone-400">Payout up to ₹3,500</div>
                          </div>
                        </div>
                        <div className="h-5 w-10 rounded-full bg-brand-green/10 text-brand-green text-[8px] font-bold flex items-center justify-center hover:bg-brand-green/20 cursor-pointer">
                          Share
                        </div>
                      </div>

                      {/* Product Item 2 */}
                      <div className="flex items-center justify-between rounded-lg border border-stone-100 bg-white p-2.5">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded bg-green-50 flex items-center justify-center text-brand-green">
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                          </div>
                          <div>
                            <div className="text-[9px] font-semibold text-slate-800">Personal Loans</div>
                            <div className="text-[7.5px] text-stone-400">Payout up to 3.5%</div>
                          </div>
                        </div>
                        <div className="h-5 w-10 rounded-full bg-brand-green/10 text-brand-green text-[8px] font-bold flex items-center justify-center">
                          Share
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* App Bottom Navigation Bar Mockup */}
                  <div className="border-t border-stone-100 pt-2 flex justify-around items-center text-stone-400">
                    <span className="flex flex-col items-center text-brand-green font-bold"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg><span className="text-[7px] mt-0.5">Home</span></span>
                    <span className="flex flex-col items-center"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg><span className="text-[7px] mt-0.5">Leads</span></span>
                    <span className="flex flex-col items-center"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span className="text-[7px] mt-0.5">Earnings</span></span>
                  </div>

                </div>

              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-4 -right-8 rounded-lg border border-stone-100 bg-white px-3 py-2 flex items-center gap-2 shadow-[0_8px_20px_rgba(15,23,42,0.05)] animate-float-delayed">
                <span className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="text-[9px] font-semibold text-slate-800 font-sans">Payout auto-credited</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
