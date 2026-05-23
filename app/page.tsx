import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Paisa Milega | Become a Financial Advisor & Earn Commission",
  description: "Join Paisa Milega to sell credit cards, loans, insurance, and savings accounts. Start your zero-investment financial advisory business today.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
