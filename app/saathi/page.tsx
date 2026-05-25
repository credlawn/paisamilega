import SaathiPage from "@/components/pages/SaathiPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Become a Saathi | Earn Money with Zero Investment | Paisa Milega",
  description: "Transform your network into income. Join as a Paisa Milega Saathi and sell 100+ banking products. Perfect for students, housewives, and shop owners in Tier 2/3 cities.",
  keywords: "paisa milega saathi, work from home jobs India, extra side income, digital financial advisor, become a credit card agent, earn commission on loans",
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
