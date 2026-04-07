import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkShowcaseSection from "@/components/WorkShowcaseSection";
import ReviewsSection from "@/components/ReviewsSection";
import HiringSocialSection from "@/components/HiringSocialSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WorkShowcaseSection />
      <ReviewsSection />
      <HiringSocialSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
