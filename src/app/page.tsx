import Hero from "@/components/home/Hero";
import CollectionShades from "@/components/home/CollectionShades";
import DesignGallery from "@/components/home/DesignGallery";
import BrandBanner from "@/components/home/BrandBanner";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturedDesigns from "@/components/home/FeaturedDesigns";
import AboutPreview from "@/components/home/AboutPreview";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import Testimonials from "@/components/home/Testimonials";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import ContactSection from "@/components/common/ContactSection";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero: Singapore's Destination for Bespoke Tailoring & Timeless Style */}
      <Hero />

      {/* 2. Explore Ziya Fashion (Women / Men / Kids / Bespoke) */}
      <CollectionShades />

      {/* 3. Our Collections (Indo-Western / Pakistani / Signature) */}
      <DesignGallery />

      {/* 4. Brand Positioning (Crafted Around You) */}
      <BrandBanner />

      {/* 5. Tailoring Services (Bespoke, Bridal, Traditional, Alterations) */}
      <ServicesSection />

      {/* 6. Designed for Every Occasion / Styles */}
      <FeaturedDesigns />

      {/* 7. About Ziya Fashion (Where Your Vision Becomes Your Perfect Fit) */}
      <AboutPreview />

      {/* 8. The Ziya Journal (Blog Preview) */}
      <HomeBlogSection />

      {/* 9. Appointment CTA (Ready to Create Something Made for You?) */}
      <AppointmentCTA />

      {/* 10. Customer Feedback (What Our Customers Say) */}
      <Testimonials />

      {/* 11. Reusable Contact Section (Let's Create Something That Fits You) */}
      <ContactSection
        title="Let's Create Something That Fits You"
        subtitle="Have a tailoring requirement, alteration request, or a question about our services? Get in touch with Ziya Fashion."
      />

      {/* 12. Newsletter (Stay Connected with Ziya Fashion) */}
      <Newsletter />

      {/* Footer with Instagram Strip and Verified Contact Info */}
      <Footer />
    </div>
  );
}
