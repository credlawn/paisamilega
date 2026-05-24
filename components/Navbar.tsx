"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full glassmorphism border-b border-slate-100 premium-shadow">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          
          {/* Logo Brand Lockup */}
          <Link href="/" className="flex items-center group">
            <div className="relative overflow-hidden h-10 w-[170px] transition-transform duration-300 group-hover:scale-[1.02]">
              <img 
                src="/paisamilegalogo.png" 
                alt="Paisa Milega" 
                className="absolute left-[-34.1%] top-[-190%] w-[180.7%] max-w-none h-auto" 
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/#products" className="text-[13px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              Financial Products
            </Link>
            <Link href="/#academy" className="text-[13px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              Academy & Training
            </Link>
            <Link href="/#benefits" className="text-[13px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              Partner Benefits
            </Link>
            <Link href="/#about" className="text-[13px] font-semibold text-slate-700 transition-colors hover:text-brand-green">
              About Us
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Link 
              href="/#register" 
              className="hidden md:inline-flex rounded-full bg-brand-green px-4 py-2 text-[12px] font-semibold text-white transition-all hover:bg-brand-green-dark hover:shadow-[0_4px_12px_rgba(0,130,72,0.15)] active:scale-95"
            >
              Become a Partner
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
