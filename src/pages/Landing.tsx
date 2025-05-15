import About from "@/components/About";
import HeroSection from "@/components/Hero";
import HeroCards from "@/components/HeroCards";
import Products from "@/components/Products";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HeroCards />
      <WhyChooseUs />
      <About />
      <Products />
      <Services />
    </div>
  );
}
export default Landing;
