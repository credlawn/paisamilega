import SaathiPage from "@/components/pages/SaathiPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Become a Saathi | Zero Investment Part-Time Jobs | Paisa Milega",
  description: "Join the Paisa Milega Saathi program and earn money by referring credit cards, loans, and demat accounts. Start your business today, perfect for students, housewives, and local shop owners.",
  keywords: "online business ideas, zero investment business app, credit card agent job, loan agent online registration, extra income ideas in india, side income from home",
};

export default function Page() {
  return (
    <main>
      <Navbar />
      <SaathiPage />
      <Footer />
    </main>
  );
}
