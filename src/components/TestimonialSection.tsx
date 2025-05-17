"use client";

import Customers from "@/assets/images/customers.jpg";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mary Weber",
    rating: 5,
    message:
      "Cepodek’s quality and consistency never fail. Their products are now a staple in my home—we simply can’t do without them.",
  },
  {
    name: "Katherine Koch",
    rating: 4,
    message:
      "As a small shop owner, I’ve seen a real boost in customer satisfaction. Cepodek delivers on both quality and reliability.",
  },
  {
    name: "Lukas Müller",
    rating: 5,
    message:
      "What I love about Cepodek is the trust factor. I know exactly what I’m getting every time—top-notch products at great value.",
  },
];

const TestimonialSection = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fullTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${Customers})` }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto text-center px-4 z-10">
        <h2 className="text-4xl font-bold mb-4">
          Trusted by Thousands Across Ghana
        </h2>
        <p className="text-lg text-gray-200 mb-12 max-w-xl mx-auto">
          From busy households to retail shelves, hear how Cepodek products make
          a difference in everyday lives.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto text-center px-4 z-10 con-kit-component-marquee--fade-edge">
        {isClient && (
          <div className="overflow-hidden w-full relative con-kit-component-marquee--fade-edge">
            <div className="flex w-max animate-marquee gap-8 px-4">
              {fullTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-sm p-6 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-white text-xl mb-2">
                    {"★".repeat(t.rating) + "☆".repeat(5 - t.rating)}
                  </div>
                  <p className="text-sm italic mb-6 text-white">{t.message}</p>
                  <div className="flex flex-col items-center">
                    <h4 className="text-white font-semibold">{t.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
