"use client";

import Customers from "@/assets/images/customers.jpg";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mary Weber",
    image: "/images/user1.jpg",
    rating: 5,
    message:
      "Use whitespace for a clean and focused look, allowing content to breathe and guiding users' attention to key elements.",
  },
  {
    name: "Katherine Koch",
    image: "/images/user2.jpg",
    rating: 4,
    message:
      "This template is beautifully crafted and easy to customize. It helped us increase conversions significantly!",
  },
  {
    name: "Lukas Müller",
    image: "/images/user3.jpg",
    rating: 5,
    message:
      "Clean UI and fantastic performance. Our team and customers both love it!",
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
      <div className="relative max-w-7xl mx-auto text-center px-4 z-10 con-kit-component-marquee--fade-edge">
        <h2 className="text-4xl font-bold mb-4">What our customers say</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Hear from our satisfied users who trust and love our FMCG products.
        </p>

        {isClient && (
          <div className="overflow-hidden w-full relative con-kit-component-marquee--fade-edge">
            <div className="flex w-max animate-marquee gap-8 px-4">
              {fullTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-[300px] max-w-sm p-6 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="text-yellow-400 text-xl mb-2">
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
