import SaathiPage from "@/components/pages/SaathiPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "साथी बनें | बिना किसी पैसे के घर बैठे साइड इनकम कमाएं | Paisa Milega",
  description: "Paisa Milega साथी बनकर अपने मोबाइल से लोन और क्रेडिट कार्ड लिंक्स शेयर करें और पैसे कमाएं। गृहिणियों, छात्रों और दुकानदारों के लिए बिना किसी निवेश के कमाई का बेहतरीन मौका।",
  keywords: "bina investment business for ladies, housewife ke liye ghar baithe job, mobile se part time job, credit card agent kaise bane, loan referral agent in hindi, kirana dukan extra income",
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
