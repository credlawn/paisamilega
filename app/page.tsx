import React from "react";
import HomePage from "@/components/pages/HomePage";
import { getFAQs } from "@/utils/pocketbase";

export const metadata = {
  title: "Paisa Milega | Earn Money from Home with Zero Investment",
  description: "Start your side business with Paisa Milega. Share credit card & loan offers with your network and earn high commissions sent directly to your bank account.",
  keywords: "earn money from home, online earning app, zero investment business, refer and earn, mobile se paise kaise kamaye, student pocket money app, work from home jobs",
};

export default async function Home() {
  const faqs = await getFAQs(1); // 1 = Home Page FAQs

  // Generate JSON-LD FAQ Schema only if we have FAQs from the server
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question_en || faq.question_hi || "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer_en || faq.answer_hi || "",
      },
    })),
  } : null;

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <HomePage initialFaqs={faqs} />
    </>
  );
}

