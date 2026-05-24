import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Paisa Milega",
  description: "Terms and conditions of using Paisa Milega Website and Mobile Application, owned and operated by Credlawn India Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      <main className="flex-grow py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-sans">
              Terms of Service
            </h1>
            <p className="mt-2 text-[13px] font-semibold text-slate-500 font-sans">
              Effective Date: May 23, 2026 | Operated by Credlawn India Private Limited
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-[14px] leading-relaxed text-slate-700 font-sans font-medium">
            
            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, downloading, installing, or registering on the website <span className="text-slate-900 font-semibold">paisamilega.in</span>, the Paisa Milega Mobile Application, or any related services, APIs, and communication channels (collectively referred to as the <span className="text-slate-900 font-semibold">"Platform"</span>), you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using or downloading our Platform. These terms constitute a legally binding agreement between you and <span className="text-slate-900 font-semibold">Credlawn India Private Limited</span>.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                2. Partner Eligibility & Onboarding
              </h2>
              <p className="mb-3">
                To register as a financial advisor, partner, or agent on our Platform (both Web and Mobile App), you must satisfy the following criteria:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>You must be an Indian citizen of at least 18 years of age.</li>
                <li>You must provide accurate, current, and complete KYC verification information, including Aadhaar, PAN card, and active bank account details for commission transfers.</li>
                <li>You are solely responsible for protecting your account credentials, passwords, and OTP access. Any actions taken through your Mobile App or Web account are considered authorized by you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                3. Scope of Services
              </h2>
              <p>
                Paisa Milega operates as a digital referral and distribution network. Through the Platform, partners can access, track, and share unique lead generation links for retail financial products (such as Credit Cards, Personal Loans, Business Loans, Savings Accounts, Demat Accounts, and Investment products) with prospective customers. Once a customer successfully obtains a financial product through your referral link, you become eligible for payouts based on our active commission matrices.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                4. Commissions & Payout Terms
              </h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Commissions are calculated based on successful product conversions, which are verified directly by our partner banking and lending institutions.</li>
                <li>All payouts are processed and sent electronically to your registered and verified bank account.</li>
                <li>Tax Deducted at Source (TDS) will be deducted at prevailing rates in compliance with the Income Tax Department of India guidelines.</li>
                <li>We reserve the right to withhold, freeze, or cancel payouts if any fraudulent activity, spamming, fake document submissions, or customer misrepresentation is detected via your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                5. Code of Conduct & Rules of Use
              </h2>
              <p className="mb-3">
                Partners using the website and Mobile App must strictly adhere to the following rules:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Do not charge customers directly for referral links or consultation services. Paisa Milega services are completely free for end-customers.</li>
                <li>Do not misrepresent loan features, credit card features, interest rates, or eligibility guidelines.</li>
                <li>Do not submit falsified customer details or manipulate bank documentation.</li>
                <li>Do not distribute referral links using spam techniques (such as unsolicited message distributions or mass automated posting).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                6. Intermediary Status & Limitation of Liability
              </h2>
              <p>
                Credlawn India Private Limited acts purely as an intermediary referral service. The final approval, underwriting, and issuance of credit cards, loans, or accounts are at the sole discretion of our partner banks and lending institutions. We are not liable for any customer rejections, credit delays, or changes in lending policies by the respective banking partners.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                7. Modification, Updates & Termination
              </h2>
              <p>
                We reserve the right to modify the Platform features, layout, Terms of Service, or commission payout rates at any time. Continued use of the website or Mobile App after updates indicates acceptance of the revised terms. We reserve the absolute right to suspend or terminate your account without notice for breaches of our code of conduct.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                8. Contact Us
              </h2>
              <p>
                For questions regarding these Terms, or if you need support with the website or Mobile App, please contact support at <a href="mailto:support@paisamilega.in" className="text-brand-green hover:underline">support@paisamilega.in</a>.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
