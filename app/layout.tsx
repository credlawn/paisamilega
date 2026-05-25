import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Paisa Milega | Become a Financial Advisor & Earn Commission",
  description: "Join Paisa Milega to sell credit cards, loans, savings accounts, and investments. Start your zero-investment financial advisory business today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {/* Global Analytics Script */}
        <Script
          src="https://dev.cipl.me/script.js"
          data-website-id="b4886d8b-b0bc-4179-8131-332379e2a8fd"
          strategy="afterInteractive"
        />

        {/* Session Recorder Script */}
        <Script
          src="https://dev.cipl.me/recorder.js"
          data-website-id="b4886d8b-b0bc-4179-8131-332379e2a8fd"
          data-sample-rate="0.15"
          data-mask-level="moderate"
          data-max-duration="300000"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
