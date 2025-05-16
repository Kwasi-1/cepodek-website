import { Button } from "./ui/button";

const brands = [
  "/brands/logo1.png",
  "/brands/logo2.png",
  "/brands/logo3.png",
  "/brands/logo4.png",
  "/brands/logo5.png",
  "/brands/logo6.png",
];

const HeroSection = () => {
  return (
    <section className="relative h-[750px] bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[1px] brightness-75"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute top-0 bottom-0 left-0 w-2/3 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="absolute top-0 right-0 left-0 h-1/2 bg-gradient-to-b from-black/80 to-black-40"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-4xl px-8 md:px-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Trusted Brands. Everyday Essentials. Nationwide Reach.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
          We power the products behind Ghana’s homes and stores — from household
          staples to personal care must-haves. Built for scale, designed for
          trust.
        </p>

        <div className="mt-8">
          <Button
            onClick={() => window.scrollTo(0, 0)}
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-semibold text-lg"
          >
            Shop with us
          </Button>
        </div>
      </div>

      {/* Marquee brands */}
      <div className="absolute bottom-0 w-full py-6 backdrop-blur-md z-30">
        <div className="overflow-hidden whitespace-nowrap animate-marquee">
          {brands.concat(brands).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`brand-${idx}`}
              className="inline-block mx-8 h-8 opacity-80 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
