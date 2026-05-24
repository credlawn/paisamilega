import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Paisa Milega",
  description: "Privacy policy of using Paisa Milega Website and Mobile Application, owned and operated by Credlawn India Private Limited.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9]">
      <Navbar />
      
      <main className="flex-grow py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          
          {/* Header */}
          <div className="border-b border-stone-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-sans">
              Privacy Policy
            </h1>
            <p className="mt-2 text-[13px] font-semibold text-slate-500 font-sans">
              Effective Date: May 23, 2026 | Operated by Credlawn India Private Limited
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-[14px] leading-relaxed text-slate-700 font-sans font-medium">
            
            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                1. Introduction
              </h2>
              <p>
                At <span className="text-slate-900 font-semibold">paisamilega.in</span>, the Paisa Milega Mobile Application, and our online services (collectively referred to as the <span className="text-slate-900 font-semibold">"Platform"</span>), owned and operated by <span className="text-slate-900 font-semibold">Credlawn India Private Limited</span>, we value your trust and are committed to protecting your privacy. This Privacy Policy details how we collect, store, share, and protect your personal information when you use our website, mobile application, or services.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                2. Information We Collect
              </h2>
              <p className="mb-3">
                To offer our financial product referral platform (via web and app), we collect the following types of information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><span className="font-semibold text-slate-900">Partner Registration Details:</span> Full name, email address, mobile number, PAN card, Aadhaar details, and bank account information.</li>
                <li><span className="font-semibold text-slate-900">Lead Generation Information:</span> Customer names, contact numbers, income metrics, and credit details necessary to submit credit card or loan pre-qualifications.</li>
                <li><span className="font-semibold text-slate-900">Technical Device Data:</span> IP address, browser type, operating system, and platform interaction logs. For our Mobile App, this also includes device models and app analytics data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the collected information (across Web and Mobile App) for the following specific business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To onboard you as an authorized financial advisor and verify KYC details.</li>
                <li>To evaluate eligibility and submit lead information to respective lending banks.</li>
                <li>To process and disburse referral commission payouts to your bank account.</li>
                <li>To detect, prevent, and mitigate fraud, security issues, or policy violations.</li>
                <li>To send platform updates, system notifications, and training materials.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                4. Data Sharing & Disclosure
              </h2>
              <p className="mb-3">
                We respect your privacy and do not sell your personal data. We share information only under the following conditions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><span className="font-semibold text-slate-900">Partner Banking Institutions:</span> We submit customer lead details to chosen partner banks and financial institutions to facilitate product approval.</li>
                <li><span className="font-semibold text-slate-900">Service Providers:</span> Trusted third-party payment gateways, SMS gateways, and cloud servers that enable us to process transactions.</li>
                <li><span className="font-semibold text-slate-900">Regulatory Authorities:</span> Compliance with legal mandates, court orders, or requests from Indian regulatory bodies.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                5. Data Security & Storage
              </h2>
              <p>
                We use top-tier technical and administrative security measures (such as SSL encryption, access restriction, and secure databases) to protect your personal information from unauthorized access, modification, or exposure. Your data is stored on secure servers located within India.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information as long as your advisor account remains active, or as necessary to comply with financial reporting, taxation guidelines, audit rules, or active legal compliance under Indian laws.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                7. Your Privacy Rights
              </h2>
              <p>
                You have the right to access, inspect, modify, or update your registered account details at any time. You may also request deletion of your account; however, some compliance metrics (such as commission payout logs) must be retained for tax/legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-[16px] sm:text-[18px] font-bold text-slate-900 mb-3 font-sans">
                8. Contact Us
              </h2>
              <p>
                If you have queries, complaints, or feedback regarding our privacy practices, please contact our Grievance Officer at <a href="mailto:support@paisamilega.in" className="text-brand-green hover:underline">support@paisamilega.in</a>.
              </p>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
