/**
 * Ziya Fashion Image Asset Directory & Registry
 * 
 * All website images are stored locally in the `public/images/` directory.
 * To replace any image on the website with authentic photography:
 * Simply drop a new image file with the same filename into the corresponding folder.
 */

export const IMAGE_ASSETS = {
  // Brand & Favicon
  logo: {
    white: "/images/logo/logo-white.png",
    coral: "/images/logo/logo-coral.png",
    original: "/images/logo/logo.png",
  },
  favicon: {
    ico: "/images/favicon/favicon.ico",
  },

  // Homepage Images
  home: {
    heroCutout: "/images/hero-cutout-reference-model.png",
    heroAvatars: [
      "/images/home/hero-avatar-1.jpg",
      "/images/home/hero-avatar-2.jpg",
      "/images/home/hero-avatar-3.jpg",
    ],
    categories: {
      women: "/images/home/category-women.jpg",
      men: "/images/home/category-men.jpg",
      kids: "/images/home/category-kids.jpg",
      bespoke: "/images/home/category-bespoke.jpg",
    },
    collections: {
      indoWestern: "/images/home/collection-indo-western.jpg",
      pakistani: "/images/home/collection-pakistani-formal.jpg",
      signature: "/images/home/collection-ziya-signature.jpg",
    },
    occasions: [
      "/images/home/occasion-01.jpg",
      "/images/home/occasion-02.jpg",
      "/images/home/occasion-03.jpg",
      "/images/home/occasion-04.jpg",
      "/images/home/occasion-05.jpg",
      "/images/home/occasion-06.jpg",
      "/images/home/occasion-07.jpg",
      "/images/home/occasion-08.jpg",
      "/images/home/occasion-09.jpg",
      "/images/home/occasion-10.jpg",
      "/images/home/occasion-11.jpg",
      "/images/home/occasion-12.jpg",
    ],
    banners: {
      summerOffer: "/images/home/summer-offer-banner.jpg",
      winterPromo: "/images/home/winter-promo-banner.jpg",
      brandBanner: "/images/home/brand-banner-craftsman.jpg",
      appointmentCta: "/images/home/appointment-cta.jpg",
    },
  },

  // Services Images
  services: {
    bespoke: "/images/services/bespoke-made-to-measure.jpg",
    customTailoring: "/images/services/custom-tailoring-design.jpg",
    bridal: "/images/services/bridal-wedding-wear.jpg",
    alterations: "/images/services/alterations-restyling.jpg",
    bannerHero: "/images/services/services-banner-1.jpg",
    traditionalShowcase: "/images/services/services-banner-2.jpg",
    alterationsShowcase: "/images/services/services-banner-3.jpg",
  },

  // Products Catalogue Images
  products: {
    bridalLehengas: "/images/products/bridal-lehengas.jpg",
    sherwanisMenswear: "/images/products/sherwanis-menswear.jpg",
    bajuKurung: "/images/products/baju-kurung.jpg",
    jubahTraditional: "/images/products/jubah-traditional.jpg",
    sareesBlouses: "/images/products/sarees-blouses.jpg",
    tailoredSuits: "/images/products/tailored-suits.jpg",
    abayasModest: "/images/products/abayas-modest.jpg",
    alterationsFittings: "/images/products/alterations-fittings.jpg",
  },

  // Blog Featured Images
  blog: {
    theArtOfTailoring: "/images/blog/the-art-of-tailoring.jpg",
    styleThatLasts: "/images/blog/style-that-lasts.jpg",
    aGuideToComfortStyle: "/images/blog/a-guide-to-comfort-style.jpg",
  },

  // Testimonials Avatars
  testimonials: {
    shirley: "/images/testimonials/avatar-01.jpg",
    kim: "/images/testimonials/avatar-02.jpg",
    stella: "/images/testimonials/avatar-03.jpg",
  },

  // Instagram Gallery Strip
  instagram: [
    "/images/instagram/insta-01.jpg",
    "/images/instagram/insta-02.jpg",
    "/images/instagram/insta-03.jpg",
    "/images/instagram/insta-04.jpg",
    "/images/instagram/insta-05.jpg",
  ],

  // About & Contact Pages
  about: {
    studio: "/images/about/atelier-studio.jpg",
    craftsmanship: "/images/about/about-craftsmanship.jpg",
  },
  contact: {
    atelier: "/images/contact/contact-atelier.jpg",
    location: "/images/contact/boutique-location.jpg",
  },
};

export default IMAGE_ASSETS;
