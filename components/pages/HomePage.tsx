"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Features from "@/components/Features";
import Products from "@/components/Products";
import IncomeCalculator from "@/components/IncomeCalculator";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import TechSupport from "@/components/TechSupport";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PartnerLogos />
        <Features />
        <Products />
        <IncomeCalculator />
        <HowItWorks />
        <Testimonials />
        <FAQSection />
        <BlogSection />
        <TechSupport />
      </main>
      <Footer />
    </div>
  );
}
