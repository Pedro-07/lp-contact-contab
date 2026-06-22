import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Plans from "@/components/Plans";
import Niches from "@/components/Niches";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Numbers />
      <Plans />
      <Niches />
      <About />
      <Testimonials />
      <CtaFinal />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
