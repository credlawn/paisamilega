"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();
  const langPrefix = language === "hi" ? "/hi" : "";

  return (
    <footer className="bg-[#fafaf9] border-t border-stone-100 pt-10 pb-6 sm:pt-14 sm:pb-8">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          
          {/* Logo & About */}
          <div className="flex flex-col items-start gap-4">
            <Link href={langPrefix || "/"} className="flex items-center group">
              <div className="relative overflow-hidden h-8 w-[136px] transition-transform duration-300 group-hover:scale-[1.02]">
                <img 
                  src="/paisamilegalogo.png" 
                  alt="Paisa Milega" 
                  className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
                />
              </div>
            </Link>
            <p className="text-[12px] leading-relaxed text-slate-600 max-w-xs font-sans font-medium">
              {t.footer.aboutText}
            </p>
          </div>

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
                <Link href={`${langPrefix}/#about`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`${langPrefix}/#careers`} className="text-[12px] text-slate-600 hover:text-slate-950 transition-colors font-sans font-semibold">
                  {t.footer.careers}
                </Link>
              </li>
              <li>
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

          {/* Contact Details */}
          <div>
            <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
              {t.footer.supportTitle}
            </h4>
            <p className="text-[12px] text-slate-600 leading-relaxed mb-2.5 font-sans font-semibold">
              Credlawn India Private Limited<br />
              Vasant Kunj, New Delhi, India
            </p>
            <p className="text-[12px] text-slate-600 font-sans font-semibold">
              Email: support@paisamilega.in
            </p>
          </div>

        </div>

        {/* Footer Bottom (Compliance & Copyright) */}
        <div className="border-t border-stone-200/50 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11.5px] text-slate-600 font-sans text-center sm:text-left leading-relaxed font-semibold">
            © {new Date().getFullYear()} <span className="text-brand-green font-bold">paisa</span><span className="text-brand-orange font-extrabold">milega</span><span className="text-slate-600 font-bold">.in</span>{t.footer.copyrightPost}
          </p>
          
          <div className="flex gap-4">
            <span className="text-[11px] text-slate-500 font-sans font-semibold">
              CIN: U74999MP2021PTC054547
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
