import About from "@/components/About";
import HeroSection from "@/components/Hero";
import ProductGallerySection from "@/components/ProductGallerySection";
import Services from "@/components/Services";
import StoreLocatorSection from "@/components/StoreLocatorSection";
// import TestimonialSection from "@/components/TestimonialSection";

function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <About />
      <Services />
      <ProductGallerySection />
      {/* <TestimonialSection /> */}
      <StoreLocatorSection />
    </div>
  );
}
export default Landing;
