"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const langPrefix = language === "hi" ? "/hi" : "";

  return (
    <footer className="bg-[#fafaf9] border-t border-stone-100 pt-8 pb-6 sm:pt-10 sm:pb-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          
          {/* Logo & About - Logo hidden on mobile */}
          <div className="flex flex-col items-start gap-4">
            <Link href={langPrefix || "/"} className="hidden md:flex items-center group">
              <div className="relative overflow-hidden h-8 w-[136px] transition-transform duration-300 group-hover:scale-[1.02]">
                <img 
                  src="/paisamilegalogo.png" 
                  alt="Paisa Milega" 
                  className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
                />
              </div>
            </Link>
            
            <div className="mt-2.5 mb-2">
              <p className="text-[15px] font-bold text-slate-900 flex items-center gap-2 flex-wrap">
                <span className="whitespace-nowrap">
                  {language === "en" ? "Earn " : "कमाएं "}
                  <span className="text-brand-orange font-black">₹1,00,000*</span>
                </span>
                <span className="text-[10px] font-black text-brand-green uppercase tracking-widest border border-brand-green/20 px-1.5 py-0.5 rounded-md bg-green-50/50">
                  {language === "en" ? "Every Month" : "हर महीने"}
                </span>
              </p>
            </div>

            <p className="text-[12px] leading-relaxed text-slate-600 max-w-xs font-sans font-medium">
              {t.footer.aboutText}
            </p>
          </div>

          {/* Products & Company - Side by side on mobile */}
          <div className="grid grid-cols-2 md:grid-cols-2 md:col-span-2 gap-8">
            {/* Sitemap column 1 */}
            <div>
              <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
                {t.footer.productsTitle}
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href={`${langPrefix}/#products`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.products.list[0].title}
                  </Link>
                </li>
                <li>
                  <Link href={`${langPrefix}/#products`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.products.list[1].title}
                  </Link>
                </li>
                <li>
                  <Link href={`${langPrefix}/#products`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.products.list[2].title}
                  </Link>
                </li>
                <li>
                  <Link href={`${langPrefix}/#products`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.products.list[4].title}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sitemap column 2 */}
            <div>
              <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
                {t.footer.companyTitle}
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href={`${langPrefix}/about`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.footer.aboutUs}
                  </Link>
                </li>
                <li>
                  <Link href={`${langPrefix}/data-policy`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.footer.dataPolicy}
                  </Link>
                </li>                <li>
                  <Link href={`${langPrefix}/terms`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.footer.terms}
                  </Link>
                </li>
                <li>
                  <Link href={`${langPrefix}/privacy`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                    {t.footer.privacy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
              {t.footer.supportTitle}
            </h4>
            <p className="text-[12px] text-slate-600 leading-relaxed mb-2.5 font-sans font-semibold">
              Credlawn India Private Limited<br />
              {t.footer.addressLine1}<br />
              {t.footer.addressLine2}
            </p>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:support@paisamilega.in" className="flex items-center gap-2.5 text-[12px] text-slate-600 hover:text-brand-green transition-colors font-sans font-semibold group">
                <div className="flex items-center justify-center text-brand-green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                support@paisamilega.in
              </a>
              <a href="https://wa.me/919752146314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[12px] text-slate-600 hover:text-[#128C7E] transition-colors font-sans font-semibold group">
                <div className="flex items-center justify-center text-[#25D366]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.13.57-.072 1.758-.702 2.006-1.381.248-.678.248-1.262.173-1.381-.075-.118-.272-.197-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-2.078l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.437 5.662 1.438h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                +91 9752146314
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom (Compliance & Copyright) */}
        <div className="border-t border-stone-200/50 pt-5 flex flex-wrap items-center justify-between gap-y-3 gap-x-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="text-[11px] text-slate-500 font-sans font-semibold whitespace-nowrap">
              Corporate Identity Number: U74999MP2021PTC054547
            </span>
            <span className="hidden sm:inline text-stone-300">|</span>
            <p className="text-[11.5px] text-slate-600 font-sans text-left leading-relaxed font-semibold">
              © {new Date().getFullYear()} <span className="text-brand-green font-bold">paisa</span><span className="text-brand-orange font-extrabold">milega</span><span className="text-slate-600 font-bold">.in</span>{t.footer.copyrightPost} | All Rights Reserved
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
