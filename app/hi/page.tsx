import React from "react";
import HomePage from "@/components/pages/HomePage";
import { getFAQs } from "@/utils/pocketbase";

export const metadata = {
  title: "Paisa Milega | बिना किसी निवेश के घर बैठे मोबाइल से पैसे कमाएं",
  description: "Paisa Milega ऐप से घर बैठे अपना साइड बिजनेस शुरू करें। अपने दोस्तों को क्रेडिट कार्ड और लोन रेफर करें और हर काम पर सीधे बैंक खाते में गारंटीड कमीशन पाएं।",
  keywords: "ghar baithe paise kamaye, bina investment paise kaise kamaye, mobile se paise kamane wala app, sabse zyada commission dene wala app, online paise kamane ka tarika, student pocket money app, work from home job",
};

export default async function HomeHi() {
  const faqs = await getFAQs(1); // 1 = Home Page FAQs

  // Generate JSON-LD FAQ Schema only if we have FAQs from the server (Hindi)
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question_hi || faq.question_en || "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer_hi || faq.answer_en || "",
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

