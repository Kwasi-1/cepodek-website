import { Button } from "./ui/button";
import hero from "@/assets/images/hero.png";
import gino from "@/assets/images/gino.png";
import jumbo from "@/assets/images/jumbo.png";
import kivo from "@/assets/images/kivo.png";
import mutlu from "@/assets/images/mutlu.png";
import Header from "./Header";

const brands = [gino, jumbo, kivo, mutlu];

const HeroSection = () => {
  return (
    <section className="relative h-[850px] bg-black overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[1px] brightness-75"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      />

      {/* Gradient overlay */}
      {/* <div className="absolute top-0 bottom-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-black/80 to-transparent"></div>
      <div className="absolute top-0 right-0 left-0 h-2/3 md:h-1/2 bg-gradient-to-b from-black/80 to-black-40"></div> */}

      <div className="relative container mx-auto h-full">
        <Header />
        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-start justify-center h-full max-w-4xl px-8 md:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-kalam text-white leading-tight drop-shadow-lg">
            Trusted Brands. Everyday Essentials. Nationwide Reach.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl leading-[150%]">
            We power the products behind Ghana's homes and stores — from
            household staples to personal care must-haves. Built for scale,
            designed for trust.
          </p>
          <div className="mt-8">
            <Button
              onClick={() =>
                window.open("https://hub.foundry-platform.app/", "_blank")
              }
              size="lg"
              className="bg-white cursor-pointer text-black hover:bg-gray-200 font-semibold text-lg px-12 py-7"
            >
              Shop with us
            </Button>
          </div>
          <p className="mt-5 md:mt-10">Brands we have worked with</p>
        </div>

        {/* Marquee brands with fade edges */}
        <div className="absolute bottom-5 left-0 w-full py-6 z-30">
          <div className="relative md:w-1/2 mx-6 md:ml-[5.5rem] overflow-hidden con-kit-component-marquee--fade-edge">
            <div className="flex w-max items-center animate-marquee">
              {[...brands, ...brands, ...brands, ...brands].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`brand-${idx}`}
                  className="inline-block mx-8 h-8 opacity-80 hover:opacity-100 transition"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
