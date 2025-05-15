import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] bg-black overflow-hidden">
      {/* Background image or pattern */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80')",
        }}
      ></div>

      <div className="container mx-auto px-12  h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Your Trusted FMCG Partner in Ghana
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Retail, Wholesale & Delivery from Our Stores to Your Doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#ff6600] hover:bg-[#dd6211] text-white text-lg"
            >
              Shop Online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:border-[#dd6211] text-black hover:bg-[#dd6211] hover:text-white text-lg"
            >
              Visit Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
