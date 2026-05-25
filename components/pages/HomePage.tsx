"use client";

import React, { useEffect, Suspense } from "react";
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
import { FAQItem } from "@/utils/pocketbase";
import { useSearchParams } from "next/navigation";

interface HomePageProps {
  initialFaqs?: FAQItem[];
}

function ScrollToSectionInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sec = searchParams.get("sec");
    if (sec) {
      const element = document.getElementById(sec);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);

  return null;
}

function ScrollToSection() {
  return (
    <Suspense fallback={null}>
      <ScrollToSectionInner />
    </Suspense>
  );
}

export default function HomePage({ initialFaqs }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      <ScrollToSection />
      <main className="flex-grow">
        <Hero />
        <PartnerLogos />
        <Features />
        <Products />
        <IncomeCalculator />
        <HowItWorks />
        <Testimonials />
        <BlogSection />
        <TechSupport />
        <FAQSection faqs={initialFaqs} />
      </main>
      <Footer />
    </div>
  );
}
