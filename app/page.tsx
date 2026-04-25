import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import TrustStrip from "@/components/TrustStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import PestsEliminate from "@/components/PestsEliminate";
import FeaturedBanner from "@/components/FeaturedBanner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="relative">
        <Hero />
        <StatsStrip />
        <TrustStrip />
        <Services />
        <Process />
        <About />
        <WhyChooseUs />
        <PestsEliminate />
        <FeaturedBanner />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
