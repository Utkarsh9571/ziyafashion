import Hero from "@/components/home/Hero";
import CollectionShades from "@/components/home/CollectionShades";
import DesignGallery from "@/components/home/DesignGallery";
import PromoWinterBanner from "@/components/home/PromoWinterBanner";
import FeaturedDesigns from "@/components/home/FeaturedDesigns";
import Testimonials from "@/components/home/Testimonials";
import SummerOfferBanner from "@/components/home/SummerOfferBanner";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Large Rounded Hero with Overlay Header */}
      <Hero />

      {/* 2. Premium Shades (4 Horizontal Rounded Capsule Cards) */}
      <CollectionShades />

      {/* 3. Category Icons Row & 4. 8-Card Fashion Grid */}
      <DesignGallery />

      {/* 5. Promotional Winter Sale Banner (70% - 80% with Circle Graphics) */}
      <PromoWinterBanner />

      {/* 6. Trending a Top Sale (4 Spotlight Cards + Number Indicator) */}
      <FeaturedDesigns />

      {/* 7. What Our Customers Say (3 Cards with Avatars & Red Name Badges) */}
      <Testimonials />

      {/* 8. Promotional Summer Sale Banner (90% Offer with Ring Graphics) */}
      <SummerOfferBanner />

      {/* 9. Subscribe to Our Newsletter (Capsule Field) */}
      <Newsletter />

      {/* 10. Instagram 5-Photo Strip & 11. Dark Multi-column Footer */}
      <Footer />
    </div>
  );
}
