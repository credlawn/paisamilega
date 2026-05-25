import SaathiPage from "@/components/pages/SaathiPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "साथी बनें | ज़ीरो इन्वेस्टमेंट में पैसे कमाएं | Paisa Milega",
  description: "अपने नेटवर्क को कमाई में बदलें। Paisa Milega साथी बनें और 100+ बैंकिंग प्रोडक्ट्स बेचें। छात्रों, गृहिणियों और छोटे दुकानदारों के लिए बेस्ट साइड इनकम का तरीका।",
  keywords: "paisa milega saathi, work from home jobs in hindi, extra income kaise kare, digital financial advisor india, loan agent commission",
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
