"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";
import { createSaathiLead } from "@/utils/pocketbase";

const indianStates = [
  { en: "Andaman & Nicobar", hi: "अंडमान और निकोबार" },
  { en: "Andhra Pradesh", hi: "आंध्र प्रदेश" },
  { en: "Arunachal Pradesh", hi: "अरुणाचल प्रदेश" },
  { en: "Assam", hi: "असम" },
  { en: "Bihar", hi: "बिहार" },
  { en: "Chandigarh", hi: "चंडीगढ़" },
  { en: "Chhattisgarh", hi: "छत्तीसगढ़" },
  { en: "Dadra & Nagar Haveli and Daman & Diu", hi: "दादरा और नगर हवेली और दमन और दीव" },
  { en: "Delhi", hi: "दिल्ली" },
  { en: "Goa", hi: "गोवा" },
  { en: "Gujarat", hi: "गुजरात" },
  { en: "Haryana", hi: "हरियाणा" },
  { en: "Himachal Pradesh", hi: "हिमाचल प्रदेश" },
  { en: "Jammu & Kashmir", hi: "जम्मू और कश्मीर" },
  { en: "Jharkhand", hi: "झारखंड" },
  { en: "Karnataka", hi: "कर्नाटक" },
  { en: "Kerala", hi: "केरल" },
  { en: "Ladakh", hi: "लद्दाख" },
  { en: "Lakshadweep", hi: "लक्षद्वीप" },
  { en: "Madhya Pradesh", hi: "मध्य प्रदेश" },
  { en: "Maharashtra", hi: "महाराष्ट्र" },
  { en: "Manipur", hi: "मणिपुर" },
  { en: "Meghalaya", hi: "मेघालय" },
  { en: "Mizoram", hi: "मिजोरम" },
  { en: "Nagaland", hi: "नागालैंड" },
  { en: "Odisha", hi: "ओडिशा" },
  { en: "Puducherry", hi: "पुडुचेरी" },
  { en: "Punjab", hi: "पंजाब" },
  { en: "Rajasthan", hi: "राजस्थान" },
  { en: "Sikkim", hi: "सिक्किम" },
  { en: "Tamil Nadu", hi: "तमिलनाडु" },
  { en: "Telangana", hi: "तेलंगाना" },
  { en: "Tripura", hi: "त्रिपुरा" },
  { en: "Uttar Pradesh", hi: "उत्तर प्रदेश" },
  { en: "Uttarakhand", hi: "उत्तराखंड" },
  { en: "West Bengal", hi: "पश्चिम बंगाल" }
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    state: "",
    occupation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const langPrefix = language === "hi" ? "/hi" : "";

  // Close sidebar when clicking on a link
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    try {
      await createSaathiLead({
        mobile_no: Number(formData.mobile),
        customer_name: formData.name,
        city: formData.city,
        state: formData.state,
        occupation: formData.occupation,
      });
      setSubmitSuccess(true);
      setFormData({
        name: "",
        mobile: "",
        city: "",
        state: "",
        occupation: "",
      });
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      setSubmitError(
        language === "hi" 
          ? "कुछ गलत हुआ। कृपया दोबारा प्रयास करें।" 
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Prevent scrolling when sidebar or modal is open
  useEffect(() => {
    if (isSidebarOpen || isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen, isModalOpen]);

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
              <Link href={`${langPrefix}/?sec=products`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
                {t.nav.products}
              </Link>
              <Link href={`${langPrefix}/blogs`} className="text-[14px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
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

              <button 
                onClick={() => setIsModalOpen(true)}
                className="hidden md:inline-flex rounded-full bg-brand-green px-4 py-2 text-[12px] font-semibold text-white transition-all hover:bg-brand-green-dark hover:shadow-[0_4px_12px_rgba(0,130,72,0.15)] active:scale-95 cursor-pointer"
              >
                {t.nav.cta}
              </button>

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
                href={`${langPrefix}/?sec=products`} 
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
                href={`${langPrefix}/blogs`} 
                onClick={closeSidebar}
                className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-[15px] font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-green transition-all group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
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
            <button 
              onClick={() => {
                closeSidebar();
                setIsModalOpen(true);
              }}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-green px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-brand-green/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>{t.nav.cta}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Saathi Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative border border-stone-200/50 animate-scale-in">
            {/* Close button */}
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSubmitSuccess(false);
                setSubmitError("");
              }}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {submitSuccess ? (
              <div className="flex flex-col items-center text-center py-6">
                <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center text-brand-green mb-4 shadow-sm animate-bounce-slow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-8 w-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {language === "hi" ? "आवेदन सफल!" : "Application Submitted!"}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-slate-600 font-semibold leading-relaxed">
                  {language === "hi"
                    ? "धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।"
                    : "Thank you! Our team will contact you with details soon."}
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-slate-900 mb-1 font-sans">
                  {language === "hi" ? "साथी बनें" : "Join as a Saathi"}
                </h3>
                <p className="text-[13px] text-slate-500 font-semibold mb-6">
                  {language === "hi" 
                    ? "कमाई शुरू करने के लिए कृपया अपनी जानकारी भरें।" 
                    : "Fill in your details below to start your earning journey."}
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold text-slate-700">
                      {language === "hi" ? "पूरा नाम" : "Full Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "hi" ? "अपना नाम दर्ज करें" : "Enter your full name"}
                      className="w-full bg-[#fafaf9] rounded-xl border border-stone-200 px-4 py-2.5 text-[14px] font-semibold text-slate-900 outline-none focus:border-brand-green/50 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold text-slate-700">
                      {language === "hi" ? "मोबाइल नंबर" : "Mobile Number"}
                    </label>
                    <div className="relative flex items-center bg-[#fafaf9] rounded-xl border border-stone-200">
                      <span className="pl-4 text-stone-400 text-[14px] font-bold border-r border-stone-200/80 pr-2">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })}
                        placeholder={language === "hi" ? "10-अंकीय नंबर दर्ज करें" : "Enter 10-digit number"}
                        className="w-full bg-transparent px-3 py-2.5 text-[14px] font-semibold text-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  {/* City & State Row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-700">
                        {language === "hi" ? "शहर" : "City"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={language === "hi" ? "उदा. जयपुर" : "e.g. Jaipur"}
                        className="w-full bg-[#fafaf9] rounded-xl border border-stone-200 px-4 py-2.5 text-[14px] font-semibold text-slate-900 outline-none focus:border-brand-green/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[12px] font-bold text-slate-700">
                        {language === "hi" ? "राज्य" : "State"}
                      </label>
                      <select
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-[#fafaf9] rounded-xl border border-stone-200 px-4 py-2.5 text-[14px] font-semibold text-slate-900 outline-none focus:border-brand-green/50 transition-colors"
                      >
                        <option value="" disabled>
                          {language === "hi" ? "राज्य चुनें" : "Select State"}
                        </option>
                        {indianStates.map((st) => (
                          <option key={st.en} value={st.en}>
                            {language === "hi" ? st.hi : st.en}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Occupation */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-bold text-slate-700">
                      {language === "hi" ? "व्यवसाय" : "Occupation"}
                    </label>
                    <select
                      required
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full bg-[#fafaf9] rounded-xl border border-stone-200 px-4 py-2.5 text-[14px] font-semibold text-slate-900 outline-none focus:border-brand-green/50 transition-colors"
                    >
                      <option value="" disabled>
                        {language === "hi" ? "व्यवसाय चुनें" : "Select Occupation"}
                      </option>
                      <option value="Student">
                        {language === "hi" ? "छात्र (Student)" : "Student"}
                      </option>
                      <option value="Housewife">
                        {language === "hi" ? "गृहणी (Housewife)" : "Housewife"}
                      </option>
                      <option value="Shopkeeper">
                        {language === "hi" ? "दुकानदार (Shopkeeper)" : "Shopkeeper"}
                      </option>
                      <option value="Financial Advisor">
                        {language === "hi" ? "वित्तीय सलाहकार (Financial Advisor)" : "Financial Advisor"}
                      </option>
                      <option value="Salaried Employee">
                        {language === "hi" ? "सैलरीड जॉब (Salaried Job)" : "Salaried Employee"}
                      </option>
                      <option value="Other">
                        {language === "hi" ? "अन्य (Other)" : "Other"}
                      </option>
                    </select>
                  </div>

                  {submitError && (
                    <div className="text-[12px] font-semibold text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-100">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 rounded-full bg-brand-green px-5 py-3 text-[14px] font-bold text-white hover:bg-brand-green-dark transition-all hover:shadow-[0_4px_12px_rgba(0,130,72,0.15)] active:scale-95 cursor-pointer disabled:bg-stone-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{language === "hi" ? "भेज रहे हैं..." : "Submitting..."}</span>
                      </>
                    ) : (
                      language === "hi" ? "आवेदन जमा करें" : "Submit Application"
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
