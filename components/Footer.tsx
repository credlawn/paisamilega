"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#fafaf9] border-t border-stone-100 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo & About */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center group">
              <div className="relative overflow-hidden h-8 w-[136px] transition-transform duration-300 group-hover:scale-[1.02]">
                <img 
                  src="/paisamilegalogo.png" 
                  alt="Paisa Milega" 
                  className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
                />
              </div>
            </Link>
            <p className="text-[12px] leading-relaxed text-slate-500 max-w-xs font-sans">
              India's premium financial product distribution network. Empowering micro-entrepreneurs to build sustainable advisory businesses.
            </p>
          </div>

          {/* Sitemap column 1 */}
          <div>
            <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
              Products
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#products" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Credit Cards
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Insurance Plans
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Demat Accounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap column 2 */}
          <div>
            <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="#about" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#careers" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-[12px] text-slate-500 hover:text-slate-900 transition-colors font-sans">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[12px] font-bold text-slate-900 uppercase tracking-wider mb-4 font-sans">
              Contact & Support
            </h4>
            <p className="text-[12px] text-slate-500 leading-relaxed mb-2.5 font-sans">
              Paisa Milega Technologies Pvt. Ltd.<br />
              Vasant Kunj, New Delhi, India
            </p>
            <p className="text-[12px] text-slate-500 font-sans">
              Email: support@paisamilega.in
            </p>
          </div>

        </div>

        {/* Footer Bottom (Compliance & Copyright) */}
        <div className="border-t border-stone-200/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400 font-sans text-center sm:text-left">
            © {new Date().getFullYear()} Paisa Milega. All rights reserved. Registered with IRDAI & AMFI.
          </p>
          
          <div className="flex gap-4">
            <span className="text-[11px] text-slate-400 font-sans">
              CIN: U72900DL2026PTC345678
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
