import Hero from "@/components/home/Hero";
import CollectionShades from "@/components/home/CollectionShades";
import DesignGallery from "@/components/home/DesignGallery";
import BrandBanner from "@/components/home/BrandBanner";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedDesigns from "@/components/home/FeaturedDesigns";
import AboutPreview from "@/components/home/AboutPreview";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Collections ("Premium Shades" inspiration) */}
      <CollectionShades />

      {/* 3 & 4. Category Filter & Featured Design Gallery */}
      <DesignGallery />

      {/* 5. Brand Messaging Banner */}
      <BrandBanner />

      {/* 6. Atelier Services Section */}
      <ServicesSection />

      {/* 7. Trending & Spotlight Creations */}
      <FeaturedDesigns />

      {/* 8. Editorial About / Brand Story */}
      <AboutPreview />

      {/* 9. Appointment Booking CTA */}
      <AppointmentCTA />

      {/* 10. Client Feedback / Testimonials */}
      <Testimonials />

      {/* 11. Newsletter Subscription */}
      <Newsletter />
    </div>
  );
}
