"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";
import TechSupport from "@/components/TechSupport";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Products />
        <HowItWorks />
        <TechSupport />
      </main>
      <Footer />
    </div>
  );
}
