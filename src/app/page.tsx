"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import AboutMetric from '@/components/sections/about/AboutMetric';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Globe, Mail, Sparkles, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeMediumTitles"
      background="noiseDiagonalGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Bakteria"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Products", id: "products" },
            { name: "About", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Cups for Every Moment"
          description="Discover our curated collection of high-quality cups designed for coffee lovers, tea enthusiasts, and anyone who appreciates exceptional drinkware. From ceramic to thermal, find your perfect cup today."
          background={{ variant: "sparkles-gradient" }}
          tag="New Collection"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/closeup-decorated-cocktail-summer-drink_53876-95376.jpg"
          imageAlt="Bakteria premium cups collection"
          buttons={[
            { text: "Shop Collection", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Featured Products"
          description="Explore our handpicked selection of premium cups that combine style with functionality. Each piece is crafted with care to ensure quality and durability."
          tag="Best Sellers"
          tagIcon={TrendingUp}
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "1",              name: "Elegance Ceramic Cup",              price: "$24.99",              variant: "White | 3 Sizes",              imageSrc: "http://img.b2bpic.net/free-photo/white-ceramics-cup-saucer-reflective-marble-table_23-2148027576.jpg",              imageAlt: "Elegance ceramic cup"
            },
            {
              id: "2",              name: "Thermal Insulated Cup",              price: "$34.99",              variant: "Stainless Steel | 2 Colors",              imageSrc: "http://img.b2bpic.net/free-photo/stainless-tumbler-cup_1203-7757.jpg",              imageAlt: "Thermal insulated cup"
            },
            {
              id: "3",              name: "Crystal Glass Cup",              price: "$19.99",              variant: "Clear | Set of 2",              imageSrc: "http://img.b2bpic.net/free-photo/glass-punch-juice_1339-4877.jpg",              imageAlt: "Crystal glass cup"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Bakteria represents the pinnacle of cup craftsmanship, blending heritage techniques with modern innovation to deliver exceptional quality drinkware."
          useInvertedBackground={true}
          metrics={[
            { icon: Award, label: "Quality Assured", value: "15+" },
            { icon: Users, label: "Happy Customers", value: "50K+" },
            { icon: Globe, label: "Countries Served", value: "30+" },
            { icon: Sparkles, label: "Premium Designs", value: "200+" }
          ]}
          metricsAnimation="slide-up"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan to access our premium cup collection. All plans include free shipping on orders over $50."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "essential",              tag: "Essential",              price: "$19.99",              period: "/month",              description: "Perfect for casual cup collectors looking for quality drinkware.",              button: { text: "Get Started", href: "#" },
              featuresTitle: "What's Included:",              features: [
                "Access to standard collection",                "Free shipping on $50+ orders",                "Monthly deals and discounts",                "Email newsletter"
              ]
            },
            {
              id: "premium",              tag: "Premium",              price: "$49.99",              period: "/month",              description: "Unlock exclusive designs and early access to new collections.",              button: { text: "Subscribe Now", href: "#" },
              featuresTitle: "What's Included:",              features: [
                "Entire premium collection access",                "Free shipping on all orders",                "Exclusive designs monthly",                "15% discount on purchases",                "Priority customer support"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="What Our Customers Say"
          description="Join thousands of satisfied customers who have elevated their daily cup experience with Bakteria."
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              handle: "@sarahmitch",              testimonial: "The quality is exceptional! My Bakteria cup has become my daily essential. The craftsmanship is obvious from the first use.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-woman-portrait-outdoors_23-2148603027.jpg?_wi=1"
            },
            {
              id: "2",              name: "James Chen",              handle: "@jameschen",              testimonial: "Outstanding value for money. These cups keep my coffee hot for hours and look beautiful on my desk. Highly recommend!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/pensive-person-alone-corridor-serious_1262-1042.jpg?_wi=1"
            },
            {
              id: "3",              name: "Emma Rodriguez",              handle: "@emmarod",              testimonial: "I've purchased multiple sets for my office. Everyone comments on how elegant they are. Perfect gift option too!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg"
            },
            {
              id: "4",              name: "Michael Thompson",              handle: "@mikethompson",              testimonial: "The thermal cups are game-changers. Temperature retention is incredible, and the design is modern and sleek.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-vector/man-avatar-collection_24908-60253.jpg"
            },
            {
              id: "5",              name: "Lisa Park",              handle: "@lisapark",              testimonial: "Customer service is amazing! They went above and beyond to help with my order. Will definitely buy again.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/side-view-business-woman-portrait-outdoors_23-2148603027.jpg?_wi=2"
            },
            {
              id: "6",              name: "David Wilson",              handle: "@davidwil",              testimonial: "Best cups I've ever owned. The attention to detail is remarkable. Worth every penny!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/pensive-person-alone-corridor-serious_1262-1042.jpg?_wi=2"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="Our premium cups are chosen by cafes, corporate offices, and lifestyle enthusiasts worldwide."
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Premium Cafes Inc",            "Urban Living Co",            "Coffee Collective",            "Wellness Brands",            "Modern Offices LLC",            "Lifestyle Magazine",            "Corporate Solutions",            "Tea & Culture"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Subscribe to our newsletter for exclusive designs, special offers, and tips on maintaining your premium cups."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/supervisor-working-merchandise-distribution-storage-room-carrying-cardboard-boxes-while-listening-music-storehouse-manager-wearing-headphones-preparing-customers-packages-delivery_482257-73197.jpg"
          imageAlt="Bakteria warehouse and packaging"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Bakteria"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "Products", href: "products" },
                { label: "About", href: "about" },
                { label: "Pricing", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Shop", href: "products" },
                { label: "Testimonials", href: "testimonials" },
                { label: "Support", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Return Policy", href: "#" },
                { label: "Shipping Info", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}